import { type NextPage } from "next";
import { Button, ButtonVariant } from "@/components/Button";
import { Container } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { StatusCard } from "@/components/StatusCard";
import {
  Address,
  Blog,
  Costs,
  EifelCourse,
  Golf,
  MoselCourse,
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
            category="Golfclub"
            title="Glücklich und zufrieden! - Kanada brachte neue Erkenntnisse"
            summary="Bundestrainer zufrieden und mit einem klaren Plan für das Wintertraining."
            date="2023-10-07T00:00:00Z"
            image={{
              src: "https://picsum.photos/800/400",
              alt: "Golfclub",
              width: 800,
              height: 400,
            }}
            href=""
            author="Ulrike Rummel"
            authorImage={{
              src: "https://picsum.photos/100",
              alt: "Ulrike Rummel",
              width: 100,
              height: 100,
            }}
          />
          <ImageTeaserCard
            category="Golfplatz"
            title="Was ist Footgolf?"
            summary="Die Trendsportart jetzt bei uns im Club. Komm noch heute vorbei uns probiere es aus."
            date="2023-10-06T00:00:00Z"
            image={{
              src: "https://picsum.photos/800/400",
              alt: "Golfplatz",
              width: 800,
              height: 400,
            }}
            href=""
            author="Manuela Eiden"
            authorImage={{
              src: "https://picsum.photos/100",
              alt: "Manuela Eiden",
              width: 100,
              height: 100,
            }}
          />
          <ImageTeaserCard
            category="Golfclub"
            title="Unsere neue Website"
            summary="Wir haben eine neue Website!"
            date="2023-10-04T00:00:00Z"
            image={{
              src: "https://picsum.photos/800/400",
              alt: "Golfclub",
              width: 800,
              height: 400,
            }}
            href=""
            author="Ulrike Rummel"
            authorImage={{
              src: "https://picsum.photos/100",
              alt: "Ulrike Rummel",
              width: 100,
              height: 100,
            }}
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
    </>
  );
};

export default Dev;
