"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define interfaces for the component props and data structures
interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface Manufacturer {
  _id: string;
  name: string;
  slug: string;
}

interface PlaneFiltersProps {
  allPlaneFilters: {
    categories: Category[];
    manufacturers: Manufacturer[];
  };
}

export const PlaneFilters = ({ allPlaneFilters }: PlaneFiltersProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentCategory = searchParams.get("category") || "";
  const currentManufacturer = searchParams.get("manufacturer") || "";

  const updateFilters = (type: "category" | "manufacturer", value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete(type);
    } else {
      params.set(type, value);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-fit flex items-center gap-x-4 mt-8">
      <Select
        value={currentCategory}
        onValueChange={(value) => updateFilters("category", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Jets</SelectItem>
          {allPlaneFilters.categories.map((category: Category) => (
            <SelectItem key={category._id} value={category.slug}>
              {category.name} Jets
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={currentManufacturer}
        onValueChange={(value) => updateFilters("manufacturer", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by manufacturer" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Manufacturers</SelectItem>
          {allPlaneFilters.manufacturers.map((manufacturer: Manufacturer) => (
            <SelectItem key={manufacturer._id} value={manufacturer.slug}>
              {manufacturer.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
