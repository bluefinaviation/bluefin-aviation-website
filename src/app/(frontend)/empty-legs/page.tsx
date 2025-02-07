import { AirplaneInFlight } from "@phosphor-icons/react/dist/ssr";

import { PageContainer } from "@/components/shared/pace-container";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

import { getFormattedTime, getFlightDuration } from "@/lib/helpers";
import { EMPTY_LEGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

interface EmptyLeg {
  _id: string;
  from: {
    city: string;
    airportCode: string;
    airportName: string;
    country: string;
    countryCode: string;
  };
  to: {
    city: string;
    airportCode: string;
    airportName: string;
    country: string;
    countryCode: string;
  };
  departureTime: string;
  arrivalTime: string;
}

export default async function EmptyLegs() {
  const { data: emptyLegsData } = await sanityFetch({
    query: EMPTY_LEGS_QUERY,
  });

  if (!emptyLegsData) return null;

  return (
    <PageContainer>
      <h1 className="sr-only">Contact Us</h1>

      <Container className="py-8 sm:py-16 lg:py-24">
        <SectionHeading>Upcoming Last Minute Flights</SectionHeading>

        <div className="flex flex-col gap-4">
          {emptyLegsData.map((emptyLeg: EmptyLeg) => (
            <div
              key={emptyLeg._id}
              className="w-full bg-slate-100 flex flex-col p-4"
            >
              <div className="flex items-center mx-auto gap-24">
                <div className="flex text-center flex-col gap-2">
                  <h2 className="text-3xl font-bold text-branding">
                    {`${emptyLeg.from.city} (${emptyLeg.from.airportCode})`}
                  </h2>
                  <h3 className="text-lg">
                    {`${emptyLeg.from.airportName}, ${emptyLeg.from.country} (${emptyLeg.from.countryCode})`}
                  </h3>
                  <p className="text-lg font-medium text-slate-700">
                    {getFormattedTime(emptyLeg.departureTime)}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <AirplaneInFlight className="size-8" />
                  <span className="text-sm font-medium text-slate-600">
                    {getFlightDuration(
                      emptyLeg.departureTime,
                      emptyLeg.arrivalTime
                    )}
                  </span>
                  <p className="text-lg font-medium text-slate-700">
                    {emptyLeg.plane} {emptyLeg.seats}
                  </p>
                </div>
                <div className="flex flex-col text-center gap-2">
                  <h2 className="text-3xl font-bold text-branding">
                    {`${emptyLeg.to.city} (${emptyLeg.to.airportCode})`}
                  </h2>
                  <h3 className="text-lg">
                    {`${emptyLeg.to.airportName}, ${emptyLeg.to.country} (${emptyLeg.to.countryCode})`}
                  </h3>
                  <p className="text-lg font-medium text-slate-700">
                    {getFormattedTime(
                      emptyLeg.arrivalTime,
                      true,
                      emptyLeg.departureTime
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageContainer>
  );
}
