"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { CircleNotch } from "@phosphor-icons/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { subscribeToNewsletterAction } from "@/lib/actions";
import { NewsletterSchema } from "@/lib/schemas";

interface ValidationErrors {
  email: string;
}

interface FormValues {
  email: string;
}

export const NewsletterFooterForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormValues>({
    email: "",
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    email: "",
  });

  const [state, dispatch, isPending] = useActionState(
    subscribeToNewsletterAction,
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
      toast.success(state.success, {
        description: "A welcome email will arrive in your inbox soon.",
      });
      formRef.current?.reset();
      setFormData({
        email: "",
      });
      setValidationErrors({
        email: "",
      });
    }
  }, [state.success]);

  function validate(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  }

  function validateField(name: string, value: string) {
    const data = {
      ...formData,
      [name]: value,
    };

    const result = NewsletterSchema.safeParse(data);
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
    const result = NewsletterSchema.safeParse(data);

    if (!result.success) {
      const newErrors: ValidationErrors = {
        email: "",
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
    <form
      ref={formRef}
      action={formAction}
      id="newsletter-footer"
      className="relative mt-6 flex flex-col sm:max-w-md lg:mt-0"
    >
      <div className="flex gap-x-3">
        <div className="relative">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email..."
            value={formData.email}
            onChange={validate}
            className="text-background"
          />
          {validationErrors?.email && (
            <p className="text-xs text-red-500 absolute -bottom-7">
              {validationErrors.email}
            </p>
          )}
        </div>

        <Button type="submit" variant="outline" disabled={isPending}>
          {isPending ? (
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
  );
};
