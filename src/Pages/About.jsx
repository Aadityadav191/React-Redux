import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
        staggerChildren: 0.2,
      },
    },
  };

  const imageHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <div className="about-hero d-flex align-items-center text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="fw-bold display-3 mb-3 text-success text-shadow mb-4">
            AKSHARAA School
          </h1>
          <p className="lead mb-4 text-success text-shadow">
            Where education meets inspiration and excellence.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-light text-success fw-semibold px-4"
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>

      {/* STATS SECTION */}
      <div className="container my-5">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row text-center g-4"
        >
          {[
            { label: "Years Experience", val: "30+" },
            { label: "Students", val: "5000+" },
            { label: "Teachers", val: "120+" },
            { label: "Success Rate", val: "100%" },
          ].map((stat, i) => (
            <motion.div variants={fadeInUp} className="col-md-3" key={i}>
              <h2 className="fw-bold text-success">{stat.val}</h2>
              <p className="text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container my-5">
        {/* HISTORY + IMAGE */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="row align-items-center g-5 mb-5"
        >
          <div className="col-lg-6">
            <motion.img
              whileHover="hover"
              variants={imageHover}
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              className="img-fluid rounded shadow"
              alt="school"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="text-success fw-bold mb-3">Our History</h3>
            <p className="text-muted">
              Since 1995, AKSHARAA School has been committed to academic
              excellence and holistic development. We nurture creativity,
              leadership, and confidence in every student.
            </p>
          </div>
        </motion.div>

        {/* MISSION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="row align-items-center g-5 mb-5 flex-lg-row-reverse"
        >
          <div className="col-lg-6">
            <motion.img
              whileHover="hover"
              variants={imageHover}
              src="https://scontent.fjkr1-1.fna.fbcdn.net/v/t39.30808-6/662334010_1433826345201381_6326087409399476803_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGFjXluR6dLy3vNDDBS6CnF0_tiXPAVtmjT-2Jc8BW2aKQsg-9XsJJfD85qc4R7ggRoszl93OGpn-CE95cyMeSt&_nc_ohc=bB4sLs6GVx4Q7kNvwExjov0&_nc_oc=Ado9fxVDSq-HsCkgRYKFCEm4JcNHn1NJox62vC9kZlEeFKNgu_upHS_xHB8kQj4zLXaeZlX5iLO_p4R4zXdgdfJA&_nc_zt=23&_nc_ht=scontent.fjkr1-1.fna&_nc_gid=eidIAaZxSPTD_ZPPiHs38g&_nc_ss=7b2a8&oh=00_Af1_i089AeyR0eiOsiWZmK-SxrDnOngdLCZXJ9hsPhtwTQ&oe=69F3A690"
              className="img-fluid rounded shadow"
              alt="students"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="text-success fw-bold mb-3">Our Mission</h3>
            <p className="text-muted">
              We create an inspiring environment where students develop
              critical thinking, emotional intelligence, and leadership skills
              to succeed in life.
            </p>
          </div>
        </motion.div>

        {/* VALUES */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Our Core Values</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 mb-5"
        >
          {[
            { icon: "🏆", title: "Excellence", desc: "Achieving the highest standards." },
            { icon: "🤝", title: "Integrity", desc: "Honesty and strong ethics." },
            { icon: "🌍", title: "Community", desc: "Collaboration and unity." },
          ].map((item, i) => (
            <motion.div variants={fadeInUp} className="col-md-4" key={i}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="value-card text-center p-4"
              >
                <div className="fs-1 mb-2">{item.icon}</div>
                <h5 className="fw-semibold">{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* FACILITIES */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Our Facilities</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4 mb-5"
        >
          {[
            {
              title: "Modern Classrooms",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTFP9FY0Vx8OsfXgf4wX-jZQD2gI2xEVHbg&s",
            },
            {
              title: "Library",
              img: "https://www.babywisemom.com/wp-content/uploads/2021/09/library-training.jpg",
            },
            {
              title: "Sports",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-Rp0QL5HvF8wtKRp7f63SWSJk8hMHquG9g&s",
            },
          ].map((item, i) => (
            <motion.div variants={fadeInUp} className="col-lg-4 col-md-6" key={i}>
              <div className="facility-card overflow-hidden rounded">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src={item.img} 
                  className="img-fluid" 
                  alt="" 
                />
                <div className="overlay">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GALLERY */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-success">Campus Life</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-3"
        >
          {[
            "https://d34ad2g4hirisc.cloudfront.net/volunteer_positions/photos/000/033/207/main/b086390ecded05cb02fdf92cf7863d7a.jpg",
            "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/10/Tikapur-school.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6q1bpQgH90WLP7aR9odZIx2dHk7pN3XvQg&s",
          ].map((img, i) => (
            <motion.div variants={fadeInUp} className="col-md-4" key={i}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={img} 
                className="img-fluid rounded gallery-img shadow-sm" 
                alt="" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}