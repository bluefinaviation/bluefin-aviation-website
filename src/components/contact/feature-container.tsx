import { ReactNode } from "react"

export const FeatureContainer = ({ children }: { children: ReactNode }) => {
  return <li className="border-t border-slate-900 p-3">{children}</li>
}
