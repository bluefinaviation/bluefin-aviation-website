"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/react-fook-form/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Invalid email address." }),
});

type FormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<FormValues> = {
  email: "",
};

export const NewsletterFooterForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (submitting) {
      return false;
    }
    setSubmitting(true);

    const res = await fetch("/api/newsletter-subscribe", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
      }),
    });

    const data = await res.json();

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.message("Thanks for subscribing!", {
        description: "A welcome email will arrive in your inbox soon.",
      });
    }

    setSubmitting(false);
    form.resetField("email");

    return data;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        id="newsletter-footer"
        className="relative mt-6 flex flex-col sm:max-w-md lg:mt-0"
      >
        <div className="flex gap-x-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <Input
                    placeholder="Enter your email..."
                    {...field}
                    className="text-background"
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-7" />
              </FormItem>
            )}
          />

          <Button type="submit" variant="secondary" disabled={submitting}>
            {submitting ? (
              <p className="flex items-center gap-x-3">
                <span>Subscribing</span>
                <CircleNotch className="mr-2 size-4 animate-spin" />
              </p>
            ) : (
              <p>Subscribe</p>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
