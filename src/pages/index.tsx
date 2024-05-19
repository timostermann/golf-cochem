import { type GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { StatusCard } from "@/components/StatusCard";
import { Button, ButtonVariant } from "@/components/Button";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { EifelCourse, Golf, MoselCourse, Soccer } from "@/icons";
import landscape from "~/public/images/landscape.png";

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

const Home: NextPage<HomeProps> = ({ statusCards }) => {
  return (
    <Container className="relative">
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
    },
  };
};
