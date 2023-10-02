"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-fook-form/form"

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  firstName: z.string(),
  lastName: z.string(),
  company: z.string(),
})

type FormValues = z.infer<typeof formSchema>

const defaultValues: Partial<FormValues> = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
}

export const NewsletterForm = () => {
  const [serverError, setServerError] = useState("")
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { toast } = useToast()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (submitting) {
      return false
    }
    setSubmitting(true)
    setServerError("")

    const res = await fetch("/api/newsletter-subscribe", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        company: values.company,
      }),
    })

    const data = await res.json()

    if (data.error) {
      setServerError(data.error)
      setSuccess(false)
    } else {
      setSuccess(true)

      setServerError("")
    }

    toast({
      title: "Thanks for subscribing!",
      description: "A welcome email will arrive to your inbox soon.",
    })

    setSubmitting(false)

    form.resetField("email")
    form.resetField("firstName")
    form.resetField("lastName")
    form.resetField("company")

    return data
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative mt-10 flex flex-col gap-10 sm:max-w-md"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="hhughes@theaviator.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Howard" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Hughes" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="The Aviator Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={submitting}>
          {submitting ? (
            <p className="flex items-center gap-x-3">
              <span>Subscribing</span>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            </p>
          ) : (
            <p>Subscribe now</p>
          )}
        </Button>
      </form>
    </Form>
  )
}
