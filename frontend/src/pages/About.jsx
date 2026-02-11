import heroImg from "../assets/images/school.jpg";
import img1 from "../assets/images/about1.jpg";
import img2 from "../assets/images/about2.jpg";
import img3 from "../assets/images/about3.jpg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <img src={heroImg} alt="School Campus" />
        <div className="about-hero-overlay">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-section">
        <h2>{t("intro.heading")}</h2>

        <div className="about-block">
          <h3>{t("intro.schoolInfo")}</h3>
          <ul className="about-list">
            <li>{t("intro.trust")}</li>
            <li>{t("intro.registration1")}</li>
            <li>{t("intro.registration2")}</li>
            <li>{t("intro.registration3")}</li>
          </ul>
        </div>

        <div className="about-block">
          <h3>{t("intro.description")}</h3>
        </div>

        <div className="about-block">
          <ul className="about-list">
            <li>{t("intro.point1")}</li>
            <li>{t("intro.point2")}</li>
            <li>{t("intro.point3")}</li>
            <li>{t("intro.point4")}</li>
          </ul>
        </div>
      </section>

      {/* EDUCATION FOR WHOM */}
      <section className="about-highlight">
        <div className="about-highlight-content">
          <h2>{t("education.heading")}</h2>
          <p>{t("education.subheading")}</p>

          <ul>
            <li>{t("education.point1")}</li>
            <li>{t("education.point2")}</li>
            <li>{t("education.point3")}</li>
            <li>{t("education.point4")}</li>
          </ul>

          <p>{t("education.closing")}</p>
        </div>

        <div className="about-highlight-image">
          <img src={img3} alt="Classroom Learning" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>{t("what.heading")}</h2>

        <div className="what-we-do-cards">
          {["1", "2", "3", "4", "5"].map((num) => (
            <div className="what-card" key={num}>
              <h3>{t(`what.card${num}.title`)}</h3>
              <p>{t(`what.card${num}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="about-grid">
        <div className="about-card">
          <div className="about-card-header">
            <span className="card-icon"></span>
            <h3>{t("vision.title")}</h3>
          </div>
          <p>{t("vision.description")}</p>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <span className="card-icon"></span>
            <h3>{t("mission.title")}</h3>
          </div>
          <ul className="about-card-list">
            <li>{t("mission.point1")}</li>
            <li>{t("mission.point2")}</li>
            <li>{t("mission.point3")}</li>
            <li>{t("mission.point4")}</li>
          </ul>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <span className="card-icon"></span>
            <h3>{t("values.title")}</h3>
          </div>
          <p>{t("values.description")}</p>
        </div>
      </section>

      {/* REHABILITATION */}
      <section className="rehab-section">
        <div className="rehab-container">
          <h2 className="rehab-title">{t("rehab.title")}</h2>
          <p className="rehab-description">{t("rehab.description")}</p>

          <div className="rehab-activities">
            <h3>{t("rehab.activitiesTitle")}</h3>
            <ul>
              <li>{t("rehab.activity1")}</li>
              <li>{t("rehab.activity2")}</li>
              <li>{t("rehab.activity3")}</li>
              <li>{t("rehab.activity4")}</li>
              <li>{t("rehab.activity5")}</li>
            </ul>
          </div>

          <div className="rehab-future">
            <h3>{t("rehab.futureTitle")}</h3>

            <div className="future-grid">
              {["1", "2", "3", "4"].map((num) => (
                <div className="future-card" key={num}>
                  <h4>{t(`rehab.future${num}.title`)}</h4>
                  <p>{t(`rehab.future${num}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM IMAGES */}
      <section className="about-images">
        {["1", "2", "3"].map((num, index) => {
          const images = [img1, img2, img3];
          return (
            <div className="image-box" key={num}>
              <img src={images[index]} alt="About" />
              <h4>{t(`bottom.card${num}.title`)}</h4>
              <p>{t(`bottom.card${num}.description`)}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
