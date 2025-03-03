import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlaneCard } from "@/components/brokerage/plane-card";
import { RequestPlaneQuoteForm } from "@/components/forms/request-plane-quote-form";

import { Plane } from "@/sanity/types";

// Define the types needed for the components
type PlaneCardData = Omit<Plane, "manufacturer" | "category"> & {
  manufacturer: string;
  category?: {
    name: string;
    _id: string;
  };
};

type ExpandedPlane = Omit<Plane, "manufacturer"> & {
  manufacturer: {
    _id: string;
    slug: string;
    name: string;
  };
};

export const PlaneSheet = ({ plane }: { plane: Plane }) => {
  // Create a placeholder manufacturer name from the reference
  const manufacturerName = "Manufacturer"; // Fallback name

  // Convert Plane to PlaneCardData for PlaneCard component
  const planeCardData: PlaneCardData = {
    ...plane,
    manufacturer: manufacturerName,
    // We don't have access to category name from the reference, so we'll omit it
    category: undefined,
  };

  // Convert Plane to ExpandedPlane for RequestPlaneQuoteForm component
  const expandedPlane: ExpandedPlane = {
    ...plane,
    manufacturer: {
      _id: plane.manufacturer?._ref || "",
      slug: "", // Simple string as required by the type
      name: manufacturerName,
    },
  };

  return (
    <Sheet>
      <SheetTrigger>
        <PlaneCard plane={planeCardData} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{`${plane.model} by ${expandedPlane.manufacturer.name}`}</SheetTitle>
          <SheetDescription>
            {`Do you want to book a flight on our ${plane.model} by ${expandedPlane.manufacturer.name}? Fill out the form below and we'll get back to you as soon as possible.`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8">
          <RequestPlaneQuoteForm plane={expandedPlane} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
