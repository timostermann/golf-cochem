import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Start = ({ title, ...props }: SVGIconProps) => {
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
        d="M4.79999 2.52002V21.48L5.51999 21.06L20.205 12.42L20.91 12L20.205 11.58L5.51999 2.94002L4.79999 2.52002ZM5.75999 4.20002L19.005 12L5.75999 19.8V4.20002Z"
        fill="currentColor"
      />
      <path
        d="M4.79999 2.52002V21.48L5.51999 21.06L20.205 12.42L20.91 12L20.205 11.58L5.51999 2.94002L4.79999 2.52002ZM5.75999 4.20002L19.005 12L5.75999 19.8V4.20002Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
};
