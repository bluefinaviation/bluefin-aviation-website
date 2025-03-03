"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

const itemVariants = {
  closed: {
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    marginTop: "-1rem",
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
};

const PlusMinusIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative w-6 h-6">
      <motion.span
        className="absolute top-[11px] left-0 right-0 bg-current h-[2px]"
        initial={false}
      />
      <motion.span
        className="absolute left-[11px] top-0 bottom-0 bg-current w-[2px]"
        initial={false}
        animate={{
          rotate: isOpen ? 90 : 0,
          opacity: isOpen ? 0 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
      />
    </div>
  );
};

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
  isOdd,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  isOdd: boolean;
}) => {
  return (
    <div className={`${isOdd ? "bg-zinc-50" : "bg-white"}`}>
      <div className="max-w-3xl mx-auto">
        <motion.button
          className="w-full flex items-center cursor-pointer justify-between py-12 text-xl md:text-3xl font-bold"
          onClick={onToggle}
          initial={false}
          whileHover={{ color: "#1e293b" }}
        >
          <span className="text-left pr-8">{faq.question}</span>
          <PlusMinusIcon isOpen={isOpen} />
        </motion.button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={itemVariants}
              className="overflow-hidden"
            >
              <div className="text-zinc-600 text-base pb-12 pr-12">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const FAQs = ({ faqs }: { faqs: FAQ[] }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
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
  );
};
