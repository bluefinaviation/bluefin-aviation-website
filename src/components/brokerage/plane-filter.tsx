"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PlaneFilterProps {
  placeholder: string;
  options: { label: string; value: string }[];
  filterType: "category" | "manufacturer";
}

export const PlaneFilter = ({
  placeholder,
  options,
  filterType,
}: PlaneFilterProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentValue = searchParams.get(filterType) || "all";

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete(filterType);
    } else {
      params.set(filterType, value);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Select value={currentValue} onValueChange={handleFilter}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
