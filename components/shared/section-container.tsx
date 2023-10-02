import clsx from "clsx"

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={clsx("mx-auto max-w-7xl px-3", className)}>{children}</div>
  )
}
