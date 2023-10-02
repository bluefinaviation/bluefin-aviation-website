"use client"

import { Feature } from "@/types"
import { Disclosure, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"

interface FeatureProps {
  feature: Feature
}

export const TripFeature = ({ feature }: FeatureProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="tw-transition relative flex w-full flex-col items-center">
            <Disclosure.Button
              className={clsx(
                "tw-transition group relative flex w-full flex-col items-center justify-center rounded-lg border bg-white p-3 shadow",
                open && " bg-slate-100 shadow-inner"
              )}
            >
              <p
                className={clsx(
                  open ? "text-blue-600" : "text-slate-700",
                  "tw-transition text-base font-semibold group-hover:text-blue-600 sm:text-lg lg:text-xl"
                )}
              >
                {feature.feature}
              </p>
              <ChevronDownIcon
                className={clsx(
                  "tw-transition ml-1 h-full w-4 text-slate-500 group-hover:text-slate-900",
                  open ? "rotate-180" : "rotate-0"
                )}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel static>
                <ul className="mt-3 flex w-full flex-col gap-y-1 text-center text-slate-700 sm:mt-4 sm:gap-y-1.5 lg:mt-6 lg:gap-y-2">
                  {feature.subfeatures.map((subfeature) => (
                    <li
                      key={subfeature._key}
                      className="text-sm sm:text-base lg:text-lg"
                    >
                      {subfeature.subfeature}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  )
}
