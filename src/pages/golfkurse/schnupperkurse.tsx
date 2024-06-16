import { type NextPage } from "next";
import { Meta } from "@/components/Meta";
import { Container } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";

const Schnupperkurse: NextPage = () => (
  <>
    <Meta
      title="Schnupperkurse"
      description="Erfahren Sie wie erfrischend der Golfsport sein kann. Erleben Sie diesen anspruchsvollen Sport in einer der schönsten Flusslandschaften Deutschlands."
    />
    <Container
      aria-labelledby="schnupperkurse"
      innerClassName="flex flex-col pt-20 lg:pt-28"
    >
      <Headline
        tag={HeadlineTag.H1}
        variant={HeadlineVariant.PRIMARY}
        id="schnupperkurse"
      >
        Schnupperkurse
      </Headline>
      <p aria-hidden className="-order-1 mb-3 text-primary-600">
        Golfkurse
      </p>
      <p className="my-10 max-w-[768px] text-pretty text-gray-500 lg:text-xl">
        Erfahren Sie wie erfrischend der Golfsport sein kann. Erleben Sie diesen
        anspruchsvollen Sport in einer der schönsten Flusslandschaften
        Deutschlands.
        <br />
        <br />
        Aller Anfang ist leicht! Im Schnupperkurs lernen Sie zunächst alle
        Facetten der Faszination Golf kennen. Der Schnupperkurs des GolfClubs
        Cochem/Mosel e.V. ist für Golfschüler konzipiert, die den Golfsport
        zunächst unverbindlich kennenlernen möchten. Golf ist eine der
        abwechslungsreichsten und vielseitigsten Sportarten. Im Rahmen des
        Schnupperkurses können Sie zunächst einmal herausfinden, ob der
        Golfsport passend für Sie wäre. Unter Anleitung unserer erfahrenen
        Golflehrer werden Ihnen auf der Driving Range (Golf Übungsanlage) die
        wichtigsten Golf Basiselemente wie Putten, Chippen und Grundschwung
        vermittelt. Für Ihren Golf Schnupperkurs benötigen Sie keinerlei
        Golferfahrung. Sportlich-bequeme Kleidung sowie bequeme Sportschuhe
        reichen vollkommen aus. Die Ausrüstung stellen wir. Unsere lizensierten
        Trainer begleiten Sie vom ersten Schritt bis zur ersten Runde auf dem
        Eifel Course.
        <br />
        <br />
        Golf Schnupperkurs – probieren Sie es aus!
      </p>
    </Container>
  </>
);

export default Schnupperkurse;
