import { type GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { type Blogpost } from "@/lib/dto/blogpost.type";
import { Container, ContainerSize } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Meta } from "@/components/Meta";
import { Markdown } from "@/components/Markdown";

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
            {article.author.picture.url &&
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
    content:
      "# Sub Ilion resonabat et illa resistunt impetus\n" +
      "\n" +
      "## Adspexere perpetiar manus in arces oblitus virum\n" +
      "\n" +
      "Lorem markdownum gemma sors dextra habe prosit stellatus, attonitaeque pugnae.\n" +
      "Oraque quis, sic Danai uterque et falsa, saepe commissaque tamen simplex.\n" +
      "Stupuit est sonus sum forma induere expetit; nostro mihi ignarus, fallique\n" +
      "prius!\n" +
      "\n" +
      "Auxilioque quod, mox mollitaque quod est haurit ponit ipse sulphure, hiemisque.\n" +
      "Tremulis aequoris. Fuerat nata dixit ne induruit Agaue res frater fortissima\n" +
      "aura Aesonides recepit **nec nectareis viro**, ait curae.\n" +
      "\n" +
      "### Nati Caeni superamur pereat edidicisse\n" +
      "\n" +
      "Medio possem, non petere sed multorum male virgo ab gelidum nunc memorare?\n" +
      "Victoria modo; nata *iurant deficit* de utere parvum fefellimus Bubastis\n" +
      "draconem iam ipsam nisi. Illi **nascentur** ingenium dura, flammas, sed erit\n" +
      "adii medulla exercita: eodem?\n" +
      "\n" +
      "#### Ulla rura fuit arces valuere missus recusat\n" +
      "\n" +
      "*Caelum* invisumque mens [galeae](http://www.invitum-ecce.org/osculareddat.php),\n" +
      "ei liquidissimus verbis superstitibus iuvenum cum quo flamina Iovis. Spinea\n" +
      "neque hortaturque, in modo, saxo Ammon, egressus Saturnius, fluviis simul.\n" +
      "Nascendi torpetis.\n" +
      "\n" +
      "![pexels-kindel-media-6572957.jpg](https://golf-cochem.fra1.digitaloceanspaces.com/b4a3c251f5f9058d6f5c2889799765b7.jpg)\n" +
      "\n" +
      "#### Ulla rura fuit arces valuere missus recusat\n" +
      "\n" +
      "*Caelum* invisumque mens [galeae](http://www.invitum-ecce.org/osculareddat.php),\n" +
      "ei liquidissimus verbis superstitibus iuvenum cum quo flamina Iovis. Spinea\n" +
      "neque hortaturque, in modo, saxo Ammon, egressus Saturnius, fluviis simul.\n" +
      "Nascendi torpetis.\n" +
      "\n" +
      "\n" +
      ">Quo tibia postquam\n" +
      "teneri ipse forma laniare. Terra umor iterque, dum qui portibus, quem pronus\n" +
      "deprecor videt est abluere? Sucis alter est: redituraque et sub Lavini sceptrateneri ipse forma laniare. Terra umor iterque, dum qui portibus, quem pronus\n" +
      "deprecor videt est abluere? Sucis alter est: redituraque et sub Lavini sceptra\n" +
      "\n" +
      "Populosque\n" +
      "tuorum totum capitis sine saxum, visaque more, pertimuitque Iove, quisquis\n" +
      "frigusque ille visus observo iussit, lenius. Illa quid ab nemorum quotiens. Nec\n" +
      "quod quendam cum credulus imagine: antris genitor perit per!\n" +
      "\n" +
      "## Ultima rerum carinis\n" +
      "\n" +
      "Aut te bracchia cuspidis Scylla obstabat ingredior oppidaque genus flectebat\n" +
      "**feres** navis et cognita falli capiat, removente, neque. Petebar his potenti\n" +
      "captam illo [iubet](http://septenis-sed.io/ora.html), spectans! Populosque\n" +
      "tuorum totum capitis sine saxum, visaque more, pertimuitque Iove, quisquis\n" +
      "frigusque ille visus observo iussit, lenius. Illa quid ab nemorum quotiens. Nec\n" +
      "quod quendam cum credulus imagine: antris genitor perit per!\n" +
      "\n" +
      "    var ssd = prom_dbms_domain;\n" +
      "    windowsSrgbKilobit += thread(2) + ldap_real;\n" +
      "    var softwareModemVlb = -4;\n" +
      "\n" +
      "Quarum sit manat quam mensae nunc atras medio exitiabile idem aura misit\n" +
      "Hyleusque aptos, et? Ducentem **tuus** veste grandine orbem. Quo tibia postquam\n" +
      "teneri ipse forma laniare. Terra umor iterque, dum qui portibus, quem pronus\n" +
      "deprecor videt est abluere? Sucis alter est: redituraque et sub Lavini sceptra:\n" +
      "quae huc linguas *procul*; uti salicta siqua *an*.\n" +
      "\n" +
      "- Listeneintrag 1\n" +
      "- Listeneintrag 2\n" +
      "- Sehr laaaaaaaaaanger laaaaaaaaaanger laaaaaaaaaanger Listeneintrag mit Umbruch\n" +
      "\n" +
      "Quarum sit <u>manat</u> quam mensae nunc atras medio exitiabile idem aura misit\n" +
      "~~Hyleusque~~ aptos, et? Ducentem **tuus** veste grandine orbem. Quo tibia postquam\n" +
      "teneri ipse forma laniare. Terra umor iterque, dum qui portibus, quem pronus\n" +
      "deprecor videt est abluere? Sucis alter est: redituraque et sub Lavini sceptra:\n" +
      "quae huc linguas *procul*; uti salicta siqua *an*.\n" +
      "\n" +
      "1. Listeneintrag 1\n" +
      "2. Listeneintrag 2\n" +
      "3. Sehr laaaaaaaaaanger laaaaaaaaaanger laaaaaaaaaanger Listeneintrag mit Umbruch\n" +
      "\n" +
      "Quarum sit <u>manat</u> quam mensae nunc atras medio exitiabile idem aura misit\n" +
      "~~Hyleusque~~ aptos, et? Ducentem **tuus** veste grandine orbem. Quo tibia postquam\n" +
      "teneri ipse forma laniare. Terra umor iterque, dum qui portibus, quem pronus\n" +
      "deprecor videt est abluere? Sucis alter est: redituraque et sub Lavini sceptra:\n" +
      "quae huc linguas *procul*; uti salicta siqua *an*.\n" +
      "\n",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    locale: "de",
    titleimage: {
      id: 1,
      name: "Bild",
      url: "https://picsum.photos/960/500",
      width: 960,
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
