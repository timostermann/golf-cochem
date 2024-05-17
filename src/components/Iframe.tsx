import cn from "classnames";

type IframeProps = {
  youtubeId?: string;
  src?: string;
  title?: string;
  className?: string;
};

// TODO: Check cookies
export const Iframe = ({ youtubeId, src, title, className }: IframeProps) => {
  const url = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}`
    : src;

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-lg",
        className,
      )}
    >
      <iframe
        src={url}
        title={`${youtubeId ? "Youtube Video " : ""}${title}`}
        aria-hidden={!title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 size-full"
      />
    </div>
  );
};
