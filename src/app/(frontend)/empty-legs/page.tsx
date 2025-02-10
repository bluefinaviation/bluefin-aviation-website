import { PageContainer } from "@/components/shared/pace-container";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";

import { client } from "@/sanity/lib/client";
import { EMPTY_LEGS_QUERY } from "@/sanity/lib/queries";
import { getFormattedTime } from "@/lib/helpers";

interface EmptyLeg {
  _id: string;
  from: { city: string };
  to: { city: string };
  departureTime: string;
  arrivalTime: string;
}

export default async function EmptyLegs() {
  const emptyLegsData = await client.fetch<EmptyLeg[]>(
    EMPTY_LEGS_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  if (!emptyLegsData) return null;

  console.log(emptyLegsData);

  return (
    <PageContainer>
      <h1 className="sr-only">Contact Us</h1>

      <Container className="py-8 sm:py-16 lg:py-24">
        <SectionHeading>Upcoming Last Minute Flights</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {emptyLegsData.map((emptyLeg: EmptyLeg) => (
            <div key={emptyLeg._id}>
              <h2>{emptyLeg.from.city}</h2>
              <p>{emptyLeg.to.city}</p>
              <p>{getFormattedTime(emptyLeg.departureTime)}</p>
              <p>{getFormattedTime(emptyLeg.arrivalTime)}</p>
            </div>
          ))}
        </div>
      </Container>
    </PageContainer>
  );
}
