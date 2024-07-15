import { type Author } from "./author.type";
import { type Category } from "./category.type";
import { type StrapiImage } from "./strapiimage.type";

export type Blogpost = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  content: string;
  teaser: string;
  slug: string;
  titleimage: StrapiImage;
  author: Author;
  category?: Category;
};
