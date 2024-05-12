import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const DownloadArea = ({ title, ...props }: SVGIconProps) => {
  const id = useSanitizedId();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!title}
      aria-labelledby={title ? id : undefined}
      {...props}
    >
      {title && <title id={id}>{title}</title>}
      <path
        d="M3.35999 0.960022V23.04H20.64V7.00502L20.505 6.85502L14.745 1.09502L14.595 0.960022H3.35999ZM4.31999 1.92002H13.92V7.68002H19.68V22.08H4.31999V1.92002ZM14.88 2.61002L18.99 6.72002H14.88V2.61002ZM7.19999 10.56V11.52H16.8V10.56H7.19999ZM7.19999 13.44V14.4H14.88V13.44H7.19999ZM7.19999 16.32V17.28H16.8V16.32H7.19999Z"
        fill="currentColor"
      />
      <path
        d="M3.35999 0.960022V23.04H20.64V7.00502L20.505 6.85502L14.745 1.09502L14.595 0.960022H3.35999ZM4.31999 1.92002H13.92V7.68002H19.68V22.08H4.31999V1.92002ZM14.88 2.61002L18.99 6.72002H14.88V2.61002ZM7.19999 10.56V11.52H16.8V10.56H7.19999ZM7.19999 13.44V14.4H14.88V13.44H7.19999ZM7.19999 16.32V17.28H16.8V16.32H7.19999Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
};
