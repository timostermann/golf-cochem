import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const MoselCourse = ({ title, ...props }: SVGIconProps) => {
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
        d="M11.9991 0.960022C7.49718 0.960022 3.83905 4.61815 3.83905 9.12002C3.83905 12.2344 5.5903 14.9456 8.15905 16.32C8.14405 16.32 8.12905 16.32 8.11405 16.32C8.09905 16.32 8.08405 16.32 8.06905 16.32C7.8403 16.3631 7.6753 16.5656 7.67905 16.8V17.76C7.68093 17.9644 7.81405 18.1463 8.00905 18.21C9.5353 18.7181 10.5591 20.1413 10.5591 21.75V22.08H4.55905C4.54405 22.08 4.52905 22.08 4.51405 22.08C4.49905 22.08 4.48405 22.08 4.46905 22.08C4.20468 22.1044 4.00968 22.3406 4.03405 22.605C4.05843 22.8694 4.29468 23.0644 4.55905 23.04H19.439C19.6116 23.0419 19.7728 22.9519 19.8609 22.8019C19.9472 22.6519 19.9472 22.4681 19.8609 22.3181C19.7728 22.1681 19.6116 22.0781 19.439 22.08H13.439V21.75C13.439 20.1413 14.4628 18.7181 15.989 18.21C16.184 18.1463 16.3172 17.9644 16.319 17.76V16.8C16.319 16.5356 16.1034 16.32 15.8391 16.32C18.4078 14.9456 20.159 12.2344 20.159 9.12002C20.159 4.61815 16.5009 0.960022 11.9991 0.960022ZM11.9991 1.92002C15.9816 1.92002 19.199 5.13752 19.199 9.12002C19.199 13.1025 15.9816 16.32 11.9991 16.32C8.01655 16.32 4.79905 13.1025 4.79905 9.12002C4.79905 5.13752 8.01655 1.92002 11.9991 1.92002ZM16.7991 9.12002C16.5347 9.12002 16.319 9.33565 16.319 9.60002C16.319 9.8644 16.5347 10.08 16.7991 10.08C17.0634 10.08 17.279 9.8644 17.279 9.60002C17.279 9.33565 17.0634 9.12002 16.7991 9.12002ZM15.359 10.56C15.0947 10.56 14.8791 10.7756 14.8791 11.04C14.8791 11.3044 15.0947 11.52 15.359 11.52C15.6234 11.52 15.8391 11.3044 15.8391 11.04C15.8391 10.7756 15.6234 10.56 15.359 10.56ZM17.279 11.04C17.0147 11.04 16.7991 11.2556 16.7991 11.52C16.7991 11.7844 17.0147 12 17.279 12C17.5434 12 17.7591 11.7844 17.7591 11.52C17.7591 11.2556 17.5434 11.04 17.279 11.04ZM13.9191 12C13.6547 12 13.439 12.2156 13.439 12.48C13.439 12.7444 13.6547 12.96 13.9191 12.96C14.1834 12.96 14.399 12.7444 14.399 12.48C14.399 12.2156 14.1834 12 13.9191 12ZM15.8391 12.48C15.5747 12.48 15.359 12.6956 15.359 12.96C15.359 13.2244 15.5747 13.44 15.8391 13.44C16.1034 13.44 16.319 13.2244 16.319 12.96C16.319 12.6956 16.1034 12.48 15.8391 12.48ZM12.479 13.44C12.2147 13.44 11.9991 13.6556 11.9991 13.92C11.9991 14.1844 12.2147 14.4 12.479 14.4C12.7434 14.4 12.9591 14.1844 12.9591 13.92C12.9591 13.6556 12.7434 13.44 12.479 13.44ZM14.399 13.92C14.1347 13.92 13.9191 14.1356 13.9191 14.4C13.9191 14.6644 14.1347 14.88 14.399 14.88C14.6634 14.88 14.8791 14.6644 14.8791 14.4C14.8791 14.1356 14.6634 13.92 14.399 13.92ZM8.63905 17.28H15.359V17.475C13.6397 18.2063 12.479 19.8581 12.479 21.75V22.08H11.5191V21.75C11.5191 19.8581 10.3584 18.2063 8.63905 17.475V17.28Z"
        fill="currentColor"
      />
      <path
        d="M11.9991 0.960022C7.49718 0.960022 3.83905 4.61815 3.83905 9.12002C3.83905 12.2344 5.5903 14.9456 8.15905 16.32C8.14405 16.32 8.12905 16.32 8.11405 16.32C8.09905 16.32 8.08405 16.32 8.06905 16.32C7.8403 16.3631 7.6753 16.5656 7.67905 16.8V17.76C7.68093 17.9644 7.81405 18.1463 8.00905 18.21C9.5353 18.7181 10.5591 20.1413 10.5591 21.75V22.08H4.55905C4.54405 22.08 4.52905 22.08 4.51405 22.08C4.49905 22.08 4.48405 22.08 4.46905 22.08C4.20468 22.1044 4.00968 22.3406 4.03405 22.605C4.05843 22.8694 4.29468 23.0644 4.55905 23.04H19.439C19.6116 23.0419 19.7728 22.9519 19.8609 22.8019C19.9472 22.6519 19.9472 22.4681 19.8609 22.3181C19.7728 22.1681 19.6116 22.0781 19.439 22.08H13.439V21.75C13.439 20.1413 14.4628 18.7181 15.989 18.21C16.184 18.1463 16.3172 17.9644 16.319 17.76V16.8C16.319 16.5356 16.1034 16.32 15.8391 16.32C18.4078 14.9456 20.159 12.2344 20.159 9.12002C20.159 4.61815 16.5009 0.960022 11.9991 0.960022ZM11.9991 1.92002C15.9816 1.92002 19.199 5.13752 19.199 9.12002C19.199 13.1025 15.9816 16.32 11.9991 16.32C8.01655 16.32 4.79905 13.1025 4.79905 9.12002C4.79905 5.13752 8.01655 1.92002 11.9991 1.92002ZM16.7991 9.12002C16.5347 9.12002 16.319 9.33565 16.319 9.60002C16.319 9.8644 16.5347 10.08 16.7991 10.08C17.0634 10.08 17.279 9.8644 17.279 9.60002C17.279 9.33565 17.0634 9.12002 16.7991 9.12002ZM15.359 10.56C15.0947 10.56 14.8791 10.7756 14.8791 11.04C14.8791 11.3044 15.0947 11.52 15.359 11.52C15.6234 11.52 15.8391 11.3044 15.8391 11.04C15.8391 10.7756 15.6234 10.56 15.359 10.56ZM17.279 11.04C17.0147 11.04 16.7991 11.2556 16.7991 11.52C16.7991 11.7844 17.0147 12 17.279 12C17.5434 12 17.7591 11.7844 17.7591 11.52C17.7591 11.2556 17.5434 11.04 17.279 11.04ZM13.9191 12C13.6547 12 13.439 12.2156 13.439 12.48C13.439 12.7444 13.6547 12.96 13.9191 12.96C14.1834 12.96 14.399 12.7444 14.399 12.48C14.399 12.2156 14.1834 12 13.9191 12ZM15.8391 12.48C15.5747 12.48 15.359 12.6956 15.359 12.96C15.359 13.2244 15.5747 13.44 15.8391 13.44C16.1034 13.44 16.319 13.2244 16.319 12.96C16.319 12.6956 16.1034 12.48 15.8391 12.48ZM12.479 13.44C12.2147 13.44 11.9991 13.6556 11.9991 13.92C11.9991 14.1844 12.2147 14.4 12.479 14.4C12.7434 14.4 12.9591 14.1844 12.9591 13.92C12.9591 13.6556 12.7434 13.44 12.479 13.44ZM14.399 13.92C14.1347 13.92 13.9191 14.1356 13.9191 14.4C13.9191 14.6644 14.1347 14.88 14.399 14.88C14.6634 14.88 14.8791 14.6644 14.8791 14.4C14.8791 14.1356 14.6634 13.92 14.399 13.92ZM8.63905 17.28H15.359V17.475C13.6397 18.2063 12.479 19.8581 12.479 21.75V22.08H11.5191V21.75C11.5191 19.8581 10.3584 18.2063 8.63905 17.475V17.28Z"
        fill="currentColor"
        fill-opacity="0.2"
      />
    </svg>
  );
};
