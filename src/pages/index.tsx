import { type GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import landscape from "~/public/images/landscape.png";
import { Container, ContainerMargin } from "@/components/Container";
import { StatusCard } from "@/components/StatusCard";
import { Button, ButtonVariant } from "@/components/Button";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { EifelCourse, Golf, MoselCourse, Soccer } from "@/icons";
import { Iframe } from "@/components/Iframe";
import { BorderTeaserCard } from "@/components/BorderTeaserCard";

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
};

const Home: NextPage<HomeProps> = ({ statusCards }) => (
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
          <p className="text-gray-600">
            Leidenschaft trifft auf Gastfreundschaft. Willkommen in unserem
            Golfclub. Wir freuen uns, Euch ein guter Gastgeber sein zu dürfen.
            <br />
            <br />
            Unbeschwert spielen, mit Freunden:innen plaudern und einfach den Tag
            genießen.
          </p>
        </div>
      </div>
    </Container>
    <Container aria-labelledby="courses">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Headline
            tag={HeadlineTag.H2}
            variant={HeadlineVariant.SECONDARY}
            id="courses"
          >
            Unsere Anlage
          </Headline>
          <p className="text-gray-600">
            Eine 27-Loch Anlage auf dem Moselplateau mit herrlichem Blick in die
            Eifel und auf den Hunsrück.Golfen in einem Urlauberparadies.
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
          className="h-full w-full rounded-xl"
        />
      </div>
    </Container>
  </>
);

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
    },
  };
};
