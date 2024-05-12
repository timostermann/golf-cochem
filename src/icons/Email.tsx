import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Email = ({ title, ...props }: SVGIconProps) => {
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
        d="M0 3.35999V20.64H24V3.35999H0ZM0.96 4.31999H23.04V5.53499L12 14.265L0.96 5.53499V4.31999ZM0.96 6.76499L11.7 15.255C11.8763 15.3956 12.1237 15.3956 12.3 15.255L23.04 6.76499V19.68H0.96V6.76499Z"
        fill="currentColor"
      />
      <path
        d="M0 3.35999V20.64H24V3.35999H0ZM0.96 4.31999H23.04V5.53499L12 14.265L0.96 5.53499V4.31999ZM0.96 6.76499L11.7 15.255C11.8763 15.3956 12.1237 15.3956 12.3 15.255L23.04 6.76499V19.68H0.96V6.76499Z"
        fill="currentColor"
        fill-opacity="0.2"
      />
    </svg>
  );
};
