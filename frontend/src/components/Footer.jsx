// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="footer">

//       {/* TOP FOOTER */}
//       <div className="footer-container">

//         {/* SCHOOL INFO */}
//         <div className="footer-section">
//           <h2 className="footer-logo">PJV </h2>
//           <p>
//        The organization started 'Prakash Jyot Vidyalaya', a school for the mentally handicapped,
//         on 26/07/1991 for the mentally retarded children of economically and educationally backward
//         areas in Hadapsar villages and surrounding rural areas.
//           </p>
//         </div>

//         {/* QUICK LINKS */}
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/academics">Academics</Link></li>
//             <li><Link to="/admissions">Admissions</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         {/* CONTACT INFO */}
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>📍 Prakash Jyot Vidyalaya Non-Residential School for Mentally Retarded Boys and Girls Hadapsar Pune 28</p>
//           <p>📞  26876877 </p>
//           <p>✉️ info@abcschool.edu.in</p>
//         </div>

//         {/* SOCIAL MEDIA */}
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="#">🌐</a>
//             <a href="#">📘</a>
//             <a href="#">📸</a>
//             <a href="#">🐦</a>
//           </div>
//         </div>

//       </div>

//       {/* BOTTOM FOOTER */}
//       <div className="footer-bottom">
//         <p>
//           © {new Date().getFullYear()} PJV School. All Rights Reserved.
//         </p>
//       </div>

//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SCHOOL INFO */}
        {/* <div className="footer-section">
          <h2 className="footer-logo">PJV</h2>
          <p>{t("description")}</p>
        </div> */}

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>{t("quickLinks")}</h3>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("about")}</Link>
            </li>
            <li>
              <Link to="/academics">{t("academics")}</Link>
            </li>
            <li>
              <Link to="/admissions">{t("admissions")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h3>{t("contactUs")}</h3>
          <p>
            📍 Prakash Jyot Vidyalay Non-Residential School for Mentally
            Retarded Boys and Girls Hadapsar Pune 28
          </p>
          <p>📞 9869619368, 9156555937</p>
          <p>✉️ prakashjyotvidyalaya.pune@gmail.com </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="footer-section">
          <h3>{t("followUs")}</h3>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PJV School. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
