import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Polo = ({ title, ...props }: SVGIconProps) => {
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
        d="M8.64003 0.960022C8.54606 0.959931 8.45413 0.98742 8.37564 1.03908C8.29715 1.09074 8.23555 1.1643 8.19847 1.25065L7.61253 2.61658L0.265342 6.29065C0.157748 6.34457 0.0743315 6.43693 0.0316181 6.54944C-0.0110954 6.66196 -0.00998927 6.78641 0.0347172 6.89815L1.95472 11.6981C2.00205 11.8162 2.09429 11.9106 2.21117 11.9607C2.32806 12.0108 2.46004 12.0125 2.57815 11.9653L4.71847 11.1103L4.32003 22.5431C4.31777 22.6076 4.32851 22.6718 4.35162 22.732C4.37473 22.7922 4.40973 22.8471 4.45453 22.8935C4.49932 22.9399 4.55301 22.9768 4.61237 23.0019C4.67173 23.0271 4.73555 23.0401 4.80003 23.04H19.2C19.2645 23.0401 19.3283 23.0271 19.3877 23.0019C19.4471 22.9768 19.5007 22.9399 19.5455 22.8935C19.5903 22.8471 19.6253 22.7922 19.6484 22.732C19.6715 22.6718 19.6823 22.6076 19.68 22.5431L19.2816 11.1103L21.4219 11.9653C21.54 12.0125 21.672 12.0108 21.7889 11.9607C21.9058 11.9106 21.998 11.8162 22.0453 11.6981L23.9653 6.89815C24.01 6.78641 24.0112 6.66196 23.9684 6.54944C23.9257 6.43693 23.8423 6.34457 23.7347 6.29065L16.3866 2.61658L15.8016 1.25065C15.7645 1.1643 15.7029 1.09074 15.6244 1.03908C15.5459 0.98742 15.454 0.959931 15.36 0.960022H8.64003ZM8.9569 1.92002H11.295L10.1485 3.89815L8.52659 2.92408L8.9569 1.92002ZM12.7219 1.92002H15.0432L15.4735 2.92408L13.8525 3.89627L12.7219 1.92002ZM12.0075 2.6044L13.2638 4.79815C13.2955 4.85349 13.3379 4.90197 13.3886 4.94074C13.4392 4.9795 13.4971 5.00779 13.5588 5.02393C13.6205 5.04008 13.6848 5.04377 13.748 5.03478C13.8111 5.02579 13.8718 5.00431 13.9266 4.97158L16.2103 3.60096L21.151 6.07127L20.1947 8.4619C20.1681 8.52095 20.1538 8.58476 20.1525 8.6495C20.1512 8.71425 20.1631 8.77858 20.1873 8.83862C20.2116 8.89867 20.2477 8.95319 20.2936 8.99891C20.3394 9.04462 20.3941 9.08059 20.4542 9.10464C20.5143 9.12869 20.5787 9.14032 20.6434 9.13885C20.7082 9.13737 20.7719 9.12281 20.8309 9.09605C20.8898 9.06928 20.9428 9.03086 20.9865 8.98311C21.0302 8.93535 21.0639 8.87924 21.0853 8.81815L22.0116 6.50252L22.9107 6.95158L21.3328 10.8966L18.9553 9.94502C18.8812 9.91535 18.8008 9.90465 18.7215 9.91387C18.6422 9.9231 18.5664 9.95196 18.5011 9.99786C18.4357 10.0437 18.3829 10.1052 18.3473 10.1767C18.3117 10.2482 18.2945 10.3274 18.2972 10.4072L18.6366 20.16H6.72003C6.65642 20.1591 6.59327 20.1709 6.53425 20.1946C6.47522 20.2183 6.4215 20.2535 6.3762 20.2982C6.33091 20.3428 6.29494 20.3961 6.27039 20.4547C6.24584 20.5134 6.23319 20.5764 6.23319 20.64C6.23319 20.7036 6.24584 20.7666 6.27039 20.8253C6.29494 20.884 6.33091 20.9372 6.3762 20.9819C6.4215 21.0265 6.47522 21.0617 6.53425 21.0855C6.59327 21.1092 6.65642 21.1209 6.72003 21.12H18.6694L18.7032 22.08H5.29691L5.70284 10.4072C5.70559 10.3274 5.68838 10.2482 5.65278 10.1767C5.61718 10.1052 5.56432 10.0437 5.49897 9.99786C5.43362 9.95196 5.35786 9.9231 5.27854 9.91387C5.19922 9.90465 5.11885 9.91535 5.04472 9.94502L2.66722 10.8966L1.0894 6.95158L1.98847 6.50252L2.91472 8.81815C2.9362 8.87924 2.96981 8.93535 3.01354 8.98311C3.05727 9.03086 3.11021 9.06928 3.16918 9.09605C3.22814 9.12281 3.29191 9.13737 3.35665 9.13884C3.42138 9.14032 3.48575 9.12868 3.54587 9.10463C3.606 9.08058 3.66063 9.04462 3.70649 8.9989C3.75236 8.95319 3.78849 8.89867 3.81273 8.83862C3.83697 8.77858 3.84882 8.71425 3.84754 8.6495C3.84627 8.58476 3.83192 8.52095 3.80534 8.4619L2.84909 6.07221L7.79065 3.6019L10.0735 4.97158C10.128 5.00428 10.1885 5.0258 10.2514 5.03492C10.3144 5.04403 10.3785 5.04055 10.4401 5.02468C10.5017 5.0088 10.5595 4.98085 10.6102 4.94245C10.6608 4.90404 10.7034 4.85595 10.7353 4.80096L12.0075 2.6044ZM12 4.80002C11.8727 4.80002 11.7506 4.85059 11.6606 4.94061C11.5706 5.03063 11.52 5.15272 11.52 5.28002C11.52 5.40733 11.5706 5.52942 11.6606 5.61943C11.7506 5.70945 11.8727 5.76002 12 5.76002C12.1273 5.76002 12.2494 5.70945 12.3394 5.61943C12.4295 5.52942 12.48 5.40733 12.48 5.28002C12.48 5.15272 12.4295 5.03063 12.3394 4.94061C12.2494 4.85059 12.1273 4.80002 12 4.80002ZM12 6.72002C11.8727 6.72002 11.7506 6.77059 11.6606 6.86061C11.5706 6.95063 11.52 7.07272 11.52 7.20002C11.52 7.32733 11.5706 7.44942 11.6606 7.53943C11.7506 7.62945 11.8727 7.68002 12 7.68002C12.1273 7.68002 12.2494 7.62945 12.3394 7.53943C12.4295 7.44942 12.48 7.32733 12.48 7.20002C12.48 7.07272 12.4295 6.95063 12.3394 6.86061C12.2494 6.77059 12.1273 6.72002 12 6.72002Z"
        fill="currentColor"
      />
      <path
        d="M8.64003 0.960022C8.54606 0.959931 8.45413 0.98742 8.37564 1.03908C8.29715 1.09074 8.23555 1.1643 8.19847 1.25065L7.61253 2.61658L0.265342 6.29065C0.157748 6.34457 0.0743315 6.43693 0.0316181 6.54944C-0.0110954 6.66196 -0.00998927 6.78641 0.0347172 6.89815L1.95472 11.6981C2.00205 11.8162 2.09429 11.9106 2.21117 11.9607C2.32806 12.0108 2.46004 12.0125 2.57815 11.9653L4.71847 11.1103L4.32003 22.5431C4.31777 22.6076 4.32851 22.6718 4.35162 22.732C4.37473 22.7922 4.40973 22.8471 4.45453 22.8935C4.49932 22.9399 4.55301 22.9768 4.61237 23.0019C4.67173 23.0271 4.73555 23.0401 4.80003 23.04H19.2C19.2645 23.0401 19.3283 23.0271 19.3877 23.0019C19.4471 22.9768 19.5007 22.9399 19.5455 22.8935C19.5903 22.8471 19.6253 22.7922 19.6484 22.732C19.6715 22.6718 19.6823 22.6076 19.68 22.5431L19.2816 11.1103L21.4219 11.9653C21.54 12.0125 21.672 12.0108 21.7889 11.9607C21.9058 11.9106 21.998 11.8162 22.0453 11.6981L23.9653 6.89815C24.01 6.78641 24.0112 6.66196 23.9684 6.54944C23.9257 6.43693 23.8423 6.34457 23.7347 6.29065L16.3866 2.61658L15.8016 1.25065C15.7645 1.1643 15.7029 1.09074 15.6244 1.03908C15.5459 0.98742 15.454 0.959931 15.36 0.960022H8.64003ZM8.9569 1.92002H11.295L10.1485 3.89815L8.52659 2.92408L8.9569 1.92002ZM12.7219 1.92002H15.0432L15.4735 2.92408L13.8525 3.89627L12.7219 1.92002ZM12.0075 2.6044L13.2638 4.79815C13.2955 4.85349 13.3379 4.90197 13.3886 4.94074C13.4392 4.9795 13.4971 5.00779 13.5588 5.02393C13.6205 5.04008 13.6848 5.04377 13.748 5.03478C13.8111 5.02579 13.8718 5.00431 13.9266 4.97158L16.2103 3.60096L21.151 6.07127L20.1947 8.4619C20.1681 8.52095 20.1538 8.58476 20.1525 8.6495C20.1512 8.71425 20.1631 8.77858 20.1873 8.83862C20.2116 8.89867 20.2477 8.95319 20.2936 8.99891C20.3394 9.04462 20.3941 9.08059 20.4542 9.10464C20.5143 9.12869 20.5787 9.14032 20.6434 9.13885C20.7082 9.13737 20.7719 9.12281 20.8309 9.09605C20.8898 9.06928 20.9428 9.03086 20.9865 8.98311C21.0302 8.93535 21.0639 8.87924 21.0853 8.81815L22.0116 6.50252L22.9107 6.95158L21.3328 10.8966L18.9553 9.94502C18.8812 9.91535 18.8008 9.90465 18.7215 9.91387C18.6422 9.9231 18.5664 9.95196 18.5011 9.99786C18.4357 10.0437 18.3829 10.1052 18.3473 10.1767C18.3117 10.2482 18.2945 10.3274 18.2972 10.4072L18.6366 20.16H6.72003C6.65642 20.1591 6.59327 20.1709 6.53425 20.1946C6.47522 20.2183 6.4215 20.2535 6.3762 20.2982C6.33091 20.3428 6.29494 20.3961 6.27039 20.4547C6.24584 20.5134 6.23319 20.5764 6.23319 20.64C6.23319 20.7036 6.24584 20.7666 6.27039 20.8253C6.29494 20.884 6.33091 20.9372 6.3762 20.9819C6.4215 21.0265 6.47522 21.0617 6.53425 21.0855C6.59327 21.1092 6.65642 21.1209 6.72003 21.12H18.6694L18.7032 22.08H5.29691L5.70284 10.4072C5.70559 10.3274 5.68838 10.2482 5.65278 10.1767C5.61718 10.1052 5.56432 10.0437 5.49897 9.99786C5.43362 9.95196 5.35786 9.9231 5.27854 9.91387C5.19922 9.90465 5.11885 9.91535 5.04472 9.94502L2.66722 10.8966L1.0894 6.95158L1.98847 6.50252L2.91472 8.81815C2.9362 8.87924 2.96981 8.93535 3.01354 8.98311C3.05727 9.03086 3.11021 9.06928 3.16918 9.09605C3.22814 9.12281 3.29191 9.13737 3.35665 9.13884C3.42138 9.14032 3.48575 9.12868 3.54587 9.10463C3.606 9.08058 3.66063 9.04462 3.70649 8.9989C3.75236 8.95319 3.78849 8.89867 3.81273 8.83862C3.83697 8.77858 3.84882 8.71425 3.84754 8.6495C3.84627 8.58476 3.83192 8.52095 3.80534 8.4619L2.84909 6.07221L7.79065 3.6019L10.0735 4.97158C10.128 5.00428 10.1885 5.0258 10.2514 5.03492C10.3144 5.04403 10.3785 5.04055 10.4401 5.02468C10.5017 5.0088 10.5595 4.98085 10.6102 4.94245C10.6608 4.90404 10.7034 4.85595 10.7353 4.80096L12.0075 2.6044ZM12 4.80002C11.8727 4.80002 11.7506 4.85059 11.6606 4.94061C11.5706 5.03063 11.52 5.15272 11.52 5.28002C11.52 5.40733 11.5706 5.52942 11.6606 5.61943C11.7506 5.70945 11.8727 5.76002 12 5.76002C12.1273 5.76002 12.2494 5.70945 12.3394 5.61943C12.4295 5.52942 12.48 5.40733 12.48 5.28002C12.48 5.15272 12.4295 5.03063 12.3394 4.94061C12.2494 4.85059 12.1273 4.80002 12 4.80002ZM12 6.72002C11.8727 6.72002 11.7506 6.77059 11.6606 6.86061C11.5706 6.95063 11.52 7.07272 11.52 7.20002C11.52 7.32733 11.5706 7.44942 11.6606 7.53943C11.7506 7.62945 11.8727 7.68002 12 7.68002C12.1273 7.68002 12.2494 7.62945 12.3394 7.53943C12.4295 7.44942 12.48 7.32733 12.48 7.20002C12.48 7.07272 12.4295 6.95063 12.3394 6.86061C12.2494 6.77059 12.1273 6.72002 12 6.72002Z"
        fill="currentColor"
        fillOpacity="0.2"
      />
    </svg>
  );
};
