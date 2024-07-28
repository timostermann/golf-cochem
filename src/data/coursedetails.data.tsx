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
        <span>
          Hier kommt der Beschreibungstext zu Loch 1 hin. Hier kommt der
          Beschreibungstext zu Loch 1 hin.
        </span>
        <span>Hier kommt der Beschreibungstext zu Loch 1 hin.</span>
      </span>
    ),
    image: mhole1,
    youtubeId: "drNcVxsGVtA",
  },
  {
    name: "Loch 2",
    description: "Hier kommt der Beschreibungstext zu Loch 2 hin",
    image: mhole2,
  },
  {
    name: "Loch 3",
    description: "Hier kommt der Beschreibungstext zu Loch 3 hin",
    image: mhole3,
  },
  {
    name: "Loch 4",
    description: "Hier kommt der Beschreibungstext zu Loch 4 hin",
    image: mhole4,
  },
  {
    name: "Loch 5",
    description: "Hier kommt der Beschreibungstext zu Loch 5 hin",
    image: mhole5,
  },
  {
    name: "Loch 6",
    description: "Hier kommt der Beschreibungstext zu Loch 6 hin",
    image: mhole6,
  },
  {
    name: "Loch 7",
    description: "Hier kommt der Beschreibungstext zu Loch 7 hin",
    image: mhole7,
  },
  {
    name: "Loch 8",
    description: "Hier kommt der Beschreibungstext zu Loch 8 hin",
    image: mhole8,
  },
  {
    name: "Loch 9",
    description: "Hier kommt der Beschreibungstext zu Loch 9 hin",
    image: mhole9,
  },
  {
    name: "Loch 10",
    description: "Hier kommt der Beschreibungstext zu Loch 10 hin",
    image: mhole10,
  },
  {
    name: "Loch 11",
    description: "Hier kommt der Beschreibungstext zu Loch 11 hin",
    image: mhole11,
  },
  {
    name: "Loch 12",
    description: "Hier kommt der Beschreibungstext zu Loch 12 hin",
    image: mhole12,
  },
  {
    name: "Loch 13",
    description: "Hier kommt der Beschreibungstext zu Loch 13 hin",
    image: mhole13,
  },
  {
    name: "Loch 14",
    description: "Hier kommt der Beschreibungstext zu Loch 14 hin",
    image: mhole14,
  },
  {
    name: "Loch 15",
    description: "Hier kommt der Beschreibungstext zu Loch 15 hin",
    image: mhole15,
  },
  {
    name: "Loch 16",
    description: "Hier kommt der Beschreibungstext zu Loch 16 hin",
    image: mhole16,
  },
  {
    name: "Loch 17",
    description: "Hier kommt der Beschreibungstext zu Loch 17 hin",
    image: mhole17,
  },
  {
    name: "Loch 18",
    description: "Hier kommt der Beschreibungstext zu Loch 18 hin",
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
