// import "../../../frontend/Academics.css";

// export default function Academics() {
//   return (
//     <section className="academics">
//       {/* Header */}
//       <div className="academics-hero">
//         <h1>Academics</h1>
//         <p>
//           A balanced approach to education that nurtures learning, creativity,
//           physical development, and independence.
//         </p>
//       </div>

//       {/* Content */}
//       <div className="academics-container">
//         {/* Description */}
//         <div className="academics-card fade-up">
//           <h2>Learning Beyond the Classroom</h2>
//           <p>
//             Twice a month, students are taken to <strong>Bal Kalyan Sanstha, Pune</strong>,
//             a specialized center that supports children through structured
//             guidance in physical, cultural, and creative activities.
//           </p>

//           <p>
//             Students receive training in swimming, dance, physical exercise,
//             singing, playing musical instruments, painting, and handicrafts.
//             Through this holistic exposure, our students have successfully
//             participated and achieved recognition in sports, cultural, and art
//             competitions at the city, district, state, national, and
//             international levels.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="academics-stats">
//           <div className="stat-card slide-up">
//             <span>30</span>
//             <p>Total Admitted Students</p>
//           </div>

//           <div className="stat-card slide-up">
//             <span>6 – 18</span>
//             <p>Physical Age Group (Years)</p>
//           </div>
//         </div>

//         {/* Classification */}
//         <div className="academics-card fade-up">
//           <h2>Classification System</h2>

//           <div className="classification-grid">
//             <div className="class-card">
//               <h3>School Group</h3>
//               <p>IQ Range: 50 – 69</p>
//             </div>

//             <div className="class-card">
//               <h3>Vocational Group</h3>
//               <p>IQ Range: 35 – 49</p>
//             </div>

//             <div className="class-card">
//               <h3>Self-Reliance Group</h3>
//               <p>IQ Range: 25 – 35</p>
//             </div>
//           </div>
//         </div>

//         {/* Highlight */}
//         <div className="academics-highlight fade-up">
//           <p>
//             <strong>Pre-vocational training</strong> is provided for students in
//             the <strong>15 to 18 years physical age group</strong>, focusing on
//             practical skills, independence, and preparation for daily life and
//             future opportunities.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useTranslation } from "react-i18next";
import "../../../frontend/Academics.css";

export default function Academics() {
  const { t } = useTranslation("academics");

  return (
    <section className="academics">
      <div className="academics-hero">
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
      </div>

      <div className="academics-container">
        <div className="academics-card fade-up">
          <h2>{t("learningSection.title")}</h2>
          <p>{t("learningSection.paragraph1")}</p>
          <p>{t("learningSection.paragraph2")}</p>
        </div>

        <div className="academics-stats">
          <div className="stat-card slide-up">
            <span>30</span>
            <p>{t("stats.totalStudents")}</p>
          </div>

          <div className="stat-card slide-up">
            <span>6 – 18</span>
            <p>{t("stats.ageGroup")}</p>
          </div>
        </div>

        <div className="academics-card fade-up">
          <h2>{t("classification.title")}</h2>

          <div className="classification-grid">
            <div className="class-card">
              <h3>{t("classification.schoolGroup")}</h3>
              <p>{t("classification.schoolIQ")}</p>
            </div>

            <div className="class-card">
              <h3>{t("classification.vocationalGroup")}</h3>
              <p>{t("classification.vocationalIQ")}</p>
            </div>

            <div className="class-card">
              <h3>{t("classification.selfRelianceGroup")}</h3>
              <p>{t("classification.selfRelianceIQ")}</p>
            </div>
          </div>
        </div>

        <div className="academics-highlight fade-up">
          <p>
            <strong>{t("highlight.text")}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
