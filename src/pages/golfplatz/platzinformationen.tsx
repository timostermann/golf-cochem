import { type GetStaticProps, type NextPage } from "next";
import { Container, ContainerMargin } from "@/components/Container";
import { StatusCard } from "@/components/StatusCard";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { EifelCourse, Golf, MoselCourse, Soccer } from "@/icons";
import { Meta } from "@/components/Meta";
import { revalidate } from "@/lib/constants";
import { fetchApi } from "@/lib/strapi";
import { type OpeningTime } from "@/lib/dto/openingtime.type";

const Icons = {
  MoselCourse: MoselCourse,
  EifelCourse: EifelCourse,
  Soccer: Soccer,
  Golf: Golf,
};

type PlatzinformationenProps = {
  statusCards: {
    icon: keyof typeof Icons;
    title: string;
    open?: boolean;
    until?: string;
  }[];
};

const Platzinformationen: NextPage<PlatzinformationenProps> = ({
  statusCards,
}) => (
  <>
    <Meta
      title="Platzinformationen"
      description="Informationen zu den Golfplätzen des Golfclub Cochem/Mosel e.V."
    />
    <Container
      className="relative"
      aria-labelledby="hero"
      margin={ContainerMargin.MD}
    >
      <div className="mt-12 flex flex-col gap-3 sm:mt-24">
        <Headline
          tag={HeadlineTag.H1}
          variant={HeadlineVariant.PRIMARY}
          id="hero"
        >
          Platzinformationen
        </Headline>
        <p className="-order-1 font-semibold text-primary-600">Golfplatz</p>
        <p className="mt-8 max-w-[700px] text-lg text-gray-500">
          Nutzen Sie den Greenfeekasten neben der Eingangstür, falls das Büro
          nicht besetzt sein sollte.
          <br />
          <br />
          Die Driving Range ist immer montags von 16:00 Uhr bis dienstags 9:00
          Uhr gesperrt, zwecks Mäharbeiten etc.
          <br />
          <br />
          Bitte unbedingt vorher anfragen, ob das Befahren des Golfplatzes mit
          Carts möglich ist.
        </p>
      </div>
      <div className="mt-16 flex w-fit flex-col rounded-xl bg-primary-100 p-5">
        <Headline
          tag={HeadlineTag.H2}
          variant={HeadlineVariant.QUINARY}
          className="mb-2 font-normal text-primary-800"
        >
          Unsere Öffnungszeiten
        </Headline>
        <p className="text-sm text-primary-600">
          Täglich von 09:00 bis 17:00 Uhr
        </p>
      </div>
      <ul className="mb-8 mt-12 flex flex-wrap gap-10">
        {statusCards.map((card) => {
          const Icon = Icons[card.icon];
          return (
            <li key={card.title}>
              <StatusCard
                icon={<Icon />}
                open={card.open}
                until={card.until}
                className="!shadow-none"
              >
                {card.title}
              </StatusCard>
            </li>
          );
        })}
      </ul>
    </Container>
  </>
);

export default Platzinformationen;

export const getStaticProps: GetStaticProps<
  PlatzinformationenProps
> = async () => {
  const statusCardData = await fetchApi<OpeningTime[]>({
    endpoint: "/openingtimes",
  });

  const moselCourse = statusCardData.find(
    (data) => data.name === "Mosel Course",
  );
  const eifelCourse = statusCardData.find(
    (data) => data.name === "Eifel Course",
  );
  const footgolf = statusCardData.find((data) => data.name === "Footgolf");
  const drivingRange = statusCardData.find(
    (data) => data.name === "Driving Range",
  );

  return {
    props: {
      statusCards: [
        {
          icon: "MoselCourse",
          title: "Mosel Course",
          open: moselCourse?.isOpen,
          until: moselCourse?.until,
        },
        {
          icon: "EifelCourse",
          title: "Eifel Course",
          open: eifelCourse?.isOpen,
          until: eifelCourse?.until,
        },
        {
          icon: "Soccer",
          title: "Footgolf",
          open: footgolf?.isOpen,
          until: footgolf?.until,
        },
        {
          icon: "Golf",
          title: "Driving Range",
          open: drivingRange?.isOpen,
          until: drivingRange?.until,
        },
      ],
    },
    revalidate,
  };
};
