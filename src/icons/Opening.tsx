import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Opening = ({ title, ...props }: SVGIconProps) => {
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
        d="M12 0.960022C5.90842 0.960022 0.959961 5.90848 0.959961 12C0.959961 18.0916 5.90842 23.04 12 23.04C18.0915 23.04 23.04 18.0916 23.04 12C23.04 5.90848 18.0915 0.960022 12 0.960022ZM12 1.92002C17.5727 1.92002 22.08 6.42731 22.08 12C22.08 17.5727 17.5727 22.08 12 22.08C6.42725 22.08 1.91996 17.5727 1.91996 12C1.91996 6.42731 6.42725 1.92002 12 1.92002ZM11.9925 3.35346C11.8653 3.35545 11.7442 3.4078 11.6556 3.49902C11.567 3.59024 11.5182 3.71288 11.52 3.84002V10.6435C11.2394 10.7427 10.9964 10.9264 10.8245 11.1693C10.6526 11.4122 10.5602 11.7024 10.56 12C10.5604 12.2146 10.6088 12.4263 10.7015 12.6197L7.82059 15.5006C7.77452 15.5449 7.73774 15.5979 7.7124 15.6565C7.68706 15.7151 7.67368 15.7782 7.67303 15.842C7.67238 15.9059 7.68448 15.9693 7.70862 16.0284C7.73276 16.0875 7.76845 16.1412 7.81361 16.1864C7.85876 16.2315 7.91248 16.2672 7.9716 16.2914C8.03073 16.3155 8.09408 16.3276 8.15794 16.327C8.2218 16.3263 8.28489 16.3129 8.34351 16.2876C8.40213 16.2622 8.45511 16.2255 8.49934 16.1794L11.3803 13.2985C11.5737 13.3912 11.7854 13.4396 12 13.44C12.3819 13.44 12.7481 13.2883 13.0182 13.0183C13.2882 12.7482 13.44 12.3819 13.44 12C13.4395 11.7026 13.347 11.4126 13.1751 11.1698C13.0032 10.9271 12.7604 10.7435 12.48 10.6444V3.84002C12.4808 3.7758 12.4688 3.71206 12.4446 3.65257C12.4204 3.59308 12.3845 3.53905 12.3391 3.49368C12.2936 3.44831 12.2395 3.41252 12.18 3.38843C12.1204 3.36435 12.0567 3.35246 11.9925 3.35346Z"
        fill="currentColor"
      />
      <path
        d="M12 0.960022C5.90842 0.960022 0.959961 5.90848 0.959961 12C0.959961 18.0916 5.90842 23.04 12 23.04C18.0915 23.04 23.04 18.0916 23.04 12C23.04 5.90848 18.0915 0.960022 12 0.960022ZM12 1.92002C17.5727 1.92002 22.08 6.42731 22.08 12C22.08 17.5727 17.5727 22.08 12 22.08C6.42725 22.08 1.91996 17.5727 1.91996 12C1.91996 6.42731 6.42725 1.92002 12 1.92002ZM11.9925 3.35346C11.8653 3.35545 11.7442 3.4078 11.6556 3.49902C11.567 3.59024 11.5182 3.71288 11.52 3.84002V10.6435C11.2394 10.7427 10.9964 10.9264 10.8245 11.1693C10.6526 11.4122 10.5602 11.7024 10.56 12C10.5604 12.2146 10.6088 12.4263 10.7015 12.6197L7.82059 15.5006C7.77452 15.5449 7.73774 15.5979 7.7124 15.6565C7.68706 15.7151 7.67368 15.7782 7.67303 15.842C7.67238 15.9059 7.68448 15.9693 7.70862 16.0284C7.73276 16.0875 7.76845 16.1412 7.81361 16.1864C7.85876 16.2315 7.91248 16.2672 7.9716 16.2914C8.03073 16.3155 8.09408 16.3276 8.15794 16.327C8.2218 16.3263 8.28489 16.3129 8.34351 16.2876C8.40213 16.2622 8.45511 16.2255 8.49934 16.1794L11.3803 13.2985C11.5737 13.3912 11.7854 13.4396 12 13.44C12.3819 13.44 12.7481 13.2883 13.0182 13.0183C13.2882 12.7482 13.44 12.3819 13.44 12C13.4395 11.7026 13.347 11.4126 13.1751 11.1698C13.0032 10.9271 12.7604 10.7435 12.48 10.6444V3.84002C12.4808 3.7758 12.4688 3.71206 12.4446 3.65257C12.4204 3.59308 12.3845 3.53905 12.3391 3.49368C12.2936 3.44831 12.2395 3.41252 12.18 3.38843C12.1204 3.36435 12.0567 3.35246 11.9925 3.35346Z"
        fill="currentColor"
        fill-opacity="0.2"
      />
    </svg>
  );
};
