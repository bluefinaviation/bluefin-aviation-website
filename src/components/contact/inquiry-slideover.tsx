// // import { Dialog, Transition } from '@headlessui/react';
// // import { Fragment } from 'react';
// // import { TbX } from 'react-icons/tb';

// // // // import { SectionHeading } from '@/components/shared/SectionHeading';
// // import { InquiryForm } from './InquiryForm';

// // export const InquirySlideOver = ({ closeInquiry, isInquiryOpen }) => {
// //   return (
// //     <Transition.Root show={isInquiryOpen} as={Fragment}>
// //       <Dialog as="div" className="relative z-50" onClose={closeInquiry}>
// //         <Transition.Child
// //           as={Fragment}
// //           enter="ease-in-out duration-500"
// //           enterFrom="opacity-0"
// //           enterTo="opacity-100"
// //           leave="ease-in-out duration-500"
// //           leaveFrom="opacity-100"
// //           leaveTo="opacity-0"
// //         >
// //           <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
// //         </Transition.Child>

// //         <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
// //           <Transition.Child
// //             as={Fragment}
// //             enter="transform transition ease-in-out duration-500 sm:duration-700"
// //             enterFrom="tranzinc-x-full"
// //             enterTo="tranzinc-x-0"
// //             leave="transform transition ease-in-out duration-500 sm:duration-700"
// //             leaveFrom="tranzinc-x-0"
// //             leaveTo="tranzinc-x-full"
// //           >
// //             <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl overflow-y-auto">
// //               <div className="relative flex flex-col bg-zinc-50 px-10 py-10 shadow-sm">
// //                 <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-10 text-5xl font-bold">
// //                   <Dialog.Title>Contact Us</Dialog.Title>

// //                   <button
// //                     type="button"
// //                     onClick={closeInquiry}
// //                     className="tw-transition text-zinc-900 hover:text-zinc-700"
// //                   >
// //                     <span className="sr-only">Close panel</span>
// //                     <TbX aria-hidden="true" />
// //                   </button>
// //                 </div>
// //                 <div className="mt-10">
// //                   <InquiryForm closeInquiry={closeInquiry} />
// //                 </div>
// //               </div>
// //             </Dialog.Panel>
// //           </Transition.Child>
// //         </div>
// //       </Dialog>
// //     </Transition.Root>
// //   );
// // };

export const InquirySlideOver = () => {
  return <div>InquirySlideOver</div>
}
