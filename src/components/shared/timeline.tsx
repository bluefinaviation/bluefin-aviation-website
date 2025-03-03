import { Fragment } from "react";

import { cn } from "@/lib/utils";
import { TimelineEvent } from "@/sanity/types";

export function Timeline({
  events,
  className,
}: {
  events: TimelineEvent[];
  className?: string;
}) {
  return (
    <div className={cn("relative py-20", className)}>
      {/* Timeline content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line with dots */}
        <div className="absolute left-1/2 top-0 bottom-0 w-4">
          <div className="absolute top-[12.5%] bottom-[12.5%] left-1/2 w-[1px] -tranzinc-x-1/2 bg-black/20">
            {events.map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 -tranzinc-x-1/2 h-2 w-2 rounded-full bg-black"
                style={{
                  top: `${(index / (events.length - 1)) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="relative grid grid-cols-2 gap-y-16">
          {events.map((event, index) => (
            <Fragment key={event.title}>
              {index % 2 === 0 ? (
                <>
                  {/* Left event */}
                  <div className="pr-24">
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{event.year}</span>
                    </div>
                    <p className="leading-relaxed">{event.description}</p>
                  </div>
                  {/* Empty right */}
                  <div />
                </>
              ) : (
                <>
                  {/* Empty left */}
                  <div />
                  {/* Right event */}
                  <div className="pl-24">
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{event.year}</span>
                    </div>
                    <p className="leading-relaxed">{event.description}</p>
                  </div>
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
