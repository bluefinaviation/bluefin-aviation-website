'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/react-fook-form/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required.'
    })
    .email({ message: 'Invalid email address.' })
})

type FormValues = z.infer<typeof formSchema>

const defaultValues: Partial<FormValues> = {
  email: ''
}

export const NewsletterFooterForm = () => {
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

    const res = await fetch('/api/newsletter-subscribe', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: values.email
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
      title: 'Thanks for subscribing!',
      description: 'A welcome email will arrive in your inbox soon.'
    })

    setSubmitting(false)

    form.resetField('email')

    return data
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id='newsletter-footer'
        className='relative mt-6 flex flex-col sm:max-w-md lg:mt-0'
      >
        <div className='flex gap-x-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='relative'>
                <FormControl>
                  <Input
                    placeholder='Enter your email...'
                    {...field}
                    className='text-background'
                  />
                </FormControl>
                <FormMessage className='absolute -bottom-7' />
              </FormItem>
            )}
          />

          <Button
            type='submit'
            variant='outline-light-foreground'
            disabled={submitting}
            className='text-background'
          >
            {submitting ? (
              <p className='flex items-center gap-x-3'>
                <span>Subscribing</span>
                <Loader2 className='mr-2 size-4 animate-spin' />
              </p>
            ) : (
              <p>Subscribe</p>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
