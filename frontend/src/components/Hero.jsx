// export default function Hero() {
//   return (
//     <section
//       className="hero"
//       style={{
//         backgroundImage: "url(/images/school-building.jpeg)",
//       }}
//     >
//       <div className="hero-overlay">
//         <h1>Welcome to Prakash Jyot Vidyalay</h1>
//         <p>Education • Discipline • Excellence</p>
//       </div>
//     </section>
//   );
// }
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation("hero");

  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url(/images/school-building.jpeg)",
      }}
    >
      <div className="hero-overlay">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </div>
    </section>
  );
}
