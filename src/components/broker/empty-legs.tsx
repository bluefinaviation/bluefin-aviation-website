import Image from "next/image";
import {
  ArrowRight,
  CalendarBlank,
  Clock,
  Seat,
  AirplaneTilt,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { sanityFetch } from "@/sanity/lib/live";
import { EMPTY_LEGS_QUERY } from "@/sanity/lib/queries";
import { EmptyLeg } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { formatFlightTimes, formatPrice } from "@/lib/utils";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <AirplaneTilt className="size-16 text-secondary mb-4" weight="fill" />
      <h3 className="text-2xl font-serif font-bold mb-2">
        No Empty Legs Available
      </h3>
      <p className="text-muted-foreground max-w-md mb-8">
        There are currently no empty leg flights available. Please check back
        later or contact us to discuss your charter requirements.
      </p>
      <Button asChild>
        <a href="/contact">Contact Us</a>
      </Button>
    </div>
  );
};

export const EmptyLegs = async () => {
  const { data: emptyLegs } = await sanityFetch<EmptyLeg[]>({
    query: EMPTY_LEGS_QUERY,
  });

  if (!emptyLegs?.length) {
    return <EmptyState />;
  }

  return (
    <div className="py-8">
      {emptyLegs.map((emptyLeg) => {
        const times = formatFlightTimes(
          emptyLeg.departureTime,
          emptyLeg.arrivalTime
        );
        return (
          <div
            key={emptyLeg._id}
            className="flex justify-between bg-zinc-100 p-16 mb-4 rounded-br-[12rem]"
          >
            <div className="flex gap-x-8">
              <div className="flex flex-col gap-y-2">
                <div className="relative aspect-video w-56">
                  <Image
                    src={urlFor(emptyLeg.plane.image).url()}
                    alt={emptyLeg.plane.model}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="uppercase font-mono text-xs">
                  {emptyLeg.plane.manufacturer.name} {emptyLeg.plane.model}
                </h4>
              </div>
              <div className="flex flex-col gap-y-2 text-primary flex-1">
                <div className="flex gap-x-4 text-3xl font-serif font-bold items-center">
                  <h3>
                    {emptyLeg.origin.city} ({emptyLeg.origin.airportCode})
                  </h3>
                  <ArrowRight className="size-6" />
                  <h3>
                    {emptyLeg.destination.city} (
                    {emptyLeg.destination.airportCode})
                  </h3>
                </div>

                <div className="flex gap-x-4">
                  <div className="flex gap-x-2 items-center">
                    <CalendarBlank
                      weight="fill"
                      className="size-6 text-secondary"
                    />
                    <p>
                      {times.date || times.departureDate} {times.departureTime}
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Clock weight="fill" className="size-6 text-secondary" />
                    <p>{times.duration}</p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Seat weight="fill" className="size-6 text-secondary" />
                    <p>Up to {emptyLeg.plane.capacity} passengers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-3xl font-bold">
                {formatPrice(emptyLeg.price)}
              </p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="lg">Enquire Now</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Empty Leg Enquiry</SheetTitle>
                    <SheetDescription>
                      {`Interested in this empty leg flight from ${emptyLeg.origin.city} to ${emptyLeg.destination.city}. Fill out the form below and we'll get back to you as soon as possible.`}
                    </SheetDescription>
                  </SheetHeader>

                  <form className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Input
                          id="passengers"
                          type="number"
                          placeholder="Enter number of passengers"
                          max={emptyLeg.plane.capacity}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter any additional information or special requirements"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit" size="lg">
                        Submit Enquiry
                      </Button>
                    </div>
                  </form>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        );
      })}
    </div>
  );
};
