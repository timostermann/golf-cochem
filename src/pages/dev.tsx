import { type NextPage } from "next";
import { Button, ButtonVariant } from "@/components/Button";
import { Container } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { StatusCard } from "@/components/StatusCard";
import { Address, Blog } from "@/icons";
import { ImageTeaserCard } from "@/components/ImageTeaserCard";
import { BorderTeaserCard } from "@/components/BorderTeaserCard";

const Dev: NextPage = () => {
  return (
    <Container innerClassName="flex flex-col gap-16 py-12">
      <div className="flex flex-col gap-4">
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
      <div className="flex gap-4">
        <Button>Primary Button</Button>
        <Button variant={ButtonVariant.SECONDARY}>Secondary Button</Button>
      </div>
      <div className="flex gap-4">
        <StatusCard open icon={<Address />}>
          Open Court
        </StatusCard>
        <StatusCard open={false} closedUntil="22.06." icon={<Blog />}>
          Closed Court
        </StatusCard>
      </div>
      <div className="flex gap-4">
        <ImageTeaserCard
          category="Golfclub"
          title="Glücklich und zufrieden! - Kanada brachte neue Erkenntnisse"
          summary="Bundestrainer zufrieden und mit einem klaren Plan für das Wintertraining."
          date="2023-10-07T00:00:00Z"
          image={{
            src: "https://picsum.photos/800/400",
            alt: "Golfclub",
            width: 800,
            height: 400,
          }}
          href=""
          author="Ulrike Rummel"
          authorImage={{
            src: "https://picsum.photos/100",
            alt: "Ulrike Rummel",
            width: 100,
            height: 100,
          }}
        />
        <ImageTeaserCard
          category="Golfplatz"
          title="Was ist Footgolf?"
          summary="Die Trendsportart jetzt bei uns im Club. Komm noch heute vorbei uns probiere es aus."
          date="2023-10-06T00:00:00Z"
          image={{
            src: "https://picsum.photos/800/400",
            alt: "Golfplatz",
            width: 800,
            height: 400,
          }}
          href=""
          author="Manuela Eiden"
          authorImage={{
            src: "https://picsum.photos/100",
            alt: "Manuela Eiden",
            width: 100,
            height: 100,
          }}
        />
        <ImageTeaserCard
          category="Golfclub"
          title="Unsere neue Website"
          summary="Wir haben eine neue Website!"
          date="2023-10-04T00:00:00Z"
          image={{
            src: "https://picsum.photos/800/400",
            alt: "Golfclub",
            width: 800,
            height: 400,
          }}
          href=""
          author="Ulrike Rummel"
          authorImage={{
            src: "https://picsum.photos/100",
            alt: "Ulrike Rummel",
            width: 100,
            height: 100,
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <BorderTeaserCard
          title="Mosel Course"
          summary="Professioneller, naturnaher 18-Loch-Platz"
          linkLabel="Mehr erfahren"
          href=""
        />
        <BorderTeaserCard
          title="Eifel Course"
          summary="9-Loch Platz, der ohne DGV-Ausweis gespielt werden kann"
          linkLabel="Mehr erfahren"
          href=""
        />
        <BorderTeaserCard
          title="Footgolf"
          summary="Der Spaß für die gesamte Familie"
          linkLabel="Mehr erfahren"
          href=""
        />
        <BorderTeaserCard
          title="Driving Range"
          summary="Überdachte Abschlagboxen"
          linkLabel="Mehr erfahren"
          href=""
        />
      </div>
    </Container>
  );
};

export default Dev;
