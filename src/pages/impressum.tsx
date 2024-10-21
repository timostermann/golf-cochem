import { type NextPage } from "next";
import { Meta } from "@/components/Meta";
import { Container } from "@/components/Container";

const Impressum: NextPage = () => (
  <>
    <Meta
      title="Impressum"
      description="Impressum der Golfclub Cochem/Mosel Webseite"
      robots="noindex, nofollow"
    />
    <Container>
      <div className="mx-auto mt-10 max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold">Impressum</h1>

        <h2 className="mt-6 text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
        <span className="mt-2">
          Golfclub Cochem/Mosel e.V.
          <br />
          Am Kellerborn 2<br />
          56814 Ediger-Eller
          <br />
          Deutschland
        </span>

        <h2 className="mt-6 text-xl font-semibold">Vertreten durch:</h2>
        <p className="mt-2">Manfred Ostermann (Präsident)</p>

        <h2 className="mt-6 text-xl font-semibold">Kontakt:</h2>
        <p className="mt-2">
          Telefon: +49 (0) 26 75 / 911 511
          <br />
          E-Mail:&nbsp;
          <a
            href="mailto:praesident@golfcochem.eu"
            className="text-blue-500 underline"
          >
            praesident@golfcochem.eu
          </a>
        </p>

        <h2 className="mt-6 text-xl font-semibold">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p className="mt-2">Jannik Oster (Club Manager)</p>

        <h2 className="mt-6 text-xl font-semibold">Kontakt:</h2>
        <p className="mt-2">
          Telefon: +49 (0) 26 75 / 911 511
          <br />
          E-Mail:&nbsp;
          <a
            href="mailto:jannik.oster@golfcochem.eu"
            className="text-blue-500 underline"
          >
            jannik.oster@golfcochem.eu
          </a>
        </p>
      </div>
    </Container>
  </>
);

export default Impressum;
