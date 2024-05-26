import { type GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import landscape from "~/public/images/landscape.png";
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
  Costs,
  EifelCourse,
  Golf,
  Holiday,
  MoselCourse,
  Soccer,
} from "@/icons";
import { Iframe } from "@/components/Iframe";
import { BorderTeaserCard } from "@/components/BorderTeaserCard";
import {
  ImageTeaserCard,
  type TeaserContent,
} from "@/components/ImageTeaserCard";
import { InfoCard } from "@/components/InfoCard";
import { ArrowLink } from "@/components/ArrowLink";

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
  newsArticles: TeaserContent[]; // TODO: Check if api type makes more sense once connected
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
          <Button href="/" className="w-full sm:w-fit">
            Startzeit buchen
          </Button>
          <Button
            href="/"
            className="w-full sm:w-fit"
            variant={ButtonVariant.SECONDARY}
          >
            Indoor Golf
          </Button>
          <Button
            href="/"
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
              Golfclub Cochem stellt sich vor
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
              die Eifel und auf den Hunsrück.Golfen in einem Urlauberparadies.
            </p>
          </div>
          <div />
          <div className="flex flex-col gap-4">
            <BorderTeaserCard
              title="Mosel Course"
              summary="Professioneller, naturnaher 18-Loch-Platz"
              linkLabel="Mehr erfahren"
              href=""
            />
            <BorderTeaserCard
              title="Eifel Course"
              summary="9-Loch Platz, der ohne DGV-Ausweis gespielt werden kann"
              linkLabel="Mehr erfahren"
              href=""
            />
            <BorderTeaserCard
              title="Footgolf"
              summary="Der Spaß für die gesamte Familie"
              linkLabel="Mehr erfahren"
              href=""
            />
            <BorderTeaserCard
              title="Driving Range"
              summary="Überdachte Abschlagboxen"
              linkLabel="Mehr erfahren"
              href=""
            />
          </div>
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
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 xl:grid-cols-3">
          {newsArticles.map((article) => (
            <ImageTeaserCard key={article.title} {...article} />
          ))}
        </div>
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
            Lörem ipsum exoligen misk av karade neng makror alltså trengen
            kabelt att tresigt. Suprasm familogi. <br />
            <br />
            Rygisk antinid: ben. Domibelt kroll kongen plaska, digerad i pade
            predor.
          </p>
          <Button href="/mitgliedschaft" className="max-lg:hidden">
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
              Auf dem Weg zum Urlaubsort locken manche Golfplätze.Anhalten,
              spielen und genießen, ohne Zusatzkosten.
              <br />
              <br />
              Wie geht das? Wir informieren Sie umfassend. Kontaktieren Sie uns.
            </p>
          </InfoCard>
        </div>
        <Button href="/mitgliedschaft" className="lg:hidden">
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
          Lörem ipsum kina prede antenong, obegt. Lar dekanell. Antisk ysol
          monon. Masera tesasm. Anajähet vaskap utom epihet som kest. Sagäska
          yngar. Magt dir löredat krosat. Kabel benera var pament.
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
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
      newsArticles: [
        {
          category: "Golfclub",
          title: "Glücklich und zufrieden! - Kanada brachte neue Erkenntnisse",
          summary:
            "Bundestrainer zufrieden und mit einem klaren Plan für das Wintertraining.",
          date: "2023-10-07T00:00:00Z",
          image: {
            src: "https://picsum.photos/800/400",
            alt: "Golfclub",
            width: 800,
            height: 400,
          },
          href: "",
          author: "Ulrike Rummel",
          authorImage: {
            src: "https://picsum.photos/100",
            alt: "Ulrike Rummel",
            width: 100,
            height: 100,
          },
        },
        {
          category: "Golfplatz",
          title: "Was ist Footgolf?",
          summary:
            "Die Trendsportart jetzt bei uns im Club. Komm noch heute vorbei uns probiere es aus.",
          date: "2023-10-06T00:00:00Z",
          image: {
            src: "https://picsum.photos/800/400",
            alt: "Golfplatz",
            width: 800,
            height: 400,
          },
          href: "",
          author: "Manuela Eiden",
          authorImage: {
            src: "https://picsum.photos/100",
            alt: "Manuela Eiden",
            width: 100,
            height: 100,
          },
        },
        {
          category: "Golfplatz",
          title: "Was ist Footgolf?",
          summary:
            "Die Trendsportart jetzt bei uns im Club. Komm noch heute vorbei uns probiere es aus.",
          date: "2023-10-06T00:00:00Z",
          image: {
            src: "https://picsum.photos/800/400",
            alt: "Golfplatz",
            width: 800,
            height: 400,
          },
          href: "",
          author: "Manuela Eiden",
          authorImage: {
            src: "https://picsum.photos/100",
            alt: "Manuela Eiden",
            width: 100,
            height: 100,
          },
        },
      ],
    },
  };
};
