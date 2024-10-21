import { type StaticImageData } from "next/image";
import { type ReactNode } from "react";
import mhole1 from "~/public/images/moselcourse/hole_1_moselcourse.webp";
import mhole2 from "~/public/images/moselcourse/hole_2_moselcourse.webp";
import mhole3 from "~/public/images/moselcourse/hole_3_moselcourse.webp";
import mhole4 from "~/public/images/moselcourse/hole_4_moselcourse.webp";
import mhole5 from "~/public/images/moselcourse/hole_5_moselcourse.webp";
import mhole6 from "~/public/images/moselcourse/hole_6_moselcourse.webp";
import mhole7 from "~/public/images/moselcourse/hole_7_moselcourse.webp";
import mhole8 from "~/public/images/moselcourse/hole_8_moselcourse.webp";
import mhole9 from "~/public/images/moselcourse/hole_9_moselcourse.webp";
import mhole10 from "~/public/images/moselcourse/hole_10_moselcourse.webp";
import mhole11 from "~/public/images/moselcourse/hole_11_moselcourse.webp";
import mhole12 from "~/public/images/moselcourse/hole_12_moselcourse.webp";
import mhole13 from "~/public/images/moselcourse/hole_13_moselcourse.webp";
import mhole14 from "~/public/images/moselcourse/hole_14_moselcourse.webp";
import mhole15 from "~/public/images/moselcourse/hole_15_moselcourse.webp";
import mhole16 from "~/public/images/moselcourse/hole_16_moselcourse.webp";
import mhole17 from "~/public/images/moselcourse/hole_17_moselcourse.webp";
import mhole18 from "~/public/images/moselcourse/hole_18_moselcourse.webp";
import ehole1 from "~/public/images/eifelcourse/hole_1_eifelcourse.webp";
import ehole2 from "~/public/images/eifelcourse/hole_2_eifelcourse.webp";
import ehole3 from "~/public/images/eifelcourse/hole_3_eifelcourse.webp";
import ehole4 from "~/public/images/eifelcourse/hole_4_eifelcourse.webp";
import ehole5 from "~/public/images/eifelcourse/hole_5_eifelcourse.webp";
import ehole6 from "~/public/images/eifelcourse/hole_6_eifelcourse.webp";
import ehole7 from "~/public/images/eifelcourse/hole_7_eifelcourse.webp";
import ehole8 from "~/public/images/eifelcourse/hole_8_eifelcourse.webp";
import ehole9 from "~/public/images/eifelcourse/hole_9_eifelcourse.webp";

type HoleDetail = {
  name: string;
  description: ReactNode;
  image: StaticImageData;
  youtubeId?: string;
};

export const moselcourseDetails: HoleDetail[] = [
  {
    name: "Loch 1",
    description: (
      <span className="flex flex-col gap-4">
        Mit einem leichten Dogleg links beginnt der Mosel Course. Für Longhitter
        gilt den frontalen Bunker im Auge zu behalten. Liegt der Ball gut auf
        dem Fairway, heißt es gerade bleiben, da zwei schöne Bäume schon mal den
        Ball ablenken können. Das Grün ist von einem linksseitigen Bunker
        geschützt, sowie von Biotopen umgeben. Großes und ebenes Grün, spurtreu
        und schnell.
      </span>
    ),
    image: mhole1,
    youtubeId: "drNcVxsGVtA",
  },
  {
    name: "Loch 2",
    description: (
      <span className="flex flex-col gap-4">
        Das erste Par 3 mit einer guten Gesamtlänge, mit der man mit dem ersten
        Schlag auf dem Grün landen kann. Mit einer Steigung und Linksgefälle zum
        Grün, läuft mancher Ball gerne in den linken Bunker. Das Grün hat
        deutliches Gefälle und am besten liegt der Ball unterhalb der Fahne.
      </span>
    ),
    image: mhole2,
  },
  {
    name: "Loch 3",
    description: (
      <span className="flex flex-col gap-4">
        Das leichteste Par 5 auf dem Platz. Zuerst geht es nach oben zum
        Abschlag und die ganze Pracht dieser Bahn liegt vor einem. Allerdings
        auch der linksseitige Teich, sowie das rechtsseitige Wasserhindernis.
        Die leichte Schräglage nach rechts lässt den Ball gerne nach ins Rough
        laufen. Der nächste Schlag sollte sitzen, etwas links anhalten, den die
        Schräge nimmt zum Grün hin zu. Ebenes Grün und ein Birdie ist hier immer
        möglich.
      </span>
    ),
    image: mhole3,
  },
  {
    name: "Loch 4",
    description: (
      <span className="flex flex-col gap-4">
        Ein tolles Par 4, was bezwungen werden will. Begrenzt wird das Fairway
        durch den Wald rechts und Bunker in Schlaglänge. Der zweite Schlag kann
        schon auf dem Grün landen. Das leichte Gefälle nach rechts hat seine
        Tücken, aber fair und spielbar.
      </span>
    ),
    image: mhole4,
  },
  {
    name: "Loch 5",
    description: (
      <span className="flex flex-col gap-4">
        Was so einfach ausschaut, verführt zu einem wuchtigen Abschlag, der
        rechts im Wald liegen kann oder links im Haus. Strategisches Spiel ist
        geraten, wenn man mit dem zweiten Schlag auf dem erhöhten Grün liegen
        will. Eine Grünwelle will bei Bergauf Putt gemeistert werden.
      </span>
    ),
    image: mhole5,
  },
  {
    name: "Loch 6",
    description: (
      <span className="flex flex-col gap-4">
        Das leichteste Par 3 auf dem Mosel Course. Die richtige Wahl des
        Schlägers ist abhängig von der Fahnenpositon, da mit 37 m Grüntiefe hier
        ein großes und schwieriges Grün wartet. Eher etwas rechts anhalten,
        damit der Ball nicht im Bunker landet.
      </span>
    ),
    image: mhole6,
  },
  {
    name: "Loch 7",
    description: (
      <span className="flex flex-col gap-4">
        An dieser Bahn hört man auch sehr gute Golfer stöhnen, denn es ist sehr
        schwer mit dem zweiten Schlag auf dem Grün zu landen. Wer die nötige
        Länge hat und im Knick der Bahn landet, sollte den Bahn hoch anspielen,
        denn das Grün hat Gefälle und verzeiht keinen schnellen Ball. Eine
        schöne und herausfordernde Bahn.
      </span>
    ),
    image: mhole7,
  },
  {
    name: "Loch 8",
    description: (
      <span className="flex flex-col gap-4">
        Ein langes Monster, welches aber gut beherrschbar ist. Die Herren
        schlagen über ein Biotop ab und sollten in der Lage sein, 120 m zu
        schlagen. Die Damen dürfen hinter dem Biotop aufteen. Die Hindernisse
        sind überschaubar, sieht man von der Ausgrenze links und dem Biotop auf
        der rechten Seite mal ab. Bunker kommen erst in Grünnähe gefährlich. Das
        große Grün lässt sich aber gut angreifen und hat nur wenig Gefälle.
      </span>
    ),
    image: mhole8,
  },
  {
    name: "Loch 9",
    description: (
      <span className="flex flex-col gap-4">
        Ein schönes und trickreiches Par 4 hat die Bahn 9 zu bieten. Je nach
        Drive kann man den ersten Bunker überwinden oder legt sich den Ball
        passend rechts aufs Fairway. Danach entscheidet der Könnenslevel über
        die Strategie. Zwei Bunker warten vorm Grün, was ebenfalls starkes
        Gefälle nach unten aufweist. Schnell und spurtreu kann ein Par in
        Angriff genommen werden.
      </span>
    ),
    image: mhole9,
  },
  {
    name: "Loch 10",
    description: (
      <span className="flex flex-col gap-4">
        Nach dem Fußmarsch über die Brücke, erwartet uns ein offene
        „Spielwiese“. Geradeaus an den linken Bunkern vorbei, erreicht man mit
        einem guten zweiten Schlag das Grün oder zumindest das Vorgrün. Die
        Fahnenposition entscheidet über gute und weniger gute Putts. Unterhalb
        der Fahne ist eindeutig ein Vorteil.
      </span>
    ),
    image: mhole10,
  },
  {
    name: "Loch 11",
    description: (
      <span className="flex flex-col gap-4">
        Einfach schaut es aus, dieses Par 3. Das Grün treffen und dann noch gut
        putten, wird hier belohnt. Wenig nennenswerte Hindernisse halten auf.
        Ein tolles Par 3 und immer für ein Par oder Birdie gut.
      </span>
    ),
    image: mhole11,
  },
  {
    name: "Loch 12",
    description: (
      <span className="flex flex-col gap-4">
        Achtung bei Rückenwind, ein guter Abschlag landet dann im Bereich von
        200 m und läuft rechts Richtung Bunker. Das Grün ist mit zwei kleineren
        Bunkern gut verteidigt, zudem ist die Ausgrenze in unmittelbarer Nähe.
        Das Gefälle des Grüns kann schon mal einen Schlag mehr kosten.
      </span>
    ),
    image: mhole12,
  },
  {
    name: "Loch 13",
    description: (
      <span className="flex flex-col gap-4">
        Aus dem Wald heraus schickt man den Ball auf eine lange Reise. Etwas
        rechts anhalten, damit er auf dem Fairway zu liegen kommt. Die
        Schräglage lässt den Ball gerne ins hohe Gras laufen. Der zweite Schlag
        sollte rechts Richtung Grün gesetzt werden, denn zwei unangnehme Bunker
        warten links. Je nach Fahnenposition kann man mit drei Putts rechnen.
        Eine Bahn, die es in sich hat.
      </span>
    ),
    image: mhole13,
  },
  {
    name: "Loch 14",
    description: (
      <span className="flex flex-col gap-4">
        Endlich mal wieder ein Par 5 für die Longhitter, welche den Ball mitten
        aufs Fairway legen, an den Bunkern vorbei. Die Bahn mit den meisten
        Bunkern. Nach der ersten Hürde warten hinter einer Kuppe schon die
        nächsten Bunker, vor dem Grün ebenso. Das Grün ist etwas gewölbt und
        lässt links die Bälle an das nahe Aus laufen. Schwierig anzuspielen und
        auch zu putten.
      </span>
    ),
    image: mhole14,
  },
  {
    name: "Loch 15",
    description: (
      <span className="flex flex-col gap-4">
        Ein tolle Dog-Leg rechts. Von dem erhöhten Abschlag geht es ins Tal und
        lässt den Ball noch zusätzliche Meter laufen. Wer keine Angst vorm
        rechtsseitigen Teich hat und mutig den tiefen Bunker links missachtet,
        liegt mit dem zweiten Schlag auf einem schnellen, gut zu spielenden
        Grün.
      </span>
    ),
    image: mhole15,
  },
  {
    name: "Loch 16",
    description: (
      <span className="flex flex-col gap-4">
        Nach Meinung vieler Golferinnen und Golfer ist dieses „kurze Par 3“ die
        schwierigste Bahn für ein Par 3. Es geht bergan, zwei Bunker breiten
        sich an den Grünrändern aus, dann noch das abschüssige Grün und fertig
        ist schnell ein Bogey oder schlechter. Die Annäherung muss sitzen,
        sofern man das Grün nicht mit dem ersten Schlag erreicht hat.
      </span>
    ),
    image: mhole16,
  },
  {
    name: "Loch 17",
    description: (
      <span className="flex flex-col gap-4">
        Nicht sich vom Blick in die schöne Landschaft abhalten lassen und auch
        überlegt schlagen. Zwei Bunker warten auf den ersten Abschlag. Das
        Fairway lässt den Ball gut laufen und belohnt einen guten Abschlag. Zwei
        Bunker warten auf der rechten Seite des Grüns, aber das Grün bietet
        ausreichend Platz für einen treffsicheren Schlag. Ein schönes Grün,
        schnell und etwas trickreich, je nach Position der Fahne. Eine sehr
        schöne Bahn.
      </span>
    ),
    image: mhole17,
  },
  {
    name: "Loch 18",
    description: (
      <span className="flex flex-col gap-4">
        Zum Abschluss wartet noch einmal ein Monster. Nicht von der Länge,
        sondern von der Kondition her. Es geht ständig bergan und immer auch
        Schräglagen. Gefährliche Bunker kommen erst vor und neben dem Grün ins
        Spiel. Das Grün mit der stärksten Neigung verzeiht keinen zu langen
        Putt. Auf dem Plateau ist es allerdings spurtreu. Die Fahnenposition
        entscheidet über den Schlag aufs Grün.
      </span>
    ),
    image: mhole18,
  },
];

export const eifelcourseDetails: HoleDetail[] = [
  {
    name: "Loch 1",
    description: (
      <span className="flex flex-col gap-4">
        <span>
          Hier kommt der Beschreibungstext zu Loch 1 hin. Hier kommt der
          Beschreibungstext zu Loch 1 hin.
        </span>
        <span>Hier kommt der Beschreibungstext zu Loch 1 hin.</span>
      </span>
    ),
    image: ehole1,
    youtubeId: "drNcVxsGVtA",
  },
  {
    name: "Loch 2",
    description: "Hier kommt der Beschreibungstext zu Loch 2 hin",
    image: ehole2,
  },
  {
    name: "Loch 3",
    description: "Hier kommt der Beschreibungstext zu Loch 3 hin",
    image: ehole3,
  },
  {
    name: "Loch 4",
    description: "Hier kommt der Beschreibungstext zu Loch 4 hin",
    image: ehole4,
  },
  {
    name: "Loch 5",
    description: "Hier kommt der Beschreibungstext zu Loch 5 hin",
    image: ehole5,
  },
  {
    name: "Loch 6",
    description: "Hier kommt der Beschreibungstext zu Loch 6 hin",
    image: ehole6,
  },
  {
    name: "Loch 7",
    description: "Hier kommt der Beschreibungstext zu Loch 7 hin",
    image: ehole7,
  },
  {
    name: "Loch 8",
    description: "Hier kommt der Beschreibungstext zu Loch 8 hin",
    image: ehole8,
  },
  {
    name: "Loch 9",
    description: "Hier kommt der Beschreibungstext zu Loch 9 hin",
    image: ehole9,
  },
];
