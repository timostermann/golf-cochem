import { type NextPage } from "next";
import Image from "next/image";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { platzreifeFaq } from "@/data/faq.data";
import { Accordion } from "@/components/Accordion";
import dgv from "~/public/images/dgv.webp";

const Platzreife: NextPage = () => (
  <>
    <Meta
      title="Platzreife"
      description="Basierend auf Ihren individuellen Fähigkeiten begleiten wir Sie zur Platzreife. In kleinen Gruppen wird intensiv geübt, mit Spaß und Freude."
    />
    <Container
      aria-labelledby="platzreife"
      className="bg-gray-50"
      innerClassName="flex flex-col max-lg:items-center lg:flex-row lg:justify-between py-20 lg:py-28"
      margin={ContainerMargin.NONE}
    >
      <div className="flex flex-col">
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
      </div>
      <Image
        src={dgv}
        alt="Deutscher Golf Verband Logo"
        className="size-[200px] rounded-full"
      />
    </Container>
    <Container
      aria-labelledby="faq"
      innerClassName="flex flex-col items-center mt-20"
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="faq"
      >
        Antworten auf Eure Fragen
      </Headline>
      <p className="mb-12 mt-6 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
        Alles was du über deinen Platzreifekurs wissen musst
      </p>
      <ul className="w-full max-w-[768px]">
        {platzreifeFaq.map(({ question, answer }) => (
          <li key={question} className="mb-16 w-full">
            <Accordion summary={question}>{answer}</Accordion>
          </li>
        ))}
      </ul>
    </Container>
  </>
);

export default Platzreife;
