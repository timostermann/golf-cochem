import { useState, useEffect, useCallback } from "react";

export const useCookie = (cookieName: string) => {
  const [cookieValue, setCookieValue] = useState<string | null>(null);

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

  const setCookie = (value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie =
      cookieName + "=" + value + expires + "; path=/; SameSite=Strict";
    setCookieValue(value);
  };

  useEffect(() => {
    const initialValue = getCookie();
    setCookieValue(initialValue);
  }, [getCookie]);

  return { cookieValue, setCookie };
};
