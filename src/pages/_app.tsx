import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { headerData } from "@/data/header.data";
import { footerData } from "@/data/footer.data";
import { useDictionary } from "@/hooks/useDictionary";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const dictionary = useDictionary();

  return (
    <NextIntlClientProvider locale={router.locale} messages={dictionary}>
      <Header {...headerData} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer {...footerData} />
    </NextIntlClientProvider>
  );
};

export default App;
