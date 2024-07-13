import { type ReactNode, type ComponentPropsWithoutRef } from "react";

import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

type FeatureColumnProps = Omit<
  ComponentPropsWithoutRef<"article">,
  "children"
> & {
  title: string;
  text: string;
  icon: ReactNode;
};

export const FeatureColumn = ({
  title,
  icon,
  text,
  className,
  ...props
}: FeatureColumnProps) => {
  return (
    <div className="flex flex-col items-center text-center" {...props}>
      <span className="-order-1  mb-5 flex size-14 items-center justify-center rounded-xl border bg-white text-primary-500">
        <span className="size-8">{icon}</span>
      </span>
      <Headline
        tag={HeadlineTag.H3}
        variant={HeadlineVariant.QUINARY}
        id={title}
      >
        {title}
      </Headline>
      <p className="mt-2 text-pretty text-gray-500">{text}</p>
    </div>
  );
};

FeatureColumn.displayName = "FeatureColumn";
