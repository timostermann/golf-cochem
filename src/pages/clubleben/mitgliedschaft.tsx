import { type NextPage } from "next";
import Image from "next/image";
import { type ReactNode } from "react";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { membershipFaq } from "@/data/faq.data";
import { Accordion } from "@/components/Accordion";
import dgv from "~/public/images/dgv.webp";
import { Button } from "@/components/Button";
import { Calendar, Group, Star, Download, CheckCircle } from "@/icons";
import { FeatureColumn } from "@/components/FeatureColumn";

const BenefitList = ({ benefits }: { benefits: ReactNode[] }) => (
  <ul className="flex flex-col gap-4 md:mt-14">
    {benefits.map((item, index) => (
      <li key={index} className="flex items-center gap-2">
        <CheckCircle className="size-6 text-green-600/80" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PriceList = ({
  priceData,
}: {
  priceData: { price: number; description: ReactNode }[];
}) => (
  <ul className="mt-6 flex w-full flex-col">
    {priceData.map((item, index) => (
      <li
        key={index}
        className="flex items-center justify-between border-t border-primary-800 p-4 last:border-b"
      >
        <span>{item.description}</span>
        <span>{item.price.toLocaleString("de-DE")} €</span>
      </li>
    ))}
  </ul>
);

const Mitgliedschaft: NextPage = () => (
  <>
    <Meta
      title="Mitgliedschaft"
      description="Der Golfclub Cochem/Mosel e.V. bietet verschiedene Modelle einer Mitgliedschaft an."
    />
    <Container
      aria-labelledby="mitgliedschaft"
      className="bg-gray-50"
      innerClassName="flex flex-col max-lg:items-center lg:flex-row lg:justify-between py-12 sm:py-20 lg:py-28"
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
        <Button
          href="/documents/Antragsformular.pdf"
          className="inline-flex gap-2 pl-4 max-lg:mb-10 max-lg:self-center"
          target="_blank"
        >
          <Download className="mt-px size-5" /> Zum Antragsformular
        </Button>
      </div>
      <Image
        src={dgv}
        alt="Deutscher Golf Verband Logo"
        className="size-[200px] rounded-full"
        loading="eager"
        priority
      />
    </Container>
    <Container
      aria-labelledby="vorteile"
      innerClassName="flex flex-col items-center mt-20 mb-20 gap-12"
      margin={ContainerMargin.SM}
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="vorteile"
        className="text-center"
      >
        Vorteile einer Mitgliedschaft
      </Headline>

      <ul className="flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:gap-4">
        <li className="sm:basis-1/3">
          <FeatureColumn
            icon={<Group />}
            title="Gemeinschaft"
            text="Sei Teil einer lebendigen und unterstützenden Gemeinschaft, die eine
            gemeinsame Leidenschaft für Golf teilt und zusammen unvergessliche
            Erlebnisse auf und neben dem Platz genießt."
          />
        </li>
        <li className="sm:basis-1/3">
          <FeatureColumn
            icon={<Calendar />}
            title="Events"
            text="Als Mitglied im Golfclub Cochem/Mosel e.V. hast du exklusiven Zugang zu spannenden Events und Turnieren, die das Clubleben bereichern und dir die Möglichkeit bieten, neue Freundschaften zu knüpfen und unvergessliche Momente zu erleben."
          />
        </li>
        <li className="sm:basis-1/3">
          <FeatureColumn
            icon={<Star />}
            title="Rabatte"
            text="Mit einer Mitgliedschaft profitierst du von exklusiven Rabatten auf Greenfees, Pro-Shop-Artikel und Partner-Angebote, sodass du dein Golfspiel und Cluberlebnis noch attraktiver wird."
          />
        </li>
      </ul>
    </Container>
    <Container
      aria-labelledby="modell"
      className="bg-gray-50"
      innerClassName="my-12 sm:my-20"
      margin={ContainerMargin.NONE}
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="modell"
        className="text-center"
      >
        Vollmitgliedschaft
      </Headline>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-8 md:grid-cols-2">
        <BenefitList
          benefits={[
            <>
              <span className="font-bold">Uneingeschränktes Spielrecht</span>{" "}
              auf Mosel- und Eifelcourse
            </>,
            "DGV-Mitgliedsausweis",
            "Inklusive Handicapführung",
            "Kostenfreies Spielen auf über 50 Golfanlagen in Deutschland",
            "(U18) inklusive Basis-Jugendtraining",
          ]}
        />
        <div className="flex w-full flex-col items-center">
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.QUATERNARY}>
            Dein Beitrag <span className="font-light">(pro Jahr)</span>
          </Headline>
          <PriceList
            priceData={[
              { price: 1275, description: "Erwachsene" },
              {
                price: 795,
                description:
                  "Neumitglieder (im ersten Jahr, Vertragslaufzeit: 2 Jahre)",
              },
              {
                price: 1020,
                description: "Ehepartner/Lebensgefährten eines Vollmitglieds",
              },
              { price: 775, description: "Junge Erwachsene (26-35 Jahre)" },
              { price: 390, description: "Jugend/Student (18-25 Jahre)" },
              { price: 230, description: "Kinder (13-17 Jahre)" },
              { price: 90, description: "Kinder (bis 12 Jahre)" },
            ]}
          />
        </div>
      </div>
    </Container>
    <Container
      aria-labelledby="faq"
      innerClassName="flex flex-col items-center mt-12 sm:mt-20"
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="faq"
        className="text-center"
      >
        Antworten auf deine Fragen
      </Headline>
      <p className="mb-12 mt-6 max-w-[768px] text-pretty text-center text-gray-500 lg:text-xl">
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
