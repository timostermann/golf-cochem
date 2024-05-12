import cn from "classnames";
import Link, { type LinkProps } from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "@/icons";

export const ArrowLink = ({
  children,
  className,
  ...props
}: LinkProps & ComponentPropsWithoutRef<"a">) => (
  <Link
    className={cn(
      "group flex w-fit items-center gap-2 text-base font-semibold text-primary-700",
      className,
    )}
    {...props}
  >
    {children}
    <ArrowRight className="size-5 pt-px transition-transform ease-in-out group-hover:translate-x-1" />
  </Link>
);
