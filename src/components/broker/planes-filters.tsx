"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const PlaneFilters = ({ allPlaneFilters }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "";
  const currentManufacturer = searchParams.get("manufacturer") || "";

  const updateFilters = (type: "category" | "manufacturer", value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete(type);
    } else {
      params.set(type, value);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="w-fit flex items-center gap-x-4">
      <Select
        value={currentCategory}
        onValueChange={(value) => updateFilters("category", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {allPlaneFilters.categories.map((category) => (
            <SelectItem key={category._id} value={category.slug}>
              {category.name}
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
          {allPlaneFilters.manufacturers.map((manufacturer) => (
            <SelectItem key={manufacturer._id} value={manufacturer.slug}>
              {manufacturer.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
