// // // // import { Switch } from '@headlessui/react';
// // import { yupResolver } from '@hookform/resolvers/yup'
// // // // import clsx from 'clsx';
// // import { AnimatePresence, motion } from 'framer-motion'
// // import Link from 'next/link'
// // import { useState } from 'react'
// // import { useForm } from 'react-hook-form'
// // import { TbShieldCheck } from 'react-icons/tb'
// // import * as yup from 'yup'

// // import { Button } from '@/components/shared/Button'
// // import { phoneRegExp } from '@/utils/validators'

// // export const InquiryForm = ({ closeInquiry }) => {
// //   const [agreed, setAgreed] = useState(false)
// //   const [serverError, setServerError] = useState('')
// //   const [success, setSuccess] = useState('')
// //   const [submitting, setSubmitting] = useState(false)

// //   const schema = yup
// //     .object()
// //     .shape({
// //       firstName: yup.string().required('Please enter a first name.'),
// //       lastName: yup.string().required('Please enter a last name.'),
// //       email: yup
// //         .string()
// //         .email('Please enter a valid email.')
// //         .required('Please enter an email.'),
// //       phone: yup
// //         .string()
// //         .required('Please enter a phone number.')
// //         .matches(phoneRegExp, 'Please enter a valid phone number.')
// //         .min(5, 'The phone number is too short.')
// //         .max(15, 'The phone number is too long.'),
// //     })
// //     .required()

// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     watch,
// //     formState: { isSubmitting, errors },
// //   } = useForm({
// //     mode: 'onBlur',
// //     resolver: yupResolver(schema),
// //   })

// //   const onSubmit = async (formData) => {
// //     if (submitting) {
// //       return false
// //     }

// //     setSubmitting(true)
// //     setServerError('')

// //     const res = await fetch('/api/inquiry-send', {
// //       method: 'POST',
// //       headers: {
// //         Accept: 'application/json',
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(formData),
// //     })

// //     const data = await res.json()

// //     if (data.error) {
// //       setServerError(data.error)
// //       setSuccess('')
// //     } else {
// //       setSuccess('Your Camino Sherpa will contact you in the next 72h.')
// //       setServerError('')
// //     }

// //     setSubmitting(false)

// //     reset()

// //     return data
// //   }

// //   return (
// //     <AnimatePresence mode="wait">
// //       {!success ? (
// //         <form
// //           action="#"
// //           method="POST"
// //           className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
// //         >
// //           <div>
// //             <label
// //               htmlFor="first-name"
// //               className="block text-sm font-medium text-zinc-700"
// //             >
// //               First name
// //             </label>
// //             <div className="mt-1">
// //               <input
// //                 type="text"
// //                 name="first-name"
// //                 id="first-name"
// //                 autoComplete="given-name"
// //                 className="block w-full rounded-lg border-zinc-300 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
// //               />
// //             </div>
// //           </div>
// //           <div>
// //             <label
// //               htmlFor="last-name"
// //               className="block text-sm font-medium text-zinc-700"
// //             >
// //               Last name
// //             </label>
// //             <div className="mt-1">
// //               <input
// //                 type="text"
// //                 name="last-name"
// //                 id="last-name"
// //                 autoComplete="family-name"
// //                 className="block w-full rounded-lg border-zinc-300 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div className="sm:col-span-2">
// //             <label
// //               htmlFor="email"
// //               className="block text-sm font-medium text-zinc-700"
// //             >
// //               Email
// //             </label>
// //             <div className="mt-1">
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 autoComplete="email"
// //                 placeholder="email@address.com"
// //                 className="block w-full rounded-lg border-zinc-300 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
// //               />
// //             </div>
// //           </div>
// //           <div className="sm:col-span-2">
// //             <label
// //               htmlFor="phone-number"
// //               className="block text-sm font-medium text-zinc-700"
// //             >
// //               Phone Number
// //             </label>
// //             <div className="mt-1">
// //               <input
// //                 type="text"
// //                 name="phone-number"
// //                 id="phone-number"
// //                 autoComplete="tel"
// //                 placeholder="+1 (555) 987-6543"
// //                 className="block w-full rounded-lg border-zinc-300 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
// //               />
// //             </div>
// //           </div>
// //           <div className="sm:col-span-2">
// //             <label
// //               htmlFor="message"
// //               className="block text-sm font-medium text-zinc-700"
// //             >
// //               Message
// //             </label>
// //             <div className="mt-1">
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 rows={4}
// //                 defaultValue={''}
// //                 className="block w-full rounded-lg border-zinc-300 shadow-sm focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
// //               />
// //             </div>
// //           </div>
// //           <div className="sm:col-span-2">
// //             <div className="flex items-start">
// //               <div className="flex h-5 items-center">
// //                 <input
// //                   id="privacy"
// //                   aria-describedby="privacy-agreement"
// //                   name="privacy"
// //                   type="checkbox"
// //                   className="h-4 w-4 rounded-lg border-zinc-300 text-blue-700"
// //                 />
// //               </div>
// //               <div className="ml-3">
// //                 <p className="text-base text-zinc-700">
// //                   I have read and accepted the{' '}
// //                   <Link
// //                     href="/policies/privacy-policy"
// //                     onClick={closeInquiry}
// //                     className="font-medium text-zinc-700 underline"
// //                   >
// //                     Privacy Policy.
// //                   </Link>
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="sm:col-span-2">
// //             <Button variant="solid" color="gray" type="submit">
// //               Let&apos;s talk
// //             </Button>
// //           </div>
// //         </form>
// //       ) : (
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           className="flex flex-col items-center gap-y-6 text-center"
// //         >
// //           <TbShieldCheck className="h-10 w-10 lg:h-12 lg:w-12" />
// //           <p>
// //             <span className="inline-block font-serif text-3xl font-medium lg:text-4xl">
// //               Message Sent!
// //             </span>
// //             <span className="mt-1.5 inline-block text-xl lg:mt-2 lg:text-2xl">
// //               {success}
// //             </span>
// //           </p>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   )
// // }

export const InquiryForm = () => {
  return <div>InquiryForm</div>;
};
