import { type HeaderProps } from "@/components/Header";
import { Icons } from "@/icons/icons";

export const headerData: HeaderProps = {
  navAriaLabelOpen: "open",
  navAriaLabelClose: "close",
  homeHref: "/",
  items: [
    {
      label: "labels.golfClub",
      subItems: [
        {
          label: "labels.blog",
          href: "/blog",
          description: "descriptions.blog",
          icon: Icons.blog,
        },
        {
          label: "labels.membership",
          href: "/mitgliedschaft",
          description: "descriptions.membership",
          icon: Icons.member,
        },
        {
          label: "labels.teams",
          href: "/mannschaften",
          description: "descriptions.teams",
          icon: Icons.team,
        },
        {
          label: "labels.events",
          href: "/events",
          description: "descriptions.events",
          icon: Icons.calendar,
        },
      ],
    },
    {
      label: "labels.golfField",
      subItems: [
        {
          label: "labels.moselCourse",
          href: "/mosel-course",
          description: "descriptions.moselCourse",
          icon: Icons.moselCourse,
        },
        {
          label: "labels.eifelCourse",
          href: "/eifel-course",
          description: "descriptions.eifelCourse",
          icon: Icons.eifelCourse,
        },
        {
          label: "labels.footgolf",
          href: "/footgolf",
          description: "descriptions.footgolf",
          icon: Icons.soccer,
        },
        {
          label: "labels.drivingRange",
          href: "/driving-range",
          description: "descriptions.drivingRange",
          icon: Icons.golf,
        },
        {
          label: "labels.fieldInformation",
          href: "/platzinformationen",
          description: "descriptions.fieldInformation",
          icon: Icons.greenkeeper,
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
          href: "/trainer",
          description: "descriptions.trainer",
          icon: Icons.trainer,
        },
        {
          label: "labels.license",
          href: "/dgv-platzreife",
          description: "descriptions.license",
          icon: Icons.certificate,
        },
        {
          label: "labels.tasterCourse",
          href: "/schnupperkurse",
          description: "descriptions.tasterCourse",
          icon: Icons.golfBag,
        },
        {
          label: "labels.parentalTraining",
          href: "/elterntraining",
          description: "descriptions.parentTraining",
          icon: Icons.parentTraining,
        },
        {
          label: "labels.groupTraining",
          href: "/gruppentraining",
          description: "descriptions.groupTraining",
          icon: Icons.group,
        },
        {
          label: "labels.bundeswehr",
          href: "/bundeswehr",
          description: "descriptions.bundeswehr",
          icon: Icons.star,
        },
      ],
    },
    {
      label: "labels.guests",
      href: "/gaeste",
    },
    {
      label: "labels.about",
      href: "/ueber-uns",
    },
  ],
};
