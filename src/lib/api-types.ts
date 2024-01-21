export type Blogpost = {
  id: number;
  attributes: {
    title: string;
    content: string;
    teaser: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
};
