import { type NextPage } from "next";
import trackmanFamily from "~/public/images/trackman-family.jpg";
import { ImageStage } from "@/components/ImageStage";
import { Meta } from "@/components/Meta";
import { ContainerMargin } from "@/components/Container";

const Indoor: NextPage = () => (
  <>
    <Meta
      title="Indoor Golf"
      description="Erlebe das ultimative Indoor-Golferlebnis mit unserer hochmodernen TrackMan-Anlage! Verbessere dein Spiel ganzjährig unter optimalen Bedingungen und analysiere jeden Schlag präzise dank modernster Technologie. Perfekt für Anfänger und Profis, die ihr Spiel auf das nächste Level heben möchten."
    />
    <ImageStage
      src={trackmanFamily}
      alt=""
      title="Indoor Golf"
      margin={ContainerMargin.SM}
      imageClassName="lg:aspect-[8/9] object-cover object-[70%_80%]"
    >
      <p className="text-lg text-gray-500">
        Erlebe das ultimative Indoor-Golferlebnis mit unserer hochmodernen
        TrackMan-Anlage!
        <br />
        <br />
        Unsere erstklassige Indoor-TrackMan-Anlage bietet dir die Möglichkeit,
        dein Golfspiel das ganze Jahr über in einer komfortablen und
        kontrollierten Umgebung zu verbessern. Mit der fortschrittlichen
        TrackMan-Technologie werden alle Aspekte deines Schwungs präzise
        analysiert und detaillierte Daten in Echtzeit bereitgestellt. Dies
        umfasst Schlägerkopfgeschwindigkeit, Ballflug, Spinrate und vieles mehr,
        um dir einen umfassenden Einblick in dein Spiel zu geben.
        <br />
        <br />
        Egal, ob du ein Anfänger bist, der die Grundlagen erlernen möchte, oder
        ein erfahrener Golfer, der seine Technik verfeinern will, unsere
        TrackMan-Anlage hilft dir, gezielt an deinen Stärken und Schwächen zu
        arbeiten. Unsere Einrichtung bietet zudem die Möglichkeit, verschiedene
        virtuelle Golfplätze weltweit zu spielen, was das Training
        abwechslungsreich und spannend gestaltet.
        <br />
        <br />
        Darüber hinaus stehen dir unsere professionellen Trainer zur Seite, um
        die Analyseergebnisse zu interpretieren und individuelle Trainingspläne
        zu erstellen. Verbessere dein Spiel effizient und effektiv mit der
        besten verfügbaren Technologie in einer angenehmen Indoor-Umgebung.
        Besuche uns und entdecke, wie TrackMan dein Golfspiel auf ein neues
        Niveau heben kann!
      </p>
    </ImageStage>
  </>
);

export default Indoor;
