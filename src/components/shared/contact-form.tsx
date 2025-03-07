'use client'

import { useActionState, useEffect, useState, useRef } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Container } from '@/components/shared/section-container'
import { SectionHeading } from '@/components/shared/section-heading'

import { sendContactMessageAction } from '@/lib/actions'
import { ContactFormSchema } from '@/lib/schemas'

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent
} from '@/components/ui/select'
import { SectionSummary } from './section-summary'

const TOPICS = ['Charter', 'Flight Support', 'Fuel', 'Other']

interface ValidationErrors {
  firstName: string
  lastName: string
  email: string
  phone: string
  topic: string
  message: string
  company: string
}

interface FormValues {
  firstName: string
  lastName: string
  email: string
  phone: string
  topic: string
  message: string
  company: string
}

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    company: ''
  })

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    company: '',
    message: ''
  })

  const [state, dispatch, isPending] = useActionState(
    sendContactMessageAction,
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        company: '',
        message: ''
      })
      setValidationErrors({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        company: '',
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

    validateField(name, value)
  }

  function handleTopicChange(value: string) {
    setFormData(prev => ({
      ...prev,
      topic: value
    }))

    validateField('topic', value)
  }

  function validateField(name: string, value: string) {
    const data = {
      ...formData,
      [name]: value
    }

    const result = ContactFormSchema.safeParse(data)
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
    const data = Object.fromEntries(formData.entries())
    const result = ContactFormSchema.safeParse(data)

    if (!result.success) {
      const newErrors: ValidationErrors = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
        company: ''
      }

      result.error.errors.forEach(error => {
        const field = error.path[0] as keyof ValidationErrors
        newErrors[field] = error.message
      })

      setValidationErrors(newErrors)
      return
    }

    dispatch(formData)
  }

  return (
    <div className='bg-zinc-300'>
      <Container>
        <div className='grid gap-8 py-16 sm:grid-cols-2 sm:py-24'>
          <div>
            <SectionHeading>Contact Us</SectionHeading>
            <SectionSummary className='mt-4'>
              Our team of experienced professionals are dedicated to providing
              the best possible service to our clients. Drop us a message and we
              will get back to you as soon as possible.
            </SectionSummary>
          </div>
          <Container className='mt-8'>
            <form ref={formRef} action={formAction}>
              <div className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
                <div className='col-span-1 flex flex-col gap-2'>
                  <Label htmlFor='firstName'>First Name</Label>
                  <Input
                    id='firstName'
                    name='firstName'
                    placeholder='Enter your first name'
                    value={formData.firstName}
                    onChange={validate}
                  />
                  {validationErrors?.firstName && (
                    <p className='text-xs text-red-500'>
                      {validationErrors.firstName}
                    </p>
                  )}
                </div>
                <div className='col-span-1 flex flex-col gap-2'>
                  <Label htmlFor='lastName'>Last Name</Label>
                  <Input
                    id='lastName'
                    name='lastName'
                    placeholder='Enter your last name'
                    value={formData.lastName}
                    onChange={validate}
                  />
                  {validationErrors?.lastName && (
                    <p className='text-xs text-red-500'>
                      {validationErrors.lastName}
                    </p>
                  )}
                </div>
                <div className='col-span-1 flex flex-col gap-2'>
                  <Label htmlFor='company'>Company</Label>
                  <Input
                    id='company'
                    name='company'
                    placeholder='Enter your company'
                    value={formData.company}
                    onChange={validate}
                  />
                  {validationErrors?.lastName && (
                    <p className='text-xs text-red-500'>
                      {validationErrors.lastName}
                    </p>
                  )}
                </div>
                <div className='col-span-1 flex flex-col gap-2'>
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
                    <p className='text-xs text-red-500'>
                      {validationErrors.email}
                    </p>
                  )}
                </div>
                <div className='col-span-1 flex flex-col gap-2'>
                  <Label htmlFor='phone'>Phone</Label>
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    placeholder='Enter your phone number'
                    value={formData.phone}
                    onChange={validate}
                  />
                  {validationErrors?.phone && (
                    <p className='text-xs text-red-500'>
                      {validationErrors.phone}
                    </p>
                  )}
                </div>

                <div className='col-span-1 flex flex-col gap-2'>
                  <Label htmlFor='topic'>Topic</Label>
                  <Select
                    value={formData.topic}
                    onValueChange={handleTopicChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select a topic' />
                    </SelectTrigger>
                    <SelectContent>
                      {TOPICS.map(topic => (
                        <SelectItem key={topic} value={topic}>
                          {topic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {validationErrors?.topic && (
                    <p className='text-xs text-red-500'>
                      {validationErrors.topic}
                    </p>
                  )}
                </div>

                <div className='col-span-2 flex flex-col gap-2 sm:col-span-3'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Enter your message'
                    value={formData.message}
                    onChange={validate}
                  />
                  {validationErrors?.message && (
                    <p className='text-xs text-red-500'>
                      {validationErrors.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='mt-16 flex justify-end'>
                <Button type='submit' disabled={isPending}>
                  {isPending ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </Container>
    </div>
  )
}
