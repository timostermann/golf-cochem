import { type NextPage } from "next";
import drivingRange from "~/public/images/driving-range.jpg";
import { ImageStage } from "@/components/ImageStage";
import { Meta } from "@/components/Meta";
import { ContainerMargin } from "@/components/Container";

const DrivingRange: NextPage = () => (
  <>
    <Meta
      title="Driving Range"
      description="Die doppelstöckige Driving Range mit mehr als 50 Abschlagsplätzen, wovon
        die Hälfte überdacht ist, verfügt neben drei Ballautomaten über eine
        leistungsstarke Flutlichtanlage."
    />
    <ImageStage
      src={drivingRange}
      alt=""
      title="Driving Range"
      margin={ContainerMargin.SM}
      imageClassName="lg:aspect-[8/9] object-cover object-[70%_80%]"
    >
      <p className="text-lg text-gray-500">
        Beste Voraussetzungen für ein gelungenes Training!
        <br />
        <br />
        Die doppelstöckige Driving Range mit mehr als 50 Abschlagsplätzen, wovon
        die Hälfte überdacht ist, verfügt neben drei Ballautomaten über eine
        leistungsstarke Flutlichtanlage.
        <br />
        <br />
        So können Sie das gesamte knapp 250 Meter lange Spielfeld von früh
        morgens bis spät abends bestens einsehen. Dasselbe gilt für unser
        großzügiges Putting-Grün: Training vor oder nach der Arbeit? Selbst bei
        Dunkelheit kein Problem.Außerdem stehen Ihnen zwei
        Chipping-/Pitching-Grüns samt Übungsbunker zur Verfügung.
      </p>
    </ImageStage>
  </>
);

export default DrivingRange;
