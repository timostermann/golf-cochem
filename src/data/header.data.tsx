import { type HeaderProps } from "@/components/Header";
import {
  Blog,
  Calendar,
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
          label: "labels.events",
          href: "/events",
          description: "descriptions.events",
          icon: <Calendar />,
        },
      ],
    },
    {
      label: "labels.golfField",
      subItems: [
        {
          label: "labels.moselCourse",
          href: "/golfplatz/mosel-course",
          description: "descriptions.moselCourse",
          icon: <MoselCourse />,
        },
        {
          label: "labels.eifelCourse",
          href: "/golfplatz/eifel-course",
          description: "descriptions.eifelCourse",
          icon: <EifelCourse />,
        },
        {
          label: "labels.footgolf",
          href: "/golfplatz/footgolf",
          description: "descriptions.footgolf",
          icon: <Soccer />,
        },
        {
          label: "labels.drivingRange",
          href: "/golfplatz/driving-range",
          description: "descriptions.drivingRange",
          icon: <Golf />,
        },
        {
          label: "labels.fieldInformation",
          href: "/golfplatz/platzinformationen",
          description: "descriptions.fieldInformation",
          icon: <Greenkeeper />,
        },
      ],
    },
    {
      label: "labels.youth",
      href: "/jugend",
    },
    {
      label: "labels.golfCourses",
      subItems: [
        {
          label: "labels.trainer",
          href: "/golfkurse/trainer",
          description: "descriptions.trainer",
          icon: <Trainer />,
        },
        {
          label: "labels.license",
          href: "/golfkurse/platzreife",
          description: "descriptions.license",
          icon: <Certificate />,
        },
        {
          label: "labels.tasterCourse",
          href: "/golfkurse/schnupperkurse",
          description: "descriptions.tasterCourse",
          icon: <GolfBag />,
        },
        {
          label: "labels.parentalTraining",
          href: "/golfkurse/elterntraining",
          description: "descriptions.parentalTraining",
          icon: <ParentTraining />,
        },
      ],
    },
    {
      label: "labels.partner",
      href: "/partner",
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
