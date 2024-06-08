import { type NextPage } from "next";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Button, ButtonVariant } from "@/components/Button";

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
          href="/golfkurse/dgv-platzreife"
          className="max-xs:!w-full"
        >
          Platzreifekurs
        </Button>
      </div>
    </Container>
  </>
);

export default Trainer;
