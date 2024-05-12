import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import de from "../dictionaries/de.json";
import en from "../dictionaries/en.json";
import nl from "../dictionaries/nl.json";

const getDictionary = (locale?: string) => {
  if (locale === "en") return en;
  if (locale === "nl") return nl;
  return de;
};

export const useDictionary = () => {
  const router = useRouter();
  const [dictionary, setDictionary] = useState(getDictionary(router.locale));

  useEffect(() => {
    setDictionary(getDictionary(router.locale));
  }, [router.locale]);

  return dictionary;
};
