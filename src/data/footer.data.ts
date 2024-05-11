import { type FooterProps } from "@/components/Footer";

export const footerData: FooterProps = {
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
