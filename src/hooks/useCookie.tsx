import { useState, useEffect, useCallback } from "react";

const COOKIE_CHANGE_EVENT = "cookieChange";

export const useCookie = (cookieName: string) => {
  const [cookieValue, setCookieValue] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCookie = useCallback(() => {
    if (typeof window === "undefined") {
      return null;
    }
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }, [cookieName]);

  const setCookie = useCallback(
    (value: string, days: number) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();
      document.cookie =
        cookieName + "=" + value + expires + "; path=/; SameSite=Strict";
      setCookieValue(value);

      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent(COOKIE_CHANGE_EVENT, {
            detail: { cookieName, newValue: value },
          }),
        );
      }
    },
    [cookieName],
  );

  useEffect(() => {
    setCookieValue(getCookie());
    setIsLoading(false);
  }, [getCookie]);

  useEffect(() => {
    const handleCookieChange = (event: CustomEvent) => {
      if (event.detail.cookieName === cookieName) {
        setCookieValue(event.detail.newValue);
      }
    };

    window.addEventListener(
      COOKIE_CHANGE_EVENT,
      handleCookieChange as EventListener,
    );

    return () => {
      window.removeEventListener(
        COOKIE_CHANGE_EVENT,
        handleCookieChange as EventListener,
      );
    };
  }, [cookieName]);

  return { cookieValue, setCookie, isLoading };
};
