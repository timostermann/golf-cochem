import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

export const Markdown = ({ content }: { content?: string }) => (
  <ReactMarkdown
    components={{
      h1: () => (
        <>
          Bitte nutze keine h1 im News-Content, da die Überschrift bereits als
          h1 genutzt wird
        </>
      ),
      h2: ({ children }) => (
        <Headline
          tag={HeadlineTag.H2}
          variant={HeadlineVariant.TERTIARY}
          className="mb-6 mt-12"
        >
          {children}
        </Headline>
      ),
      h3: ({ children }) => (
        <Headline
          tag={HeadlineTag.H3}
          variant={HeadlineVariant.QUATERNARY}
          className="mb-4 mt-8"
        >
          {children}
        </Headline>
      ),
      h4: ({ children }) => (
        <Headline
          tag={HeadlineTag.H4}
          variant={HeadlineVariant.QUINARY}
          className="mb-2 mt-6"
        >
          {children}
        </Headline>
      ),
      h5: ({ children }) => (
        <Headline
          tag={HeadlineTag.H5}
          variant={HeadlineVariant.QUINARY}
          className="mb-2 mt-6"
        >
          {children}
        </Headline>
      ),
      h6: ({ children }) => (
        <Headline
          tag={HeadlineTag.H6}
          variant={HeadlineVariant.QUINARY}
          className="mb-2 mt-6"
        >
          {children}
        </Headline>
      ),
      code: ({ children }) => (
        <div className="my-6 w-full rounded-md bg-gray-100 p-4">
          <code>{children}</code>
        </div>
      ),
      img: ({ src, alt }) =>
        src &&
        alt && (
          <span className="relative mb-12 mt-4 block h-[400px] w-full">
            <Image src={src} alt={alt} layout="fill" objectFit="cover" />
          </span>
        ),
      ul: ({ children }) => (
        <ul className="mb-4 list-inside list-disc p-8">{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className="mb-4 list-inside list-decimal p-8">{children}</ol>
      ),
    }}
  >
    {content}
  </ReactMarkdown>
);
