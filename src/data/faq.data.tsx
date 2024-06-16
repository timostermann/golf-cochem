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
