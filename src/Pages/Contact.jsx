import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <div className="contact-hero d-flex align-items-center text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="fw-bold display-4 text-success">Contact Us</h1>
          <p className="lead text-success">
            We'd love to hear from you. Get in touch with AKSHARAA School.
          </p>
        </motion.div>
      </div>

      <div className="container my-5">
        {/* CONTACT INFO */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 text-center mb-5"
        >
          <motion.div variants={fadeInUp} className="col-md-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="contact-card p-4 border rounded shadow-sm bg-white"
            >
              <div className="fs-1 mb-2 text-success">📍</div>
              <h5>Address</h5>
              <p className="text-muted small">
                AKSHARAA School, Kathmandu, Nepal
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="col-md-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="contact-card p-4 border rounded shadow-sm bg-white"
            >
              <div className="fs-1 mb-2 text-success">📞</div>
              <h5>Phone</h5>
              <p className="text-muted small">+977-9841508235</p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="col-md-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="contact-card p-4 border rounded shadow-sm bg-white"
            >
              <div className="fs-1 mb-2 text-success">✉️</div>
              <h5>Email</h5>
              <p className="text-muted small">info@aksharaa.edu.np</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FORM + MAP */}
        <div className="row g-5">
          {/* FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-lg-6"
          >
            <div className="contact-form p-4 shadow-sm border rounded bg-white">
              <h4 className="text-success mb-3">Send a Message</h4>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-success w-100"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-lg-6"
          >
            <div className="map-container shadow-sm border rounded h-100" style={{ minHeight: "400px", overflow: "hidden" }}>
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Kathmandu&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}