import { type NextPage } from "next";
import { type ChangeEvent, type FormEvent, useState } from "react";
import landscape from "~/public/images/landscape.png";
import partner from "~/public/images/partners/sewenig.webp";
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
import { Tabs } from "@/components/Tabs";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Checkbox } from "@/components/Checkbox";

const Dev: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agreeTerms: false,
  });

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
    message: false,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agreeTerms: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName
        ? ""
        : "Bitte gib einen validen Vorname ein",
      lastName: formData.lastName ? "" : "Bitte gib einen validen Nachname ein",
      email: formData.email ? "" : "Bitte gib eine valide E-Mail ein",
      subject: formData.subject ? "" : "Bitte gib einen validen Betreff ein",
      message: formData.message ? "" : "Bitte gib eine valide Nachricht ein",
      agreeTerms: formData.agreeTerms
        ? ""
        : "Du musst den Bedingungen zustimmen, um das Formular abzusenden",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouchedFields({
      firstName: true,
      lastName: true,
      email: true,
      subject: true,
      message: true,
      agreeTerms: true,
    });
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

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
            titleImage={{
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
            titleImage={{
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
            titleImage={{
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
            title="Partner Card"
            summary="Lörem ipsum krovoskap bånade samt por dijypp: i digen sogt. Ivose or
            mijyras i dosk bedavis i ysade av faras fåska, vana."
            image={partner}
            imageClassName="!object-contain px-4"
            href="https://www.campo-golf.de/de/events-und-turniere-clubseite/DE-5536"
            linkText="Mehr erfahren"
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
      <Container>
        <Tabs>
          <Tabs.List>
            <Tabs.Tab>Tab 1</Tabs.Tab>
            <Tabs.Tab>Tab 2</Tabs.Tab>
            <Tabs.Tab>Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>Content 1</Tabs.Panel>
            <Tabs.Panel>Content 2</Tabs.Panel>
            <Tabs.Panel>Content 3</Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </Container>
      <Container>
        <Tabs orientation="vertical" defaultIndex={1}>
          <Tabs.List>
            <Tabs.Tab>Tab 1</Tabs.Tab>
            <Tabs.Tab>Tab 2</Tabs.Tab>
            <Tabs.Tab>Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>Content 1</Tabs.Panel>
            <Tabs.Panel>Content 2</Tabs.Panel>
            <Tabs.Panel>Content 3</Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </Container>
      <Container innerClassName="flex flex-col gap-16 py-12">
        <div className="max-w-2xl">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 w-full max-w-lg space-y-6 justify-self-center"
          >
            <div className="-mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Vorname"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                touched={touchedFields.firstName}
                error={errors.firstName}
                required
              />
              <Input
                label="Nachname"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                touched={touchedFields.lastName}
                error={errors.lastName}
                required
              />
            </div>
            <Input
              label="E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              touched={touchedFields.email}
              error={errors.email}
              required
            />
            <Select
              label="Betreff"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              touched={touchedFields.subject}
              error={errors.subject}
              options={[
                { value: "", label: "Bitte wählen Sie einen Betreff" },
                { value: "general", label: "Allgemeine Anfrage" },
                { value: "support", label: "Technischer Support" },
                { value: "feedback", label: "Feedback" },
              ]}
              required
            />
            <Textarea
              label="Nachricht"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              touched={touchedFields.message}
              error={errors.message}
              rows={5}
              required
            />
            <Checkbox
              label="Ich stimme den Geschäftsbedingungen zu"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
              touched={touchedFields.agreeTerms}
              error={errors.agreeTerms}
              required
            />
            <Button type="submit">Absenden</Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Dev;
