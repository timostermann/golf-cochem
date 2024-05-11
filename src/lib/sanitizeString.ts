import latinize from "latinize";
import { useId } from "react";

const latinMap = {
  ...latinize.characters,
  Ä: "Ae",
  Ö: "Oe",
  Ü: "Ue",
  ä: "ae",
  ö: "oe",
  ü: "ue",
};

const replaceUmlaute = (str: string): string => {
  return latinize(str, latinMap);
};

// Replace all special characters and empty spaces in a string with hyphens
export const sanitizeString = (str: string | undefined): string => {
  if (!str) return "";
  const stringNoUmlaute = replaceUmlaute(str);
  let cleanString = stringNoUmlaute.replace(
    /([~!@#$%^&*()_+=`{}[\]\\:;'<>,./? ])+/g,
    "-",
  );

  // Remove leading and trailing hyphens
  cleanString = cleanString.replace(/^-+|-+$/g, "");

  return cleanString.toLocaleLowerCase();
};

export const useSanitizedId = () => sanitizeString(useId());
