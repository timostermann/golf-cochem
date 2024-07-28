import { type NextPage } from "next";
import Image from "next/image";
import eifelCourse from "~/public/images/eifel-course.jpg";

import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Tabs } from "@/components/Tabs";
import { Meta } from "@/components/Meta";
import { eifelcourseDetails } from "@/data/coursedetails.data";
import { Iframe } from "@/components/Iframe";

const Eifelcourse: NextPage = () => {
  return (
    <>
      <Meta
        title="Eifel Course"
        description="Der 9-Loch Kurzplatz des Golfclub Cochem/Mosel e.V."
      />
      <Container
        className="relative"
        aria-labelledby="hero"
        margin={ContainerMargin.MD}
      >
        <div className="mb-12 mt-12 flex flex-col gap-3 sm:mt-24">
          <Headline
            tag={HeadlineTag.H1}
            variant={HeadlineVariant.PRIMARY}
            id="hero"
          >
            Der Eifel Course
          </Headline>

          <p className="-order-1 font-semibold text-primary-600">Golfplatz</p>
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

                  <p className="-order-1 font-semibold text-primary-600">
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
                  alt=""
                  loading="eager"
                />
              </Tabs.Panel>
              <Tabs.Panel className="mt-16">
                <p className="mb-4 font-medium text-primary-600">Bahnen</p>
                <Tabs orientation="vertical" defaultIndex={0}>
                  <Tabs.List>
                    {eifelcourseDetails.map(({ name }) => (
                      <Tabs.Tab key={"eifelcourse-" + name}>{name}</Tabs.Tab>
                    ))}
                  </Tabs.List>
                  <Tabs.Panels>
                    {eifelcourseDetails.map(
                      ({ name, description, image, youtubeId }) => (
                        <Tabs.Panel
                          key={"eifelcourse-panel-" + name}
                          className="flex flex-col gap-12 md:ml-4 lg:ml-16 lg:px-4 xl:px-16"
                        >
                          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                            <div className="flex flex-1 flex-col gap-3 md:gap-4">
                              <Headline
                                tag={HeadlineTag.H2}
                                variant={HeadlineVariant.TERTIARY}
                              >
                                {name}
                              </Headline>
                              <p className="text-gray-500">{description}</p>
                            </div>
                            <Image src={image} alt={"Eifelcourse " + name} />
                          </div>
                          {youtubeId && (
                            <Iframe
                              title={name}
                              youtubeId={youtubeId}
                              className="-order-1"
                            />
                          )}
                        </Tabs.Panel>
                      ),
                    )}
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

export default Eifelcourse;
