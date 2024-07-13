import { type NextPage } from "next";
import Image from "next/image";
import moselCourse from "~/public/images/mosel-course.jpg";

import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";

const Moselcourse: NextPage = () => {
  return (
    <>
      <Container
        className="relative"
        aria-labelledby="hero"
        margin={ContainerMargin.MD}
      >
        <div className="mt-24 flex flex-row gap-8">
          <div className="flex flex-col gap-3">
            <Headline
              tag={HeadlineTag.H3}
              variant={HeadlineVariant.SECONDARY}
              id="hero"
            >
              Der Mosel Course bietet alles, was das Golferherz höher schlägen
              lässt
            </Headline>
            <div className="flex flex-row rounded-lg border border-gray-200 bg-gray-100">
              <ul className="flex flex-wrap gap-2">
                <li>
                  <button
                    onClick={() => {}}
                    className="m-1 rounded-lg bg-white px-6 py-3 text-lg text-gray-700 shadow-md"
                  >
                    Beschreibung
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {}}
                    className="m-1 rounded-lg px-6 py-3 text-lg text-gray-500 hover:text-gray-700 hover:shadow-md"
                  >
                    Bahnen im Detail
                  </button>
                </li>
              </ul>
            </div>
            <p className="-order-1 font-semibold text-primary-500">
              Über den Mosel Course
            </p>
            <p className="mt-8 max-w-[700px] text-lg text-gray-500">
              Wenn Sie schon ein erfahrener Spieler sind, dann bietet der
              überarbeitete 18-Loch-Golfplatz eine willkommene Abwechslung. Der
              Platz wird täglich von professionellen Greenkeeper mit Liebe zum
              Detail gepflegt und bietet dadurch eine ausgezeichnete Qualität.
              <br />
              <br />
              Schnelle und spurtreue Grüns, gut platzierte Bunker und
              ausreichend Wasserflächen, sowie viele Biotope bilden den Reiz für
              diesen „naturnahen Platz“. <br />
              <br />
              Auf der Suche nach Herausforderungen?
              <br />
              <br />
              Dann ist dieser Course für Sie genau das Richtige. Die
              Höhenunterschiede des 18-Loch Platzes bringen Sie sicherlich
              sportlich wie technisch ins Schwitzen. <br />
              <br />
              Gerade Schläge helfen sicherlich für einen guten Score, denn
              Schräglagen findet man ebenso, wie Rough unterschiedlicher Höhen.
              Also aufgepasst, jeder Schlag sollte sitzen! <br />
              <br />
              Und sollte mal ein Schlag daneben gehen, was soll’s. Der Spaß
              steht im Vordergrund, die Aussicht kann man genießen und mit den
              Golfcarts lassen sich alle Höhenunterschiede spielend leicht
              bewältigen. Das absolute Highlight dieses Platzes sind natürlich
              die atemberaubende Ausblicke auf das Moselhochplateau, der
              Eifelblick und die Ruhe auf dem Platz.
              <br />
              <br />
              Kommen & genießen. Wir freuen uns auf Sie.
            </p>
          </div>
          <Image
            className="mt-6"
            src={moselCourse}
            alt="Mosel Course Übersicht"
            aria-hidden
            height="800"
          />
        </div>
      </Container>
    </>
  );
};

export default Moselcourse;
