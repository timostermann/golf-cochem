import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const GolfFlag = ({ title, ...props }: SVGIconProps) => {
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
        d="M4.31995 0.23999V23.52H5.27995V14.73L21.2999 8.12999L22.3799 7.67999L21.2999 7.22999L4.97995 0.50999L4.31995 0.23999ZM5.27995 1.67999L19.8449 7.67999L5.27995 13.68V1.67999Z"
        fill="currentColor"
      />
      <path
        d="M4.31995 0.23999V23.52H5.27995V14.73L21.2999 8.12999L22.3799 7.67999L21.2999 7.22999L4.97995 0.50999L4.31995 0.23999ZM5.27995 1.67999L19.8449 7.67999L5.27995 13.68V1.67999Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
};
