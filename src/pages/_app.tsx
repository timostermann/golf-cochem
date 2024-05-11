import "../globals.css";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { headerData } from "@/data/header.data";
import { footerData } from "@/data/footer.data";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header {...headerData} />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer {...footerData} />
  </>
);

export default App;
