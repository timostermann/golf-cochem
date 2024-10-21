import { type HeaderProps } from "@/components/Header";
import {
  Blog,
  Certificate,
  Contact,
  EifelCourse,
  Golf,
  GolfBag,
  Greenkeeper,
  Group,
  Member,
  MoselCourse,
  ParentTraining,
  Soccer,
  Team,
  Temperature,
  Trainer,
} from "@/icons";

export const headerData: HeaderProps = {
  homeHref: "/",
  items: [
    {
      label: "labels.golfClub",
      subItems: [
        {
          label: "labels.blog",
          href: "/clubleben/news",
          description: "descriptions.blog",
          icon: <Blog />,
        },
        {
          label: "labels.membership",
          href: "/clubleben/mitgliedschaft",
          description: "descriptions.membership",
          icon: <Member />,
        },
        {
          label: "labels.teams",
          href: "/clubleben/mannschaften",
          description: "descriptions.teams",
          icon: <Group />,
        },
        {
          label: "labels.partner",
          href: "/clubleben/partner",
          description: "descriptions.partner",
          icon: <Group />,
        },
      ],
    },
    {
      label: "labels.golfField",
      subItems: [
        {
          label: "labels.moselCourse",
          href: "/golfanlage/mosel-course",
          description: "descriptions.moselCourse",
          icon: <MoselCourse />,
        },
        {
          label: "labels.eifelCourse",
          href: "/golfanlage/eifel-course",
          description: "descriptions.eifelCourse",
          icon: <EifelCourse />,
        },
        {
          label: "labels.footgolf",
          href: "/golfanlage/footgolf",
          description: "descriptions.footgolf",
          icon: <Soccer />,
        },
        {
          label: "labels.drivingRange",
          href: "/golfanlage/driving-range",
          description: "descriptions.drivingRange",
          icon: <Golf />,
        },
        {
          label: "labels.indoorgolf",
          href: "/golfanlage/indoorgolf",
          description: "descriptions.indoorgolf",
          icon: <Temperature />,
        },
        {
          label: "labels.fieldInformation",
          href: "/golfanlage/platzinformationen",
          description: "descriptions.fieldInformation",
          icon: <Greenkeeper />,
        },
      ],
    },
    {
      label: "labels.golfCourses",
      subItems: [
        {
          label: "labels.trainer",
          href: "/golferlernen/trainer",
          description: "descriptions.trainer",
          icon: <Trainer />,
        },
        {
          label: "labels.license",
          href: "/golferlernen/platzreife",
          description: "descriptions.license",
          icon: <Certificate />,
        },
        {
          label: "labels.tasterCourse",
          href: "/golferlernen/schnupperkurse",
          description: "descriptions.tasterCourse",
          icon: <GolfBag />,
        },
        {
          label: "labels.parentalTraining",
          href: "/golferlernen/elterntraining",
          description: "descriptions.parentalTraining",
          icon: <ParentTraining />,
        },
      ],
    },
    {
      label: "labels.footgolf",
      href: "/partner",
    },
    {
      label: "labels.youth",
      href: "/jugend",
    },
    {
      label: "labels.guests",
      subItems: [
        {
          label: "labels.pricings",
          href: "/gaeste/preisuebersicht",
          icon: <Team />,
          description: "descriptions.pricings",
        },
        {
          label: "labels.cooperations",
          href: "/gaeste/kooperationen",
          icon: <Team />,
          description: "descriptions.cooperations",
        },
        {
          label: "labels.hotels",
          href: "/gaeste/hotels",
          icon: <Team />,
          description: "descriptions.hotels",
        },
        {
          label: "labels.camping",
          href: "/gaeste/camping",
          icon: <Team />,
          description: "descriptions.camping",
        },
      ],
    },
    {
      label: "labels.about",
      subItems: [
        {
          label: "labels.team",
          href: "/ueber-uns/team",
          icon: <Team />,
          description: "descriptions.team",
        },
        {
          label: "labels.contact",
          href: "/ueber-uns/kontakt",
          icon: <Contact />,
          description: "descriptions.contact",
        },
      ],
    },
  ],
};
