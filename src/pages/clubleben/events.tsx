import { type NextPage } from "next";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Iframe } from "@/components/Iframe";
import { Button, ButtonVariant } from "@/components/Button";
import { Download } from "@/icons";

const Events: NextPage = () => (
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
          id="events"
        >
          Event & Turnierkalender 2024
        </Headline>
        <p aria-hidden className="-order-1 mb-3 text-primary-600">
          Events und Turniere
        </p>
        <p className="my-10 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
          Das Golfjahr 2024 bietet wieder eine Vielzahl interessanter Turniere.
          Neue Turniere mit unseren Sponsoren, Anreize für unsere jüngsten
          Golfer und jede Menge Abwechslung.
          <br />
          <br />
          Melde dich noch heute zu deinem nächsten Turnier an!
        </p>
        <Button
          href="/documents/Rahmenausschreibung-GC-Cochem-Mosel-e.V.pdf"
          className="inline-flex gap-2 pl-4"
          target="_blank"
          variant={ButtonVariant.TERTIARY}
        >
          <Download className="mt-px size-5" /> Rahmenausschreibung des
          Golfclubs <span className="sr-only">herunterladen</span>
        </Button>
      </div>
    </Container>
    <Container
      aria-labelledby="faq"
      innerClassName="items-center mt-12 sm:mt-20"
    >
      <Iframe src="https://www.pccaddie.net/clubs/0495536/app.php?cat=ts_calendar" />
    </Container>
  </>
);

export default Events;
