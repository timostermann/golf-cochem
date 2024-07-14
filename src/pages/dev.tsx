import { type NextPage } from "next";
import landscape from "~/public/images/landscape.png";
import { Button, ButtonVariant } from "@/components/Button";
import { Container } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { StatusCard } from "@/components/StatusCard";
import {
  Address,
  Blog,
  Calendar,
  Costs,
  EifelCourse,
  Golf,
  Group,
  MoselCourse,
  Star,
  Trainer,
} from "@/icons";
import * as icons from "@/icons";
import { ImageTeaserCard } from "@/components/ImageTeaserCard";
import { BorderTeaserCard } from "@/components/BorderTeaserCard";
import { Accordion } from "@/components/Accordion";
import { PriceCard } from "@/components/PriceCard";
import { Meta } from "@/components/Meta";
import { Iframe } from "@/components/Iframe";
import { InfoCard } from "@/components/InfoCard";
import { ArrowLink } from "@/components/ArrowLink";
import { ImageStage } from "@/components/ImageStage";
import { ImageInfoCard } from "@/components/ImageInfoCard";
import { FeatureColumn } from "@/components/FeatureColumn";
import { TabSelection } from "@/components/TabSelection";

const Dev: NextPage = () => {
  return (
    <>
      <Meta
        title="Development Test"
        description="This page serves as a dummy page to view all components"
        robots="noindex, nofollow"
      />
      <Container innerClassName="flex flex-col gap-16 py-12">
        <div className="flex flex-col gap-4">
          <Headline tag={HeadlineTag.H1} variant={HeadlineVariant.HERO}>
            Hero Headline
          </Headline>
          <Headline tag={HeadlineTag.H1} variant={HeadlineVariant.PRIMARY}>
            Primary Headline
          </Headline>
          <Headline tag={HeadlineTag.H2} variant={HeadlineVariant.SECONDARY}>
            Secondary Headline
          </Headline>
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.TERTIARY}>
            Tertiary Headline
          </Headline>
          <Headline tag={HeadlineTag.H4} variant={HeadlineVariant.QUATERNARY}>
            Quaternary Headline
          </Headline>
          <Headline tag={HeadlineTag.H5} variant={HeadlineVariant.QUINARY}>
            Quinary Headline
          </Headline>
        </div>
        <div className="flex gap-4">
          <Button>Primary Button</Button>
          <Button variant={ButtonVariant.SECONDARY}>Secondary Button</Button>
        </div>
        <div className="flex flex-wrap gap-8">
          {Object.entries(icons).map(([name, Icon]) => (
            <Icon
              key={name}
              title={name}
              className="size-10 text-primary-700"
            />
          ))}
        </div>
        <div className="flex gap-4">
          <StatusCard open icon={<Address />}>
            Open Court
          </StatusCard>
          <StatusCard open={false} closedUntil="22.06." icon={<Blog />}>
            Closed Court
          </StatusCard>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <ImageTeaserCard
            category={{ name: "Golfclub", id: "id" }}
            title="Glücklich und zufrieden! - Kanada brachte neue Erkenntnisse"
            teaser="Bundestrainer zufrieden und mit einem klaren Plan für das Wintertraining."
            date="2023-10-07T00:00:00Z"
            titleimage={{
              url: "https://picsum.photos/800/400",
              alternativeText: "Golfclub",
              width: 800,
              height: 400,
            }}
            href=""
          />
          <ImageTeaserCard
            category={{ name: "Golfplatz", id: "id" }}
            title="Was ist Footgolf?"
            teaser="Die Trendsportart jetzt bei uns im Club. Komm noch heute vorbei uns probiere es aus."
            date="2023-10-06T00:00:00Z"
            titleimage={{
              url: "https://picsum.photos/800/400",
              alternativeText: "Golfplatz",
              width: 800,
              height: 400,
            }}
            href=""
          />
          <ImageTeaserCard
            category={{ name: "Golfclub", id: "id" }}
            title="Unsere neue Website"
            teaser="Wir haben eine neue Website!"
            date="2023-10-04T00:00:00Z"
            titleimage={{
              url: "https://picsum.photos/800/400",
              alternativeText: "Golfclub",
              width: 800,
              height: 400,
            }}
            href=""
          />
        </div>
        <div className="flex flex-col gap-1">
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
        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
        <div className="flex flex-wrap items-start gap-4">
          <InfoCard
            className="max-w-[480px]"
            icon={<Costs />}
            title="Greenfeefrei spielen"
          >
            <p className="mb-6">
              Als Mitglied erfreuen Sie sich einfach an einem erfolgreichen
              Netzwerk, und spielen Golf greenfeefrei oder rabattiert auf einem
              der 62 Partneranlagen.
            </p>
            <ArrowLink href="#">Aktuelle Greenfees und Partner</ArrowLink>
          </InfoCard>
          <InfoCard
            className="max-w-[200px]"
            icon={<Trainer />}
            title="Trainerstunden"
          >
            <ul className="list-disc pl-8">
              <li>55 min 70,00 €</li>
              <li>25 min 40,00 €</li>
            </ul>
          </InfoCard>
        </div>
        <div className="flex max-w-[1200px] gap-4">
          <ImageInfoCard
            title="Drive"
            summary="Kurs I - Standposition, Griffhaltung, Schwung"
            image={{
              src: "https://picsum.photos/400/400",
              alt: "Drive",
              width: 400,
              height: 400,
            }}
            href="https://www.campo-golf.de/de/events-und-turniere-clubseite/DE-5536"
            linkText="Zur Anmeldung"
            facts={["ca. 55 Minuten", "18€"]}
          />
          <ImageInfoCard
            title="Chip & Putt & Drive"
            summary="Kurs II - Putt & Chip"
            image={{
              src: "https://picsum.photos/400/400",
              width: 400,
              height: 400,
            }}
            href="https://www.campo-golf.de/de/events-und-turniere-clubseite/DE-5536"
            linkText="Zur Anmeldung"
            facts={["ca. 110 Minuten", "28€"]}
          />
          <ImageInfoCard
            title="Live"
            summary="Kurs III - Live"
            image={{
              src: "https://picsum.photos/400/400",
              width: 400,
              height: 400,
            }}
            href="https://www.campo-golf.de/de/events-und-turniere-clubseite/DE-5536"
            linkText="Zur Anmeldung"
            facts={["ca. 3-4 Stunden", "48€"]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Accordion summary="Welche Ausrüstung ist erlaubt?">
            Lörem ipsum krovoskap bånade samt por dijypp: i digen sogt. Ivose or
            mijyras i dosk bedavis i ysade av faras fåska, vana. Lasagisk bebän
            dösuren suprafår, trere men låteren men bev. Oren egosesassa i
            gigatt om anangen. Miv krovartad. Niment resat: nönör tesenat.{" "}
          </Accordion>
          <Accordion summary="Wer kann Footgolf spielen?">
            Lorem ipsum
          </Accordion>
        </div>
        <div className="flex flex-col gap-1">
          <Iframe youtubeId="drNcVxsGVtA" title="Golfclub Cochem/Mosel e.V." />
          <Iframe youtubeId="drNcVxsGVtA" className="max-w-96" />
        </div>
      </Container>
      <ImageStage
        src={landscape}
        alt=""
        title="Jugend spielt Golf"
        imageClassName="object-bottom"
      >
        <p className="text-pretty text-lg text-gray-500">
          Jugendarbeit in unserem Golfclub bedeutet, die Zukunft des Clubs zu
          sichern und den Golfsport in seinen breiten- und leistungssportlichen
          Kompetenzen zu fördern.
          <br />
          <br />
          Unter diesem Motto bietet der Golfclub Cochem/Mosel e.V. verschiedene
          Trainingsinhalte und Trainingszeiten an. In alters- und
          leistungsgerechte Gruppen aufgeteilt, erhalten zurzeit viele
          Jugendliche Golfunterricht.
        </p>
        <Button className="mt-8">Mehr erfahren</Button>
      </ImageStage>
      <Container innerClassName="flex flex-col items-center gap-12 sm:flex-row">
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
      </Container>
      <TabSelection
        tabs={[
          { title: "Tab 1", onClick: () => {}, isActive: true },
          { title: "Tab 2", onClick: () => {}, isActive: false },
        ]}
      />
    </>
  );
};

export default Dev;
