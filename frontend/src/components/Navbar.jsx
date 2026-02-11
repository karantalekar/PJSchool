// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <h2 className="logo">PJV</h2>

//       {/* Hamburger */}
//       <div
//         className={`hamburger ${menuOpen ? "active" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* Links */}
//       <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
//         <Link to="/academics" onClick={() => setMenuOpen(false)}>Academics</Link>
//         <Link to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link>
//         <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
//       </div>
//     </nav>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import "../css/navbar.css";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation("common");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">{t("hero.title")}</h2>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          {t("home")}
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          {t("about")}
        </Link>

        <Link to="/academics" onClick={() => setMenuOpen(false)}>
          {t("academics")}
        </Link>

        <Link to="/admissions" onClick={() => setMenuOpen(false)}>
          {t("admissions")}
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          {t("contact")}
        </Link>

        {/* Language Switch */}
        <div className="language-switch">
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? "active-lang" : ""}
          >
            EN
          </button>

          <button
            onClick={() => changeLanguage("mr")}
            className={i18n.language === "mr" ? "active-lang" : ""}
          >
            मराठी
          </button>
        </div>
      </div>
    </nav>
  );
}
