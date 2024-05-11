import { group } from "console";
import { type FooterProps } from "@/components/Footer";
import { type HeaderProps } from "@/components/Header";
import { useTranslations } from "next-intl";

const t = useTranslations("nav");

const headerData: HeaderProps = {
  navAriaLabelOpen: t("open"),
  navAriaLabelClose: t("close"),
  homeHref: "/",
  items: [
    {
      label: t("labels.golfClub"),
      subItems: [
        {
          label: t("labels.blog"),
          href: "/blog",
          description: t("descriptions.blog"),
          icon: blog,
        },
        {
          label: t("labels.membership"),
          href: "/mitgliedschaft",
          description: t("descriptions.membership"),
          icon: member,
        },
        {
          label: t("labels.teams"),
          href: "/mannschaften",
          description: t("descriptions.teams"),
          icon: team,
        },
        {
          label: t("labels.events"),
          href: "/events",
          description: t("descriptions.events"),
          icon: calendar,
        },
      ],
    },
    {
      label: t("labels.golfField"),
      subItems: [
        {
          label: t("labels.moselCourse"),
          href: "/mosel-course",
          description: t("descriptions.moselCourse"),
          icon: moselCourse,
        },
        {
          label: t("labels.eifelCourse"),
          href: "/eifel-course",
          description: t("descriptions.eifelCourse"),
          icon: eifelCourse,
        },
        {
          label: t("labels.footgolf"),
          href: "/footgolf",
          description: t("descriptions.footgolf"),
          icon: soccer,
        },
        {
          label: t("labels.drivingRange"),
          href: "/driving-range",
          description: t("descriptions.drivingRange"),
          icon: golf,
        },
        {
          label: t("labels.fieldInformation"),
          href: "/platzinformationen",
          description: t("descriptions.fieldInformation"),
          icon: greenkeeper,
        },
      ],
    },
    {
      label: t("labels.youth"),
      href: "/jugend",
    },
    {
      label: t("labels.golfCourses"),
      subItems: [
        {
          label: t("labels.trainer"),
          href: "/trainer",
          description: t("descriptions.trainer"),
          icon: trainer,
        },
        {
          label: t("labels.license"),
          href: "/dgv-platzreife",
          description: t("descriptions.license"),
          icon: certificate,
        },
        {
          label: t("labels.tasterCourse"),
          href: "/schnupperkurse",
          description: t("descriptions.tasterCourse"),
          icon: golfBag,
        },
        {
          label: t("labels.parentalTraining"),
          href: "/elterntraining",
          description: t("descriptions.parentTraining"),
          icon: parentTraining,
        },
        {
          label: t("labels.groupTraining"),
          href: "/gruppentraining",
          description: t("descriptions.groupTraining"),
          icon: group,
        },
        {
          label: t("labels.bundeswehr"),
          href: "/bundeswehr",
          description: t("descriptions.bundeswehr"),
          icon: star,
        },
      ],
    },
    {
      label: t("labels.guests"),
      href: "/gaeste",
    },
    {
      label: t("labels.about"),
      href: "/ueber-uns",
    },
  ],
};

const footerData: FooterProps = {
  columns: [
    {
      title: "Clubleben",
      links: [
        {
          label: "News",
          href: "/blog",
        },
        {
          label: "Mitgliedschaft",
          href: "/mitgliedschaft",
        },
        {
          label: "Mannschaften",
          href: "/mannschaften",
        },
        {
          label: "Events & Turniere",
          href: "/events",
        },
      ],
    },
    {
      title: "Golfplatz",
      links: [
        {
          label: "Mosel Course",
          href: "/mosel-course",
        },
        {
          label: "Eifel Course",
          href: "/eifel-course",
        },
        {
          label: "Footgolf",
          href: "/footgolf",
        },
        {
          label: "Driving Range",
          href: "/driving-range",
        },
        {
          label: "Platzinformationen",
          href: "/platzinformationen",
        },
      ],
    },
    {
      title: "Jugend",
      links: [
        {
          label: "Golfcamps",
          href: "/golfcamps",
        },
        {
          label: "Schulsport",
          href: "/schulsport",
        },
      ],
    },
    {
      title: "Golfkurse",
      links: [
        {
          label: "Trainer",
          href: "/trainer",
        },
        {
          label: "DVG Platzreife",
          href: "/dgv-platzreife",
        },
        {
          label: "Schnupperkurse",
          href: "/schnupperkurse",
        },
        {
          label: "Elterntraining",
          href: "/elterntraining",
        },
        {
          label: "Gruppentraining",
          href: "/gruppentraining",
        },
        {
          label: "Bundeswehr",
          href: "/bundeswehr",
        },
      ],
    },
  ],
  lastRowLinks: [
    {
      label: "Impressum",
      href: "/impressum",
    },
    {
      label: "Datenschutzerklärung",
      href: "/datenschutz",
    },
  ],
};
