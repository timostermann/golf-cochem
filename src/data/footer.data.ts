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
          href: "/clubleben/mitgliedschaft",
        },
        {
          label: "Mannschaften",
          href: "/clubleben/mannschaften",
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
          href: "/golfplatz/mosel-course",
        },
        {
          label: "Eifel Course",
          href: "/golfplatz/eifel-course",
        },
        {
          label: "Footgolf",
          href: "/golfplatz/footgolf",
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
          label: "DGV Platzreife",
          href: "/platzreife",
        },
        {
          label: "Schnupperkurse",
          href: "/schnupperkurse",
        },
        {
          label: "Elterntraining",
          href: "/golfkurse/elterntraining",
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
