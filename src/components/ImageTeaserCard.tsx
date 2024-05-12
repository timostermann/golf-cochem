import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { type ComponentPropsWithoutRef } from "react";

type ImageTeaserCardProps = ComponentPropsWithoutRef<"article"> & {
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

export const ImageTeaserCard = ({
  category,
  title,
  summary,
  image,
  author,
  authorImage,
  date,
  href,
  className,
  ...props
}: ImageTeaserCardProps) => {
  const router = useRouter();

  return (
    <article
      className={cn(
        "flex w-full flex-col gap-2 rounded-3xl border border-gray-200 pb-6",
        className,
      )}
      {...props}
    >
      <h2 className="px-6 text-2xl font-bold text-gray-900">{title}</h2>
      {image?.src && image.width && image.height && (
        <Image
          src={image.src}
          alt={image.alt || ""}
          width={image.width}
          height={image.height}
          className="-order-2 h-60 w-full rounded-t-3xl object-cover"
        />
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
    </article>
  );
};

ImageTeaserCard.displayName = "ImageTeaserCard";
