"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

import { sendContactMessageAction } from "@/lib/actions";
import { ContactFormSchema, RequestPlaneQuoteSchema } from "@/lib/schemas";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";

const TOPICS = ["Jet Charter", "Flight Support", "Fuel Suppoert", "Other"];

interface ValidationErrors {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  office: string;
  message: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  office: string;
  message: string;
}

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    office: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    office: "",
    message: "",
  });

  const [state, dispatch, isPending] = useActionState(
    sendContactMessageAction,
    {
      success: "",
      error: undefined,
    }
  );

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      formRef.current?.reset();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        office: "",
        message: "",
      });
      setValidationErrors({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        office: "",
        message: "",
      });
    }
  }, [state.success]);

  function validate(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  }

  function handleTopicChange(value: string) {
    setFormData((prev) => ({
      ...prev,
      topic: value,
    }));

    validateField("topic", value);
  }

  function validateField(name: string, value: string) {
    const data = {
      ...formData,
      [name]: value,
    };

    const result = ContactFormSchema.safeParse(data);
    if (result.success) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    } else {
      const error = result.error.errors.find((err) => err.path[0] === name);
      setValidationErrors((prev) => ({
        ...prev,
        [name]: error?.message ?? "",
      }));
    }
  }

  function formAction(formData: globalThis.FormData) {
    const data = Object.fromEntries(formData.entries());
    const result = ContactFormSchema.safeParse(data);

    if (!result.success) {
      const newErrors: ValidationErrors = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        office: "",
        message: "",
      };

      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ValidationErrors;
        newErrors[field] = error.message;
      });

      setValidationErrors(newErrors);
      return;
    }

    dispatch(formData);
  }

  return (
    <div className="bg-secondary py-16 sm:py-24">
      <SectionHeading className="text-white text-center mx-auto">
        Contact Us
      </SectionHeading>
      <Container className="mt-8">
        <form ref={formRef} action={formAction}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <Label htmlFor="firstName" className="text-zinc-300">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={validate}
                className="text-white"
              />
              {validationErrors?.firstName && (
                <p className="text-xs text-red-500">
                  {validationErrors.firstName}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-zinc-300">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={validate}
                className="text-white"
              />
              {validationErrors?.lastName && (
                <p className="text-xs text-red-500">
                  {validationErrors.lastName}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-zinc-300">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={validate}
                className="text-white"
              />
              {validationErrors?.email && (
                <p className="text-xs text-red-500">{validationErrors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-zinc-300">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={validate}
                className="text-white"
              />
              {validationErrors?.phone && (
                <p className="text-xs text-red-500">{validationErrors.phone}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="passengers" className="text-zinc-300">
                Passengers
              </Label>
              <Input
                id="passengers"
                name="passengers"
                type="number"
                placeholder="Enter the number of passengers"
                value={formData.passengers}
                onChange={validate}
                className="text-white"
              />
              {validationErrors?.phone && (
                <p className="text-xs text-red-500">{validationErrors.phone}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="topic" className="text-zinc-300">
                Topic
              </Label>
              <Select value={formData.topic} onValueChange={handleTopicChange}>
                <SelectTrigger className="text-zinc-400">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  {TOPICS.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {validationErrors?.topic && (
                <p className="text-xs text-red-500">{validationErrors.topic}</p>
              )}
            </div>

            <div className="col-span-3 flex flex-col gap-2">
              <Label htmlFor="message" className="text-zinc-300">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={validate}
                className="text-white"
              />
              {validationErrors?.message && (
                <p className="text-xs text-red-500">
                  {validationErrors.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-16 flex justify-end">
            <Button type="submit" variant="outline" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};
