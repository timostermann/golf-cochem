import { type NextPage } from "next";
import Image from "next/image";
import jugend from "~/public/images/jugend-spielt-golf.webp";
import range from "~/public/images/jugend-driving-range.webp";
// TODO: webp and optimize
import realschule from "~/public/images/realschule.png";
import golfAg from "~/public/images/golf-ag-gruppenfoto.jpeg";
import golfSchule from "~/public/images/golf-im-schulunterricht.jpeg";
import rangeGruppe from "~/public/images/junge-golfer-auf-der-driving-range.jpeg";
import { ImageStage } from "@/components/ImageStage";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Button, ButtonVariant } from "@/components/Button";
import { Download, ArrowTopRight } from "@/icons";

const Jugend: NextPage = () => (
  <>
    <Meta
      title="Jugend spielt Golf"
      description="Jugendarbeit in unserem Golfclub bedeutet, die Zukunft des Clubs zu sichern und den Golfsport in seinen breiten- und leistungssportlichen Kompetenzen zu fördern."
    />
    <ImageStage
      src={jugend}
      alt=""
      title="Jugend spielt Golf"
      margin={ContainerMargin.LG}
      imageClassName="lg:aspect-[8/9] object-cover object-[70%_80%]"
    >
      <p className="text-lg text-gray-500">
        Jugendarbeit in unserem Golfclub bedeutet, die Zukunft des Clubs zu
        sichern und den Golfsport in seinen breiten- und leistungssportlichen
        Kompetenzen zu fördern.
        <br />
        <br />
        Unter diesem Motto bietet der Golfclub Cochem/Mosel e.V. verschiedene
        Trainingsinhalte und Trainingszeiten an. In alters- und
        leistungsgerechte Gruppen aufgeteilt, erhalten zurzeit viele Jugendliche
        Golfunterricht.
      </p>
    </ImageStage>
    <Container aria-labelledby="komm">
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="komm"
      >
        Komm vorbei!
      </Headline>
      <p className="mb-12 mt-8 max-w-[800px] text-pretty text-lg text-gray-500 sm:mb-16 lg:mb-24">
        Geleitet wird das Training von Jannik Oster (C-Trainer), Jugendwart und
        Clubmanager des Golfclub Cochem/Mosel e.V., sowie von Felix Grünhäuser
        (Ausbildung zum PGA Pro) <br />
        <br />
        Gerne können golfinteressierte Jugendliche im Rahmen von
        Schnupperstunden den Umgang mit den Schlägern und den kleinen weißen
        Golfbällen kostenlos und unverbindlich zu den o. a. Zeiten ausprobieren.{" "}
        <br />
        <br />
        Neben der Teilnahme an zahlreichen Clubturnieren, sowie der
        Jugendclubmeisterschaft, finden jährlich ein Sommer- und Herbstcamp für
        die Jugend statt. Begehrte Events, welche schon in den letzten Jahren
        großen Anklang fanden. <br />
        <br />
        Anmeldungen direkt über unser Golfbüro.
      </p>
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.QUINARY}>
            Bambini Training (4-9 Jahre)
          </Headline>
          <p className="text-gray-500">Freitags 17:00 - 18:00 Uhr</p>
        </div>
        <div className="flex flex-col gap-2">
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.QUINARY}>
            Jugend Training
          </Headline>
          <p className="text-gray-500">
            Mittwochs 17:30 - 19:00 Uhr <br />
            Samstags 15:00 - 16:30 Uhr
          </p>
        </div>
        <div className="relative flex flex-col gap-2 before:absolute before:inset-0 before:-z-10 before:min-h-[5.5rem] before:max-w-80 before:-translate-x-3 before:-translate-y-3 before:rounded-lg before:bg-primary-100 before:content-['']">
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.QUINARY}>
            Treffpunkt
          </Headline>
          <p className="text-primary-700">Driving Range</p>
        </div>
      </div>
      <div>
        <Headline
          tag={HeadlineTag.H2}
          variant={HeadlineVariant.QUINARY}
          id="events"
          className="mt-12"
        >
          Elterntraining
        </Headline>
        <p className="mb-8 mt-2 max-w-[768px] text-pretty text-lg text-gray-500">
          Eltern haben jetzt die Möglichkeit, das Golfspiel parallel zum
          Training ihrer Kinder zu erlernen. Mit einer exklusiven Elternkarte
          und der Anleitung eines Trainers können sie gemeinsam mit ihren
          Kindern in den Golfsport eintauchen – inklusive Ausrüstung und
          Rangebälle zu einem attraktiven Preis.
        </p>
        <Button href="/golferlernen/elterntraining">Zum Elterntraining</Button>
      </div>
    </Container>
    <Container
      aria-labelledby="camps"
      margin={ContainerMargin.NONE}
      className="bg-primary-50 py-16 sm:py-24"
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="camps"
      >
        Golf Camps
      </Headline>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <p className="text-lg text-gray-500">
          Ferienzeit ist Sportzeit, nicht nur, aber für ein „Campleben“ mit
          Gleichgesinnten und den tollen Golfmöglichkeiten brauchen die Kinder
          nicht lange zu überlegen. Inzwischen schon fast Tradition, dass der
          Golfclub Cochem/Mosel e.V. diese beliebten Camps ausrichtet. Die
          Kinder freuen sich jetzt schon darauf.
          <br />
          <br />
          Sport, Spiel und Geselligkeit, es ist so einfach Kinderaugen zum
          Leuchten zu brigen.
        </p>
        <Image
          src={range}
          alt="Jugendlicher Golfspieler mit Trainer an der Driving Range"
          className="aspect-[5/3] object-cover"
        />
      </div>
    </Container>
    <Container
      aria-labelledby="schulsport"
      margin={ContainerMargin.NONE}
      className="py-16 sm:py-24"
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="schulsport"
      >
        Golf macht Schule
      </Headline>
      <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-[60%_1fr]">
        <p className="mt-8 text-lg text-gray-500">
          Das Ziel der bundesweiten Jugendinitiative ist es, Golf in Ergänzung
          zu den klassischen Disziplinen als festen Bestandteil des Schulsports
          zu etablieren, Kinder und Jugendliche für das Golf spielen zu
          begeistern, den Nachwuchs zu fördern und die Akzeptanz des Golfsports
          zu erhöhen.
          <br />
          <br />
          Golf macht Schule ist ein Projekt mit der Realschule plus Cochem.
        </p>
        <Image src={realschule} alt="Logo der Realschule plus Cochem" />
      </div>
      <div className="mt-16 grid grid-cols-1 items-center justify-items-center gap-8 md:mt-24 md:grid-cols-2 md:gap-16">
        <div>
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.TERTIARY}>
            Die Umsetzung
          </Headline>
          <p className="mt-8 text-lg text-gray-500">
            Pro Termin eine Unterrichtseinheit von 90 Minuteninklusive
            Bustransfer zum Golfplatz Cochem20 Termine im Schuljahr 2021/2022es
            entstehen keine Kostenzum Ende der Golf-AG eine Runde Footgolf
          </p>
        </div>
        <Image
          src={rangeGruppe}
          alt="Golfübungsanlage mit Abschlagplätzen unter Überdachung. Mehrere Personen, darunter Kinder, üben Golfschläge auf grünen Matten."
        />
      </div>
      <div className="mt-16 grid grid-cols-1 items-center justify-items-center gap-8 md:mt-24 md:grid-cols-2 md:gap-16">
        <div className="md:order-1">
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.TERTIARY}>
            Indoor Golf begeistert die Kinder
          </Headline>
          <p className="mt-8 text-lg text-gray-500">
            Im Rahmen des Projektes Abschlag Schule erfolgt die Umsetzung
            Indoor-Golf an der Grundschule Edinger-Eller. Einzigartiges Projekt
            erfährt auch die Fortführung über den Winter hinaus. Volle
            Aufmerksamkeit ist Felix gewiss, wenn er den Kinder die ersten
            Hinweise zur richtigen Technk vermittelt.
          </p>
        </div>
        <Image
          src={golfSchule}
          alt="Turnhalle mit Kindern beim Sportunterricht. Ein Trainer demonstriert eine Übung, während die Kinder mit Masken in einer Reihe stehen."
        />
      </div>
      <div className="mt-16 grid grid-cols-1 items-center justify-items-center gap-8 md:mt-24 md:grid-cols-2 md:gap-16">
        <div>
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.TERTIARY}>
            Projekt Golf AG Schule
          </Headline>
          <p className="mt-8 text-lg text-gray-500">
            Mit welcher Freude die Schüler:innen der Grundschule Büchel bei dem
            Projekt Schulsport AG GOLF mitmachen, verraten die strahlenden
            Augen. Mittlerweile betreuen Jannik Oster & Felix Grünhäuser acht
            Projekte von fünf Schulen.
          </p>
        </div>
        <Image
          src={golfAg}
          alt="Große Gruppe von Kindern und einigen Erwachsenen auf einem Golfplatz. Die Teilnehmer posieren mit Golfschlägern vor einem bewaldeten Hintergrund."
        />
      </div>
    </Container>
  </>
);

export default Jugend;
