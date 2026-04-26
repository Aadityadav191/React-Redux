import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      category: "Academic Services",
      items: [
        {
          icon: "📘",
          title: "Academic Courses",
          desc: "Comprehensive programs in Science, Arts, and Commerce with modern pedagogy.",
        },
        {
          icon: "👨‍🏫",
          title: "Personalized Tutoring",
          desc: "Dedicated one-on-one support for students requiring extra academic attention.",
        },
        {
          icon: "🧪",
          title: "Special Programs",
          desc: "Advanced STEM labs, foreign language classes, and creative writing workshops.",
        },
      ],
    },
    {
      category: "Extracurricular Activities",
      items: [
        {
          icon: "⚽",
          title: "Sports Excellence",
          desc: "Professional coaching in Football, Cricket, Basketball, and Martial Arts.",
        },
        {
          icon: "🎨",
          title: "Creative Arts",
          desc: "State-of-the-art studios for Fine Arts, Vocal Music, and Theatre performances.",
        },
        {
          icon: "💻",
          title: "Innovation Clubs",
          desc: "Robotics, Coding, Debate Society, and Eco-Sustainability volunteer clubs.",
        },
      ],
    },
    {
      category: "Student Wellness",
      items: [
        {
          icon: "🧠",
          title: "Mental Health Support",
          desc: "Professional counseling sessions for emotional and psychological well-being.",
        },
        {
          icon: "🎯",
          title: "Career Pathing",
          desc: "Aptitude testing and expert guidance for university admissions and career goals.",
        },
        {
          icon: "🏥",
          title: "Health & Safety",
          desc: "24/7 on-campus infirmary with qualified nursing staff and emergency protocols.",
        },
      ],
    },
    {
      category: "Campus Facilities",
      items: [
        {
          icon: "🚌",
          title: "Secure Transport",
          desc: "GPS-enabled bus service covering all major routes with trained attendants.",
        },
        {
          icon: "🍱",
          title: "Hygienic Cafeteria",
          desc: "Nutritious, chef-prepared meals focusing on a balanced diet for growing children.",
        },
        {
          icon: "🛡️",
          title: "24/7 Security",
          desc: "Comprehensive CCTV surveillance and strictly controlled entry/exit points.",
        },
      ],
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <div className="services-hero d-flex align-items-center text-center text-white" 
           style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://johndewey.edu.np/wp-content/themes/johndeweytheme/assets/img/programs-school.jpg") center/cover', height: '50vh' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="display-3 fw-bold text-success">Our Services</h1>
          <p className="lead text-success fw-bold bg-white d-inline-block px-3 py-1 rounded">
            Empowering students academically, socially, and emotionally.
          </p>
        </motion.div>
      </div>

      <div className="container my-5">
        
        {/* WHY CHOOSE US SECTION (NEW CONTENT) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="row align-items-center mb-5 g-5"
        >
          <div className="col-lg-6">
            <h2 className="fw-bold text-success">Why Choose AKSHARAA?</h2>
            <p className="text-muted">
              We provide a holistic ecosystem where students don't just learn—they thrive. 
              Our facilities are designed to meet international standards, ensuring your child 
              receives the best preparation for the global stage.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">✅ Integrated Digital Classrooms</li>
              <li className="mb-2">✅ Low Teacher-to-Student Ratio</li>
              <li className="mb-2">✅ Emphasis on Character Building</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <motion.img 
              whileHover={{ scale: 1.03 }}
              src="https://nationalunited.edu.np/wp-content/uploads/2020/05/NSS4.jpg" 
              className="img-fluid rounded shadow" 
              alt="Learning Environment" 
            />
          </div>
        </motion.div>

        <hr className="my-5" />

        {/* SERVICES CATEGORIES */}
        {services.map((section, index) => (
          <div key={index} className="mb-5">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-4"
            >
              <h2 className="fw-bold text-success border-bottom d-inline-block pb-2">
                {section.category}
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="row g-4"
            >
              {section.items.map((item, i) => (
                <motion.div className="col-lg-4 col-md-6" key={i} variants={fadeInUp}>
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    className="service-card p-4 text-center h-100 bg-white border rounded shadow-sm"
                  >
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <h5 className="fw-semibold text-success">{item.title}</h5>
                    <p className="text-muted small">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-box text-center p-5 mt-5 bg-light rounded-4 border border-success border-dashed"
        >
          <h2 className="fw-bold mb-3">
            Want to know more about our programs?
          </h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Our admissions office is open from 9:00 AM to 4:00 PM. Contact us today 
            and explore how we can help your child succeed.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-success btn-lg px-5 shadow"
          >
            Get in Touch
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}