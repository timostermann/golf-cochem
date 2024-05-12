import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Costs = ({ title, ...props }: SVGIconProps) => {
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
        d="M8.88002 1.22998C6.89627 1.22998 5.28002 2.84811 5.28002 4.82998C5.28002 5.38686 5.41127 5.92123 5.64002 6.38998L6.49502 5.96998C6.32815 5.62873 6.24002 5.24061 6.24002 4.82998C6.24002 3.36561 7.41377 2.18998 8.88002 2.18998C10.3425 2.18998 11.52 3.36561 11.52 4.82998H12.48C12.48 2.84623 10.8619 1.22998 8.88002 1.22998ZM17.85 3.32998C17.8294 3.33373 17.8088 3.33936 17.79 3.34498C17.7806 3.34873 17.7694 3.35436 17.76 3.35998C16.5431 3.66561 15.15 4.39498 14.265 6.04498C13.4231 5.86498 12.5625 5.72998 11.64 5.72998C8.91002 5.72998 6.79315 6.57936 5.13002 7.87498C4.28065 8.53498 3.61502 9.44248 3.19502 10.56C3.0469 10.5094 2.85002 10.4269 2.62502 10.275C2.24815 10.0181 1.92002 9.66561 1.92002 9.01498C1.92002 8.49748 2.1619 8.06436 2.56502 7.88998C2.79002 7.80748 2.9194 7.57498 2.87065 7.34061C2.8219 7.10623 2.60815 6.94498 2.37002 6.95998C2.30815 6.96373 2.24627 6.97873 2.19002 7.00498C1.39315 7.34811 0.960022 8.17498 0.960022 9.01498C0.960022 10.02 1.54502 10.7025 2.08502 11.07C2.41877 11.2969 2.70377 11.4094 2.91002 11.475C2.7469 12.1856 2.6794 12.9731 2.71502 13.815C2.80502 15.9525 4.25252 17.52 5.34002 18.39C5.34565 18.39 5.3494 18.39 5.35502 18.39C5.45252 18.4669 5.48252 18.5119 5.49002 18.525C5.49752 18.5381 5.52002 18.5081 5.47502 18.645C5.33065 19.0875 5.05502 19.755 5.05502 19.755C5.05502 19.7606 5.05502 19.7644 5.05502 19.77C4.80002 20.4394 5.13752 21.195 5.80502 21.45C5.80502 21.4556 5.80502 21.4594 5.80502 21.465L7.35002 22.035C8.0194 22.29 8.79002 21.9544 9.04502 21.285C9.04502 21.285 9.23627 20.745 9.40502 20.295C9.43127 20.2275 9.45002 20.2106 9.46502 20.19C9.48377 20.1919 9.48565 20.1975 9.52502 20.205C9.83065 20.2612 10.5094 20.46 11.64 20.46C12.7931 20.46 13.4644 20.3437 13.77 20.325C13.83 20.3212 13.8544 20.325 13.875 20.325C13.8825 20.3381 13.8806 20.3494 13.89 20.37C13.8919 20.3775 13.8881 20.3775 13.89 20.385C14.0438 20.8444 14.2294 21.2719 14.235 21.285C14.2369 21.2925 14.2463 21.2925 14.25 21.3C14.5106 21.9562 15.2531 22.2862 15.915 22.035L17.46 21.465C17.46 21.4594 17.46 21.4556 17.46 21.45C18.1294 21.1969 18.4669 20.4394 18.21 19.77L17.97 19.125C17.9569 19.0987 17.9419 19.0744 17.925 19.05C17.925 19.05 17.94 19.0481 17.94 19.05C17.94 19.0519 17.8744 19.0744 18.03 18.99C19.1963 18.3562 20.0888 17.3794 20.655 16.2C20.7075 16.0894 20.7525 16.0106 20.79 15.975C20.8275 15.9394 20.85 15.915 21 15.915H21.78C22.47 15.915 23.04 15.345 23.04 14.655V12.315C23.04 11.625 22.4719 11.055 21.78 11.055H21C20.8781 11.055 20.8463 11.0456 20.835 11.04C20.5969 9.65811 19.665 7.92748 17.61 7.04998C17.6344 6.06186 17.8519 5.27998 18.33 3.98998C18.3919 3.83623 18.3713 3.65998 18.2738 3.52686C18.1763 3.39186 18.015 3.31686 17.85 3.32998ZM17.1 4.67998C16.8094 5.58373 16.6031 6.39561 16.62 7.33498C16.6219 7.53936 16.755 7.72123 16.95 7.78498C18.9581 8.48623 19.6988 10.0481 19.89 11.25C19.9631 11.7075 20.4506 12.015 21 12.015H21.78C21.9488 12.015 22.08 12.1444 22.08 12.315V14.655C22.08 14.8237 21.9506 14.955 21.78 14.955H21C20.6475 14.955 20.3288 15.0862 20.13 15.27C19.9313 15.4537 19.8431 15.6562 19.785 15.78C19.2975 16.7944 18.5663 17.5987 17.58 18.135C17.1956 18.3431 16.9894 18.7294 16.98 19.02C16.9725 19.2694 17.0569 19.4025 17.085 19.455H17.07L17.1 19.53L17.31 20.115C17.3794 20.295 17.2988 20.4956 17.115 20.565L15.57 21.15C15.3863 21.2194 15.1875 21.1219 15.12 20.94C15.12 20.9344 15.12 20.9306 15.12 20.925C15.12 20.925 14.9325 20.4956 14.79 20.07C14.7188 19.8619 14.6175 19.6294 14.385 19.485C14.1525 19.3406 13.9238 19.3519 13.71 19.365C13.2825 19.3931 12.7313 19.5 11.64 19.5C10.6106 19.5 10.1025 19.335 9.69002 19.26C9.48377 19.2225 9.23065 19.1887 8.97002 19.335C8.7094 19.4812 8.6119 19.7194 8.52002 19.965C8.35502 20.4075 8.14502 20.94 8.14502 20.94C8.07565 21.1219 7.8769 21.2194 7.69502 21.15L6.15002 20.565C5.96815 20.4956 5.88565 20.2969 5.95502 20.115C5.96252 20.0944 6.22502 19.4512 6.39002 18.945C6.50065 18.6037 6.45377 18.2587 6.31502 18.03C6.17627 17.8012 5.99065 17.6794 5.94002 17.64C4.96877 16.8637 3.74627 15.4837 3.67502 13.77C3.57377 11.3381 4.40815 9.64311 5.71502 8.62498C7.23002 7.44561 9.10502 6.68998 11.64 6.68998C12.6075 6.68998 13.5225 6.80811 14.385 7.01998C14.6119 7.07623 14.8444 6.96186 14.94 6.74998C15.4781 5.56311 16.275 5.03811 17.1 4.67998ZM17.505 11.085C16.9969 11.085 16.59 11.4937 16.59 12C16.59 12.5081 16.9969 12.93 17.505 12.93C18.0113 12.93 18.42 12.5062 18.42 12C18.42 11.4937 18.0113 11.085 17.505 11.085Z"
        fill="currentColor"
      />
      <path
        d="M8.88002 1.22998C6.89627 1.22998 5.28002 2.84811 5.28002 4.82998C5.28002 5.38686 5.41127 5.92123 5.64002 6.38998L6.49502 5.96998C6.32815 5.62873 6.24002 5.24061 6.24002 4.82998C6.24002 3.36561 7.41377 2.18998 8.88002 2.18998C10.3425 2.18998 11.52 3.36561 11.52 4.82998H12.48C12.48 2.84623 10.8619 1.22998 8.88002 1.22998ZM17.85 3.32998C17.8294 3.33373 17.8088 3.33936 17.79 3.34498C17.7806 3.34873 17.7694 3.35436 17.76 3.35998C16.5431 3.66561 15.15 4.39498 14.265 6.04498C13.4231 5.86498 12.5625 5.72998 11.64 5.72998C8.91002 5.72998 6.79315 6.57936 5.13002 7.87498C4.28065 8.53498 3.61502 9.44248 3.19502 10.56C3.0469 10.5094 2.85002 10.4269 2.62502 10.275C2.24815 10.0181 1.92002 9.66561 1.92002 9.01498C1.92002 8.49748 2.1619 8.06436 2.56502 7.88998C2.79002 7.80748 2.9194 7.57498 2.87065 7.34061C2.8219 7.10623 2.60815 6.94498 2.37002 6.95998C2.30815 6.96373 2.24627 6.97873 2.19002 7.00498C1.39315 7.34811 0.960022 8.17498 0.960022 9.01498C0.960022 10.02 1.54502 10.7025 2.08502 11.07C2.41877 11.2969 2.70377 11.4094 2.91002 11.475C2.7469 12.1856 2.6794 12.9731 2.71502 13.815C2.80502 15.9525 4.25252 17.52 5.34002 18.39C5.34565 18.39 5.3494 18.39 5.35502 18.39C5.45252 18.4669 5.48252 18.5119 5.49002 18.525C5.49752 18.5381 5.52002 18.5081 5.47502 18.645C5.33065 19.0875 5.05502 19.755 5.05502 19.755C5.05502 19.7606 5.05502 19.7644 5.05502 19.77C4.80002 20.4394 5.13752 21.195 5.80502 21.45C5.80502 21.4556 5.80502 21.4594 5.80502 21.465L7.35002 22.035C8.0194 22.29 8.79002 21.9544 9.04502 21.285C9.04502 21.285 9.23627 20.745 9.40502 20.295C9.43127 20.2275 9.45002 20.2106 9.46502 20.19C9.48377 20.1919 9.48565 20.1975 9.52502 20.205C9.83065 20.2612 10.5094 20.46 11.64 20.46C12.7931 20.46 13.4644 20.3437 13.77 20.325C13.83 20.3212 13.8544 20.325 13.875 20.325C13.8825 20.3381 13.8806 20.3494 13.89 20.37C13.8919 20.3775 13.8881 20.3775 13.89 20.385C14.0438 20.8444 14.2294 21.2719 14.235 21.285C14.2369 21.2925 14.2463 21.2925 14.25 21.3C14.5106 21.9562 15.2531 22.2862 15.915 22.035L17.46 21.465C17.46 21.4594 17.46 21.4556 17.46 21.45C18.1294 21.1969 18.4669 20.4394 18.21 19.77L17.97 19.125C17.9569 19.0987 17.9419 19.0744 17.925 19.05C17.925 19.05 17.94 19.0481 17.94 19.05C17.94 19.0519 17.8744 19.0744 18.03 18.99C19.1963 18.3562 20.0888 17.3794 20.655 16.2C20.7075 16.0894 20.7525 16.0106 20.79 15.975C20.8275 15.9394 20.85 15.915 21 15.915H21.78C22.47 15.915 23.04 15.345 23.04 14.655V12.315C23.04 11.625 22.4719 11.055 21.78 11.055H21C20.8781 11.055 20.8463 11.0456 20.835 11.04C20.5969 9.65811 19.665 7.92748 17.61 7.04998C17.6344 6.06186 17.8519 5.27998 18.33 3.98998C18.3919 3.83623 18.3713 3.65998 18.2738 3.52686C18.1763 3.39186 18.015 3.31686 17.85 3.32998ZM17.1 4.67998C16.8094 5.58373 16.6031 6.39561 16.62 7.33498C16.6219 7.53936 16.755 7.72123 16.95 7.78498C18.9581 8.48623 19.6988 10.0481 19.89 11.25C19.9631 11.7075 20.4506 12.015 21 12.015H21.78C21.9488 12.015 22.08 12.1444 22.08 12.315V14.655C22.08 14.8237 21.9506 14.955 21.78 14.955H21C20.6475 14.955 20.3288 15.0862 20.13 15.27C19.9313 15.4537 19.8431 15.6562 19.785 15.78C19.2975 16.7944 18.5663 17.5987 17.58 18.135C17.1956 18.3431 16.9894 18.7294 16.98 19.02C16.9725 19.2694 17.0569 19.4025 17.085 19.455H17.07L17.1 19.53L17.31 20.115C17.3794 20.295 17.2988 20.4956 17.115 20.565L15.57 21.15C15.3863 21.2194 15.1875 21.1219 15.12 20.94C15.12 20.9344 15.12 20.9306 15.12 20.925C15.12 20.925 14.9325 20.4956 14.79 20.07C14.7188 19.8619 14.6175 19.6294 14.385 19.485C14.1525 19.3406 13.9238 19.3519 13.71 19.365C13.2825 19.3931 12.7313 19.5 11.64 19.5C10.6106 19.5 10.1025 19.335 9.69002 19.26C9.48377 19.2225 9.23065 19.1887 8.97002 19.335C8.7094 19.4812 8.6119 19.7194 8.52002 19.965C8.35502 20.4075 8.14502 20.94 8.14502 20.94C8.07565 21.1219 7.8769 21.2194 7.69502 21.15L6.15002 20.565C5.96815 20.4956 5.88565 20.2969 5.95502 20.115C5.96252 20.0944 6.22502 19.4512 6.39002 18.945C6.50065 18.6037 6.45377 18.2587 6.31502 18.03C6.17627 17.8012 5.99065 17.6794 5.94002 17.64C4.96877 16.8637 3.74627 15.4837 3.67502 13.77C3.57377 11.3381 4.40815 9.64311 5.71502 8.62498C7.23002 7.44561 9.10502 6.68998 11.64 6.68998C12.6075 6.68998 13.5225 6.80811 14.385 7.01998C14.6119 7.07623 14.8444 6.96186 14.94 6.74998C15.4781 5.56311 16.275 5.03811 17.1 4.67998ZM17.505 11.085C16.9969 11.085 16.59 11.4937 16.59 12C16.59 12.5081 16.9969 12.93 17.505 12.93C18.0113 12.93 18.42 12.5062 18.42 12C18.42 11.4937 18.0113 11.085 17.505 11.085Z"
        fill="currentColor"
        fill-opacity="0.2"
      />
    </svg>
  );
};