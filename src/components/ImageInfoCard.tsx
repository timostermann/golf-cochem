import cn from "classnames";
import Image from "next/image";
import { type ComponentPropsWithoutRef } from "react";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";
import { ArrowLink } from "./ArrowLink";

type ImageInfoCardProps = ComponentPropsWithoutRef<"article"> & {
  title: string;
  summary: string;
  image?: Partial<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  href?: string;
  linkText?: string;
  facts?: [string, string];
};

export const ImageInfoCard = ({
  title,
  summary,
  image,
  href = "",
  linkText,
  facts,
  className,
  ...props
}: ImageInfoCardProps) => {
  return (
    <article
      className={cn(
        "group relative flex w-full max-w-[480px] flex-col gap-2 rounded-3xl border bg-white pb-6 shadow-md shadow-gray-200",
        className,
      )}
      {...props}
    >
      <Headline
        tag={HeadlineTag.H3}
        variant={HeadlineVariant.QUINARY}
        className="mt-6 px-6"
      >
        {title}
      </Headline>
      {image?.src && image.width && image.height && (
        <div className="-order-2 h-60 overflow-hidden rounded-t-3xl">
          <Image
            src={image.src}
            alt={image.alt || ""}
            width={image.width}
            height={image.height}
            className="h-full w-full rounded-t-3xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      )}
      <p className="mb-6 px-6 text-base font-light text-gray-500">{summary}</p>
      <ArrowLink href={href} className="px-6 before:absolute before:inset-0">
        {linkText}
      </ArrowLink>
      {facts && (
        <ul className="mt-4 flex gap-2 px-6 text-sm">
          <li className="rounded-xl bg-primary-100 px-3 py-1 text-primary-600">
            {facts[0]}
          </li>
          <li className="rounded-xl bg-gray-100 px-3 py-1 text-gray-600">
            {facts[1]}
          </li>
        </ul>
      )}
    </article>
  );
};

ImageInfoCard.displayName = "ImageInfoCard";
