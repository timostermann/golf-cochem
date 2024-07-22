import { type NextPage } from "next";
import Image from "next/image";
import felix from "~/public/images/team/felix-gruenhaeuser.webp";
import jannik from "~/public/images/team/jannik-oster.webp";
import manuela from "~/public/images/team/manuela-eiden.webp";
import reimund from "~/public/images/team/reimund-widmayer.jpeg";
import ulrike from "~/public/images/team/ulrike-rummel.webp";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Tabs } from "@/components/Tabs";
import { Meta } from "@/components/Meta";

const Team: NextPage = () => {
  const teamMembers = [
    {
      name: "Jannik Oster",
      role: "Club Manager",
      image: jannik,
    },
    {
      name: "Ulrike Rummel",
      role: "Sekretariat",
      image: ulrike,
    },
    {
      name: "Manuela Eiden",
      role: "Sekretariat",
      image: manuela,
    },
    {
      name: "Reimund Widmayer",
      role: "Sekretariat",
      image: reimund,
    },
    {
      name: "Felix Grünhäuser",
      role: "Marshall & in Ausbildung zum PGA Professionell",
      image: felix,
    },
  ];

  return (
    <>
      <Meta
        title="Team und Vorstand"
        description="Die Menschen hinter dem Golfclub Cochem/Mosel e.V."
      />
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
            Team und Vorstand
          </Headline>

          <p className="-order-1 font-semibold text-primary-600">Über uns</p>
          <p className="my-4 max-w-[700px] text-lg text-gray-500">
            Lörem ipsum previs gigon och niviktig, desamma. Dekalått maktiga ost
            tigt deheten. Telebäsm bena, ten. Tregijyna nepredin inte tegilaskap
            dipödat julära. Rening ifåjuna. Infrassade tektig inte birigt och
            neling i tejyledes gässa.
          </p>

          <Tabs defaultIndex={0}>
            <Tabs.List>
              <Tabs.Tab>Unser Team</Tabs.Tab>
              <Tabs.Tab>Vorstand</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panels>
              <Tabs.Panel className="mt-16 flex flex-col gap-8 md:flex-row">
                <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {teamMembers.map((member) => (
                    <li
                      key={member.name}
                      className="flex max-w-96 flex-col gap-1 xl:w-full"
                    >
                      <Headline
                        tag={HeadlineTag.H3}
                        variant={HeadlineVariant.QUINARY}
                        className="mt-2 text-primary-800 xl:mt-4"
                      >
                        {member.name}
                      </Headline>
                      <Image
                        src={member.image}
                        alt=""
                        className="-order-1 h-72 w-full object-cover"
                      />
                      <p className="font-light text-primary-600">
                        {member.role}
                      </p>
                    </li>
                  ))}
                </ul>
              </Tabs.Panel>
              <Tabs.Panel className="mt-16 flex flex-col gap-8 md:flex-row">
                <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {teamMembers.map((member) => (
                    <li
                      key={member.name}
                      className="flex max-w-96 flex-col gap-1 xl:w-full"
                    >
                      <Headline
                        tag={HeadlineTag.H3}
                        variant={HeadlineVariant.QUINARY}
                        className="mt-2 text-primary-800 xl:mt-4"
                      >
                        {member.name}
                      </Headline>
                      <Image
                        src={member.image}
                        alt=""
                        className="-order-1 h-72 w-full object-cover"
                      />
                      <p className="font-light text-primary-600">
                        {member.role}
                      </p>
                    </li>
                  ))}
                </ul>
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default Team;
