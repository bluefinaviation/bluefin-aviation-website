"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const PageBreadcrumb = () => {
  const pathname = usePathname();

  const pathnameParts = pathname.split("/");

  return (
    <Breadcrumb className="dark">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnameParts.map((part, index) => (
          <Fragment key={part}>
            {part && (
              <>
                {index > 0 && (
                  <BreadcrumbSeparator>
                    <CaretRight />
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem>
                  {index === pathnameParts.length - 1 ? (
                    <BreadcrumbPage className="capitalize">
                      {part.split("-").join(" ")}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={`/${part}`} className="capitalize">
                      {part.split("-").join(" ")}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
