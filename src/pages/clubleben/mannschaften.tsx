import { type NextPage } from "next";
import Image from "next/image";
import mannschaftHerren from "~/public/images/mannschaft-herren.jpg";
import mannschaftHerrenAk50I from "~/public/images/mannschaft-herren-ak50.webp";
import mannschaftHerrenAk50II from "~/public/images/mannschaft-herren-ak50-ii.jpg";
import mannschaftHerrenAk65 from "~/public/images/mannschaft-herren-ak65.jpg";

import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Tabs } from "@/components/Tabs";
import { Meta } from "@/components/Meta";

const Mannschaften: NextPage = () => {
  return (
    <>
      <Meta
        title="Mannschaften"
        description="Der Golfclub Cochem/Mosel e.V. ist mit vier Mannschaften im Golfverband Rheinland-Pfalz aktiv."
      />
      <Container
        className="relative"
        aria-labelledby="hero"
        margin={ContainerMargin.MD}
      >
        <div className="mt-12 flex flex-col gap-3 sm:mt-20 lg:mt-24">
          <Headline
            tag={HeadlineTag.H1}
            variant={HeadlineVariant.PRIMARY}
            id="hero"
          >
            Unsere Mannschaften
          </Headline>

          <p className="-order-1 font-semibold text-primary-600">
            Mannschaften
          </p>
          <p className="my-4 max-w-[700px] text-lg text-gray-500">
            Mit derzeit vier Mannschaften ist der GC Cochem/Mosel e.V. im
            Golfverband Rheinland-Pflaz aktiv. Dies ist ein deutliches Zeichen
            für ambitioniertes Golf, in freundschaftlicher und angenehmer
            Atmosphäre. Neben der sportlichen Herausforderung in den Ligaspielen
            ist das Kennenlernen „fremder Plätze“ natürlich auch ein Anreiz,
            sich in den Dienst einer Mannschaft zu stellen. Gerne können
            Neumitglieder:innen Teil der Mannschaften werden.
            <br />
            <br />
            Meldet Euch bei den entsprechenden Personen oder informiert Euch
            direkt über das Sekretariat.
          </p>

          <Tabs defaultIndex={0}>
            <Tabs.List>
              <Tabs.Tab>Herren</Tabs.Tab>
              <Tabs.Tab>Herren AK 50 I</Tabs.Tab>
              <Tabs.Tab>Herren AK 50 II</Tabs.Tab>
              <Tabs.Tab>Herren AK 65</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel className="mt-16 flex flex-col gap-8 md:flex-row">
                <div className="flex flex-col gap-3">
                  <Headline
                    tag={HeadlineTag.H2}
                    variant={HeadlineVariant.SECONDARY}
                  >
                    DGL Gruppenliga Herren
                  </Headline>

                  <p className="-order-1 font-semibold text-primary-600">
                    Herren
                  </p>
                  <p className="mt-8 max-w-[700px] text-lg text-gray-500">
                    Die Golf Region4 organisiert für den Deutschen Golfverband
                    als Unterbau der Deutschen Golfliga (DGL) die Gruppenliga.
                    Die Gruppenliga soll dabei möglichst analog zu den DGL-Ligen
                    ausgetragen werden.
                    <br />
                    <br />
                    Captain:
                    <br />
                    Patrick Cussen
                    <br />
                    <br />
                    Spielerkader:
                    <br />
                    Pascal Rudorfer, Alex Nitsche, Leon Schubert, Frank
                    Schubert, Holger Kiesewetter, Felix Grünhäuser, Christian
                    Bamberger, Niclas Moser, Jonas Fuchs, Matthias Laumeyer,
                    Jannik Oster, Daniel Fischer, Gianluka Bach
                  </p>
                </div>
                <Image
                  className="mt-6 object-contain object-top md:max-w-[40%]"
                  src={mannschaftHerren}
                  alt="Mannschaftsfoto Herren"
                  aria-hidden
                />
              </Tabs.Panel>
              <Tabs.Panel className="mt-16 flex flex-col gap-8 md:flex-row">
                <div className="flex flex-col gap-3">
                  <Headline
                    tag={HeadlineTag.H2}
                    variant={HeadlineVariant.SECONDARY}
                  >
                    Herren AK 50 I
                  </Headline>

                  <p className="-order-1 font-semibold text-primary-600">
                    Herren AK 50 I
                  </p>
                  <p className="mt-8 max-w-[700px] text-lg text-gray-500">
                    Die Herren AK 50 Mannschaft des Golfclub Cochem/Mosel e.V.
                    besteht aus erfahrenen und leidenschaftlichen Golfern, die
                    das 50. Lebensjahr vollendet haben. Die Spieler zeichnen
                    sich durch ihr hohes spielerisches Niveau und ihre
                    langjährige Erfahrung aus. Mit viel Teamgeist und Engagement
                    treten sie in verschiedenen Wettbewerben und Liga-Spielen
                    an, um den Golfclub würdig zu vertreten und Erfolge zu
                    erzielen. Das regelmäßige Training und die Teilnahme an
                    Turnieren fördern nicht nur den sportlichen Ehrgeiz, sondern
                    auch den sozialen Zusammenhalt und die Freude am Golfsport.
                    <br />
                    <br />
                    Captain:
                    <br />
                    TBD
                    <br />
                    <br />
                    Spielerkader:
                    <br />
                    TBD
                  </p>
                </div>
                <Image
                  className="mt-6 object-contain object-top md:max-w-[40%]"
                  src={mannschaftHerrenAk50I}
                  alt="Mannschaftsfoto Herren AK 50 I"
                  aria-hidden
                />
              </Tabs.Panel>
              <Tabs.Panel className="mt-16 flex flex-col gap-8 md:flex-row">
                <div className="flex flex-col gap-3">
                  <Headline
                    tag={HeadlineTag.H2}
                    variant={HeadlineVariant.SECONDARY}
                  >
                    Herren AK 50 II
                  </Headline>

                  <p className="-order-1 font-semibold text-primary-600">
                    Herren AK 50 II
                  </p>
                  <p className="mt-8 max-w-[700px] text-lg text-gray-500">
                    Die Herren AK 50 Mannschaft des Golfclub Cochem/Mosel e.V.
                    besteht aus erfahrenen und leidenschaftlichen Golfern, die
                    das 50. Lebensjahr vollendet haben. Die Spieler zeichnen
                    sich durch ihr hohes spielerisches Niveau und ihre
                    langjährige Erfahrung aus. Mit viel Teamgeist und Engagement
                    treten sie in verschiedenen Wettbewerben und Liga-Spielen
                    an, um den Golfclub würdig zu vertreten und Erfolge zu
                    erzielen. Das regelmäßige Training und die Teilnahme an
                    Turnieren fördern nicht nur den sportlichen Ehrgeiz, sondern
                    auch den sozialen Zusammenhalt und die Freude am Golfsport.
                    <br />
                    <br />
                    Captain:
                    <br />
                    TBD
                    <br />
                    <br />
                    Spielerkader:
                    <br />
                    TBD
                  </p>
                </div>
                <Image
                  className="mt-6 object-contain object-top md:max-w-[40%]"
                  src={mannschaftHerrenAk50II}
                  alt="Mannschaftsfoto Herren AK 50 II"
                  aria-hidden
                />
              </Tabs.Panel>
              <Tabs.Panel className="mt-16 flex flex-col gap-8 md:flex-row">
                <div className="flex flex-col gap-3">
                  <Headline
                    tag={HeadlineTag.H2}
                    variant={HeadlineVariant.SECONDARY}
                  >
                    Herren AK 65
                  </Headline>

                  <p className="-order-1 font-semibold text-primary-600">
                    Herren AK 65
                  </p>
                  <p className="mt-8 max-w-[700px] text-lg text-gray-500">
                    Die Herren AK 65 Mannschaft des Golfclub Cochem/Mosel e.V.
                    setzt sich aus passionierten Golfern zusammen, die das 65.
                    Lebensjahr vollendet haben. Diese Mannschaft kombiniert
                    Erfahrung, taktisches Geschick und den ungebrochenen
                    Enthusiasmus für den Golfsport. Mit viel Teamgeist und
                    Einsatzbereitschaft treten sie in regionalen und
                    überregionalen Wettkämpfen an, um ihren Club stolz zu
                    vertreten. Das regelmäßige Training und die Teilnahme an
                    Turnieren stärken nicht nur das sportliche Können, sondern
                    fördern auch den kameradschaftlichen Zusammenhalt innerhalb
                    des Teams.
                    <br />
                    <br />
                    Captain:
                    <br />
                    TBD
                    <br />
                    <br />
                    Spielerkader:
                    <br />
                    TBD
                  </p>
                </div>
                <Image
                  className="mt-6 object-contain object-top md:max-w-[40%]"
                  src={mannschaftHerrenAk65}
                  alt="Mannschaftsfoto Herren AK 65"
                  aria-hidden
                />
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default Mannschaften;
