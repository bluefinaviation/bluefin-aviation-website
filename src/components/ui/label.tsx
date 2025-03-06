"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-[10px] uppercase font-mono leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = (
  {
    ref,
    className,
    ...props
  }
) => (<LabelPrimitive.Root
  ref={ref}
  className={cn(labelVariants(), className)}
  {...props}
/>);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
