import { type FooterProps } from "@/components/Footer";

export const footerData: FooterProps = {
  columns: [
    {
      title: "Clubleben",
      links: [
        {
          label: "News",
          href: "/news",
        },
        {
          label: "Mitgliedschaft",
          href: "/clubleben/mitgliedschaft",
        },
        {
          label: "Mannschaften",
          href: "/clubleben/mannschaften",
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
          href: "/golfplatz/driving-range",
        },
        {
          label: "Platzinformationen",
          href: "/golfplatz/platzinformationen",
        },
      ],
    },
    {
      title: "Golfkurse",
      links: [
        {
          label: "Trainer",
          href: "/golfkurse/trainer",
        },
        {
          label: "DGV Platzreife",
          href: "/golfkurse/platzreife",
        },
        {
          label: "Schnupperkurse",
          href: "/golfkurse/schnupperkurse",
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
