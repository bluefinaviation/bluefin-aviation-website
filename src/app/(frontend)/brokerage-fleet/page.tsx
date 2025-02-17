import { PlaneCard } from "@/components/brokerage/plane-card";
import { Container } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { client } from "@/sanity/lib/client";
import {
  ALL_PLANE_CATEGORIES_QUERY,
  FLEET_PAGE_QUERY,
} from "@/sanity/lib/queries";
import { Plane } from "@/sanity/types";

export default async function BrokerageFleetPage() {
  const fleetData = await client.fetch(
    FLEET_PAGE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  const allPlaneCategories = await client.fetch(
    ALL_PLANE_CATEGORIES_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  // // const allPlaneManufacturers = await client.fetch(
  // //   ALL_PLANE_MANUFACTURERS_QUERY,
  // //   {},
  // //   options
  // // );

  console.log(allPlaneCategories);

  return (
    <div className="pb-20">
      <Container>
        <SectionHeading>Our Fleet</SectionHeading>
        <div className="w-fit flex items-center gap-x-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {allPlaneCategories.map((category) => (
                <SelectItem key={category._id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by manufacturer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid mt-8 grid-cols-3 gap-8">
          {fleetData.map((plane: Plane) => (
            <PlaneCard key={plane._id} plane={plane} />
          ))}
        </div>
      </Container>
    </div>
  );
}
