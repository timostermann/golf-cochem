import { type ComponentPropsWithoutRef } from "react";
import cn from "classnames";

export enum HeadlineTag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export enum HeadlineVariant {
  HERO = "hero",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  QUATERNARY = "quaternary",
  QUINARY = "quinary",
}

export type HeadlineProps = ComponentPropsWithoutRef<"h1"> & {
  tag?: HeadlineTag;
  variant?: HeadlineVariant;
};

export const Headline = ({
  tag: Tag = HeadlineTag.H1,
  variant = HeadlineVariant.SECONDARY,
  children,
  className,
  ...props
}: HeadlineProps) => {
  return (
    <Tag
      className={cn(
        "cursor-text",
        {
          "text-4xl font-bold lg:text-5xl xl:text-6xl":
            variant === HeadlineVariant.HERO,
          "text-4xl font-bold lg:text-5xl": variant === HeadlineVariant.PRIMARY,
          "text-3xl font-semibold lg:text-4xl":
            variant === HeadlineVariant.SECONDARY,
          "text-2xl font-semibold lg:text-3xl":
            variant === HeadlineVariant.TERTIARY,
          "text-xl font-semibold lg:text-2xl":
            variant === HeadlineVariant.QUATERNARY,
          "text-lg font-medium lg:text-xl": variant === HeadlineVariant.QUINARY,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

Headline.displayName = "Headline";
