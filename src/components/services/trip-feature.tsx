"use client";

import * as React from "react";
import { CaretCircleDoubleDown } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  // DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardTitle } from "@/components/ui/card";
import { TripFeatureProps } from "@/types";

import { useMediaQuery } from "@/hooks/use-media-query";

export const TripFeature = ({ feature }: TripFeatureProps) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!feature.feature || !feature.subfeatures?.length) return null;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Card className="p-4 flex items-center justify-between">
            <CardTitle>{feature.feature}</CardTitle>
            <CaretCircleDoubleDown
              weight="fill"
              className="size-6 text-branding"
            />
          </Card>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{feature.feature}</DialogTitle>
          </DialogHeader>

          <div>
            <ul className="flex flex-col gap-y-2 ml-4">
              {feature.subfeatures.map(
                (subfeature) =>
                  subfeature.subfeature && (
                    <li key={subfeature._key} className="list-disc">
                      {subfeature.subfeature}
                    </li>
                  )
              )}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Card className="p-4 flex items-center justify-between">
          <CardTitle>{feature.feature}</CardTitle>
          <CaretCircleDoubleDown
            weight="fill"
            className="size-6 text-branding"
          />
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <CardTitle>{feature.feature}</CardTitle>
        </DrawerHeader>
        <ul className="flex flex-col items-center justify-center gap-y-2">
          {feature.subfeatures.map(
            (subfeature) =>
              subfeature.subfeature && (
                <li key={subfeature._key}>{subfeature.subfeature}</li>
              )
          )}
        </ul>
        <DrawerFooter className="pt-8">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
