import cn from "classnames";
import { type ReactNode, type ComponentPropsWithoutRef } from "react";
import { sanitizeString } from "@/lib/sanitizeString";
import { Check } from "@/icons";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

type PriceCardProps = Omit<ComponentPropsWithoutRef<"article">, "children"> & {
  price: string;
  title: string;
  facts: string[];
  icon?: ReactNode;
};

export const PriceCard = ({
  price,
  title,
  facts,
  icon,
  className,
  ...props
}: PriceCardProps) => (
  <article
    className={cn(
      "flex w-full max-w-96 flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-md",
      className,
    )}
    {...props}
  >
    {icon && (
      <span className="mb-5 flex size-14 items-center justify-center rounded-xl bg-primary-100 text-primary-500">
        <span className="size-8">{icon}</span>
      </span>
    )}
    <Headline
      tag={HeadlineTag.H3}
      variant={HeadlineVariant.QUINARY}
      className="mb-2 font-normal text-primary-700"
    >
      {title}
    </Headline>
    <Headline
      tag={HeadlineTag.P}
      variant={HeadlineVariant.PRIMARY}
      className="mb-2"
    >
      {price}
    </Headline>
    {/* TODO: translate */}
    <span className="text-gray-500">pro Jahr</span>
    <ul className="mt-8 flex w-full flex-col gap-4">
      {facts.map((fact) => (
        <li
          key={sanitizeString(fact)}
          className="flex items-center gap-3 font-light text-gray-500"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-primary-100">
            <Check className="w-3 text-primary-500" />
          </span>
          <span>{fact}</span>
        </li>
      ))}
    </ul>
  </article>
);
