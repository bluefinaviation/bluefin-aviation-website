import clsx from "clsx"

export const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean
  onClick: () => void
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Gallery image"
    className={clsx(
      "tw-transition h-3 w-3 cursor-pointer rounded-full border-2 border-blue-700 lg:h-4 lg:w-4",
      selected ? "bg-blue-700" : "bg-transparent"
    )}
  />
)
