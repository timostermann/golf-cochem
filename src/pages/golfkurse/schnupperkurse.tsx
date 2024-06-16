import { type NextPage } from "next";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";

const Schnupperkurse: NextPage = () => (
  <>
    <Meta
      title="Schnupperkurse"
      description="Erfahren Sie wie erfrischend der Golfsport sein kann. Erleben Sie diesen anspruchsvollen Sport in einer der schönsten Flusslandschaften Deutschlands."
    />
    <Container
      aria-labelledby="schnupperkurse"
      className="bg-gray-50"
      innerClassName="flex flex-col py-20 lg:py-28"
      margin={ContainerMargin.NONE}
    >
      <Headline
        tag={HeadlineTag.H1}
        variant={HeadlineVariant.PRIMARY}
        id="schnupperkurse"
      >
        Schnupperkurse
      </Headline>
    </Container>
  </>
);

export default Schnupperkurse;
