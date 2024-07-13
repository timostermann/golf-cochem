import { type NextPage } from "next";
import Image from "next/image";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { membershipFaq } from "@/data/faq.data";
import { Accordion } from "@/components/Accordion";
import dgv from "~/public/images/dgv.webp";
import { Button } from "@/components/Button";
import { PriceCard } from "@/components/PriceCard";
import { Golf, MoselCourse, EifelCourse, Calendar, Group, Star } from "@/icons";
import { FeatureColumn } from "@/components/FeatureColumn";

const Mitgliedschaft: NextPage = () => (
  <>
    <Meta
      title="Mitgliedschaft"
      description="Der Golfclub Cochem/Mosel e.V. bietet verschiedene Modelle einer Mitgliedschaft an."
    />
    <Container
      aria-labelledby="mitgliedschaft"
      className="bg-gray-50"
      innerClassName="flex flex-col max-lg:items-center lg:flex-row lg:justify-between py-20 lg:py-28"
      margin={ContainerMargin.NONE}
    >
      <div className="flex flex-col">
        <Headline
          tag={HeadlineTag.H1}
          variant={HeadlineVariant.PRIMARY}
          id="mitgliedschaften"
        >
          Mitgliedschaften
        </Headline>
        <p aria-hidden className="-order-1 mb-3 text-primary-600">
          Für jeden den passenden Tarif
        </p>
        <p className="my-10 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
          Erlebe die vielfältigen Vorteile unserer maßgeschneiderten
          Mitgliedschaftsmodelle. Ob du dich für eine Vollmitgliedschaft
          entscheidest oder den „Business Tarif“ bevorzugst, bei uns spürst du
          sofort die Vorteile deiner Mitgliedschaft.
          <br />
          Profitiere von speziellen Rabatten für Ehepartner/Lebenspartner:innen,
          unseren attraktiven Jugendtarifen, der flexiblen Fernmitgliedschaft
          oder der preisgünstigen Eifel Course Mitgliedschaft. Bei uns findet
          jede/r Golfbegeisterte das passende Angebot!
          <br />
          <br />
          Kontaktiere uns noch heute – wir stellen dir gerne deine individuelle
          Lösung vor und heißen dich herzlich willkommen im Golfclub
          Cochem/Mosel e.V.
          <br />
          <br />
          Auf geht&apos;s, wir freuen uns auf dich!
        </p>
        <Button href="/clubleben/mitgliedschaft" className="max-lg:hidden">
          Zum Antragsformular
        </Button>
      </div>
      <Image
        src={dgv}
        alt="Deutscher Golf Verband Logo"
        className="size-[200px] rounded-full"
      />
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
        Unsere Mitgliedschaftsmodelle
      </Headline>
      <p className="mb-12 mt-6 max-w-[768px] text-pretty text-center text-gray-500 lg:text-xl">
        Keine Aufnahmegebühr, keine Investitionsumlage. Einfach eine
        Mitgliedschaft auswählen und schon kann es losgehen.
        <br />
        <br />
        Unbeschwertes Golfen unter tollen Menschen.
      </p>
      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <PriceCard
          price="595 €"
          title="Teilmitgliedschaft"
          facts={[
            "DGV-Mitgliedsausweis",
            "Keine Wartezeit",
            "20% Rabatt auf Greenfees",
            "9 x 18 Loch Mosel Course",
          ]}
          icon={<Golf />}
        />
        <PriceCard
          price="1.275 €"
          title="Vollmitgliedschaft"
          facts={[
            "DGV-Mitgliedsausweis",
            "Keine Wartezeit",
            "20% Rabatt für Ehepartner",
            "Unbegrenztes Spielen",
            "Kostenloses Spielen auf über 50 Partneranlagen",
            "Einsteigerangebot verfügbar",
          ]}
          icon={<MoselCourse />}
        />
        <PriceCard
          price="273 €"
          title="Fernmitgliedschaft"
          facts={[
            "DGV-Mitgliedsausweis",
            "Keine Wartezeit",
            "20% Rabatt auf Greenfees",
            "9 x 18 Loch Mosel Course",
          ]}
          icon={<EifelCourse />}
        />
      </div>
    </Container>
    <Container
      aria-labelledby="vorteile"
      className="bg-gray-50"
      innerClassName="flex flex-col items-center mt-20 mb-20 gap-8"
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="vorteile"
      >
        Vorteile einer Mitgliedschaft
      </Headline>

      <div className="flex flex-col items-center gap-12 sm:flex-row">
        <FeatureColumn
          icon={<Group />}
          title="Gemeinschaft"
          text="Sei Teil einer lebendigen und unterstützenden Gemeinschaft, die eine
            gemeinsame Leidenschaft für Golf teilt und zusammen unvergessliche
            Erlebnisse auf und neben dem Platz genießt."
        />
        <FeatureColumn
          icon={<Calendar />}
          title="Events"
          text="Als Mitglied im Golfclub Cochem/Mosel e.V. hast du exklusiven Zugang zu spannenden Events und Turnieren, die das Clubleben bereichern und dir die Möglichkeit bieten, neue Freundschaften zu knüpfen und unvergessliche Momente zu erleben."
        />
        <FeatureColumn
          icon={<Star />}
          title="Rabatte"
          text="Mit einer Mitgliedschaft profitierst du von exklusiven Rabatten auf Greenfees, Pro-Shop-Artikel und Partner-Angebote, sodass du dein Golfspiel und Cluberlebnis noch attraktiver wird."
        />
      </div>
    </Container>
    <Container
      aria-labelledby="faq"
      innerClassName="flex flex-col items-center"
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
        {membershipFaq.map(({ question, answer }) => (
          <li key={question} className="mb-16 w-full">
            <Accordion summary={question}>{answer}</Accordion>
          </li>
        ))}
      </ul>
    </Container>
  </>
);

export default Mitgliedschaft;
