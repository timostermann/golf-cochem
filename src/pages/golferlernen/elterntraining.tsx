import { type NextPage } from "next";
import parentTraining from "~/public/images/parent-training.jpg";
import { ImageStage } from "@/components/ImageStage";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Accordion } from "@/components/Accordion";
import { parentTrainingFaq } from "@/data/faq.data";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";

const Elterntraining: NextPage = () => (
  <>
    <Meta
      title="Elterntraining"
      description="Lerne Golf gemeinsam mit deinen Kindern – unser einzigartiges Elternprogramm bietet dir alles, was du brauchst, um das Spiel zu genießen und zur Platzreife zu gelangen, und das zu einem unschlagbaren Preis!"
    />
    <ImageStage
      src={parentTraining}
      alt=""
      title="Elterntraining"
      margin={ContainerMargin.SM}
      imageClassName="lg:aspect-[8/9] object-cover object-[70%_80%]"
    >
      <p className="text-lg text-gray-500">
        Während die Kleinsten begeistert trainieren, haben auch die Eltern jetzt
        die perfekte Gelegenheit, dass Golfspiel zu erlernen. Speziell für die
        engagierten „Taxieltern“ haben wir ein einzigartiges Konzept entwickelt,
        das Euch garantiert begeistern wird. Immer wenn die Kinder zum
        Golftraining erscheinen, könnt auch Ihr unter der fachkundigen Anleitung
        eines Trainers die ersten Erfahrungen sammeln.
        <br />
        <br />
        Unsere exklusive Elternkarte umfasst nicht nur die Ausrüstung, sondern
        auch alle benötigten Rangebälle – und das zu einem unschlagbaren Preis!
        So entspannt und gemeinsam mit Deinen Kindern kann der Weg zur
        Platzreife sein. Genieße die Zeit auf dem Grün und wachse mit jeder
        Stunde in diese faszinierende Sportart hinein. Erlebe, wie Golfen zu
        einem Familienabenteuer wird!
      </p>
    </ImageStage>
    <Container
      aria-labelledby="faq"
      innerClassName="flex flex-col items-center mt-8"
    >
      <Headline
        tag={HeadlineTag.H2}
        variant={HeadlineVariant.SECONDARY}
        id="faq"
      >
        Antworten auf deine Fragen
      </Headline>
      <p className="mb-12 mt-6 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
        Alles was du über eine Mitgliedschaft wissen musst
      </p>
      <ul className="w-full max-w-[768px]">
        {parentTrainingFaq.map(({ question, answer }) => (
          <li key={question} className="mb-16 w-full">
            <Accordion summary={question}>{answer}</Accordion>
          </li>
        ))}
      </ul>
    </Container>
  </>
);

export default Elterntraining;
