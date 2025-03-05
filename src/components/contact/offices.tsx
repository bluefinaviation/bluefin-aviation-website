"use client";

import { useState } from "react";
import { Phone, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";

import { Map } from "@/components/contact/map";
import Link from "next/link";

export interface Office {
  city: string;
  importance?: string;
  country: string;
  address?: string;
}

export const Offices = () => {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>({
    city: "Miami",
    importance: "Main HQ",
    country: "USA",
    address: "Miami, USA",
  });

  return (
    <div className="relative mt-8">
      <Map
        selectedOffice={selectedOffice}
        setSelectedOffice={setSelectedOffice}
      />

      <div className="border-t-2 border-accent mt-8 pt-8">
        <div className="flex sm:flex-row flex-col justify-between sm:gap-8 gap-12">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-medium">
              {selectedOffice?.importance ?? `${selectedOffice?.city} Office`}
            </h3>
            <p className="text-base sm:text-lg text-gray-500">
              {selectedOffice?.city}, {selectedOffice?.country}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <Link
              href={`tel:0019548812932`}
              className="flex items-center gap-2 flex-col"
            >
              <Phone weight="fill" className="fill-accent size-8" />
              <p className="text-lg">+1 ( 954) 881-2932 </p>
            </Link>

            <Link
              href={`https://wa.me/0019548812932`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-col"
            >
              <WhatsappLogo weight="fill" className="fill-accent size-8" />
              <p className="text-lg">+1 ( 954) 881-2932 </p>
            </Link>

            <Link
              href={`mailto:operations@bluefinaviation.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-col"
            >
              <EnvelopeSimple weight="fill" className="fill-accent size-8" />
              <p className="text-lg">operations@bluefinaviation.com</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
