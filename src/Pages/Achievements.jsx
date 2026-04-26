import React from "react";
import { motion } from "framer-motion";
import './Achievements.css';

export default function Achievements() {
  const toppers = [
    { name: "Aarav Sharma", marks: "3.95 GPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7MyK9GBdX62uJLYGqbAQmFZhV1yixrsGpQ&s" },
    { name: "Sita Karki", marks: "3.92 GPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7GQM0ChT-i90yy771YK1Q_bDYcGjtOTFVQ&s" },
    { name: "Rohan Thapa", marks: "3.90 GPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCxD7BdVKpOPzf4SDG2ocJmCNhFwY0boseQ&s" },
    { name: "Anita Rai", marks: "3.88 GPA", img: "https://i.pinimg.com/474x/20/6f/dc/206fdcf8a72e1e279f0ef0684542a208.jpg" },
    { name: "Bikash Gurung", marks: "3.85 GPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbtcsRUzG3IR-vfgkmnBWR5OxYMmRfFBUImw&s" },
    { name: "Priya Shrestha", marks: "3.83 GPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDekSCE_xOAgJIzx5lLM8xZQTBMSpFXqeQjg&s" },
    { name: "Kiran Adhikari", marks: "3.80 GPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5I6gC7SHxtPkO7ZDg-gUjGIFEy-9u1TohEQ&s" },
    { name: "Nisha Bhandari", marks: "3.78 GPA", img: "https://fadcdn.s3.ap-south-1.amazonaws.com/media/1185/Lead_image_54650.jpg" },
    { name: "Suman KC", marks: "3.75 GPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0IBoJhBovaEjjWUrLhudagEedgUFO2P9pHw&s" },
    { name: "Pooja Lama", marks: "3.72 GPA", img: "https://www.ptusha.org/uploads/alumni/ritty-passportnew.jpg" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="achievement-page">
      {/* HERO */}
      <div className="achievement-hero text-white d-flex align-items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="display-3 fw-bold">Student Achievements</h1>
          <p className="lead">
            Celebrating excellence in academics, sports, and beyond.
          </p>
        </motion.div>
      </div>

      <div className="container my-5">
        {/* SEE TOPPERS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-5"
        >
          <h2 className="fw-bold text-success">2081-SEE Exam Toppers</h2>
          <p className="text-muted">Top performing students in SEE examination</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 mb-5"
        >
          {toppers.map((student, index) => (
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="col-lg-3 col-md-4 col-sm-6" 
              key={index}
            >
              <div className="topper-card text-center p-3 border-0 shadow-sm">
                <motion.img
                  initial={{ rotate: -10 }}
                  whileInView={{ rotate: 0 }}
                  src={student.img}
                  alt={student.name}
                  className="rounded-circle mb-3 border border-3 border-success p-1"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <h6 className="fw-semibold">{student.name}</h6>
                <p className="text-success small fw-bold">{student.marks}</p>
                <span className="badge bg-success">Rank #{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SPORTS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-4"
        >
          <h2 className="fw-bold text-success">Sports Achievements</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 mb-5"
        >
          {[
            "🏆 District Football Champions",
            "🥇 Inter-School Cricket Winners",
            "🥈 Athletics Gold Medalists",
          ].map((item, i) => (
            <motion.div variants={itemVariants} className="col-md-4" key={i}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="achievement-card p-4 text-center"
              >
                <h5 className="mb-0">{item}</h5>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* EVENTS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-4"
        >
          <h2 className="fw-bold text-success">Other Achievements</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {[
            "🎭 Drama Competition Winners",
            "💻 Coding Hackathon Finalists",
            "🎤 Debate Competition Champions",
          ].map((item, i) => (
            <motion.div variants={itemVariants} className="col-md-4" key={i}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="achievement-card p-4 text-center"
              >
                <h5 className="mb-0">{item}</h5>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}