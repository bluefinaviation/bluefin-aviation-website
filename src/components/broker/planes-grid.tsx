"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { PlaneSheet } from "@/components/shared/plane-sheet";
import { Button } from "@/components/ui/button";

import { Plane } from "@/sanity/types";

const MotionPlaneSheet = motion(PlaneSheet);

interface EmptyStateProps {
  hasFilters: boolean;
}

const EmptyState = ({ hasFilters }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
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
    </div>
  );
};

interface PlanesGridProps {
  planes: Plane[];
  hasFilters: boolean;
}

export const PlanesGrid = ({ planes, hasFilters }: PlanesGridProps) => {
  if (planes.length === 0) {
    return <EmptyState hasFilters={hasFilters} />;
  }

  return (
    <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {planes.map((plane) => (
        <MotionPlaneSheet
          key={plane._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          plane={plane}
        />
      ))}
    </div>
  );
};
