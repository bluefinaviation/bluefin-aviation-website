'use client'

import { useActionState, useEffect, useState, useRef } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { sendRequestPlaneQuoteAction } from '@/lib/actions'
import { RequestPlaneQuoteSchema } from '@/lib/schemas'
import { Plane } from '@/sanity/types'
import { ScrollArea } from '../ui/scroll-area'

interface ValidationErrors {
  name: string
  email: string
  origin: string
  departure: string
  destination: string
  arrival: string
  plane: string
  passengers: string
  message: string
}

interface FormValues {
  name: string
  email: string
  origin: string
  departure: string
  destination: string
  arrival: string
  plane: string
  passengers: string
  message: string
}

type PlaneWithExpandedRefs = Omit<Plane, 'manufacturer'> & {
  manufacturer: {
    _id: string
    name: string
    slug: string
  }
}

export const RequestPlaneQuoteForm = ({
  plane
}: {
  plane: PlaneWithExpandedRefs
}) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    origin: '',
    departure: '',
    destination: '',
    arrival: '',
    plane: `${plane.manufacturer?.name ?? ''} ${plane.model}`,
    passengers: '',
    message: ''
  })

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    name: '',
    email: '',
    origin: '',
    departure: '',
    destination: '',
    arrival: '',
    plane: '',
    passengers: '',
    message: ''
  })

  const [state, dispatch, isPending] = useActionState(
    sendRequestPlaneQuoteAction,
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
        origin: '',
        departure: '',
        destination: '',
        arrival: '',
        plane: `${plane.manufacturer?.name ?? ''} ${plane.model}`,
        passengers: '',
        message: ''
      })
      setValidationErrors({
        name: '',
        email: '',
        origin: '',
        departure: '',
        destination: '',
        arrival: '',
        plane: '',
        passengers: '',
        message: ''
      })
    }
  }, [state.success, plane])

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

    const result = RequestPlaneQuoteSchema.safeParse(data)
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
    // Create a new FormData instance to include the plane value
    const formDataWithPlane = new FormData()

    // Copy all existing form data
    for (const [key, value] of formData.entries()) {
      formDataWithPlane.append(key, value)
    }

    // Ensure plane value is included (it might be missing because it's readonly)
    if (!formData.get('plane')) {
      formDataWithPlane.append(
        'plane',
        `${plane.manufacturer?.name ?? ''} ${plane.model}`
      )
    }

    const data = Object.fromEntries(formDataWithPlane.entries())
    const result = RequestPlaneQuoteSchema.safeParse(data)

    if (!result.success) {
      const newErrors: ValidationErrors = {
        name: '',
        email: '',
        origin: '',
        departure: '',
        destination: '',
        arrival: '',
        plane: '',
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

    dispatch(formDataWithPlane)
  }

  return (
    <form ref={formRef} action={formAction} className='flex flex-col'>
      <ScrollArea className='h-[36rem] overflow-y-auto'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
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
            <Label htmlFor='origin'>Origin</Label>
            <Input
              id='origin'
              name='origin'
              placeholder='Enter your origin'
              value={formData.origin}
              onChange={validate}
            />
            {validationErrors?.origin && (
              <p className='text-xs text-red-500'>{validationErrors.origin}</p>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='departure'>Departure Date</Label>
            <Input
              id='departure'
              name='departure'
              type='date'
              placeholder='Enter your departure date'
              value={formData.departure}
              onChange={validate}
            />
            {validationErrors?.departure && (
              <p className='text-xs text-red-500'>
                {validationErrors.departure}
              </p>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <Label htmlFor='destination'>Destination</Label>
            <Input
              id='destination'
              name='destination'
              placeholder='Enter your destination'
              value={formData.destination}
              onChange={validate}
            />
            {validationErrors?.destination && (
              <p className='text-xs text-red-500'>
                {validationErrors.destination}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='arrival'>Arrival Date</Label>
            <Input
              id='arrival'
              name='arrival'
              type='date'
              placeholder='Enter your arrival date'
              value={formData.arrival}
              onChange={validate}
            />
            {validationErrors?.arrival && (
              <p className='text-xs text-red-500'>{validationErrors.arrival}</p>
            )}
          </div>

          <div className='flex flex-col gap-2'>
            <Label htmlFor='plane'>Plane</Label>
            <Input
              id='plane'
              name='plane'
              value={formData.plane}
              readOnly
              className='bg-zinc-50 capitalize'
            />
            {validationErrors?.plane && (
              <p className='text-xs text-red-500'>{validationErrors.plane}</p>
            )}
          </div>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='passengers'>Passengers</Label>
            <Input
              id='passengers'
              name='passengers'
              placeholder='Enter the number of passengers'
              type='number'
              value={formData.passengers}
              onChange={validate}
            />
            {validationErrors?.passengers && (
              <p className='text-xs text-red-500'>
                {validationErrors.passengers}
              </p>
            )}
          </div>

          <div className='col-span-1 flex flex-col gap-2 sm:col-span-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              id='message'
              name='message'
              placeholder='Enter your message'
              value={formData.message}
              onChange={validate}
            />
            {validationErrors?.message && (
              <p className='text-xs text-red-500'>{validationErrors.message}</p>
            )}
          </div>
        </div>
        <div className='mt-5 flex justify-end'>
          <Button type='submit' disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </ScrollArea>
    </form>
  )
}
