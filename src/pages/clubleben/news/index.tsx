import { type GetStaticProps, type NextPage } from "next";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { ImageTeaserCard } from "@/components/ImageTeaserCard";
import { fetchApi } from "@/lib/strapi";
import { type Blogpost } from "@/lib/dto/blogpost.type";
import { Meta } from "@/components/Meta";
import { revalidate } from "@/lib/constants";

type NewsProps = {
  newsArticles: Blogpost[];
};

const News: NextPage<NewsProps> = ({ newsArticles }) => {
  return (
    <>
      <Meta
        title="News"
        description="Aktuelles und Informatives aus dem Golfclub Cochem/Mosel e.V."
      />
      <Container
        className="bg-gray-50 pb-16 pt-4 sm:pb-24 sm:pt-6"
        margin={ContainerMargin.SM}
        tag="div"
      >
        <div className="flex w-full flex-col items-center gap-4">
          <Headline
            tag={HeadlineTag.H1}
            variant={HeadlineVariant.HERO}
            className="text-center sm:max-w-[500px] sm:text-center lg:max-w-[800px]"
          >
            Was gibt es Neues?
          </Headline>
          <p className="-order-1 mt-8 text-center font-semibold text-primary-600 lg:mt-16">
            News
          </p>
          <p className="mt-2 text-center text-xl text-gray-500">
            Aktuelles und Informatives aus dem Golfclub Cochem/Mosel e.V.
          </p>
        </div>
      </Container>
      <Container aria-label="Newsartikel, sortiert nach Aktualiät">
        <ul className="mt-4 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 xl:grid-cols-3">
          {newsArticles.map((article) => (
            <li key={article.title}>
              <ImageTeaserCard
                category={article.category}
                title={article.title}
                teaser={article.title}
                titleImage={article.titleimage}
                author={article.author}
                date={article.createdAt}
                href={`news/${article.slug}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default News;

export const getStaticProps: GetStaticProps<NewsProps> = async () => {
  const blogPostData = await fetchApi<Blogpost[]>({
    endpoint:
      "/blogposts?populate=titleimage&populate=category&populate=author",
    query: {
      "sort[0]": "createdAt:desc",
    },
  });

  return {
    props: {
      newsArticles: blogPostData,
    },
    revalidate,
  };
};
