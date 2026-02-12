// import { useState } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         "https://ajv-school-website.onrender.com/contact", // ✅ FIXED
//         formData
//       );

//       if (response.data.success) {
//         toast.success("Email sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         toast.error("❌ Failed to send email.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("❌ Server error. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="contact-page">
//       {/* Header */}
//       <div className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>
//           We’re here to help. Reach out to us for admissions, inquiries,
//           or any assistance you may need.
//         </p>
//       </div>

//       {/* Content */}
//       <div className="contact-container">
//         <div className="contact-info">
//           <h2>Get in Touch</h2>

//           <div className="info-item">
//             <span>📍</span>
//             <p>
//               Prakesh Joyt Vidylaya <br />
//               Hadapsar Gaon, Pune, Maharashtra
//             </p>
//           </div>

//           <div className="info-item">
//             <span>📞</span>
//             <p>+91 9XXXXXXXXX</p>
//           </div>

//           <div className="info-item">
//             <span>✉️</span>
//             <p>info@your-school.org</p>
//           </div>
//         </div>

//         {/* FORM */}
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <h2>Send Us a Message</h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//           />

//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             required
//             value={formData.message}
//             onChange={handleChange}
//           />

//           <button className="send-btn" type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>

//         {/* Toast */}
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop
//           closeOnClick
//           pauseOnHover
//         />
//       </div>

//       {/* MAP SECTION */}
//       <div className="contact-map">
//         <h2>Find Us on Map</h2>

//         <div className="map-wrapper">
//           <iframe
//             title="Prakesh Joyt Vidylaya Location"
//             src="https://www.google.com/maps?q=Prakesh+Joyt+Vidylaya&ll=18.4995238,73.9308616&z=16&output=embed"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  // ✅ IMPORTANT: specify namespace
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://ajv-school-website.onrender.com/contact",
        formData,
      );

      if (response.data.success) {
        toast.success(t("success"));
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(t("failed"));
      }
    } catch (error) {
      console.error(error);
      toast.error(t("serverError"));
    } finally {
      setLoading(false);
    }
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
            <span>📍</span>
            <p>
              Prakash Jyot Vidyalaya Non-Residential School for Mentally
              Retarded Boys and Girls Hadapsar Pune 28
            </p>
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
