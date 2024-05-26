import { type ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { useSanitizedId } from "@/lib/sanitizeString";
import { Container } from "./Container";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

type ImageStageProps = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  children: ReactNode;
  imageClassName?: string;
};

export const ImageStage = ({
  src,
  alt,
  title,
  children,
  imageClassName,
}: ImageStageProps) => {
  const id = useSanitizedId();

  return (
    <Container
      innerClassName="flex max-lg:flex-col gap-12 lg:gap-0 xl:gap-8 lg:items-center"
      aria-labelledby={id}
    >
      <div className="flex flex-col lg:basis-1/2">
        <Headline
          tag={HeadlineTag.H1}
          variant={HeadlineVariant.HERO}
          id={id}
          className="mb-8"
        >
          {title}
        </Headline>
        {children}
      </div>
      <div className="relative overflow-hidden max-lg:max-h-96 lg:basis-1/2">
        <Image src={src} alt={alt} className={imageClassName} loading="eager" />
        <span className="absolute top-0 h-full w-2/5 -translate-x-1/2 -skew-x-12 bg-white max-lg:hidden" />
      </div>
    </Container>
  );
};

ImageStage.displayName = "ImageStage";
