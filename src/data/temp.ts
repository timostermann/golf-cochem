const headerData: HeaderProps = {
  navAriaLabelOpen: t("nav.open"),
  navAriaLabelClose: t("nav.close"),
  homeHref: "/",
  items: [
    {
      label: t("nav.labels.golfClub"),
      subItems: [
        {
          label: t("nav.labels.blog"),
          href: "/blog",
          description: t("nav.descriptions.blog"),
          icon: blog,
        },
        {
          label: t("nav.labels.membership"),
          href: "/mitgliedschaft",
          description: t("nav.descriptions.membership"),
          icon: member,
        },
        {
          label: t("nav.labels.teams"),
          href: "/mannschaften",
          description: t("nav.descriptions.teams"),
          icon: team,
        },
        {
          label: t("nav.labels.events"),
          href: "/events",
          description: t("nav.descriptions.events"),
          icon: calendar,
        },
      ],
    },
    {
      label: t("nav.labels.golfField"),
      subItems: [
        {
          label: t("nav.labels.moselCourse"),
          href: "/mosel-course",
          description: t("nav.descriptions.moselCourse"),
          icon: moselCourse,
        },
        {
          label: t("nav.labels.eifelCourse"),
          href: "/eifel-course",
          description: t("nav.descriptions.eifelCourse"),
          icon: eifelCourse,
        },
        {
          label: t("nav.labels.footgolf"),
          href: "/footgolf",
          description: t("nav.descriptions.footgolf"),
          icon: soccer,
        },
        {
          label: t("nav.labels.drivingRange"),
          href: "/driving-range",
          description: t("nav.descriptions.drivingRange"),
          icon: golf,
        },
        {
          label: t("nav.labels.fieldInformation"),
          href: "/platzinformationen",
          description: t("nav.descriptions.fieldInformation"),
          icon: greenkeeper,
        },
      ],
    },
    {
      label: t("nav.labels.youth"),
      href: "/jugend",
    },
    {
      label: t("nav.labels.golfCourses"),
      subItems: [
        {
          label: t("nav.labels.trainer"),
          href: "/trainer",
          description: t("nav.descriptions.trainer"),
          icon: trainer,
        },
        {
          label: t("nav.labels.license"),
          href: "/dgv-platzreife",
          description: t("nav.descriptions.license"),
          icon: certificate,
        },
        {
          label: t("nav.labels.tasterCourse"),
          href: "/schnupperkurse",
          description: t("nav.descriptions.tasterCourse"),
          icon: golfBag,
        },
        {
          label: t("nav.labels.parentalTraining"),
          href: "/elterntraining",
          description: t("nav.descriptions.parentTraining"),
          icon: parentTraining,
        },
        {
          label: t("nav.labels.groupTraining"),
          href: "/gruppentraining",
          description: t("nav.descriptions.groupTraining"),
          icon: group,
        },
        {
          label: t("nav.labels.bundeswehr"),
          href: "/bundeswehr",
          description: t("nav.descriptions.bundeswehr"),
          icon: star,
        },
      ],
    },
    {
      label: t("nav.labels.guests"),
      href: "/gaeste",
    },
    {
      label: t("nav.labels.about"),
      href: "/ueber-uns",
    },
  ],
};

const footerData: FooterProps = {
  columns: [
    {
      title: "Clubleben",
      links: [
        {
          label: "News",
          href: "/blog",
        },
        {
          label: "Mitgliedschaft",
          href: "/mitgliedschaft",
        },
        {
          label: "Mannschaften",
          href: "/mannschaften",
        },
        {
          label: "Events & Turniere",
          href: "/events",
        },
      ],
    },
    {
      title: "Golfplatz",
      links: [
        {
          label: "Mosel Course",
          href: "/mosel-course",
        },
        {
          label: "Eifel Course",
          href: "/eifel-course",
        },
        {
          label: "Footgolf",
          href: "/footgolf",
        },
        {
          label: "Driving Range",
          href: "/driving-range",
        },
        {
          label: "Platzinformationen",
          href: "/platzinformationen",
        },
      ],
    },
    {
      title: "Jugend",
      links: [
        {
          label: "Golfcamps",
          href: "/golfcamps",
        },
        {
          label: "Schulsport",
          href: "/schulsport",
        },
      ],
    },
    {
      title: "Golfkurse",
      links: [
        {
          label: "Trainer",
          href: "/trainer",
        },
        {
          label: "DVG Platzreife",
          href: "/dgv-platzreife",
        },
        {
          label: "Schnupperkurse",
          href: "/schnupperkurse",
        },
        {
          label: "Elterntraining",
          href: "/elterntraining",
        },
        {
          label: "Gruppentraining",
          href: "/gruppentraining",
        },
        {
          label: "Bundeswehr",
          href: "/bundeswehr",
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
