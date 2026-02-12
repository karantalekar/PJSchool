import Hero from "../components/Hero";
import Card from "../components/Card";
import "../css/Home.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home");

  const highlights = [
    {
      title: t("highlights.grant.title"),
      description: t("highlights.grant.description"),
      image: "/images/grant-aid.jpeg",
    },
    {
      title: t("highlights.staff.title"),
      description: t("highlights.staff.description"),
      image: "/images/staff-2.jpeg",
    },
    {
      title: t("highlights.pe.title"),
      description: t("highlights.pe.description"),
      image: "/images/staff-1.jpeg",
    },
    {
      title: t("highlights.activities.title"),
      description: t("highlights.activities.description"),
      image: "/images/activity-1.jpeg",
    },
    {
      title: t("highlights.events.title"),
      description: t("highlights.events.description"),
      image: "/images/event-2.jpeg",
    },
    {
      title: t("highlights.medical.title"),
      description: t("highlights.medical.description"),
      image: "/images/activity-2.jpeg",
    },
  ];

  const facilities = [
    {
      title: t("facilities.medicalTreatment.title"),
      description: t("facilities.medicalTreatment.description"),
      image: "/images/free_Medical.jpg",
    },
    {
      title: t("facilities.travelPass.title"),
      description: t("facilities.travelPass.description"),
      image: "/images/travelPass.jpg",
    },
    {
      title: t("facilities.govtConcession.title"),
      description: t("facilities.govtConcession.description"),
      image: "/images/govtConcession.jpg",
    },
    {
      title: t("facilities.healthCounseling.title"),
      description: t("facilities.healthCounseling.description"),
      image: "/images/healthCounseling.jpg",
    },
    {
      title: t("facilities.tcrSupport.title"),
      description: t("facilities.tcrSupport.description"),
      image: "/images/tcrSupport.jpg",
    },
    {
      title: t("facilities.rehab.title"),
      description: t("facilities.rehab.description"),
      image: "/images/rehab.jpg",
    },
    {
      title: t("facilities.divyang.title"),
      description: t("facilities.divyang.description"),
      image: "/images/divyang.jpg",
    },
    {
      title: t("facilities.supportStaff.title"),
      description: t("facilities.supportStaff.description"),
      image: "/images/supportStaff.jpg",
    },
  ];

  return (
    <>
      <Hero />

      <section className="home-content">
        <h2>{t("section.highlights")}</h2>
        <div className="card-grid">
          {highlights.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </section>

      {/* <section className="home-content">
        <h2>{t("section.facilities")}</h2>
        <div className="card-grid">
          {facilities.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </section> */}
      <section className="facilities-content">
        <h2>{t("section.facilities")}</h2>
        <div className="facilities-grid">
          {facilities.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
