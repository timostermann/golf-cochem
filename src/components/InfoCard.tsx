import cn from "classnames";
import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

type InfoCardProps = ComponentPropsWithoutRef<"article"> & {
  title: string;
  icon: ReactNode;
};

export const InfoCard = ({
  title,
  icon,
  className,
  children,
  ...props
}: InfoCardProps) => (
  <article
    className={cn(
      "flex w-full flex-col rounded-lg bg-primary-100 p-4 text-primary-600 shadow-lg shadow-gray-100 md:p-6",
      className,
    )}
    {...props}
  >
    <Headline
      tag={HeadlineTag.H3}
      variant={HeadlineVariant.QUINARY}
      className="mb-2 font-normal text-primary-800"
    >
      {title}
    </Headline>
    <span className="-order-1 mb-6 flex size-12 items-center justify-center rounded-lg bg-primary-700 text-white md:mb-8">
      <span className="size-6">{icon}</span>
    </span>
    {children}
  </article>
);

InfoCard.displayName = "InfoCard";
