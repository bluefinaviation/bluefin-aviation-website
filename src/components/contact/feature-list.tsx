import { ReactNode } from "react"

export const FeatureList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-y-6 sm:mt-0 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2">
      {children}
    </ul>
  )
}
