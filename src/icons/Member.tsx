import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Member = ({ title, ...props }: SVGIconProps) => {
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
        d="M6.72002 1.91998C6.64802 1.91994 6.57692 1.9361 6.51201 1.96726C6.4471 1.99841 6.39002 2.04378 6.34502 2.09998L0.623457 9.25217C0.54111 9.33337 0.490841 9.44156 0.481894 9.55686C0.481562 9.55936 0.481249 9.56186 0.480957 9.56436V9.56717C0.480942 9.56936 0.480942 9.57155 0.480957 9.57373C0.480405 9.58247 0.480092 9.59123 0.480019 9.59998C0.479968 9.60405 0.479968 9.60811 0.480019 9.61217V21.6C0.480032 21.7273 0.530607 21.8494 0.620622 21.9394C0.710637 22.0294 0.832719 22.08 0.960019 22.08H7.11939C7.17123 22.0886 7.22412 22.0886 7.27596 22.08H16.7194C16.7712 22.0886 16.8241 22.0886 16.876 22.08H23.04C23.1673 22.08 23.2894 22.0294 23.3794 21.9394C23.4694 21.8494 23.52 21.7273 23.52 21.6V9.59998C23.52 9.59842 23.52 9.59686 23.52 9.5953C23.5199 9.58748 23.5196 9.57966 23.5191 9.57186C23.5185 9.56089 23.5176 9.54995 23.5163 9.53905V9.53811V9.53717C23.5033 9.42817 23.4533 9.32692 23.3747 9.2503L17.655 2.09998C17.61 2.04378 17.5529 1.99841 17.488 1.96726C17.4231 1.9361 17.352 1.91994 17.28 1.91998H6.72002ZM6.95064 2.87998H17.0494L22.0406 9.11998H16.5188L12.3394 4.94061C12.2494 4.85062 12.1273 4.80008 12 4.80008C11.8727 4.80008 11.7507 4.85062 11.6606 4.94061L7.48127 9.11998H1.95939L6.95064 2.87998ZM12 5.95873L15.9806 9.93936C16.0707 10.0294 16.1927 10.08 16.32 10.08H22.56V21.12H17.28V11.52C17.28 11.3927 17.2294 11.2706 17.1394 11.1806C17.0494 11.0906 16.9273 11.04 16.8 11.04H15.84C15.7764 11.0391 15.7133 11.0508 15.6542 11.0746C15.5952 11.0983 15.5415 11.1335 15.4962 11.1781C15.4509 11.2228 15.4149 11.276 15.3904 11.3347C15.3658 11.3934 15.3532 11.4564 15.3532 11.52C15.3532 11.5836 15.3658 11.6466 15.3904 11.7053C15.4149 11.7639 15.4509 11.8172 15.4962 11.8618C15.5415 11.9065 15.5952 11.9417 15.6542 11.9654C15.7133 11.9891 15.7764 12.0009 15.84 12H16.32V21.12H14.4V17.28C14.4 15.9602 13.3198 14.88 12 14.88C10.6803 14.88 9.60002 15.9602 9.60002 17.28V21.12H7.68002V12H8.16002C8.22362 12.0009 8.28678 11.9891 8.3458 11.9654C8.40482 11.9417 8.45855 11.9065 8.50384 11.8618C8.54914 11.8172 8.58511 11.7639 8.60966 11.7053C8.63421 11.6466 8.64686 11.5836 8.64686 11.52C8.64686 11.4564 8.63421 11.3934 8.60966 11.3347C8.58511 11.276 8.54914 11.2228 8.50384 11.1781C8.45855 11.1335 8.40482 11.0983 8.3458 11.0746C8.28678 11.0508 8.22362 11.0391 8.16002 11.04H7.20002C7.07272 11.04 6.95064 11.0906 6.86062 11.1806C6.77061 11.2706 6.72003 11.3927 6.72002 11.52V21.12H1.44002V10.08H7.68002C7.80731 10.08 7.92939 10.0294 8.01939 9.93936L12 5.95873ZM12 9.59998C10.9453 9.59998 10.08 10.4653 10.08 11.52C10.08 12.5747 10.9453 13.44 12 13.44C13.0547 13.44 13.92 12.5747 13.92 11.52C13.92 10.4653 13.0547 9.59998 12 9.59998ZM12 10.56C12.5359 10.56 12.96 10.9841 12.96 11.52C12.96 12.0559 12.5359 12.48 12 12.48C11.4641 12.48 11.04 12.0559 11.04 11.52C11.04 10.9841 11.4641 10.56 12 10.56ZM2.88002 11.52C2.75272 11.52 2.63064 11.5706 2.54062 11.6606C2.45061 11.7506 2.40003 11.8727 2.40002 12V14.4C2.40003 14.5273 2.45061 14.6494 2.54062 14.7394C2.63064 14.8294 2.75272 14.88 2.88002 14.88H5.28002C5.40732 14.88 5.5294 14.8294 5.61942 14.7394C5.70943 14.6494 5.76001 14.5273 5.76002 14.4V12C5.76001 11.8727 5.70943 11.7506 5.61942 11.6606C5.5294 11.5706 5.40732 11.52 5.28002 11.52H2.88002ZM18.72 11.52C18.5927 11.52 18.4706 11.5706 18.3806 11.6606C18.2906 11.7506 18.24 11.8727 18.24 12V14.4C18.24 14.5273 18.2906 14.6494 18.3806 14.7394C18.4706 14.8294 18.5927 14.88 18.72 14.88H21.12C21.2473 14.88 21.3694 14.8294 21.4594 14.7394C21.5494 14.6494 21.6 14.5273 21.6 14.4V12C21.6 11.8727 21.5494 11.7506 21.4594 11.6606C21.3694 11.5706 21.2473 11.52 21.12 11.52H18.72ZM3.36002 12.48H4.80002V13.92H3.36002V12.48ZM19.2 12.48H20.64V13.92H19.2V12.48ZM12 15.84C12.8009 15.84 13.44 16.4791 13.44 17.28V21.12H10.56V17.28C10.56 16.4791 11.1991 15.84 12 15.84ZM2.88002 16.32C2.75272 16.32 2.63064 16.3706 2.54062 16.4606C2.45061 16.5506 2.40003 16.6727 2.40002 16.8V19.2C2.40003 19.3273 2.45061 19.4494 2.54062 19.5394C2.63064 19.6294 2.75272 19.68 2.88002 19.68H5.28002C5.40732 19.68 5.5294 19.6294 5.61942 19.5394C5.70943 19.4494 5.76001 19.3273 5.76002 19.2V16.8C5.76001 16.6727 5.70943 16.5506 5.61942 16.4606C5.5294 16.3706 5.40732 16.32 5.28002 16.32H2.88002ZM18.72 16.32C18.5927 16.32 18.4706 16.3706 18.3806 16.4606C18.2906 16.5506 18.24 16.6727 18.24 16.8V19.2C18.24 19.3273 18.2906 19.4494 18.3806 19.5394C18.4706 19.6294 18.5927 19.68 18.72 19.68H21.12C21.2473 19.68 21.3694 19.6294 21.4594 19.5394C21.5494 19.4494 21.6 19.3273 21.6 19.2V16.8C21.6 16.6727 21.5494 16.5506 21.4594 16.4606C21.3694 16.3706 21.2473 16.32 21.12 16.32H18.72ZM3.36002 17.28H4.80002V18.72H3.36002V17.28ZM19.2 17.28H20.64V18.72H19.2V17.28Z"
        fill="currentColor"
      />
      <path
        d="M6.72002 1.91998C6.64802 1.91994 6.57692 1.9361 6.51201 1.96726C6.4471 1.99841 6.39002 2.04378 6.34502 2.09998L0.623457 9.25217C0.54111 9.33337 0.490841 9.44156 0.481894 9.55686C0.481562 9.55936 0.481249 9.56186 0.480957 9.56436V9.56717C0.480942 9.56936 0.480942 9.57155 0.480957 9.57373C0.480405 9.58247 0.480092 9.59123 0.480019 9.59998C0.479968 9.60405 0.479968 9.60811 0.480019 9.61217V21.6C0.480032 21.7273 0.530607 21.8494 0.620622 21.9394C0.710637 22.0294 0.832719 22.08 0.960019 22.08H7.11939C7.17123 22.0886 7.22412 22.0886 7.27596 22.08H16.7194C16.7712 22.0886 16.8241 22.0886 16.876 22.08H23.04C23.1673 22.08 23.2894 22.0294 23.3794 21.9394C23.4694 21.8494 23.52 21.7273 23.52 21.6V9.59998C23.52 9.59842 23.52 9.59686 23.52 9.5953C23.5199 9.58748 23.5196 9.57966 23.5191 9.57186C23.5185 9.56089 23.5176 9.54995 23.5163 9.53905V9.53811V9.53717C23.5033 9.42817 23.4533 9.32692 23.3747 9.2503L17.655 2.09998C17.61 2.04378 17.5529 1.99841 17.488 1.96726C17.4231 1.9361 17.352 1.91994 17.28 1.91998H6.72002ZM6.95064 2.87998H17.0494L22.0406 9.11998H16.5188L12.3394 4.94061C12.2494 4.85062 12.1273 4.80008 12 4.80008C11.8727 4.80008 11.7507 4.85062 11.6606 4.94061L7.48127 9.11998H1.95939L6.95064 2.87998ZM12 5.95873L15.9806 9.93936C16.0707 10.0294 16.1927 10.08 16.32 10.08H22.56V21.12H17.28V11.52C17.28 11.3927 17.2294 11.2706 17.1394 11.1806C17.0494 11.0906 16.9273 11.04 16.8 11.04H15.84C15.7764 11.0391 15.7133 11.0508 15.6542 11.0746C15.5952 11.0983 15.5415 11.1335 15.4962 11.1781C15.4509 11.2228 15.4149 11.276 15.3904 11.3347C15.3658 11.3934 15.3532 11.4564 15.3532 11.52C15.3532 11.5836 15.3658 11.6466 15.3904 11.7053C15.4149 11.7639 15.4509 11.8172 15.4962 11.8618C15.5415 11.9065 15.5952 11.9417 15.6542 11.9654C15.7133 11.9891 15.7764 12.0009 15.84 12H16.32V21.12H14.4V17.28C14.4 15.9602 13.3198 14.88 12 14.88C10.6803 14.88 9.60002 15.9602 9.60002 17.28V21.12H7.68002V12H8.16002C8.22362 12.0009 8.28678 11.9891 8.3458 11.9654C8.40482 11.9417 8.45855 11.9065 8.50384 11.8618C8.54914 11.8172 8.58511 11.7639 8.60966 11.7053C8.63421 11.6466 8.64686 11.5836 8.64686 11.52C8.64686 11.4564 8.63421 11.3934 8.60966 11.3347C8.58511 11.276 8.54914 11.2228 8.50384 11.1781C8.45855 11.1335 8.40482 11.0983 8.3458 11.0746C8.28678 11.0508 8.22362 11.0391 8.16002 11.04H7.20002C7.07272 11.04 6.95064 11.0906 6.86062 11.1806C6.77061 11.2706 6.72003 11.3927 6.72002 11.52V21.12H1.44002V10.08H7.68002C7.80731 10.08 7.92939 10.0294 8.01939 9.93936L12 5.95873ZM12 9.59998C10.9453 9.59998 10.08 10.4653 10.08 11.52C10.08 12.5747 10.9453 13.44 12 13.44C13.0547 13.44 13.92 12.5747 13.92 11.52C13.92 10.4653 13.0547 9.59998 12 9.59998ZM12 10.56C12.5359 10.56 12.96 10.9841 12.96 11.52C12.96 12.0559 12.5359 12.48 12 12.48C11.4641 12.48 11.04 12.0559 11.04 11.52C11.04 10.9841 11.4641 10.56 12 10.56ZM2.88002 11.52C2.75272 11.52 2.63064 11.5706 2.54062 11.6606C2.45061 11.7506 2.40003 11.8727 2.40002 12V14.4C2.40003 14.5273 2.45061 14.6494 2.54062 14.7394C2.63064 14.8294 2.75272 14.88 2.88002 14.88H5.28002C5.40732 14.88 5.5294 14.8294 5.61942 14.7394C5.70943 14.6494 5.76001 14.5273 5.76002 14.4V12C5.76001 11.8727 5.70943 11.7506 5.61942 11.6606C5.5294 11.5706 5.40732 11.52 5.28002 11.52H2.88002ZM18.72 11.52C18.5927 11.52 18.4706 11.5706 18.3806 11.6606C18.2906 11.7506 18.24 11.8727 18.24 12V14.4C18.24 14.5273 18.2906 14.6494 18.3806 14.7394C18.4706 14.8294 18.5927 14.88 18.72 14.88H21.12C21.2473 14.88 21.3694 14.8294 21.4594 14.7394C21.5494 14.6494 21.6 14.5273 21.6 14.4V12C21.6 11.8727 21.5494 11.7506 21.4594 11.6606C21.3694 11.5706 21.2473 11.52 21.12 11.52H18.72ZM3.36002 12.48H4.80002V13.92H3.36002V12.48ZM19.2 12.48H20.64V13.92H19.2V12.48ZM12 15.84C12.8009 15.84 13.44 16.4791 13.44 17.28V21.12H10.56V17.28C10.56 16.4791 11.1991 15.84 12 15.84ZM2.88002 16.32C2.75272 16.32 2.63064 16.3706 2.54062 16.4606C2.45061 16.5506 2.40003 16.6727 2.40002 16.8V19.2C2.40003 19.3273 2.45061 19.4494 2.54062 19.5394C2.63064 19.6294 2.75272 19.68 2.88002 19.68H5.28002C5.40732 19.68 5.5294 19.6294 5.61942 19.5394C5.70943 19.4494 5.76001 19.3273 5.76002 19.2V16.8C5.76001 16.6727 5.70943 16.5506 5.61942 16.4606C5.5294 16.3706 5.40732 16.32 5.28002 16.32H2.88002ZM18.72 16.32C18.5927 16.32 18.4706 16.3706 18.3806 16.4606C18.2906 16.5506 18.24 16.6727 18.24 16.8V19.2C18.24 19.3273 18.2906 19.4494 18.3806 19.5394C18.4706 19.6294 18.5927 19.68 18.72 19.68H21.12C21.2473 19.68 21.3694 19.6294 21.4594 19.5394C21.5494 19.4494 21.6 19.3273 21.6 19.2V16.8C21.6 16.6727 21.5494 16.5506 21.4594 16.4606C21.3694 16.3706 21.2473 16.32 21.12 16.32H18.72ZM3.36002 17.28H4.80002V18.72H3.36002V17.28ZM19.2 17.28H20.64V18.72H19.2V17.28Z"
        fill="currentColor"
        fill-opacity="0.2"
      />
    </svg>
  );
};
