import { type NextPage } from "next";
import jugend from "~/public/images/jugend-spielt-golf.webp";
import { ImageStage } from "@/components/ImageStage";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";

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
        Golfbällen kostenlos und unverbindlich zu den o.a. Zeiten ausprobieren.{" "}
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
            Bambini Training (4-7 Jahre)
          </Headline>
          <p className="text-gray-500">Freitags 17:00 - 18:00 Uhr</p>
        </div>
        <div className="flex flex-col gap-2">
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.QUINARY}>
            Jugend Training
          </Headline>
          <p className="text-gray-500">
            Donnerstags 17:00 - 18:30 Uhr <br />
            Freitags 14:30 - 16:00 Uhr
          </p>
        </div>
        <div className="relative flex flex-col gap-2 before:absolute before:inset-0 before:-z-10 before:min-h-[5.5rem] before:max-w-80 before:-translate-x-3 before:-translate-y-3 before:rounded-lg before:bg-primary-100 before:content-['']">
          <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.QUINARY}>
            Treffpunkt
          </Headline>
          <p className="text-primary-700">Driving Range</p>
        </div>
      </div>
    </Container>
  </>
);

export default Jugend;
