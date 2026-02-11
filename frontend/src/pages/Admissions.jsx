// import { useState } from "react";
// import "../../../frontend/Addmision.css";

// const faqs = [
//   {
//     question: "What is the eligibility criteria for admission?",
//     answer:
//       "Admissions are open to children with special learning needs aged 4–18 years."
//   },
//   {
//     question: "How do I apply for admission?",
//     answer:
//       "Parents or guardians can visit the school office or contact us through the website to begin the admission process."
//   },
//   {
//     question: "What is the fee structure and is financial aid available?",
//     answer:
//       "The fee structure is affordable. Financial assistance may be available for eligible families."
//   },
//   {
//     question: "What is the admission process?",
//     answer:
//       "The process includes an initial interaction, student assessment, document verification, and final confirmation."
//   },
//   {
//     question: "What documents are required for admission?",
//     answer:
//       "Birth certificate, address proof, previous school records (if any), and medical or assessment reports."
//   },
//   {
//     question: "What are the important dates for admission?",
//     answer:
//       "Admissions are generally open throughout the year, subject to seat availability."
//   }
// ];

// export default function Admissions() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggle = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="admissions-container">
//       <h2 className="admissions-title">Admissions</h2>

//       {faqs.map((item, index) => (
//         <div
//           key={index}
//           className={`faq-item ${activeIndex === index ? "active" : ""}`}
//           onClick={() => toggle(index)}
//         >
//           <div className="faq-question">
//             {item.question}
//             <span className="icon">
//               {activeIndex === index ? "▲" : "▼"}
//             </span>
//           </div>

//           {activeIndex === index && (
//             <div className="faq-answer">{item.answer}</div>
//           )}
//         </div>
//       ))}

//       {/* <button className="download-btn">Download Admission Form</button> */}
//     </div>
//   );
// }

import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../frontend/Addmision.css";

export default function Admissions() {
  // ✅ IMPORTANT: specify namespace
  const { t } = useTranslation("admissions");

  const [activeIndex, setActiveIndex] = useState(null);

  // ✅ Safe fallback to prevent crash
  const faqs = t("faqs", { returnObjects: true }) || [];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="admissions-container">
      <h2 className="admissions-title">{t("title")}</h2>

      {faqs.length > 0 &&
        faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="icon">{activeIndex === index ? "▲" : "▼"}</span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
    </div>
  );
}
