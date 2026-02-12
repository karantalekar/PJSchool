import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success("Message Sent Successfully! ", {
        position: "bottom-right",
        autoClose: 1500,
      });
      setLoading(false);
    }, 800);
  };

  return (
    <section className="contact-page">
      {/* Header */}
      <div className="contact-hero">
        <h1>{t("heroTitle")}</h1>
        <p>{t("heroSubtitle")}</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>{t("getInTouch")}</h2>

          <div className="info-item">
            <span>
              <i
                className="fa-solid fa-location-dot"
                style={{ fontSize: "30px" }}
              ></i>
            </span>
            {/* <p>
              Prakash Jyot Vidyalaya Non-Residential School for Mentally
              Retarded Boys and Girls Hadapsar Pune 28
            </p> */}
            <p>{t("address")}</p>
          </div>

          <div className="info-item">
            <span>📞</span>
            <p>+91 9156555937</p>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <p>prakashjyotvidyalaya.pune@gmail.com</p>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>{t("formTitle")}</h2>

          <input
            type="text"
            name="name"
            placeholder={t("name")}
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder={t("email")}
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder={t("subject")}
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder={t("message")}
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button className="send-btn" type="submit" disabled={loading}>
            {loading ? t("sending") : t("send")}
          </button>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
        />
      </div>

      {/* Map */}
      <div className="contact-map">
        <h2>{t("mapTitle")}</h2>

        <div className="map-wrapper">
          <iframe
            title="School Location"
            src="https://www.google.com/maps?q=Prakesh+Joyt+Vidylaya&ll=18.4995238,73.9308616&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
