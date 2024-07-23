import { type MouseEventHandler } from "react";
import { Address, Contact, Email } from "@/icons";

export const contactInfo = [
  {
    icon: Email,
    title: "E-Mail",
    description: "Schreib uns",
    href: "#",
    onClick: ((e) => {
      e.preventDefault();
      if (typeof window === "undefined") return;
      const mail = atob("bWFpbHRvOnNla3JldGFyaWF0QGdvbGZjb2NoZW0uZXU=");
      window.location.href = `mailto:${mail}`;
    }) as MouseEventHandler<HTMLAnchorElement>,
    label: (
      <span
        style={{ unicodeBidi: "bidi-override", direction: "rtl" }}
        aria-label="sekretariat at golfcochem.eu"
      >
        ue.mehcocflog@tairaterkes
      </span>
    ),
  },
  {
    icon: Address,
    title: "Adresse",
    description: "Komm vorbei",
    href: "https://www.openstreetmap.org/?mlat=50.11870&mlon=7.16655#map=17/50.11870/7.16655",
    target: "_blank",
    label: (
      <span className="flex flex-col">
        <span>Am Kellerborn 2</span>
        <span>56814 Ediger-Eller</span>
      </span>
    ),
  },
  {
    icon: Contact,
    title: "Telefon",
    description: "Täglich von 09:00 bis 17:00 Uhr",
    href: "tel:+492675911511",
    label: "+49 (0) 2675 911 511",
  },
];
