import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ComponentPropsWithoutRef } from "react";
import { useSanitizedId } from "@/lib/sanitizeString";
import { type Author } from "@/lib/dto/author.type";
import { type Category } from "@/lib/dto/category.type";
import { type StrapiImage } from "@/lib/dto/strapiimage.type";
import { Golf } from "@/icons";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

export type TeaserContent = {
  category?: Category;
  title: string;
  teaser: string;
  titleImage?: Partial<StrapiImage>;
  author?: Author;
  date?: string;
  href?: string;
};

type ImageTeaserCardProps = ComponentPropsWithoutRef<"article"> & TeaserContent;

export const ImageTeaserCard = ({
  category,
  title,
  teaser,
  titleImage,
  author,
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
      {titleImage?.url && titleImage.width && titleImage.height && (
        <div className="-order-2 h-60 overflow-hidden rounded-t-3xl">
          <Image
            src={titleImage.url}
            alt={titleImage.alternativeText || ""}
            width={titleImage.width}
            height={titleImage.height}
            className="h-full w-full rounded-t-3xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      )}
      {category && (
        <p className="-order-1 px-6 pt-6 text-xs font-medium text-primary-500">
          {category.name}
        </p>
      )}
      <p className="mt-2 px-6 text-base font-light text-gray-500">{teaser}</p>
      {author && (
        <div className="flex grow items-end">
          <div className="mt-4 flex items-center gap-3 px-6">
            {author.picture?.url &&
            author.picture.width &&
            author.picture.height ? (
              <Image
                src={author.picture.url}
                alt={author.picture.alternativeText || ""}
                width={author.picture.width}
                height={author.picture.height}
                className="size-9 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-9 items-center justify-center rounded-full bg-gray-200">
                <Golf className="size-6 text-primary-800" />
              </div>
            )}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-medium text-gray-900">{author.name}</p>
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
