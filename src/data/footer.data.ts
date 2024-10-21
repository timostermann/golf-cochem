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
      title: "Golfanlage",
      links: [
        {
          label: "Mosel Course",
          href: "/golfanlage/mosel-course",
        },
        {
          label: "Eifel Course",
          href: "/golfanlage/eifel-course",
        },
        {
          label: "Footgolf",
          href: "/golfanlage/footgolf",
        },
        {
          label: "Driving Range",
          href: "/golfanlage/driving-range",
        },
        {
          label: "Platzinformationen",
          href: "/golfanlage/platzinformationen",
        },
      ],
    },
    {
      title: "Golf erlenen",
      links: [
        {
          label: "Trainer",
          href: "/golferlernen/trainer",
        },
        {
          label: "DGV Platzreife",
          href: "/golferlernen/platzreife",
        },
        {
          label: "Schnupperkurse",
          href: "/golferlernen/schnupperkurse",
        },
        {
          label: "Elterntraining",
          href: "/golferlernen/elterntraining",
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
