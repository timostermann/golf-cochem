import { type GetStaticProps, type NextPage } from "next";
import { type Blogpost } from "@/lib/dto/blogpost.type";

type NewsArticleProps = {
  article: Blogpost;
};

const NewsArticlePage: NextPage<NewsArticleProps> = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  );
};

export default NewsArticlePage;

export const getStaticProps: GetStaticProps<NewsArticleProps> = async ({
  params,
}) => {
  //   const blogPostData = await fetchApi<Blogpost[]>({
  //     endpoint:
  //       "/blogposts?populate=titleimage&populate=category&populate=author",
  //     query: {
  //       "sort[0]": "createdAt:desc",
  //     },
  //   });

  if (!params?.slug || Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  const dummyData: Blogpost = {
    id: "1",
    title: "Glücklich und zufrieden! – Kanada brachte neue Erkenntnisse",
    teaser:
      "Bundestrainer zufrieden und mit einem klaren Plan für das Wintertraining.",
    category: {
      id: "1",
      name: "Club",
    },
    author: {
      id: 1,
      name: "Ulrike Rummel",
      picture: {
        url: "https://picsum.photos/800/400",
        width: 800,
        height: 400,
        alternativeText: "",
        caption: "",
        ext: ".jpeg",
        formats: {},
        id: 1,
        mime: "image/jpeg",
        name: "ulrike-rummel",
        previewUrl: null,
        size: 0.09,
      },
    },
    slug: params.slug,
    content: "This is the content",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    locale: "de",
    titleimage: {
      id: 1,
      name: "Bild",
      url: "https://picsum.photos/1200/500",
      width: 1200,
      height: 500,
      alternativeText: "",
      caption: "",
      ext: ".jpeg",
      formats: {},
      mime: "image/jpeg",
      previewUrl: null,
      size: 0.09,
    },
  };

  return {
    props: {
      article: dummyData,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "gluecklich-und-zufrieden-kanada-brachte-neue-erkenntnisse",
        },
      },
    ],
    fallback: "blocking",
  };
};
