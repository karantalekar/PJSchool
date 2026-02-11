// import Hero from "../components/Hero";
// import Card from "../components/Card";
// import "../css/Home.css";

// export default function Home() {
//   const highlights = [
//     {
//       title: "Grant-Based Recognition",
//       description: (
//         <>
//           Approved under the grant-in-aid scheme from{" "}
//           <strong>26 September 2003</strong>.
//         </>
//       ),
//       image: "/images/grant-aid.jpeg",
//     },
//     {
//       title: "Qualified Teaching Staff",
//       description: (
//         <>
//           <strong>Three</strong> trained teachers with D.S.C (M.R)
//           qualifications.
//         </>
//       ),
//       image: "/images/staff-2.jpeg",
//     },
//     {
//       title: "Physical Education Instructor",
//       description: (
//         <>
//           <strong>One</strong> dedicated physical education instructor.
//         </>
//       ),
//       image: "/images/staff-1.jpeg",
//     },
//     {
//       title: "Student Activities",
//       description: (
//         <>
//           <strong>Multiple</strong> activities for holistic student development.
//         </>
//       ),
//       image: "/images/activity-1.jpeg",
//     },
//     {
//       title: "School Events",
//       description: (
//         <>Annual cultural and academic events throughout the year.</>
//       ),
//       image: "/images/event-2.jpeg",
//     },
//     {
//       title: "Medical Officers",
//       description: (
//         <>
//           One paramedical officer and one honorary medical officer are
//           available.
//         </>
//       ),
//       image: "/images/activity-2.jpeg",
//     },
//   ];

//   const facilities = [
//     {
//       title: "Free Medical Treatment",
//       description:
//         "Free medical treatment is provided to students by the school.",
//     },
//     {
//       title: "Travel Pass Assistance",
//       description:
//         "Guidance and assistance are provided for obtaining Railway, ST, and PMT travel passes.",
//     },
//     {
//       title: "Government Concession Guidance",
//       description:
//         "Guidance on government concessions such as Family Pension, LIC Pension Scheme, and Income Tax benefits for mentally challenged children.",
//     },
//     {
//       title: "Health Counseling",
//       description:
//         "Health-related counseling and guidance are provided to ensure the well-being of children.",
//     },
//     {
//       title: "T.C.R Surgery Support",
//       description:
//         "Guidance and support are provided for T.C.R surgeries, including help in obtaining financial assistance from charitable organizations.",
//     },
//     {
//       title: "Government Scheme & Rehabilitation Guidance",
//       description:
//         "Guidance is provided for availing benefits of various government schemes and rehabilitation services.",
//     },
//     {
//       title: "Divyang Counseling Center",
//       description:
//         "A dedicated counseling and guidance center is available for persons with disabilities (Divyang).",
//     },
//     {
//       title: "Support Staff",
//       description:
//         "One caregiver, one cleaner, and one peon ensuring a clean environment.",
//     },
//     {
//       title: "Medical Officers",
//       description:
//         "One paramedical officer and one honorary medical officer are available.",
//     },
//   ];

//   return (
//     <>
//       <Hero />

//       {/* School Highlights Section */}
//       <section className="home-content">
//         <h2>Our School Highlights</h2>
//         <div className="card-grid">
//           {highlights.map((card, index) => (
//             <Card
//               key={index}
//               title={card.title}
//               description={card.description}
//               image={card.image}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Our Facilities Section */}
//       <section className="home-content">
//         <h2>Our Facilities</h2>
//         <div className="card-grid">
//           {facilities.map((card, index) => (
//             <Card
//               key={index}
//               title={card.title}
//               description={card.description}
//               image={card.image} // optional, can leave empty
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
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
    },
    {
      title: t("facilities.travelPass.title"),
      description: t("facilities.travelPass.description"),
    },
    {
      title: t("facilities.govtConcession.title"),
      description: t("facilities.govtConcession.description"),
    },
    {
      title: t("facilities.healthCounseling.title"),
      description: t("facilities.healthCounseling.description"),
    },
    {
      title: t("facilities.tcrSupport.title"),
      description: t("facilities.tcrSupport.description"),
    },
    {
      title: t("facilities.rehab.title"),
      description: t("facilities.rehab.description"),
    },
    {
      title: t("facilities.divyang.title"),
      description: t("facilities.divyang.description"),
    },
    {
      title: t("facilities.supportStaff.title"),
      description: t("facilities.supportStaff.description"),
    },
    {
      title: t("facilities.medicalOfficers.title"),
      description: t("facilities.medicalOfficers.description"),
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

      <section className="home-content">
        <h2>{t("section.facilities")}</h2>
        <div className="card-grid">
          {facilities.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
