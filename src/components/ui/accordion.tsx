'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from '@phosphor-icons/react/dist/ssr'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('border-t last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-8 text-left text-lg font-medium ring-ring/10 outline-ring/50 transition-all focus-visible:ring-4 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 sm:text-2xl dark:ring-ring/20 dark:outline-ring/40 [&[data-state=open]>svg]:rotate-45',
          className
        )}
        {...props}
      >
        {children}
        <Plus className='tranzinc-y-0.5 pointer-events-none size-8 shrink-0 rounded-full bg-zinc-200 p-1 text-muted-foreground tw-transition transition-transform duration-200 group-hover:bg-primary group-hover:text-white sm:size-10' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      {...props}
    >
      <div className={cn('max-w-lg pt-0 pb-4 text-base sm:text-lg', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
