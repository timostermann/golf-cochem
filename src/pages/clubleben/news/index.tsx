import { type GetStaticProps, type NextPage } from "next";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { ImageTeaserCard } from "@/components/ImageTeaserCard";
import { fetchApi } from "@/lib/strapi";
import { type Blogpost } from "@/lib/dto/blogpost.type";

type NewsProps = {
  newsArticles: Blogpost[];
};

const News: NextPage<NewsProps> = ({ newsArticles }) => {
  return (
    <>
      <Container
        aria-labelledby="hero"
        className="bg-gray-50 pb-16 pt-4 sm:pb-24 sm:pt-6"
        margin={ContainerMargin.SM}
      >
        <div className="flex w-full flex-col items-center gap-4">
          <Headline
            tag={HeadlineTag.H1}
            variant={HeadlineVariant.HERO}
            className="leading-none text-primary-800 sm:max-w-[500px] sm:text-center lg:max-w-[800px] lg:leading-[1.15]"
            id="hero"
          >
            Was gibt es Neues?
          </Headline>
          <p className="-order-1 mt-8 text-center font-semibold text-primary-600 lg:mt-16">
            News
          </p>
          <p className="mt-2 text-xl text-gray-500">
            Aktuelles und Informatives aus dem Golfclub Cochem/Mosel e.V.
          </p>
        </div>
      </Container>
      <Container aria-label="Newsartikel, sortiert nach Aktualiät">
        <ul className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 xl:grid-cols-3">
          {newsArticles.map((article) => (
            <li key={article.title}>
              <ImageTeaserCard
                category={article.category}
                title={article.title}
                teaser={article.title}
                titleImage={article.titleimage}
                author={article.author}
                date={article.createdAt}
                href={article.slug}
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

  console.log(blogPostData);

  return {
    props: {
      newsArticles: blogPostData,
    },
  };
};
