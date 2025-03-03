import { cn } from "@/lib/utils";

export const LogoMark = ({
  className,
  darkColor,
  lightColor,
}: {
  className: string;
  darkColor?: string;
  lightColor?: string;
}) => {
  return (
    <svg
      viewBox="0 0 6667 5000"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      className={cn(
        className,
        darkColor && "fill-slate-900",
        lightColor && "fill-white"
      )}
    >
      <path
        d="M4148.79 3499.84c121.601-100.37 266.408-157.684 350.498-260.886 308.513-378.846 480.191-616.169 724.179-942.651 154.185-199.55 741.053-1034.9 997.203-1322.52 143.546-161.04 362.637-196.313 362.637-196.313s-589.083 1394.45-672.625 1570.36c-101.703 214.211-401.124 780.183-640.708 925.466-99.489 60.384-218.234 226.541-1121.18 226.541M219.076 3571.85s3518.95.334 3581.36.167c257.197-.571 933.868-8.188 1122.61-72.142-167.133 87.303-596.056 320.056-1326.83 334.98-30.204.619-3481.66.857-3512.86.69 18.47-38.082 135.715-263.695 135.715-263.695"
        style={{
          fill: darkColor || "#f9fafb",
          fillRule: "nonzero",
        }}
      />
    </svg>
  );
};
