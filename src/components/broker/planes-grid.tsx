"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

import { PlaneSheet } from "@/components/shared/plane-sheet";
import { Button } from "@/components/ui/button";

import { Plane } from "@/sanity/types";
type PlaneCardData = Omit<Plane, "manufacturer"> & {
  manufacturer: string;
};

const MotionPlaneSheet = motion(PlaneSheet);

interface EmptyStateProps {
  hasFilters: boolean;
}

const EmptyState = ({ hasFilters }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <h3 className="text-xl font-semibold mb-2">No planes found</h3>
      <p className="text-muted-foreground mb-6">
        {hasFilters
          ? "No planes match your selected filters. Try adjusting your criteria."
          : "There are no planes available at the moment."}
      </p>
      {hasFilters && (
        <Link href="/charter-brokerage">
          <Button variant="outline">Clear Filters</Button>
        </Link>
      )}
    </motion.div>
  );
};

interface PlanesGridProps {
  planes: PlaneCardData[];
  hasFilters: boolean;
}

export const PlanesGrid = ({ planes, hasFilters }: PlanesGridProps) => {
  return (
    <AnimatePresence mode="wait">
      {planes.length > 0 ? (
        <motion.div
          key="grid"
          className="grid mt-8 grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence mode="popLayout">
            {planes.map((plane, index: number) => (
              <MotionPlaneSheet
                key={plane._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: { duration: 0.2 },
                }}
                layout
                plane={plane}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <EmptyState hasFilters={hasFilters} />
      )}
    </AnimatePresence>
  );
};
