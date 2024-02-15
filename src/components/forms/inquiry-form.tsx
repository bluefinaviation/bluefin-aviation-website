'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/react-fook-form/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
  service: z.enum(['trip', 'fuel'], {
    required_error: 'Please select a service.'
  }),
  newsletter: z.boolean(),
  message: z.string().min(1, {
    message: 'A message is required.'
  })
})

type FormValues = z.infer<typeof formSchema>

const defaultValues: Partial<FormValues> = {
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  service: 'trip',
  newsletter: false,
  message: ''
}

export const InquiryForm = () => {
  const [serverError, setServerError] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { toast } = useToast()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (submitting) {
      return false
    }
    setSubmitting(true)
    setServerError('')

    const res = await fetch('/api/inquiry-send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        company: values.company,
        email: values.email,
        service: values.service,
        newsletter: values.newsletter,
        message: values.message
      })
    })

    const data = await res.json()

    if (data.error) {
      setServerError(data.error)
      setSuccess(false)
    } else {
      setSuccess(true)

      setServerError('')
    }

    toast({
      title: 'Your message has been sent!',
      description: 'Our team will contact you shortly.'
    })

    if (values.newsletter) {
      const resNewsletter = await fetch('/api/newsletter-subscribe', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          company: values.company,
          email: values.email
        })
      })

      await resNewsletter.json()
    }

    setSubmitting(false)

    form.resetField('firstName')
    form.resetField('lastName')
    form.resetField('company')
    form.resetField('email')
    form.resetField('service')
    form.resetField('newsletter')
    form.resetField('message')

    return data
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='relative mt-10 flex flex-col gap-10 sm:max-w-md'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='hhughes@theaviator.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid gap-x-5 gap-y-10 sm:grid-cols-2'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='Howard' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='Hughes' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='company'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder='The Aviator Inc.' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Service</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='trip' />
                    </FormControl>
                    <FormLabel className='font-normal'>Trip</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='fuel' />
                    </FormControl>
                    <FormLabel className='font-normal'>Fuel</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea placeholder="We'll take you there..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='newsletter'
          render={({ field }) => (
            <FormItem className='flex flex-row items-center justify-between rounded-lg border p-4'>
              <div className='space-y-0.5'>
                <FormLabel className='text-base'>Join our newsletter</FormLabel>
                <FormDescription>
                  Receive the latest fuel prices and aviation industry news
                  right in your inbox.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type='submit' disabled={submitting}>
          {submitting ? (
            <p className='flex items-center gap-x-3'>
              <span>Submitting</span>
              <Loader2 className='mr-2 size-5 animate-spin' />
            </p>
          ) : (
            <p>Submit inquiry</p>
          )}
        </Button>
      </form>
    </Form>
  )
}
