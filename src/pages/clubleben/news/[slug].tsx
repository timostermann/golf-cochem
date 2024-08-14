import { type GetStaticPaths, type GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { type Blogpost } from "@/lib/dto/blogpost.type";
import { Container, ContainerSize } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Meta } from "@/components/Meta";
import { Markdown } from "@/components/Markdown";
import { fetchApi } from "@/lib/strapi";
import { revalidate } from "@/lib/constants";

type NewsArticleProps = {
  article: Blogpost;
};

const NewsArticlePage: NextPage<NewsArticleProps> = ({ article }) => {
  const router = useRouter();

  return (
    <>
      <Meta
        title={article.title}
        description={article.teaser}
        imageUrl={article.titleimage?.url}
      />
      <Container tag="div" innerClassName="flex flex-col items-center gap-4">
        <Headline
          tag={HeadlineTag.H1}
          variant={HeadlineVariant.HERO}
          className="text-center sm:max-w-[500px] sm:text-center lg:max-w-[800px]"
        >
          {article.title}
        </Headline>
        {article.category?.name && (
          <p className="-order-1 mt-8 text-center font-semibold text-primary-600 lg:mt-16">
            {article.category.name}
          </p>
        )}
        <p className="mt-4 text-xl text-gray-500">{article.teaser}</p>
        {article.author && (
          <div className="mt-6 flex items-center gap-3 px-6">
            {article.author.picture?.url &&
              article.author.picture.width &&
              article.author.picture.height && (
                <Image
                  src={article.author.picture.url}
                  alt={article.author.picture.alternativeText || ""}
                  width={article.author.picture.width}
                  height={article.author.picture.height}
                  className="size-10 rounded-full object-cover"
                />
              )}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-medium text-gray-900">
                {article.author.name}
              </p>
              {article.createdAt && (
                <p className="text-sm font-light text-gray-500">
                  {new Date(article.createdAt).toLocaleDateString(
                    router.locale,
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    },
                  )}
                </p>
              )}
            </div>
          </div>
        )}
        {article.titleimage?.url &&
          article.titleimage.width &&
          article.titleimage.height && (
            <div className="relative mt-8 w-full max-w-[960px] overflow-hidden">
              <Image
                src={article.titleimage.url}
                alt={article.titleimage.alternativeText || ""}
                width={article.titleimage.width}
                height={article.titleimage.height}
                className="object-contain"
                priority
              />
            </div>
          )}
      </Container>
      <Container tag="div" size={ContainerSize.SM}>
        <Markdown content={article.content} />
      </Container>
    </>
  );
};

export default NewsArticlePage;

export const getStaticProps: GetStaticProps<NewsArticleProps> = async ({
  params,
}) => {
  if (!params?.slug || Array.isArray(params.slug)) {
    return {
      revalidate,
      notFound: true,
    };
  }

  const blogPostData = await fetchApi<Blogpost[]>({
    endpoint:
      "/blogposts?populate=titleimage&populate=category&populate=author",
    query: {
      "filters[slug][$eq]": params.slug,
    },
  });

  if (blogPostData[0]) {
    return {
      props: {
        article: blogPostData[0],
      },
      revalidate,
    };
  }

  return {
    revalidate,
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugsResponse = await fetchApi<{ slug: string }[]>({
    endpoint: "/blogposts?fields=slug",
  });

  const paths = slugsResponse.map((slugData) => ({
    params: { slug: slugData.slug },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};
