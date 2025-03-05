import Image from "next/image";
import {
  ArrowRight,
  CalendarBlank,
  Clock,
  Seat,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EmptyLegsForm } from "@/components/forms/empty-legs-form";

import { sanityFetch } from "@/sanity/lib/live";
import { EMPTY_LEGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { formatFlightTimes, formatPrice } from "@/lib/utils";

export const EmptyLegs = async () => {
  const { data: emptyLegs } = await sanityFetch({
    query: EMPTY_LEGS_QUERY,
  });

  return (
    <div className="py-8">
      {emptyLegs.map((emptyLeg) => {
        const times = formatFlightTimes(
          emptyLeg.departureTime || "",
          emptyLeg.arrivalTime || ""
        );
        return (
          <div
            key={emptyLeg._id}
            className="flex justify-between bg-slate-100 p-16 mb-4 rounded-br-[12rem]"
          >
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-2">
                <div className="relative aspect-video w-56">
                  {emptyLeg.plane?.image && (
                    <Image
                      src={urlFor(emptyLeg.plane.image).url()}
                      alt={emptyLeg.plane.model || "Aircraft"}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <h4 className="uppercase font-mono text-xs">
                  {emptyLeg.plane?.manufacturer?.name} {emptyLeg.plane?.model}
                </h4>
              </div>
              <div className="flex flex-col gap-y-4 text-primary flex-1">
                <div className="flex gap-x-4 text-3xl font-serif font-bold items-center">
                  <h3>
                    {emptyLeg.origin?.city} ({emptyLeg.origin?.airportCode})
                  </h3>
                  <ArrowRight className="size-6" />
                  <h3>
                    {emptyLeg.destination?.city} (
                    {emptyLeg.destination?.airportCode})
                  </h3>
                </div>

                <div className="flex gap-x-4">
                  <div className="flex gap-x-2 items-center">
                    <CalendarBlank
                      weight="fill"
                      className="size-6 text-accent"
                    />
                    <p>
                      {times.date || times.departureDate} {times.departureTime}
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Clock weight="fill" className="size-6 text-accent" />
                    <p>{times.duration}</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Seat weight="fill" className="size-6 text-accent" />
                    <p>Up to {emptyLeg.plane?.capacity} passengers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-3xl font-bold">
                {formatPrice(emptyLeg.price || 0)}
              </p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="lg">Enquire Now</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Empty Leg Enquiry</SheetTitle>
                    <SheetDescription>
                      {`Interested in this empty leg flight from ${emptyLeg.origin?.city || ""} to ${emptyLeg.destination?.city || ""}. Fill out the form below and we'll get back to you as soon as possible.`}
                    </SheetDescription>
                  </SheetHeader>

                  <div className="p-8">
                    <EmptyLegsForm emptyLeg={emptyLeg} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        );
      })}
    </div>
  );
};
