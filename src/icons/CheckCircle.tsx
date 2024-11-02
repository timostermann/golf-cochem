import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const CheckCircle = ({ title, ...props }: SVGIconProps) => {
  const id = useSanitizedId();
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!title}
      aria-labelledby={title ? id : undefined}
      {...props}
    >
      {title && <title id={id}>{title}</title>}
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};
