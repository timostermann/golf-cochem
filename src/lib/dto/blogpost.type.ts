import { type Author } from "./author.type";
import { type StrapiImage } from "./strapiimage.type";

export type Blogpost = {
  id: string;
  title: string;
  createdat: string;
  updatedat: string;
  locale: string;
  content: string;
  teaser: string;
  slug: string;
  titleimage: StrapiImage;
  author: Author;
};
