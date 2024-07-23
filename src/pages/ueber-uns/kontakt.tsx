import { type NextPage } from "next";
import {
  type ChangeEvent,
  type FormEvent,
  useState,
  type MouseEventHandler,
} from "react";
import Link from "next/link";
import { Meta } from "@/components/Meta";
import { Container, ContainerMargin } from "@/components/Container";
import { Headline, HeadlineTag, HeadlineVariant } from "@/components/Headline";
import { Address, Contact, Email } from "@/icons";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Input } from "@/components/Input";

const Indoor: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agreeTerms: false,
  });

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
    message: false,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    agreeTerms: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName
        ? ""
        : "Bitte gib einen validen Vorname ein",
      lastName: formData.lastName ? "" : "Bitte gib einen validen Nachname ein",
      email: formData.email ? "" : "Bitte gib eine valide E-Mail ein",
      subject: formData.subject ? "" : "Bitte gib einen validen Betreff ein",
      message: formData.message ? "" : "Bitte gib eine valide Nachricht ein",
      agreeTerms: formData.agreeTerms
        ? ""
        : "Du musst den Bedingungen zustimmen, um das Formular abzusenden",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouchedFields({
      firstName: true,
      lastName: true,
      email: true,
      subject: true,
      message: true,
      agreeTerms: true,
    });
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const contactInfo = [
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

  return (
    <>
      <Meta
        title="Kontakt"
        description="Kontaktiere uns für Fragen, Anregungen oder Reservierungen. Wir freuen uns auf deine Nachricht!"
      />
      <Container
        aria-labelledby="contact"
        margin={ContainerMargin.SM}
        className="py-16 sm:py-24"
        innerClassName="flex flex-col gap-12 lg:gap-16"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr,2fr] lg:gap-6">
          <div className="flex flex-col gap-12 border-r-gray-200 lg:border-r">
            <div className="flex flex-col gap-6">
              <Headline
                tag={HeadlineTag.H1}
                variant={HeadlineVariant.SECONDARY}
                id="contact"
              >
                Kontakt
              </Headline>
              <p className="text-gray-500">So kannst du uns erreichen</p>
            </div>
            <ul className="flex flex-col gap-10 md:gap-2 md:max-lg:flex-row md:max-lg:flex-wrap md:max-lg:justify-between lg:gap-10 xl:gap-16">
              {contactInfo.map((contact) => (
                <li key={contact.title} className="flex gap-4">
                  <contact.icon className="mt-px size-6 text-primary-700" />
                  <div className="flex flex-col gap-1">
                    <Headline
                      tag={HeadlineTag.H3}
                      variant={HeadlineVariant.QUINARY}
                      className="text-primary-800"
                    >
                      {contact.title}
                    </Headline>
                    <p className="mb-1 text-gray-500 lg:mb-4">
                      {contact.description}
                    </p>
                    <Link
                      href={contact.href}
                      onClick={contact.onClick}
                      target={contact.target}
                      className="underline-effect w-fit text-primary-700"
                    >
                      {contact.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 w-full max-w-lg space-y-6 justify-self-center"
          >
            <div className="-mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Input
                label="Vorname"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                touched={touchedFields.firstName}
                error={errors.firstName}
                required
              />
              <Input
                label="Nachname"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                touched={touchedFields.lastName}
                error={errors.lastName}
                required
              />
            </div>
            <Input
              label="E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              touched={touchedFields.email}
              error={errors.email}
              required
            />
            <Select
              label="Betreff"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              touched={touchedFields.subject}
              error={errors.subject}
              options={[
                { value: "", label: "Bitte wählen Sie einen Betreff" },
                { value: "general", label: "Allgemeine Anfrage" },
                { value: "support", label: "Technischer Support" },
                { value: "feedback", label: "Feedback" },
              ]}
              required
            />
            <Textarea
              label="Nachricht"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              touched={touchedFields.message}
              error={errors.message}
              rows={5}
              required
            />
            <Checkbox
              label="Ich stimme den Geschäftsbedingungen zu"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
              touched={touchedFields.agreeTerms}
              error={errors.agreeTerms}
              required
            />
            <Button type="submit">Absenden</Button>
          </form>
        </div>
      </Container>{" "}
    </>
  );
};

export default Indoor;
