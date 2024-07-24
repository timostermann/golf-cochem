import { type ChangeEvent, type FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { Input } from "@/components/Input";

export const ContactForm = () => {
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

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-8 w-full max-w-lg space-y-6 justify-self-center"
    >
      <div className="-mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <Input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
          touched={touchedFields.firstName}
          error={errors.firstName}
          required
        >
          Vorname
        </Input>
        <Input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
          touched={touchedFields.lastName}
          error={errors.lastName}
          required
        >
          Nachname
        </Input>
      </div>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        touched={touchedFields.email}
        error={errors.email}
        required
      >
        E-Mail
      </Input>
      <Select
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        touched={touchedFields.subject}
        error={errors.subject}
        options={[
          { value: "", label: "Bitte wählen Sie einen Betreff" },
          { value: "general", label: "Allgemeine Anfrage" },
          { value: "membership", label: "Mitgliedschaft" },
          { value: "booking", label: "Buchung" },
          { value: "tournament", label: "Turnier" },
          { value: "partner", label: "Partnerschaft" },
          { value: "feedback", label: "Feedback" },
        ]}
        required
      >
        Betreff
      </Select>
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        touched={touchedFields.message}
        error={errors.message}
        rows={5}
        required
      >
        Nachricht
      </Textarea>
      <Checkbox
        name="agreeTerms"
        checked={formData.agreeTerms}
        onChange={handleCheckboxChange}
        touched={touchedFields.agreeTerms}
        error={errors.agreeTerms}
        required
      >
        Ich stimme den{" "}
        <Link
          href="/datenschutz"
          className="text-primary-700 underline transition-colors hover:text-primary-600"
        >
          Datenschutzbestimmungen
        </Link>{" "}
        zu
      </Checkbox>
      <Button type="submit">Absenden</Button>
    </form>
  );
};
