import { type NextPage } from "next";
import Image from "next/image";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Button, ButtonVariant } from "@/components/Button";
import felix from "~/public/images/team/felix-gruenhaeuser.webp";
import jannik from "~/public/images/team/jannik-oster.webp";
import wolf from "~/public/images/team/wolf-dieter-gotschlich.webp";
import { InfoCard } from "@/components/InfoCard";
import { Trainer as TrainerIcon, Contact } from "@/icons";

const Trainer: NextPage = () => (
  <>
    <Meta
      title="Trainer"
      description="Mit viel Spaß und Engagement kümmern sich unsere Trainer um Euer Spiel und vermitteln das Wissen kompetent und zielgerichtet."
    />
    <Container
      aria-labelledby="trainer"
      className="bg-gray-50"
      innerClassName="flex flex-col py-20 lg:py-28"
      margin={ContainerMargin.NONE}
    >
      <Headline
        tag={HeadlineTag.H1}
        variant={HeadlineVariant.PRIMARY}
        id="trainer"
      >
        Unsere Trainer
      </Headline>
      <p aria-hidden className="-order-1 mb-3 text-primary-600">
        Golfkurse
      </p>
      <p className="my-10 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
        Aller Anfang ist leicht , denn mit unseren engagierten und ausgebildeten
        Trainern gelingt der Einstieg in den Golfsport spielend. Mit viel Spaß
        und Engagement kümmern sich unsere Trainer um Euer Spiel und vermitteln
        das Wissen kompetent und zielgerichtet. Egal in welchem Alter man mit
        dem Golfsport beginnen will, ob Bambini, Jugend, Herren oder
        Seniorenbereich, im Golfclub Cochem/Mosel e.V. findet man immer
        Gleichgesinnte und neue Freunde, die sich gerne um Neumitglieder:innen
        kümmern. Genießt die ersten Runden auf unserem Platz in Begleitung eines
        Mitglieds, der Euch die Bahnen erläutert und mit Rat und Tat zur Stelle
        ist.
        <br />
        <br />
        Sofern Ihr möglicherweise eine Runde in Begleitung spielen möchtet,
        informiert Euch unser Clubsekretariat.Gerne erfüllen wir Euch diesen
        Wunsch.
        <br />
        <br />
        Leidenschaft trifft Gastfreundschaft! Probiert es aus. Wir freuen uns
        darauf, Euch kennenzulernen.
      </p>
      <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap md:gap-4">
        <Button
          variant={ButtonVariant.TERTIARY}
          href="/golfkurse/schnupperkurse"
          className="max-xs:!w-full"
        >
          Schnupperkurse
        </Button>
        <Button
          variant={ButtonVariant.PRIMARY}
          href="/golfkurse/platzreife"
          className="max-xs:!w-full"
        >
          Platzreifekurs
        </Button>
      </div>
    </Container>
    <Container aria-labelledby="gotschlich" className="mt-16">
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.TERTIARY}
        id="gotschlich"
      >
        Wolf-Dieter Gotschlich
      </Headline>
      <p className="my-8 text-gray-500">
        Fully Qualified Professional PGA Ausbilder
        <br />
        <span className="font-bold">Jeden Dienstag</span> auf unserer Anlage
      </p>
      <div className="gap-4 max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[300px_1fr]">
        <Image
          src={wolf}
          alt=""
          className="rounded-lg object-cover max-sm:h-[200px] max-sm:w-full sm:max-h-[240px]"
        />
        <ul className="gap-4 max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[repeat(auto-fill,max(40%,15rem))]">
          <li className="h-full">
            <InfoCard
              icon={<TrainerIcon />}
              title="Trainerstunden"
              className="h-full"
            >
              <ul className="list-disc pl-8 text-primary-600">
                <li>55 min 70,00 €</li>
                <li>25 min 40,00 €</li>
              </ul>
            </InfoCard>
          </li>
          <li className="h-full">
            <InfoCard icon={<Contact />} title="Kontakt" className="h-full">
              <ul className="text-primary-600">
                <li>wdg.golf@t-online.de</li>
                <li>0171 6972424</li>
              </ul>
            </InfoCard>
          </li>
        </ul>
      </div>
    </Container>
    <Container aria-labelledby="oster" className="mt-16">
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.TERTIARY}
        id="oster"
      >
        Jannik Oster
      </Headline>
      <p className="my-8 text-gray-500">
        Lizensierter DOSB C-Trainer Golf Breitensport
        <br />
        Dein Ansprechpartner für Platzreifekurse und Gruppentraining.
        Verantwortlicher Trainer für den Bambini- & Jugendbereich
      </p>
      <div className="gap-4 max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[300px_1fr]">
        <Image
          src={jannik}
          alt=""
          className="rounded-lg object-cover max-sm:h-[200px] max-sm:w-full sm:max-h-[240px]"
        />
        <ul className="gap-4 max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[repeat(auto-fill,max(40%,15rem))]">
          <li className="h-full">
            <InfoCard
              icon={<TrainerIcon />}
              title="Club Manager"
              className="h-full"
            >
              <p className="text-primary-600">Leitung Clubsekretariat</p>
            </InfoCard>
          </li>
          <li className="h-full">
            <InfoCard icon={<Contact />} title="Kontakt" className="h-full">
              <p className="text-primary-600">sekretariat@golfcochem.de</p>
            </InfoCard>
          </li>
        </ul>
      </div>
    </Container>
    <Container aria-labelledby="grunhauser" className="mt-16">
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.TERTIARY}
        id="grunhauser"
      >
        Felix Grünhäuser
      </Headline>
      <p className="my-8 text-gray-500">
        PGA-Assistant
        <br />
        In Ausbildung zum PGA Professional Lizensierter DOSB C-Trainer Golf
        Breitensport
        <br />
        <br />
        <span className="font-bold">
          Trainingszeiten:
          <br />
          Dienstag, Donnerstag,Freitag ab 13:00 Uhr
          <br />
          Samstag & Sonntag bis 13:00 Uhr
          <br />
        </span>
      </p>
      <div className="gap-4 max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[300px_1fr]">
        <Image
          src={felix}
          alt=""
          className="rounded-lg object-cover object-[50%_20%] max-sm:h-[200px] max-sm:w-full sm:max-h-[320px]"
        />
        <ul className="gap-4 max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-[repeat(auto-fill,max(40%,20rem))]">
          <li className="h-full">
            <InfoCard
              icon={<TrainerIcon />}
              title="Trainerstunden (von Anfänger bis HCP 36)"
              className="h-full"
            >
              <ul className="list-disc pl-8 text-primary-600">
                <li>55 min. 35€ / je weitere Person +5</li>
                <li>€25 min. 20€ / je weitere Person +5</li>
                <li>€10er Karte Einzeltraining 300,00€</li>
                <li>5er Karte Einzeltraining 165,00€</li>
                <li>Mit Trackman Indoor Simulator +10€</li>
              </ul>
            </InfoCard>
          </li>
          <li className="h-full">
            <InfoCard icon={<Contact />} title="Kontakt" className="h-full">
              <p className="text-primary-600">
                felix.gruenhaeuser@golfcochem.eu
              </p>
            </InfoCard>
          </li>
        </ul>
      </div>
    </Container>
  </>
);

export default Trainer;
