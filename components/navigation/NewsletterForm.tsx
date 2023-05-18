'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { RotateCw } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

import { NewsletterInput } from '@/components/forms/NewsletterInput';
import { Button } from '@/components/global/Button';

export const NewsletterForm = () => {
  const validationSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ValidationSchema>({
    mode: 'onBlur',
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (formData: any) => {
    if (submitting) {
      return false;
    }
    setSubmitting(true);
    setServerError('');

    const res = await fetch('/api/newsletter-subscribe', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
      }),
    });

    const data = await res.json();

    if (data.error) {
      setServerError(data.error);
      setSuccess('');
    } else {
      setSuccess('Thanks for subscribing!');
      setServerError('');
    }

    setSubmitting(false);

    reset();

    return data;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mt-6 flex flex-col sm:max-w-md lg:mt-0"
    >
      <NewsletterInput
        register={register}
        name="email"
        isSubmitting={isSubmitting}
        error={errors.email}
      />
      <div className="absolute -bottom-5 left-0 text-xs">
        {errors?.email?.message && (
          <span className="text-red-700">{errors?.email?.message}</span>
        )}
        {success && <span className="text-green-700">{success}</span>}
      </div>
      {/* <fieldset>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          placeholder="Enter your email"
          {...register('email')}
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:w-56 sm:text-sm sm:leading-6"
        />
        <div className="text-xs text-red-700">
          {errors?.email?.message && <span>{errors?.email?.message}</span>}
          {serverError && <span>{serverError}</span>}
        </div>
      </fieldset> */}

      {/* <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
        <Button
          variant="outline"
          color="white"
          type="submit"
          disabled={errors?.email || isSubmitting === true}
        >
          {isSubmitting ? (
            <p className="flex items-center gap-x-1">
              <span>{`Joining`}</span>
              <RotateCw className="animate-spin" />
            </p>
          ) : (
            <p>{`Join Now!`}</p>
          )}{' '}
        </Button>
      </div> */}
    </form>
  );
};
