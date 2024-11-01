import { useSanitizedId } from "@/lib/sanitizeString";
import type { SVGIconProps } from "@/types";

export const Sun = ({ title, ...props }: SVGIconProps) => {
  const id = useSanitizedId();
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!title}
      aria-labelledby={title ? id : undefined}
      {...props}
    >
      {title && <title id={id}>{title}</title>}
      <path d="M215.446696 281.290557a46.532764 46.532764 0 1 0 65.797328-65.890393l-65.145869-65.14587A46.532764 46.532764 0 1 0 150.300827 216.098155l65.145869 65.192402zM512 511.860402m-279.196583 0a279.196583 279.196583 0 1 0 558.393166 0 279.196583 279.196583 0 1 0-558.393166 0ZM186.131055 512a46.532764 46.532764 0 0 0-46.998091-46.532764H46.951559a46.532764 46.532764 0 1 0 0 93.065528H139.132964c25.965282 0 46.998091-20.614014 46.998091-46.532764zM977.048441 465.467236h-92.134872a46.532764 46.532764 0 0 0 0 93.065528h92.134872a46.532764 46.532764 0 1 0 0-93.065528zM215.400164 742.755976l-65.14587 65.145869a46.672362 46.672362 0 0 0-0.325729 66.123057 46.625829 46.625829 0 0 0 66.123057-0.325729l65.14587-65.145869a46.532764 46.532764 0 0 0-65.797328-65.797328zM512 186.131055a46.532764 46.532764 0 0 0 46.532764-46.998091V46.998091a46.532764 46.532764 0 1 0-93.065528 0v92.134873c0 25.965282 20.660547 46.998091 46.532764 46.998091zM512 837.868945a46.532764 46.532764 0 0 0-46.532764 47.044624v92.134872a46.579297 46.579297 0 1 0 93.065528 0v-92.134872c0-26.011815-20.614014-47.044624-46.532764-47.044624zM808.553304 281.290557l65.145869-65.192402a46.532764 46.532764 0 0 0-65.797328-65.797328l-65.145869 65.145869a46.579297 46.579297 0 0 0 65.797328 65.843861zM808.553304 742.755976a46.532764 46.532764 0 1 0-65.797328 65.797328l65.145869 65.145869c18.380442 18.380442 47.789148 18.613106 66.123057 0.325729a46.625829 46.625829 0 0 0-0.325729-66.123057l-65.145869-65.145869z"></path>
    </svg>
  );
};
