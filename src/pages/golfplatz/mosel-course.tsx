import { type NextPage } from "next";
import Image from "next/image";
import moselCourse from "~/public/images/mosel-course.jpg";

import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Tabs } from "@/components/Tabs";
import { Meta } from "@/components/Meta";
import { moselcourseDetails } from "@/data/coursedetails.data";

const Moselcourse: NextPage = () => {
  return (
    <>
      <Meta
        title="Mosel Course"
        description="Der Mosel Course des Golfclub Cochem/Mosel e.V."
      />
      <Container
        className="relative"
        aria-labelledby="hero"
        margin={ContainerMargin.MD}
      >
        <div className="mb-12 mt-24 flex flex-col gap-3">
          <Headline
            tag={HeadlineTag.H1}
            variant={HeadlineVariant.PRIMARY}
            id="hero"
          >
            Der Mosel Course
          </Headline>

          <p className="-order-1 font-semibold text-primary-600">Golfplatz</p>
          <p className="my-4 max-w-[700px] text-lg text-gray-500">
            Professioneller, naturnaher 18-Loch Platz
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
                    Der Mosel Course bietet alles, was das Golferherz höher
                    schlägen lässt
                  </Headline>

                  <p className="-order-1 font-semibold text-primary-600">
                    Über den Mosel Course
                  </p>
                  <p className="mt-8 max-w-[700px] text-lg text-gray-500">
                    Wenn Sie schon ein erfahrener Spieler sind, dann bietet der
                    überarbeitete 18-Loch-Golfplatz eine willkommene
                    Abwechslung. Der Platz wird täglich von professionellen
                    Greenkeeper mit Liebe zum Detail gepflegt und bietet dadurch
                    eine ausgezeichnete Qualität.
                    <br />
                    <br />
                    Schnelle und spurtreue Grüns, gut platzierte Bunker und
                    ausreichend Wasserflächen, sowie viele Biotope bilden den
                    Reiz für diesen „naturnahen Platz.“ <br />
                    <br />
                    Auf der Suche nach Herausforderungen?
                    <br />
                    <br />
                    Dann ist dieser Course für Sie genau das Richtige. Die
                    Höhenunterschiede des 18-Loch Platzes bringen Sie sicherlich
                    sportlich wie technisch ins Schwitzen. <br />
                    <br />
                    Gerade Schläge helfen sicherlich für einen guten Score, denn
                    Schräglagen findet man ebenso, wie Rough unterschiedlicher
                    Höhen. Also aufgepasst, jeder Schlag sollte sitzen! <br />
                    <br />
                    Und sollte mal ein Schlag daneben gehen, was soll&apos;s.
                    Der Spaß steht im Vordergrund, die Aussicht kann man
                    genießen und mit den Golfcarts lassen sich alle
                    Höhenunterschiede spielend leicht bewältigen. Das absolute
                    Highlight dieses Platzes sind natürlich die atemberaubende
                    Ausblicke auf das Moselhochplateau, der Eifelblick und die
                    Ruhe auf dem Platz.
                    <br />
                    <br />
                    Kommen & genießen. Wir freuen uns auf Sie.
                  </p>
                </div>
                <Image
                  className="mt-6 object-contain object-top md:max-w-[40%]"
                  src={moselCourse}
                  alt="Mosel Course Übersicht"
                  aria-hidden
                />
              </Tabs.Panel>
              <Tabs.Panel className="mt-16">
                <p className="mb-4 font-medium text-primary-600">Bahnen</p>
                <Tabs orientation="vertical" defaultIndex={0}>
                  <Tabs.List>
                    {moselcourseDetails.map(({ name }) => (
                      <Tabs.Tab key={"moselcourse-" + { name }}>
                        {name}
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                  <Tabs.Panels>
                    {moselcourseDetails.map(({ name, description, image }) => (
                      <Tabs.Panel key={"moselcourse-panel-" + { name }}>
                        {description}
                        <Image src={image} alt={"Moselcourse" + { name }} />
                      </Tabs.Panel>
                    ))}
                  </Tabs.Panels>
                </Tabs>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default Moselcourse;
