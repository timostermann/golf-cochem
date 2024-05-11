import { type NextPage } from "next";
import { Button, ButtonVariant } from "@/components/Button";
import { Container } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { StatusCard } from "@/components/StatusCard";
import { Icons } from "@/icons/icons";

const Dev: NextPage = () => {
  return (
    <Container innerClassName="flex flex-col gap-16 py-12">
      <div className="flex flex-col gap-4 px-4">
        <Headline tag={HeadlineTag.H1} variant={HeadlineVariant.HERO}>
          Hero Headline
        </Headline>
        <Headline tag={HeadlineTag.H1} variant={HeadlineVariant.PRIMARY}>
          Primary Headline
        </Headline>
        <Headline tag={HeadlineTag.H2} variant={HeadlineVariant.SECONDARY}>
          Secondary Headline
        </Headline>
        <Headline tag={HeadlineTag.H3} variant={HeadlineVariant.TERTIARY}>
          Tertiary Headline
        </Headline>
        <Headline tag={HeadlineTag.H4} variant={HeadlineVariant.QUATERNARY}>
          Quaternary Headline
        </Headline>
        <Headline tag={HeadlineTag.H5} variant={HeadlineVariant.QUINARY}>
          Quinary Headline
        </Headline>
      </div>
      <div className="flex gap-4 px-4">
        <Button>Primary Button</Button>
        <Button variant={ButtonVariant.SECONDARY}>Secondary Button</Button>
      </div>
      <div className="flex gap-4 px-4">
        <StatusCard open icon={Icons.address}>
          Open Court
        </StatusCard>
        <StatusCard open={false} closedUntil="22.06." icon={Icons.address}>
          Closed Court
        </StatusCard>
      </div>
    </Container>
  );
};

export default Dev;
