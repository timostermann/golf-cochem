import cn from "classnames";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { useSanitizedId } from "@/lib/sanitizeString";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

type BorderTeaserCardProps = ComponentPropsWithoutRef<"article"> & {
  title: string;
  summary: string;
  href?: string;
  linkLabel?: string;
};

export const BorderTeaserCard = ({
  title,
  summary,
  href = "",
  linkLabel,
  className,
  ...props
}: BorderTeaserCardProps) => {
  const id = useSanitizedId();

  return (
    <article
      className={cn(
        "group relative flex w-full flex-col gap-1.5 border-l-4 border-l-gray-100 bg-white px-6 py-4 transition-colors duration-300 hover:border-l-primary-500 hover:bg-primary-50",
        className,
      )}
      {...props}
    >
      <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.QUINARY} id={id}>
        {title}
      </Headline>
      <p className="mb-2.5 text-gray-500">{summary}</p>
      <Link
        href={href}
        aria-labelledby={id}
        className="w-fit after:absolute after:inset-0 after:content-['']"
      >
        {linkLabel}
      </Link>
    </article>
  );
};

BorderTeaserCard.displayName = "BorderTeaserCard";
