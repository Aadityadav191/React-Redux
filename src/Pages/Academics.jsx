import React from "react";
import { motion } from "framer-motion";

export default function Academics() {
  const classes = [
    {
      level: "Pre-Primary",
      name: "Nursery - UKG",
      subjects: "Basic Literacy, Numeracy, Rhymes, Activities",
    },
    {
      level: "Primary",
      name: "Class 1 - 5",
      subjects: "English, Math, Science, Social Studies, Computer",
    },
    {
      level: "Lower Secondary",
      name: "Class 6 - 8",
      subjects: "English, Math, Science, Social, Optional Subjects",
    },
    {
      level: "Secondary",
      name: "Class 9 - 10",
      subjects: "Science, Math, English, Social, Computer, Optional",
    },
  ];

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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="academics-page">
      {/* HERO */}
      <div className="academics-hero text-white d-flex align-items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="display-3 fw-bold text-success">Our Academics</h1>
          <p className="lead text-success">
            Building strong foundations for lifelong learning.
          </p>
        </motion.div>
      </div>

      <div className="container my-5">
        {/* PRINCIPAL MESSAGE */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="row align-items-center g-5 mb-5"
        >
          <div className="col-lg-5 text-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Shamsher-Bahadur-Thapa.jpg"
              alt="Principal"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-7">
            <h3 className="text-success fw-bold mb-3">
              Message from the President
            </h3>
            <p className="text-muted">
              "At Green Valley School, we believe that education is not just
              about books, but about building character, curiosity, and
              confidence. Our approach focuses on understanding concepts,
              encouraging creativity, and nurturing independent thinking."
            </p>
            <h6 className="fw-semibold mt-3">
              — Mr. Nichal Chaulagai, President
            </h6>
          </div>
        </motion.div>

        {/* CURRICULUM TABLE */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-4"
        >
          <h2 className="fw-bold text-success">Curriculum Overview</h2>
          <p className="text-muted">
            Structured learning from Nursery to Grade 10
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="table-responsive mb-5"
        >
          <table className="table table-bordered table-hover text-center curriculum-table shadow-sm">
            <thead className="table-success">
              <tr>
                <th>Level</th>
                <th>Classes</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {classes.map((item, index) => (
                <motion.tr variants={fadeInUp} key={index}>
                  <td className="fw-semibold text-success">
                    {item.level}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.subjects}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>

        {/* SYLLABUS SECTION */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Course & Syllabus</h2>
          <p className="text-muted">
            Designed for academic excellence and skill development
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {[
            {
              title: "Languages",
              desc: "English & Nepali focusing on communication skills.",
            },
            {
              title: "Mathematics",
              desc: "Logical thinking and real-world problem solving.",
            },
            {
              title: "Science",
              desc: "Practical and concept-based learning approach.",
            },
            {
              title: "Social Studies",
              desc: "Understanding society, culture, and environment.",
            },
            {
              title: "Computer Education",
              desc: "Digital literacy and programming basics.",
            },
            {
              title: "Co-Curricular",
              desc: "Sports, arts, music, and personality growth.",
            },
          ].map((item, i) => (
            <motion.div 
              variants={fadeInUp} 
              className="col-md-4" 
              key={i}
            >
              <motion.div 
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                className="syllabus-card p-4 h-100 text-center bg-white rounded shadow-sm border-top border-success border-4"
              >
                <h5 className="text-success">{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}