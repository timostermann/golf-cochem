import { type ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

export const platzreifeFaq: FaqItem[] = [
  {
    question: "Allgemeines zur Golf Platzreife",
    answer: (
      <>
        Fast jeder Golfanfänger, der sich für den Golfsport interessiert, steht
        vor denselben Fragen: Was genau ist die Golf Platzreife und wozu
        benötige ich diese? Was kostet ein Platzreifekurs? Brauche ich eine
        eigene Golfausrüstung? Muss ich Mitglied in einem Club sein? etc. etc.
        <br />
        <br />
        Wer sich entschieden hat mit dem Golfen anzufangen, sollte zunächst
        einen Platzreifekurs ablegen. Denn dieser und eine Golfmitgliedschaft
        sind Voraussetzung, um auf dem Golfplatz spielen zu können. Als Golf
        Anfänger dürfen Sie die Übungsanlagen und die Kurzplätze jederzeit gegen
        Gebühr benutzen. Das Spiel auf dem Golfplatz ist aber all denjenigen
        vorbehalten, die eine Golf Mitgliedschaft abgeschlossen haben. Die
        Golfmitgliedschaft können Sie nur mit einer bestandenen
        Platzreifeprüfung abschließen. In diesem Zusammenhang ist es wichtig zu
        erwähnen, dass innerhalb des Hausrechts jeder Golfclub frei entscheiden
        kann, wer auf seinem Golfplatz spielen kann!
      </>
    ),
  },
];

export const membershipFaq: FaqItem[] = [
  {
    question: "Allgemeines zur Mitgliedschaft",
    answer: (
      <>
        Der Golfclub Cochem/Mosel e.V. bietet eine breite Palette an
        Mitgliedschaftsmodellen, um den unterschiedlichen Bedürfnissen und
        Vorlieben der Golfspieler gerecht zu werden. Dazu gehören:
        <br />
        <br />
        <ol>
          <li>
            Vollmitgliedschaft:
            <br />
            Ideal für diejenigen, die uneingeschränkten Zugang zu allen
            Clubanlagen und -events genießen möchten.
          </li>
          <br />
          <li>
            <p>
              Einsteigermitgliedschaft: <br />
              Eine kostengünstige Option für neue Mitglieder, die den Golfsport
              intensiv erleben möchten.
            </p>
          </li>
          <br />
          <li>
            <p>
              Partnertarife: <br />
              Ermäßigte Mitgliedschaften für Ehe- oder Lebenspartner:innen.
            </p>
          </li>{" "}
          <br />
          <li>
            <p>
              Eifel Course Mitgliedschaft: <br />
              Zugang zum 9-Loch-Kurzplatz, perfekt für gelegentliche Spieler
              oder als Zweitmitgliedschaft.
            </p>
          </li>{" "}
          <br />
          <li>
            <p>
              Fernmitgliedschaft: <br />
              Flexible Konditionen für Mitglieder, die weiter entfernt wohnen.
            </p>
          </li>{" "}
          <br />
          <li>
            <p>
              Jugendtarif: <br />
              Attraktive Tarife zur Förderung des Nachwuchses.
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "Wie kann ich Mitglied werden?",
    answer: <>Text</>,
  },
  {
    question: "Gibt es Rabatte für Ehepartner oder Lebenspartner?",
    answer: <>Text</>,
  },
  {
    question: "Welche Events und Turniere werden für Mitglieder angeboten?",
    answer: <>Text</>,
  },
  {
    question:
      "Welche Trainings- und Coaching-Möglichkeiten gibt es für Mitglieder?",
    answer: <>Text</>,
  },
  {
    question: "Gibt es spezielle Angebote für Kinder und Jugendliche?",
    answer: <>Text</>,
  },
  {
    question: "Wie kann ich meine Mitgliedschaft kündigen oder ändern?",
    answer: <>Text</>,
  },
];
