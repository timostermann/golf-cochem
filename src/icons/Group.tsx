import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Group = ({ title, ...props }: SVGIconProps) => {
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
        d="M8.15997 0.960022C6.5756 0.960022 5.27997 2.25565 5.27997 3.84002C5.27997 4.79252 5.74872 5.64002 6.46497 6.16502C6.0806 6.35815 5.72997 6.60752 5.42997 6.91502C5.08122 6.79127 4.70997 6.72002 4.31997 6.72002C2.46935 6.72002 0.959974 8.2294 0.959974 10.08C0.959974 11.2556 1.56935 12.3 2.48997 12.9C1.02372 13.5938 -2.58313e-05 15.0788 -2.58313e-05 16.8V18.96C-0.00190083 19.1138 0.0712244 19.2581 0.194974 19.35C0.194974 19.35 0.534349 19.59 1.18497 19.785C1.8356 19.98 2.8406 20.16 4.31997 20.16C5.79935 20.16 6.80435 19.98 7.45497 19.785C7.53935 19.7606 7.60685 19.7363 7.67997 19.71V21.84C7.6781 21.9938 7.75122 22.1381 7.87497 22.23C7.87497 22.23 8.21435 22.47 8.86497 22.665C9.5156 22.86 10.5206 23.04 12 23.04C13.4793 23.04 14.4843 22.86 15.135 22.665C15.7856 22.47 16.125 22.23 16.125 22.23C16.2487 22.1381 16.3218 21.9938 16.32 21.84V19.71C16.3931 19.7363 16.4606 19.7606 16.545 19.785C17.1956 19.98 18.2006 20.16 19.68 20.16C21.1593 20.16 22.1643 19.98 22.815 19.785C23.4656 19.59 23.805 19.35 23.805 19.35C23.9287 19.2581 24.0018 19.1138 24 18.96V16.8C24 15.0788 22.9762 13.5938 21.51 12.9C22.4306 12.3 23.04 11.2556 23.04 10.08C23.04 8.2294 21.5306 6.72002 19.68 6.72002C19.2618 6.72002 18.8643 6.8044 18.495 6.94502C18.1931 6.62815 17.8368 6.36377 17.445 6.16502C18.1612 5.64002 18.63 4.79252 18.63 3.84002C18.63 2.25565 17.3343 0.960022 15.75 0.960022C14.1656 0.960022 12.87 2.25565 12.87 3.84002C12.87 4.79252 13.3387 5.64002 14.055 6.16502C12.9525 6.70877 12.1462 7.75502 11.955 9.01502C11.7637 7.75315 10.9593 6.7069 9.85497 6.16502C10.5712 5.64002 11.04 4.79252 11.04 3.84002C11.04 2.25565 9.74435 0.960022 8.15997 0.960022ZM8.15997 1.92002C9.22685 1.92002 10.08 2.77315 10.08 3.84002C10.08 4.9069 9.22685 5.76002 8.15997 5.76002C7.0931 5.76002 6.23997 4.9069 6.23997 3.84002C6.23997 2.77315 7.0931 1.92002 8.15997 1.92002ZM15.75 1.92002C16.8168 1.92002 17.67 2.77315 17.67 3.84002C17.67 4.9069 16.8168 5.76002 15.75 5.76002C14.6831 5.76002 13.83 4.9069 13.83 3.84002C13.83 2.77315 14.6831 1.92002 15.75 1.92002ZM8.15997 6.72002C9.7781 6.72002 11.04 7.9819 11.04 9.60002V9.75002C9.65997 10.1681 8.63997 11.4469 8.63997 12.96C8.63997 14.1356 9.24935 15.18 10.17 15.78C9.5681 16.065 9.05247 16.4831 8.63997 16.995V16.8C8.63997 15.0788 7.61622 13.5938 6.14997 12.9C7.0706 12.3 7.67997 11.2556 7.67997 10.08C7.67997 8.98502 7.1456 8.01002 6.32997 7.39502C6.82872 6.9694 7.44747 6.72002 8.15997 6.72002ZM15.75 6.72002C16.4831 6.72002 17.1206 6.9769 17.625 7.42502C16.8337 8.04002 16.32 9.00565 16.32 10.08C16.32 11.2556 16.9293 12.3 17.85 12.9C16.3837 13.5938 15.36 15.0788 15.36 16.8V16.995C14.9475 16.4831 14.4318 16.065 13.83 15.78C14.7506 15.18 15.36 14.1356 15.36 12.96C15.36 11.4131 14.2987 10.1063 12.87 9.72002V9.60002C12.87 7.9819 14.1318 6.72002 15.75 6.72002ZM4.31997 7.68002C4.6931 7.68002 5.03997 7.77002 5.35497 7.92002C6.16122 8.30627 6.71997 9.1219 6.71997 10.08C6.71997 11.4113 5.65122 12.48 4.31997 12.48C2.98872 12.48 1.91997 11.4113 1.91997 10.08C1.91997 8.74877 2.98872 7.68002 4.31997 7.68002ZM19.68 7.68002C21.0112 7.68002 22.08 8.74877 22.08 10.08C22.08 11.4113 21.0112 12.48 19.68 12.48C18.3487 12.48 17.28 11.4113 17.28 10.08C17.28 9.19315 17.7543 8.42627 18.465 8.01002C18.4687 8.00815 18.4762 8.0119 18.48 8.01002C18.5512 7.99502 18.6168 7.96502 18.675 7.92002C18.6918 7.91252 18.7031 7.89752 18.72 7.89002C18.7293 7.88627 18.7406 7.88065 18.75 7.87502C19.0368 7.75315 19.3481 7.68002 19.68 7.68002ZM12 10.56C13.3312 10.56 14.4 11.6288 14.4 12.96C14.4 14.2913 13.3312 15.36 12 15.36C10.6687 15.36 9.59997 14.2913 9.59997 12.96C9.59997 11.6288 10.6687 10.56 12 10.56ZM4.31997 13.44C6.1706 13.44 7.67997 14.9494 7.67997 16.8V18.645C7.60872 18.6881 7.5806 18.7369 7.18497 18.855C6.6356 19.02 5.7206 19.2 4.31997 19.2C2.91935 19.2 2.00435 19.02 1.45497 18.855C1.05935 18.7369 1.03122 18.6881 0.959974 18.645V16.8C0.959974 14.9494 2.46935 13.44 4.31997 13.44ZM19.68 13.44C21.5306 13.44 23.04 14.9494 23.04 16.8V18.645C22.9687 18.6881 22.9406 18.7369 22.545 18.855C21.9956 19.02 21.0806 19.2 19.68 19.2C18.2793 19.2 17.3643 19.02 16.815 18.855C16.4193 18.7369 16.3912 18.6881 16.32 18.645V16.8C16.32 14.9494 17.8293 13.44 19.68 13.44ZM12 16.32C13.8506 16.32 15.36 17.8294 15.36 19.68V21.525C15.2887 21.5681 15.2606 21.6169 14.865 21.735C14.3156 21.9 13.4006 22.08 12 22.08C10.5993 22.08 9.68435 21.9 9.13497 21.735C8.73935 21.6169 8.71122 21.5681 8.63997 21.525V19.68C8.63997 17.8294 10.1493 16.32 12 16.32Z"
        fill="currentColor"
      />
      <path
        d="M8.15997 0.960022C6.5756 0.960022 5.27997 2.25565 5.27997 3.84002C5.27997 4.79252 5.74872 5.64002 6.46497 6.16502C6.0806 6.35815 5.72997 6.60752 5.42997 6.91502C5.08122 6.79127 4.70997 6.72002 4.31997 6.72002C2.46935 6.72002 0.959974 8.2294 0.959974 10.08C0.959974 11.2556 1.56935 12.3 2.48997 12.9C1.02372 13.5938 -2.58313e-05 15.0788 -2.58313e-05 16.8V18.96C-0.00190083 19.1138 0.0712244 19.2581 0.194974 19.35C0.194974 19.35 0.534349 19.59 1.18497 19.785C1.8356 19.98 2.8406 20.16 4.31997 20.16C5.79935 20.16 6.80435 19.98 7.45497 19.785C7.53935 19.7606 7.60685 19.7363 7.67997 19.71V21.84C7.6781 21.9938 7.75122 22.1381 7.87497 22.23C7.87497 22.23 8.21435 22.47 8.86497 22.665C9.5156 22.86 10.5206 23.04 12 23.04C13.4793 23.04 14.4843 22.86 15.135 22.665C15.7856 22.47 16.125 22.23 16.125 22.23C16.2487 22.1381 16.3218 21.9938 16.32 21.84V19.71C16.3931 19.7363 16.4606 19.7606 16.545 19.785C17.1956 19.98 18.2006 20.16 19.68 20.16C21.1593 20.16 22.1643 19.98 22.815 19.785C23.4656 19.59 23.805 19.35 23.805 19.35C23.9287 19.2581 24.0018 19.1138 24 18.96V16.8C24 15.0788 22.9762 13.5938 21.51 12.9C22.4306 12.3 23.04 11.2556 23.04 10.08C23.04 8.2294 21.5306 6.72002 19.68 6.72002C19.2618 6.72002 18.8643 6.8044 18.495 6.94502C18.1931 6.62815 17.8368 6.36377 17.445 6.16502C18.1612 5.64002 18.63 4.79252 18.63 3.84002C18.63 2.25565 17.3343 0.960022 15.75 0.960022C14.1656 0.960022 12.87 2.25565 12.87 3.84002C12.87 4.79252 13.3387 5.64002 14.055 6.16502C12.9525 6.70877 12.1462 7.75502 11.955 9.01502C11.7637 7.75315 10.9593 6.7069 9.85497 6.16502C10.5712 5.64002 11.04 4.79252 11.04 3.84002C11.04 2.25565 9.74435 0.960022 8.15997 0.960022ZM8.15997 1.92002C9.22685 1.92002 10.08 2.77315 10.08 3.84002C10.08 4.9069 9.22685 5.76002 8.15997 5.76002C7.0931 5.76002 6.23997 4.9069 6.23997 3.84002C6.23997 2.77315 7.0931 1.92002 8.15997 1.92002ZM15.75 1.92002C16.8168 1.92002 17.67 2.77315 17.67 3.84002C17.67 4.9069 16.8168 5.76002 15.75 5.76002C14.6831 5.76002 13.83 4.9069 13.83 3.84002C13.83 2.77315 14.6831 1.92002 15.75 1.92002ZM8.15997 6.72002C9.7781 6.72002 11.04 7.9819 11.04 9.60002V9.75002C9.65997 10.1681 8.63997 11.4469 8.63997 12.96C8.63997 14.1356 9.24935 15.18 10.17 15.78C9.5681 16.065 9.05247 16.4831 8.63997 16.995V16.8C8.63997 15.0788 7.61622 13.5938 6.14997 12.9C7.0706 12.3 7.67997 11.2556 7.67997 10.08C7.67997 8.98502 7.1456 8.01002 6.32997 7.39502C6.82872 6.9694 7.44747 6.72002 8.15997 6.72002ZM15.75 6.72002C16.4831 6.72002 17.1206 6.9769 17.625 7.42502C16.8337 8.04002 16.32 9.00565 16.32 10.08C16.32 11.2556 16.9293 12.3 17.85 12.9C16.3837 13.5938 15.36 15.0788 15.36 16.8V16.995C14.9475 16.4831 14.4318 16.065 13.83 15.78C14.7506 15.18 15.36 14.1356 15.36 12.96C15.36 11.4131 14.2987 10.1063 12.87 9.72002V9.60002C12.87 7.9819 14.1318 6.72002 15.75 6.72002ZM4.31997 7.68002C4.6931 7.68002 5.03997 7.77002 5.35497 7.92002C6.16122 8.30627 6.71997 9.1219 6.71997 10.08C6.71997 11.4113 5.65122 12.48 4.31997 12.48C2.98872 12.48 1.91997 11.4113 1.91997 10.08C1.91997 8.74877 2.98872 7.68002 4.31997 7.68002ZM19.68 7.68002C21.0112 7.68002 22.08 8.74877 22.08 10.08C22.08 11.4113 21.0112 12.48 19.68 12.48C18.3487 12.48 17.28 11.4113 17.28 10.08C17.28 9.19315 17.7543 8.42627 18.465 8.01002C18.4687 8.00815 18.4762 8.0119 18.48 8.01002C18.5512 7.99502 18.6168 7.96502 18.675 7.92002C18.6918 7.91252 18.7031 7.89752 18.72 7.89002C18.7293 7.88627 18.7406 7.88065 18.75 7.87502C19.0368 7.75315 19.3481 7.68002 19.68 7.68002ZM12 10.56C13.3312 10.56 14.4 11.6288 14.4 12.96C14.4 14.2913 13.3312 15.36 12 15.36C10.6687 15.36 9.59997 14.2913 9.59997 12.96C9.59997 11.6288 10.6687 10.56 12 10.56ZM4.31997 13.44C6.1706 13.44 7.67997 14.9494 7.67997 16.8V18.645C7.60872 18.6881 7.5806 18.7369 7.18497 18.855C6.6356 19.02 5.7206 19.2 4.31997 19.2C2.91935 19.2 2.00435 19.02 1.45497 18.855C1.05935 18.7369 1.03122 18.6881 0.959974 18.645V16.8C0.959974 14.9494 2.46935 13.44 4.31997 13.44ZM19.68 13.44C21.5306 13.44 23.04 14.9494 23.04 16.8V18.645C22.9687 18.6881 22.9406 18.7369 22.545 18.855C21.9956 19.02 21.0806 19.2 19.68 19.2C18.2793 19.2 17.3643 19.02 16.815 18.855C16.4193 18.7369 16.3912 18.6881 16.32 18.645V16.8C16.32 14.9494 17.8293 13.44 19.68 13.44ZM12 16.32C13.8506 16.32 15.36 17.8294 15.36 19.68V21.525C15.2887 21.5681 15.2606 21.6169 14.865 21.735C14.3156 21.9 13.4006 22.08 12 22.08C10.5993 22.08 9.68435 21.9 9.13497 21.735C8.73935 21.6169 8.71122 21.5681 8.63997 21.525V19.68C8.63997 17.8294 10.1493 16.32 12 16.32Z"
        fill="currentColor"
        fill-opacity="0.2"
      />
    </svg>
  );
};