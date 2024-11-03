import { type ReactNode } from "react";

export type MembershipData = {
  title: string;
  description?: ReactNode;
  benefits: ReactNode[];
  priceData: { price: number; description: ReactNode }[];
};

export const membershipData: MembershipData[] = [
  {
    title: "Vollmitgliedschaft",
    benefits: [
      <>
        <span className="font-bold">Uneingeschränktes Spielrecht</span> auf
        Mosel- und Eifelcourse
      </>,
      "DGV-Mitgliedsausweis",
      "Inklusive Handicapführung",
      "Kostenfreies Spielen auf über 50 Golfanlagen in Deutschland",
      "(U18) inklusive Basis-Jugendtraining",
    ],
    priceData: [
      { price: 1275, description: "Erwachsene" },
      {
        price: 795,
        description: (
          <>
            Neumitglieder <wbr />
            <span className="font-light">
              (im ersten Jahr, Vertragslaufzeit: 2 Jahre)
            </span>
          </>
        ),
      },
      {
        price: 1020,
        description: (
          <>
            Ehepartner/Lebensgefährten{" "}
            <span className="font-light">eines Vollmitglieds</span>
          </>
        ),
      },
      {
        price: 775,
        description: (
          <>
            Junge Erwachsene <span className="font-light">(26-35 Jahre)</span>
          </>
        ),
      },
      {
        price: 390,
        description: (
          <>
            Jugend/Student <span className="font-light">(18-25 Jahre)</span>
          </>
        ),
      },
      {
        price: 230,
        description: (
          <>
            Kinder <span className="font-light">(13-17 Jahre)</span>
          </>
        ),
      },
      {
        price: 90,
        description: (
          <>
            Kinder
            <span className="font-light"> (bis 12 Jahre)</span>
          </>
        ),
      },
    ],
  },
  {
    title: "Teilmitgliedschaft Montag-Freitag",
    benefits: [
      <>
        <span className="font-bold">Uneingeschränktes Spielrecht</span> auf
        Mosel- und Eifelcourse von Montag bis Freitag
      </>,
      "DGV-Mitgliedsausweis",
      "Inklusive Handicapführung",
      "Nutzung am Wochenende oder an Feiertagen gegen Greenfee mit 20% Rabatt",
    ],
    priceData: [{ price: 975, description: "Erwachsene" }],
  },
  {
    title: "Teilmitgliedschaft Vielbeschäftigte",
    benefits: [
      <>
        Inklusive 18er Stempelkarte pro Jahr -<br />1 Stempel pro 9-Loch-Runde,
        2 Stempel pro 18-Loch-Runde
      </>,
      "DGV-Mitgliedsausweis",
      "Inklusive Handicapführung",
      "20% Rabatt für jede weitere Nutzung",
    ],
    priceData: [{ price: 535, description: "Erwachsene" }],
  },
  {
    title: "Zweitmigliedschaft",
    benefits: [
      <>
        <span className="font-bold">Uneingeschränktes Spielrecht</span> auf
        Mosel- und Eifelcourse
      </>,
      "Vollmitgliedschaft in einem anderen Golfclub",
      "Mindestentfernung zum Hauptwohnsitz 50 km",
    ],
    priceData: [{ price: 675, description: "Erwachsene" }],
  },
  {
    title: "Fernmitgliedschaft",
    benefits: [
      "2 x 18-Loch Greenfee-Gutschein pro Jahr",
      "20% Rabatt für jede weitere Nutzung",
      "DGV-Mitgliedsausweis",
      "Inklusive Handicapführung",
      "Mindestentfernung zum Hauptwohnsitz 50 km",
    ],
    priceData: [{ price: 273, description: "Erwachsene" }],
  },
  {
    title: "Eifelcourse Mitgliedschaft",
    benefits: [
      <>
        <span className="font-bold">Uneingeschränktes Spielrecht</span> auf dem
        Eifelcourse
      </>,
      "20% Rabatt für jede weitere Nutzung",
    ],
    priceData: [
      {
        price: 299,
        description: (
          <>
            Erwachsene im 1. Jahr{" "}
            <span className="font-light">
              (Beitrag erhöht sich jährlich um 100 €)
            </span>
          </>
        ),
      },
    ],
  },
];
