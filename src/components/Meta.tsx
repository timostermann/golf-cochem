import Head from "next/head";
import { useRouter } from "next/router";
import { type ReactNode } from "react";
import { domain } from "@/lib/constants";

type MetaProps = {
  title: string;
  description: string;
  children?: ReactNode;
  robots?: string;
};

export const Meta = ({ title, description, children, robots }: MetaProps) => {
  const router = useRouter();
  const canonicalUrl = `${domain}${router?.asPath ?? ""}`;

  return (
    <Head>
      <title>{`${title} | Golf Cochem`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Golf Cochem" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/x-icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="logo.png" />

      {robots && <meta name="robots" content={robots} />}

      {/* Begin Opengraph */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" name="og:type" content="website" />
      <meta
        property="og:title"
        name="og:title"
        content={`${title} | Golf Cochem`}
      />
      <meta
        property="og:description"
        name="og:description"
        content={description}
      />
      <meta
        property="og:image"
        name="og:image"
        content="/images/landscape.png"
      />
      {/* End Opengraph */}

      {/* Begin Twitter */}
      <meta
        name="twitter:card"
        property="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        property="twitter:title"
        content={`${title} | Golf Cochem`}
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        property="twitter:image"
        content="/images/landscape.png"
      />
      {/* End Twitter */}

      {children}
    </Head>
  );
};

Meta.displayName = "Meta";
