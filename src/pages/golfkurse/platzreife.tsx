import { type NextPage } from "next";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";

const Platzreife: NextPage = () => (
  <>
    <Meta
      title="Platzreife"
      description="Basierend auf Ihren individuellen Fähigkeiten begleiten wir Sie zur Platzreife. In kleinen Gruppen wird intensiv geübt, mit Spaß und Freude."
    />
    <Container
      aria-labelledby="platzreife"
      className="bg-gray-50"
      innerClassName="flex flex-col py-20 lg:py-28"
      margin={ContainerMargin.NONE}
    >
      <Headline
        tag={HeadlineTag.H1}
        variant={HeadlineVariant.PRIMARY}
        id="platzreife"
      >
        DGV-Platzreifekurs
      </Headline>
      <p aria-hidden className="-order-1 mb-3 text-primary-600">
        Golfkurse
      </p>
      <p className="my-10 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
        Ihr Entschluss steht fest, jetzt fehlt nur noch die Anmeldung.
        <br />
        <br />
        Dann sind Sie hier bei uns genau richtig! Basierend auf Ihren
        individuellen Fähigkeiten begleiten wir Sie zur Platzreife. In kleinen
        Gruppen wird intensiv geübt, mit Spaß und Freude. Mit dem notwendigen
        Ernst bei der Sache und in lockerer Atmosphäre lässt sich der Kurs
        mühelos absolvieren.
        <br />
        <br />
        Auf geht&apos;s, wir freuen uns auf Sie.
      </p>
    </Container>
  </>
);

export default Platzreife;
