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
          "relative flex aspect-video flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-gray-200 px-6 text-center",
          className,
        )}
      >
        <p className="max-w-96">
          Um dieses Video anzusehen, müssen Sie die Verwendung von
          YouTube-Cookies akzeptieren.
        </p>
        <Link href="/datenschutz" className="text-primary-600 underline">
          Mehr Informationen
        </Link>
        <Button onClick={handleAccept}>
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
