import { type NextPage } from "next";
import put from "~/public/images/put.jpg";
import { ImageStage } from "@/components/ImageStage";
import { Button } from "@/components/Button";
import { Meta } from "@/components/Meta";

const NotFound: NextPage = () => (
  <>
    <Meta title="Seite nicht gefunden" description="" />
    <ImageStage src={put} alt="" title="Seite nicht gefunden">
      <p className="text-lg text-gray-500">
        Leider konnten wir die Seite nicht finden. Bitte überprüfen Sie die URL
        oder kehren Sie zur Startseite zurück.
      </p>
      <Button href="/" className="mt-8">
        Zur Startseite
      </Button>
    </ImageStage>
  </>
);

export default NotFound;
