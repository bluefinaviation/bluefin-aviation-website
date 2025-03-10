import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { PlaneCard } from '@/components/brokerage/plane-card'
import { RequestPlaneQuoteForm } from '@/components/forms/request-plane-quote-form'

import { Plane } from '@/sanity/types'

export const PlaneSheet = ({ plane }: { plane: Plane }) => {
  return (
    <Sheet>
      <SheetTrigger>
        {/* @ts-expect-error - PlaneSheet expects a Plane type, but FLEET_QUERYResult is not compatible */}
        <PlaneCard plane={plane} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* @ts-expect-error - PlaneSheet expects a Plane type, but FLEET_QUERYResult is not compatible */}
          <SheetTitle>{`Inquiry: ${plane.manufacturer?.name}'s ${plane.model}`}</SheetTitle>
          <SheetDescription>
            {/* @ts-expect-error - PlaneSheet expects a Plane type, but FLEET_QUERYResult is not compatible */}
            {`Do you want to get a quote for our ${plane.model} by ${plane.manufacturer?.name}? Fill out the form below and we'll get back to you as soon as possible.`}
          </SheetDescription>
        </SheetHeader>

        <div className='px-4 py-8'>
          {/* @ts-expect-error - PlaneSheet expects a Plane type, but FLEET_QUERYResult is not compatible */}
          <RequestPlaneQuoteForm plane={plane} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
