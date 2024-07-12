import { type NextPage } from "next";
import footgolfFamily from "~/public/images/footgolf-family.webp";
import { ImageStage } from "@/components/ImageStage";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Button } from "@/components/Button";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Iframe } from "@/components/Iframe";
import { footgolfFaq } from "@/data/faq.data";
import { Accordion } from "@/components/Accordion";

const Footgolf: NextPage = () => (
  <>
    <Meta
      title="Footgolf"
      description="Erlebe den ultimativen Spaß mit Footgolf, einer aufregenden Mischung aus Golf und Fußball! Genieße das Spiel auf unserem speziell gestalteten Platz, wo Geschicklichkeit und Präzision gefragt sind."
    />
    <ImageStage
      src={footgolfFamily}
      alt=""
      title="Footgolf"
      margin={ContainerMargin.SM}
      imageClassName="lg:aspect-[8/9] object-cover object-[70%_80%]"
    >
      <p className="text-lg text-gray-500">
        Footgolf - Der perfekte Mix aus Golf und Fußball
        <br />
        <br />
        Footgolf kombiniert die Präzision und Strategie des Golfsports mit der
        Dynamik und dem Spaß des Fußballs. Gespielt auf dem speziell gestalteten
        Golfplatz, zielt Footgolf darauf ab, einen Fußball mit möglichst wenigen
        Schüssen in ein großes, am Boden platziertes Loch zu befördern.
        <br />
        <br />
        Diese aufregende und unterhaltsame Sportart ist für alle Altersgruppen
        und Fähigkeiten geeignet, wodurch sie eine hervorragende Aktivität für
        Familien, Freunde und Teams ist. Footgolf bietet nicht nur sportliche
        Herausforderungen, sondern auch eine einzigartige Gelegenheit, Zeit im
        Freien zu verbringen und die wunderschöne Landschaft unseres Golfplatzes
        zu genießen.
        <br />
        <br />
        Besuchen Sie uns und erleben Sie, wie viel Spaß Footgolf machen kann!
        <br />
        <br />
        <Button href="/" className="w-full sm:w-fit">
          Anmelden
        </Button>
      </p>
    </ImageStage>
    <Container
      margin={ContainerMargin.NONE}
      aria-labelledby="intro"
      className="bg-primary-100 py-16 sm:py-24"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Iframe
          youtubeId="-F8WHZ0c7XE"
          title="Wayne Rooney Rory McIlroy FootGolf"
        />
        <div className="flex flex-col">
          <p className="mb-3 text-primary-700">Ein erster Eindruck</p>
          <Headline
            tag={HeadlineTag.H2}
            variant={HeadlineVariant.SECONDARY}
            className="mb-8"
            id="how-to-play-footgolf"
          >
            So spielt man Footgolf
          </Headline>
          <p className="text-gray-500">
            Schaut Euch dieses Video an, dann wisst Ihr, wie man es machen
            sollte!
            <br />
            <br />
            Viel Spaß mit Wayne Rooney und Rory McIlroy.
          </p>
        </div>
      </div>
    </Container>
    <Container
      aria-labelledby="faq"
      innerClassName="flex flex-col items-center mt-20"
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="faq"
      >
        Antworten auf deine Fragen
      </Headline>
      <p className="mb-12 mt-6 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
        Alles was du über eine Mitgliedschaft wissen musst
      </p>
      <ul className="w-full max-w-[768px]">
        {footgolfFaq.map(({ question, answer }) => (
          <li key={question} className="mb-16 w-full">
            <Accordion summary={question}>{answer}</Accordion>
          </li>
        ))}
      </ul>
    </Container>
  </>
);

export default Footgolf;
