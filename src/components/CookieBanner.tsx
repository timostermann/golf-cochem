import React, {
  useState,
  useEffect,
  useRef,
  type KeyboardEventHandler,
} from "react";
import Link from "next/link";
import { useCookie } from "@/hooks/useCookie";
import { Button, ButtonVariant } from "./Button";
import { Headline, HeadlineTag, HeadlineVariant } from "./Headline";

type CookieBannerProps = {
  onAccept?: () => void;
  onReject?: () => void;
  forceOpen?: boolean;
};

export const CookieBanner = ({
  onAccept,
  onReject,
  forceOpen = false,
}: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { cookieValue, setCookie, isLoading } = useCookie(
    "youtubeConsentStatus",
  );

  const getFocusableElements = () => {
    if (!dialogRef.current) return [];
    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    return Array.from(focusableElements);
  };

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === "Tab") {
      if (!dialogRef.current) return;
      const focusableElements = focusableElementsRef.current;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }

    if (event.key === "Escape") handleReject();
  };

  useEffect(() => {
    if (!isLoading) {
      const consentStatus = cookieValue;
      setIsVisible(!consentStatus);
    }
  }, [cookieValue, isLoading]);

  useEffect(() => {
    if (forceOpen) {
      setIsVisible(true);
    }
  }, [forceOpen]);

  useEffect(() => {
    if (isVisible) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dialogRef.current?.focus();
      focusableElementsRef.current = getFocusableElements();
      document.body.style.overflow = "hidden";
    } else {
      previousFocusRef.current?.focus();
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  const handleAccept = () => {
    setCookie("accepted", 365);
    setIsVisible(false);
    onAccept?.();
  };

  const handleReject = () => {
    setCookie("rejected", 365);
    setIsVisible(false);
    onReject?.();
  };

  if (!isVisible || isLoading) return null;

  return (
    <div className="fixed inset-0 z-40 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 p-2">
      <dialog
        ref={dialogRef}
        open={forceOpen}
        className="relative flex max-w-[600px] flex-col gap-4 rounded-xl p-6 xs:p-12"
        onKeyDown={handleKeyDown}
        aria-live="polite"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <button
          onClick={handleReject}
          className="absolute right-4 top-2 text-[30px] font-extralight leading-none transition-colors hover:text-gray-600 xs:right-5 xs:top-3"
          aria-label="Schließen"
          type="button"
        >
          &times;
        </button>
        <Headline
          variant={HeadlineVariant.TERTIARY}
          tag={HeadlineTag.P}
          id="cookie-banner-title"
        >
          Cookie-Einstellungen
        </Headline>
        <p id="cookie-banner-description">
          Diese Website verwendet Cookies von YouTube, um Ihnen eine bessere
          Benutzererfahrung zu bieten. YouTube kann diese Informationen nutzen,
          um Ihr Nutzererlebnis zu verbessern und personalisierte Werbung
          anzuzeigen.
        </p>
        <Link
          href="/datenschutz"
          onClick={handleReject}
          className="text-primary-600 underline"
        >
          Mehr Informationen
        </Link>
        <div className="mt-4 flex flex-wrap justify-center gap-3 xs:gap-6 sm:justify-end">
          <Button onClick={handleReject} variant={ButtonVariant.TERTIARY}>
            Ablehnen
          </Button>
          <Button onClick={handleAccept}>Akzeptieren</Button>
        </div>
      </dialog>
    </div>
  );
};
