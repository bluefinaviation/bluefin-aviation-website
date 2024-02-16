import { Dialog, Transition } from '@headlessui/react'
import NextVideo from 'next-video'
import { Fragment } from 'react'

import promoVideo from '/videos/promo-video.mp4'

export const VideoModal = ({
  isOpen,
  closeModal
  // // videoURL
}: {
  isOpen: boolean
  closeModal: () => void
  // // videoURL: string
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='rounded-lg-2xl relative flex aspect-video w-full max-w-3xl items-center justify-center overflow-hidden bg-white text-left align-middle shadow transition-all'>
                <NextVideo
                  src={promoVideo}
                  accentColor='#1d63ab'
                  poster='/images/og.png'
                />
                {/* <video autoPlay loop controls className='w-[800px]'>
                  <source src={videoURL} />
                </video> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
