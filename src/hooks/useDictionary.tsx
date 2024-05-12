import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useDictionary = () => {
  const router = useRouter();
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    const fetchDictionary = async () => {
      setDictionary(
        (await import(`../dictionaries/${router.locale}.json`)).default,
      );
    };

    void fetchDictionary();
  }, [router.locale]);

  return dictionary;
};
