'use client'

import { useActionState, useEffect, useState, useRef } from 'react'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { sendEmptyLegsRequestAction } from '@/lib/actions'
import { EmptyLegsFormSchema } from '@/lib/schemas'
import { EMPTY_LEGS_QUERYResult } from '@/sanity/types'

interface ValidationErrors {
  name: string
  email: string
  phone: string
  passengers: string
  message: string
}

interface FormValues {
  name: string
  email: string
  phone: string
  passengers: string
  message: string
}

export const EmptyLegsForm = ({
  emptyLeg
}: {
  emptyLeg: EMPTY_LEGS_QUERYResult[number]
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    passengers: '',
    message: ''
  })

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    name: '',
    email: '',
    phone: '',
    passengers: '',
    message: ''
  })

  const [state, dispatch, isPending] = useActionState(
    sendEmptyLegsRequestAction,
    {
      success: '',
      error: undefined
    }
  )

  useEffect(() => {
    if (state.error) {
      toast.error(state.error)
    }
  }, [state.error])

  useEffect(() => {
    if (state.success) {
      toast.success(state.success)
      formRef.current?.reset()
      setFormData({
        name: '',
        email: '',
        phone: '',
        passengers: '',
        message: ''
      })
      setValidationErrors({
        name: '',
        email: '',
        phone: '',
        passengers: '',
        message: ''
      })
    }
  }, [state.success])

  function validate(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    const data = {
      ...formData,
      [name]: value
    }

    const result = EmptyLegsFormSchema.safeParse(data)
    if (result.success) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    } else {
      const error = result.error.errors.find(err => err.path[0] === name)
      setValidationErrors(prev => ({
        ...prev,
        [name]: error?.message ?? ''
      }))
    }
  }

  function formAction(formData: globalThis.FormData) {
    // Create a new FormData instance to include the empty leg details
    const formDataWithEmptyLeg = new FormData()

    // Copy all existing form data
    for (const [key, value] of formData.entries()) {
      formDataWithEmptyLeg.append(key, value)
    }

    // Add empty leg details
    formDataWithEmptyLeg.append('emptyLegId', emptyLeg._id)
    formDataWithEmptyLeg.append(
      'emptyLegRoute',
      `${emptyLeg.origin} to ${emptyLeg.destination}`
    )
    formDataWithEmptyLeg.append(
      'emptyLegDate',
      new Date(emptyLeg.date).toLocaleDateString()
    )
    formDataWithEmptyLeg.append(
      'emptyLegPlane',
      emptyLeg.plane?.model || 'Not specified'
    )

    const data = Object.fromEntries(formDataWithEmptyLeg.entries())
    const result = EmptyLegsFormSchema.safeParse(data)

    if (!result.success) {
      const newErrors: ValidationErrors = {
        name: '',
        email: '',
        phone: '',
        passengers: '',
        message: ''
      }

      result.error.errors.forEach(error => {
        const field = error.path[0] as keyof ValidationErrors
        newErrors[field] = error.message
      })

      setValidationErrors(newErrors)
      return
    }

    dispatch(formDataWithEmptyLeg)
  }

  return (
    <form ref={formRef} action={formAction}>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='name'>Name</Label>
          <Input
            id='name'
            name='name'
            placeholder='Enter your name'
            value={formData.name}
            onChange={validate}
          />
          {validationErrors?.name && (
            <p className='text-xs text-red-500'>{validationErrors.name}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            value={formData.email}
            onChange={validate}
          />
          {validationErrors?.email && (
            <p className='text-xs text-red-500'>{validationErrors.email}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='phone'>Phone</Label>
          <Input
            id='phone'
            name='phone'
            type='tel'
            placeholder='Enter your number'
            value={formData.phone}
            onChange={validate}
          />
          {validationErrors?.phone && (
            <p className='text-xs text-red-500'>{validationErrors.phone}</p>
          )}
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='passengers'>Number of Passengers</Label>
          <Input
            id='passengers'
            name='passengers'
            type='number'
            placeholder='Enter number of passengers'
            max={emptyLeg.plane?.capacity || undefined}
            value={formData.passengers}
            onChange={validate}
          />
          {validationErrors?.passengers && (
            <p className='text-xs text-red-500'>
              {validationErrors.passengers}
            </p>
          )}
        </div>
        <div className='flex flex-col gap-2 sm:col-span-2'>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            name='message'
            placeholder='Enter any additional information or special requirements'
            value={formData.message}
            onChange={validate}
          />
          {validationErrors?.message && (
            <p className='text-xs text-red-500'>{validationErrors.message}</p>
          )}
        </div>
      </div>

      <div className='mt-8 flex justify-end'>
        <Button type='submit' size='lg' disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
  )
}
