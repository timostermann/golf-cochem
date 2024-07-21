import { type GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import landscape from "~/public/images/landscape.png";
import map from "~/public/images/map.jpg";
import newel from "~/public/images/partners/newel.png";
import vr from "~/public/images/partners/vr.png";
import hannus from "~/public/images/partners/hannus.png";
import pinger from "~/public/images/partners/pinger.png";
import villa from "~/public/images/partners/villa.png";
import felix from "~/public/images/team/felix-gruenhaeuser.webp";
import jannik from "~/public/images/team/jannik-oster.webp";
import manuela from "~/public/images/team/manuela-eiden.webp";
import reimund from "~/public/images/team/reimund-widmayer.jpeg";
import ulrike from "~/public/images/team/ulrike-rummel.webp";
import { Container, ContainerMargin } from "@/components/Container";
import { StatusCard } from "@/components/StatusCard";
import { Button, ButtonVariant } from "@/components/Button";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import {
  Address,
  Contact,
  Costs,
  EifelCourse,
  Email,
  Golf,
  Holiday,
  MoselCourse,
  Soccer,
} from "@/icons";
import { Iframe } from "@/components/Iframe";
import { BorderTeaserCard } from "@/components/BorderTeaserCard";
import { ImageTeaserCard } from "@/components/ImageTeaserCard";
import { InfoCard } from "@/components/InfoCard";
import { ArrowLink } from "@/components/ArrowLink";
import { fetchApi } from "@/lib/strapi";
import { type Blogpost } from "@/lib/dto/blogpost.type";

const Icons = {
  MoselCourse: MoselCourse,
  EifelCourse: EifelCourse,
  Soccer: Soccer,
  Golf: Golf,
};

type HomeProps = {
  statusCards: {
    icon: keyof typeof Icons;
    title: string;
    open: boolean;
    closedUntil?: string;
  }[];
  newsArticles: Blogpost[];
};

const Home: NextPage<HomeProps> = ({ statusCards, newsArticles }) => {
  const teamMembers = [
    {
      name: "Jannik Oster",
      role: "Club Manager",
      image: jannik,
    },
    {
      name: "Ulrike Rummel",
      role: "Sekretariat",
      image: ulrike,
    },
    {
      name: "Manuela Eiden",
      role: "Sekretariat",
      image: manuela,
    },
    {
      name: "Reimund Widmayer",
      role: "Sekretariat",
      image: reimund,
    },
    {
      name: "Felix Grünhäuser",
      role: "Marshall & in Ausbildung zum PGA Professionell",
      image: felix,
    },
  ];

  const contactInfo = [
    {
      icon: Email,
      title: "E-Mail",
      description: "Schreib uns",
      href: "mailto:sekretariat@golfcochem.eu",
      label: "sekretariat@golfcochem.eu",
    },
    {
      icon: Address,
      title: "Adresse",
      description: "Komm vorbei",
      href: "https://www.openstreetmap.org/?mlat=50.11870&mlon=7.16655#map=17/50.11870/7.16655",
      target: "_blank",
      label: (
        <span className="flex flex-col">
          <span>Am Kellerborn 2</span>
          <span>56814 Ediger-Eller</span>
        </span>
      ),
    },
    {
      icon: Contact,
      title: "Telefon",
      description: "Täglich von 09:00 bis 17:00 Uhr",
      href: "tel:+492675911511",
      label: "+49 (0) 2675 911 511",
    },
  ];

  return (
    <>
      <Container className="relative" aria-labelledby="hero">
        <Image
          src={landscape}
          aria-hidden
          alt=""
          quality={60}
          loading="eager"
          decoding="sync"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_20%]"
        />
        <div className="flex w-full justify-center">
          <Headline
            tag={HeadlineTag.H1}
            variant={HeadlineVariant.HERO}
            className="mt-16 leading-none text-primary-800 sm:max-w-[500px] sm:text-center lg:mt-32 lg:max-w-[800px] lg:leading-[1.15]"
            id="hero"
          >
            Willkommen im Golfclub
            <wbr /> Cochem/
            <wbr />
            Mosel e.V
          </Headline>
        </div>
        <p className="mt-4 w-full text-lg text-primary-800 sm:mt-6 sm:text-center md:text-xl">
          Leidenschaft trifft Gastfreundschaft
        </p>
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-2 sm:mt-8 sm:flex-row-reverse sm:gap-4">
          <Button
            href="https://www.pccaddie.net/clubs/0495536/app.php?cat=tt_timetable_course"
            className="w-full sm:w-fit"
          >
            Startzeit buchen
          </Button>
          <Button
            href="/golfplatz/indoor"
            className="w-full sm:w-fit"
            variant={ButtonVariant.SECONDARY}
          >
            Indoor Golf
          </Button>
          <Button
            href="/golfplatz/platzinformationen"
            className="w-full sm:w-fit"
            variant={ButtonVariant.SECONDARY}
          >
            Platzinformationen
          </Button>
        </div>
        <ul className="mb-32 mt-16 flex flex-wrap items-center justify-center gap-4 lg:mb-20 lg:mt-32 lg:gap-10">
          {statusCards.map((card) => {
            const Icon = Icons[card.icon];
            return (
              <li key={card.title}>
                <StatusCard
                  icon={<Icon />}
                  open={card.open}
                  closedUntil={card.closedUntil}
                >
                  {card.title}
                </StatusCard>
              </li>
            );
          })}
        </ul>
      </Container>
      <Container margin={ContainerMargin.XL} aria-labelledby="intro">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Iframe youtubeId="drNcVxsGVtA" title="Golfclub Cochem/Mosel e.V." />
          <div className="flex flex-col">
            <p className="mb-3 text-primary-700">Ein erster Eindruck</p>
            <Headline
              tag={HeadlineTag.H2}
              variant={HeadlineVariant.SECONDARY}
              className="mb-8"
              id="intro"
            >
              Golfclub Cochem e.V. stellt sich vor
            </Headline>
            <p className="text-gray-500">
              Leidenschaft trifft auf Gastfreundschaft. Willkommen in unserem
              Golfclub. Wir freuen uns, Euch ein guter Gastgeber sein zu dürfen.
              <br />
              <br />
              Unbeschwert spielen, mit Freunden:innen plaudern und einfach den
              Tag genießen.
            </p>
          </div>
        </div>
      </Container>
      <Container aria-labelledby="courses">
        <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Headline
              tag={HeadlineTag.H2}
              variant={HeadlineVariant.SECONDARY}
              id="courses"
            >
              Unsere Anlage
            </Headline>
            <p className="text-gray-500">
              Eine 27-Loch Anlage auf dem Moselplateau mit herrlichem Blick in
              die Eifel und auf den Hunsrück. Golfen in einem Urlauberparadies.
            </p>
          </div>
          <div />
          <ul className="flex flex-col gap-4">
            <li>
              <BorderTeaserCard
                title="Mosel Course"
                summary="Professioneller, naturnaher 18-Loch-Platz"
                linkLabel="Mehr erfahren"
                href="/golfplatz/mosel-course"
              />
            </li>
            <li>
              <BorderTeaserCard
                title="Eifel Course"
                summary="9-Loch Platz, der ohne DGV-Ausweis gespielt werden kann"
                linkLabel="Mehr erfahren"
                href="/golfplatz/eifel-course"
              />
            </li>
            <li>
              <BorderTeaserCard
                title="Footgolf"
                summary="Der Spaß für die gesamte Familie"
                linkLabel="Mehr erfahren"
                href="/golfplatz/footgolf"
              />
            </li>
            <li>
              <BorderTeaserCard
                title="Driving Range"
                summary="Überdachte Abschlagboxen"
                linkLabel="Mehr erfahren"
                href="/golfplatz/driving-range"
              />
            </li>
          </ul>
          <Image
            src={landscape}
            aria-hidden
            alt=""
            quality={50}
            className="mt-12 size-full rounded-xl lg:mt-0"
          />
        </div>
      </Container>
      <Container
        aria-labelledby="news"
        margin={ContainerMargin.NONE}
        className="bg-gray-100 py-16 sm:py-24"
      >
        <div className="mb-8 flex w-full items-center justify-between sm:mb-4">
          <Headline
            tag={HeadlineTag.H2}
            variant={HeadlineVariant.SECONDARY}
            id="news"
          >
            News
          </Headline>
          <Button href="/blog">Alle News</Button>
        </div>
        <p className="text-gray-500">
          Das Neueste aus dem Golfclub Cochem/Mosel e.V.
        </p>
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
      <Container
        aria-labelledby="partner"
        margin={ContainerMargin.NONE}
        className="bg-primary-100 py-16 sm:py-24"
      >
        <Headline
          tag={HeadlineTag.H2}
          variant={HeadlineVariant.QUINARY}
          id="partner"
          className="w-full text-center text-primary-700"
        >
          Unsere Golfpartner
        </Headline>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-16 gap-y-6 xl:gap-x-24">
          <li>
            <Image src={newel} alt="Newel Eifel Mosel Hunsrück" />
          </li>
          <li>
            <Image src={vr} alt="VR Bank Rhein-Mosel eG" />
          </li>
          <li>
            <Image src={hannus} alt="Hannus Elektrotechnik" />
          </li>
          <li>
            <Image src={pinger} alt="Pinger Robotic" />
          </li>
          <li>
            <Image src={villa} alt="Hotel Villa Vie Cochem" />
          </li>
        </ul>
      </Container>
      <Container
        aria-labelledby="mitglied"
        margin={ContainerMargin.NONE}
        className="py-16 sm:py-24"
        innerClassName="grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <div className="flex flex-col">
          <Headline
            tag={HeadlineTag.H2}
            variant={HeadlineVariant.SECONDARY}
            id="mitglied"
          >
            Jetzt Mitglied werden
          </Headline>
          <p className="mt-6 text-gray-500 lg:mb-12">
            Der Golfclub Cochem/Mosel e.V. bietet dir maßgeschneiderte
            Mitgliedschaftsmodelle, die sofortige Vorteile bringen. Entscheide
            dich für eine Vollmitgliedschaft, den „Business Tarif“ oder unsere
            attraktiven Jugend- und Partnertarife. Genieße die Flexibilität der
            Fernmitgliedschaft oder die preiswerte Eifel Course Mitgliedschaft.
            <br />
            <br />
            Kontaktiere uns jetzt und finde die perfekte Mitgliedschaft für
            deine Bedürfnisse!
          </p>
          <Button href="/clubleben/mitgliedschaft" className="max-lg:hidden">
            Alles über die Mitgliedschaft
          </Button>
        </div>
        <div className="flex flex-col gap-8 md:max-lg:flex-row">
          <InfoCard icon={<Costs />} title="Greenfeefrei spielen">
            <p className="mb-6">
              Als Mitglied erfreuen Sie sich einfach an einem erfolgreichen
              Netzwerk, und spielen Golf greenfeefrei oder rabattiert auf einem
              der 62 Partneranlagen.
            </p>
            <ArrowLink href="#">Aktuelle Greenfees und Partner</ArrowLink>
          </InfoCard>
          <InfoCard icon={<Holiday />} title="Urlaubsplanung leicht gemacht">
            <p>
              Auf dem Weg zum Urlaubsort locken manche Golfplätze. Anhalten,
              spielen und genießen, ohne Zusatzkosten.
              <br />
              <br />
              Wie geht das? Wir informieren Sie umfassend. Kontaktieren Sie uns.
            </p>
          </InfoCard>
        </div>
        <Button href="/clubleben/mitgliedschaft" className="lg:hidden">
          Alles über die Mitgliedschaft
        </Button>
      </Container>
      <Container
        aria-labelledby="team"
        margin={ContainerMargin.NONE}
        className="bg-gray-100 py-16 sm:py-24"
      >
        <Headline
          tag={HeadlineTag.H2}
          variant={HeadlineVariant.SECONDARY}
          id="team"
        >
          Unser Team
        </Headline>
        <p className="mt-6 max-w-[740px] text-balance text-gray-500 lg:mb-20">
          Ein engagiertes Team von Golfexperten und leidenschaftlichen
          Gastgebern, das stets bereit ist, Ihnen ein unvergessliches
          Golferlebnis zu bieten. Lernen Sie die Gesichter kennen, die hinter
          unserem erstklassigen Service stehen.
        </p>
        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {teamMembers.map((member) => (
            <li
              key={member.name}
              className="flex max-w-96 flex-col gap-1 xl:w-full"
            >
              <Headline
                tag={HeadlineTag.H3}
                variant={HeadlineVariant.QUINARY}
                className="mt-2 text-primary-800 xl:mt-4"
              >
                {member.name}
              </Headline>
              <Image
                src={member.image}
                alt=""
                className="-order-1 h-72 w-full object-cover"
              />
              <p className="font-light text-primary-600">{member.role}</p>
            </li>
          ))}
        </ul>
      </Container>
      <Container
        aria-labelledby="contact"
        margin={ContainerMargin.SM}
        className="py-16 sm:py-24"
        innerClassName="flex flex-col gap-12 lg:gap-16"
      >
        <div className="flex flex-col gap-6">
          <Headline
            tag={HeadlineTag.H2}
            variant={HeadlineVariant.SECONDARY}
            id="contact"
          >
            Fragen?
          </Headline>
          <p className="text-gray-500">Wir helfen dir gerne weiter</p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr,2fr] lg:gap-6">
          <ul className="flex flex-col gap-10 md:gap-2 md:max-lg:flex-row md:max-lg:flex-wrap md:max-lg:justify-between lg:gap-10 xl:gap-16">
            {contactInfo.map((contact) => (
              <li key={contact.title} className="flex gap-4">
                <contact.icon className="mt-px size-6 text-primary-700" />
                <div className="flex flex-col gap-1">
                  <Headline
                    tag={HeadlineTag.H3}
                    variant={HeadlineVariant.QUINARY}
                    className="text-primary-800"
                  >
                    {contact.title}
                  </Headline>
                  <p className="mb-1 text-gray-500 lg:mb-4">
                    {contact.description}
                  </p>
                  <Link
                    href={contact.href}
                    target={contact.target}
                    className="underline-effect w-fit text-primary-700"
                  >
                    {contact.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          <Image
            src={map}
            alt="Ausschnitt einer Straßenkarte zur Darstellung der Lage des Golfclubs"
          />
        </div>
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const blogPostData = await fetchApi<Blogpost[]>({
    endpoint:
      "/blogposts?populate=titleimage&populate=category&populate=author",
    query: {
      "pagination[limit]": "3",
      "sort[0]": "createdAt:desc",
    },
  });
  console.log(blogPostData);

  return {
    props: {
      statusCards: [
        {
          icon: "MoselCourse",
          title: "Mosel Course",
          open: true,
        },
        {
          icon: "EifelCourse",
          title: "Eifel Course",
          open: true,
        },
        {
          icon: "Soccer",
          title: "Footgolf",
          open: false,
          closedUntil: "01.03.",
        },
        {
          icon: "Golf",
          title: "Driving Range",
          open: true,
        },
      ],
      newsArticles: blogPostData,
    },
  };
};
