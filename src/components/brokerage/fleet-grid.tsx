"use client";

import { motion, AnimatePresence } from "motion/react";
import { PlaneCard } from "@/components/brokerage/plane-card";
import { Plane } from "@/sanity/types";

type QueryPlane = Omit<Plane, "manufacturer"> & {
  manufacturer: string;
};

interface FleetGridProps {
  planes: QueryPlane[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const FleetGrid = ({ planes }: FleetGridProps) => {
  if (!planes?.length) {
    return (
      <div className="text-center py-20">
        <p className="text-lg text-gray-600">
          No planes found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence mode="wait">
        {planes.map((plane) => (
          <motion.div
            key={plane._id}
            variants={item}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <PlaneCard plane={plane} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
