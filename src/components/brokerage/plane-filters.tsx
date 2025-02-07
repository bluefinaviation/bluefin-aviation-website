import { PlaneFilter } from "@/components/brokerage/plane-filter";
import {
  ALL_PLANE_CATEGORIES_QUERY,
  ALL_PLANE_MANUFACTURERS_QUERY,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

interface CategoryData {
  _id: string;
  name: string | null;
  slug: string | null;
}

interface ManufacturerData {
  _id: string;
  name: string | null;
  slug: string | null;
}

export const PlaneFilters = async () => {
  const [{ data: categories }, { data: manufacturers }] = await Promise.all([
    sanityFetch({ query: ALL_PLANE_CATEGORIES_QUERY }),
    sanityFetch({ query: ALL_PLANE_MANUFACTURERS_QUERY }),
  ]);

  const planeCategories = [
    { label: "All Categories", value: "all" },
    ...categories.map((category: CategoryData) => ({
      label: category.name || "all",
      value: category.slug || "all",
    })),
  ];

  const planeManufacturers = [
    { label: "All Manufacturers", value: "all" },
    ...manufacturers.map((manufacturer: ManufacturerData) => ({
      label: manufacturer.name || "all",
      value: manufacturer.slug || "all",
    })),
  ];

  return (
    <div className="flex gap-4">
      <PlaneFilter
        placeholder="Categories"
        options={planeCategories}
        filterType="category"
      />
      <PlaneFilter
        placeholder="Manufacturer"
        options={planeManufacturers}
        filterType="manufacturer"
      />
    </div>
  );
};
