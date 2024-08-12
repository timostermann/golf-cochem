import { type GetServerSideProps } from "next";
import { fetchApi } from "@/lib/strapi";

const generateSiteMap = (paths: string[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     ${paths
       .map((path) => {
         return `
       <url>
           <loc>${`https://golfcochem.de/${path}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
};

const SiteMap = (): void => {
  // functionality is located in getServerSideProps
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const path = await import("path");
  const fs = await import("fs");

  const paths: string[] = [];
  const locales = ["de", "en", "nl"];

  const getStaticPages = async (
    dir: string,
    baseUrl: string = "",
  ): Promise<string[]> => {
    const files = fs.readdirSync(dir);
    let paths: string[] = [];

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        paths = paths.concat(
          await getStaticPages(filePath, path.join(baseUrl, file)),
        );
      } else if (
        stat.isFile() &&
        file.endsWith(".tsx") &&
        !["[slug].tsx", "_app.tsx", "_document.tsx", "404.tsx"].includes(file)
      ) {
        const pagePath = path.join(baseUrl, file.replace(".tsx", ""));
        paths.push(pagePath);
      }
    }

    return paths;
  };

  // Add all static pages
  const staticPages = await getStaticPages(
    path.join(process.cwd(), "src/pages"),
  );
  staticPages.forEach((page) => {
    if (page === "index") {
      paths.push("");
      paths.push("en");
      paths.push("nl");
    } else {
      paths.push(page);
      paths.push(`en/${page}`);
      paths.push(`nl/${page}`);
    }
  });

  // Add all dynamic pages
  const slugsResponse = await fetchApi<{ slug: string }[]>({
    endpoint: "/blogposts?fields=slug",
  });
  slugsResponse.forEach(({ slug }) => {
    locales.forEach((locale) => {
      const localePath = locale === "de" ? "" : `${locale}/`;
      paths.push(`${localePath}clubleben/news/${slug}`);
    });
  });

  const sitemap = generateSiteMap(paths);

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
