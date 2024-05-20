import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ComponentPropsWithoutRef } from "react";
import { useSanitizedId } from "@/lib/sanitizeString";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

export type TeaserContent = {
  category?: string;
  title: string;
  summary: string;
  image?: Partial<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  author?: string;
  authorImage?: Partial<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
  date?: string;
  href?: string;
};

type ImageTeaserCardProps = ComponentPropsWithoutRef<"article"> & TeaserContent;

export const ImageTeaserCard = ({
  category,
  title,
  summary,
  image,
  author,
  authorImage,
  date,
  href = "",
  className,
  ...props
}: ImageTeaserCardProps) => {
  const router = useRouter();
  const id = useSanitizedId();

  return (
    <article
      className={cn(
        "group relative flex w-full max-w-[500px] flex-col gap-2 rounded-3xl border border-gray-200 bg-white pb-6 shadow-md shadow-gray-200 transition-colors duration-300 hover:border-primary-200",
        className,
      )}
      {...props}
    >
      <Headline
        tag={HeadlineTag.H3}
        variant={HeadlineVariant.QUATERNARY}
        className="px-6"
        id={id}
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
      {category && (
        <p className="-order-1 px-6 pt-6 text-xs font-medium text-primary-500">
          {category}
        </p>
      )}
      <p className="mt-2 px-6 text-base font-light text-gray-500">{summary}</p>
      {author && (
        <div className="flex grow items-end">
          <div className="mt-4 flex items-center gap-3 px-6">
            {authorImage?.src && authorImage.width && authorImage.height && (
              <Image
                src={authorImage.src}
                alt={authorImage.alt || ""}
                width={authorImage.width}
                height={authorImage.height}
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-medium text-gray-900">{author}</p>
              {date && (
                <p className="text-sm font-light text-gray-500">
                  {new Date(date).toLocaleDateString(router.locale, {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      <Link href={href} aria-labelledby={id} className="absolute inset-0" />
    </article>
  );
};

ImageTeaserCard.displayName = "ImageTeaserCard";
