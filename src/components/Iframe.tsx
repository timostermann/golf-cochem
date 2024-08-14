import React from "react";
import cn from "classnames";
import Link from "next/link";
import { useCookie } from "@/hooks/useCookie";
import { Button } from "./Button";

type IframeProps = {
  youtubeId?: string;
  src?: string;
  title?: string;
  className?: string;
};

export const Iframe = ({ youtubeId, src, title, className }: IframeProps) => {
  const { cookieValue, setCookie } = useCookie("youtubeConsentStatus");

  const url = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}`
    : src;

  const handleAccept = () => {
    setCookie("accepted", 365);
  };

  if (cookieValue !== "accepted") {
    return (
      <div
        className={cn(
          "relative flex aspect-video flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-gray-200 px-4 text-center xs:gap-4 xs:px-6",
          className,
        )}
      >
        <p className="max-w-96 max-xs:text-sm">
          Um dieses Video anzusehen, müssen Sie die Verwendung von
          YouTube-Cookies akzeptieren.
        </p>
        <Link
          href="/datenschutz"
          className="text-primary-600 underline max-xs:text-sm"
        >
          Mehr Informationen
        </Link>
        <Button onClick={handleAccept} className="max-xs:px-3 max-xs:text-sm">
          Cookies akzeptieren und Video laden
        </Button>
      </div>
    );
  }

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
