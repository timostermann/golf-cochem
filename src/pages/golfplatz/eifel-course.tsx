import { type NextPage } from "next";
import Image from "next/image";
import eifelCourse from "~/public/images/eifel-course.jpg";

import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Tabs } from "@/components/Tabs";

const Eifelcourse: NextPage = () => {
  return (
    <>
      <Container
        className="relative"
        aria-labelledby="hero"
        margin={ContainerMargin.MD}
      >
        <div className="mt-24 flex flex-col gap-3">
          <Headline
            tag={HeadlineTag.H1}
            variant={HeadlineVariant.PRIMARY}
            id="hero"
          >
            Der Eifel Course
          </Headline>

          <p className="-order-1 font-semibold text-primary-500">Golfplatz</p>
          <p className="my-4 max-w-[700px] text-lg text-gray-500">
            Der 9-Loch Kurzplatz des Golfclub Cochem/Mosel e.V.
          </p>

          <Tabs defaultIndex={0}>
            <Tabs.List>
              <Tabs.Tab>Beschreibung</Tabs.Tab>
              <Tabs.Tab>Bahnen im Detail</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel className="mt-16 flex flex-col gap-8 md:flex-row">
                <div className="flex flex-col gap-3">
                  <Headline
                    tag={HeadlineTag.H2}
                    variant={HeadlineVariant.SECONDARY}
                  >
                    Der perfekte 9-Loch Kurzplatz für spannende Golfrunden in
                    der malerischen Eifel
                  </Headline>

                  <p className="-order-1 font-semibold text-primary-500">
                    Über den Eifel Course
                  </p>
                  <p className="mt-8 max-w-[700px] text-lg text-gray-500">
                    Der Eifelcourse, ein malerischer 9-Loch Kurzplatz des
                    Golfclub Cochem/Mosel e.V., bietet Golfern aller
                    Spielstärken eine einzigartige Gelegenheit, ihr Können zu
                    verbessern und gleichzeitig die atemberaubende Landschaft
                    der Eifel zu genießen. Dieser Platz ist besonders geeignet
                    für Anfänger, die ihre ersten Schritte im Golfsport machen
                    möchten, ebenso wie für erfahrene Spieler, die ihr Kurzspiel
                    verfeinern wollen.
                    <br />
                    <br />
                    Er besticht durch seine sorgfältig gestalteten Bahnen, die
                    in die natürliche Schönheit der Eifel eingebettet sind. Die
                    abwechslungsreichen Löcher fordern sowohl Präzision als auch
                    Strategie und bieten eine hervorragende Möglichkeit, das
                    eigene Spiel in einer entspannten Umgebung zu
                    perfektionieren. Mit einer Mischung aus kurzen Par-3 und
                    Par-4 Löchern ist der Eifelcourse ideal für eine schnelle
                    Runde Golf oder als Ergänzung zum umfangreicheren
                    Moselcourse.
                    <br />
                    <br />
                    Besuchen Sie den Eifelcourse des Golfclub Cochem/Mosel e.V.
                    und erleben Sie Golfen in einer der schönsten Regionen
                    Deutschlands. Ob für eine schnelle Runde nach der Arbeit
                    oder als Teil eines längeren Aufenthalts – der Eifelcourse
                    bietet für jeden Golfliebhaber das perfekte Golferlebnis.
                  </p>
                </div>
                <Image
                  className="mt-6 object-contain object-top md:min-w-[40%] md:max-w-[40%]"
                  src={eifelCourse}
                  alt="Eifel Course Übersicht"
                  aria-hidden
                />
              </Tabs.Panel>
              <Tabs.Panel className="mt-16">
                <Headline
                  tag={HeadlineTag.H2}
                  variant={HeadlineVariant.SECONDARY}
                >
                  Bahnen im Detail
                </Headline>
                <p className="text-lg text-gray-500">
                  Hier können Sie detaillierte Informationen zu den einzelnen
                  Bahnen des Eifel Course finden. (Fügen Sie hier die
                  spezifischen Details für jede Bahn ein.)
                </p>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default Eifelcourse;
