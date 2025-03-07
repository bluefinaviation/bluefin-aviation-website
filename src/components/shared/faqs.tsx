'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface FAQ {
  _id: string
  question: string
  answer: string
}

const itemVariants = {
  closed: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  },
  open: {
    opacity: 1,
    height: 'auto',
    marginTop: '-1rem',
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
}

const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className='relative h-6 w-6'>
      <motion.span
        className='absolute top-[11px] right-0 left-0 h-[2px] bg-current'
        initial={false}
      />
      <motion.span
        className='absolute top-0 bottom-0 left-[11px] w-[2px] bg-current'
        initial={false}
        animate={{
          rotate: isOpen ? 90 : 0,
          opacity: isOpen ? 0 : 1
        }}
        transition={{
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98]
        }}
      />
    </div>
  )
}

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
  isOdd
}: {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
  isOdd: boolean
}) => {
  return (
    <div className={`${isOdd ? 'bg-zinc-50' : 'bg-white'}`}>
      <div className='mx-auto max-w-3xl'>
        <motion.button
          className='flex w-full cursor-pointer items-center justify-between py-12 text-xl font-bold md:text-3xl'
          onClick={onToggle}
          initial={false}
          whileHover={{ color: '#1e293b' }}
        >
          <span className='pr-8 text-left'>{faq.question}</span>
          <PlusMinusIcon isOpen={isOpen} />
        </motion.button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial='closed'
              animate='open'
              exit='closed'
              variants={itemVariants}
              className='overflow-hidden'
            >
              <div className='pr-12 pb-12 text-base text-zinc-600'>
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export const FAQs = ({ faqs }: { faqs: FAQ[] }) => {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className='w-full'>
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq._id}
          faq={faq}
          isOpen={openId === faq._id}
          onToggle={() => handleToggle(faq._id)}
          isOdd={index % 2 !== 0}
        />
      ))}
    </div>
  )
}
