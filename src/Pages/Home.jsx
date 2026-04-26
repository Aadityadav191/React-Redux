import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const teachers = [
    {
      name: "miss Saradha paudel ",
      role: "Principal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHUSqlOy4ZAa9K_Ftvxzt11lnU2hMPh4khQ&s",
      desc: "10+ years of experience in teaching mathematics.",
    },
    {
      name: "Ms. Priya basnet",
      role: "Coordinator",
      img: "https://visafoto.com/img/ejemplo-de-foto-carnet-de-3x3-cm.webp",
      desc: "Focused on scientific research and innovation.",
    },
    {
      name: "Mrs. nischal chaulagai ",
      role: "President",
      img: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Shamsher-Bahadur-Thapa.jpg",
      desc: "Encourages communication and creativity.",
    },
    {
      name: "Mr. santosh Newar",
      role: "Science Teacher",
      img: "https://b360nepal.com/storage/wp-content/uploads/2021/02/binod-snow-yak-4-683x1024.jpg",
      desc: "Passionate about practical science learning.",
    },
    {
      name: "Ms. Sita Dahal",
      role: "English Teacher",
      img: "https://folkbazar.com/cdn/shop/files/Dhakatopi_4_12144019-fa9b-4b60-835f-60ab4508119a.jpg?v=1767850006",
      desc: "Helps students improve communication skills.",
    },
    {
      name: "Mr. Hari Sharma",
      role: "Math Teacher",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbWS2VG7EhypNl9Y2X8T1neEepe2BY7AlUQ&s",
      desc: "Teaches programming and modern technologies.",
    },
    {
      name: "Mr. hariom patel",
      role: "Economics Teacher",
      img: "https://www.lumbinibikasbank.com/assets/backend/uploads/Leadership/Management%20team/image-904x878.jpg",
      desc: "Teaches programming and modern technologies.",
    },
    {
      name: "Mr. pramit bhakhrel",
      role: "Social  Teacher",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlt--fdqelkUj9fEBC09mYTnDoaIV2FMy5nA&s",
      desc: "Teaches programming and modern technologies.",
    },
    {
      name: "Mr. Biplov katella",
      role: "Biology Teacher",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ZkoAeuR2H2ymKsi6iAvlRdzuhnMvOwSR-g&s",
      desc: "Teaches programming and modern technologies.",
    },
    {
      name: "Mr. hariom patel",
      role: "Science Teacher",
      img: "https://daopyuthan.moha.gov.np/images/cache/5d86f45f45d948e4f661a257a005ba48/300x-ppsize.png",
      desc: "Teaches programming and modern technologies.",
    },
    {
      name: "Mr. pramit bhakhrel",
      role: "Computer Teacher",
      img: "https://www.shutterstock.com/image-photo/athens-georgia-usa-april-12-260nw-2654332713.jpg",
      desc: "Teaches programming and modern technologies.",
    },
    {
      name: "Mr. Biplov katella",
      role: "Vice Principal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50C_QliyipK_lmrt850Xj0yecr4olL19G-w&s",
      desc: "Teaches programming and modern technologies.",
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
    <div className="home-bg min-vh-100">
      <div className="container py-5">
        {/* Welcome Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold text-success">
            Welcome to Sahara National school
          </h1>
          <p className="lead text-dark">
            Empowering young minds for a brighter tomorrow. Our school fosters
            an environment of growth, creativity, and excellence.
          </p>
          <motion.img
            whileHover={{ scale: 1.02 }}
            src="https://www.aksharaaschool.edu.np/assets/aksharaa-school-uNZ4k0oj.jpg"
            alt="School Building"
            className="img-fluid rounded shadow-sm mb-4"
          />
        </motion.div>

        {/* About Us Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="fw-bold text-success display-6">About Us</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            Sahara National school is more than just a place for learning — it's a
            community that nurtures curiosity, creativity, and leadership.
            We are committed to building a strong foundation for future success.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {/* Mission */}
          <motion.div variants={fadeInUp} className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm about-card text-center p-4">
              <div className="mb-3 fs-1 text-success">🎯</div>
              <h5 className="fw-semibold mb-2">Our Mission</h5>
              <p className="text-muted small">
                To provide quality education and nurture every student’s
                potential in a safe and inspiring environment with a balanced
                focus on academics and personal growth.
              </p>
            </div>
          </motion.div>

          {/* Academics */}
          <motion.div variants={fadeInUp} className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm about-card text-center p-4">
              <div className="mb-3 fs-1 text-success">📚</div>
              <h5 className="fw-semibold mb-2">Academics</h5>
              <p className="text-muted small">
                Our curriculum ensures academic excellence along with
                co-curricular development, helping students grow into
                well-rounded individuals.
              </p>
            </div>
          </motion.div>

          {/* Admissions */}
          <motion.div variants={fadeInUp} className="col-lg-4 col-md-6 mx-auto">
            <div className="card h-100 border-0 shadow-sm about-card text-center p-4">
              <div className="mb-3 fs-1 text-success">🚀</div>
              <h5 className="fw-semibold mb-2">Admissions</h5>
              <p className="text-muted small">
                Join our vibrant community! Admissions are open for the
                upcoming academic session. Start your journey with us today.
              </p>
              <button className="btn btn-success mt-2 px-4">
                Apply Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Meet Our Dedicated Faculty</h2>
            <div className="mt-2 h-1 w-20 bg-green-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="container my-5">
            <div className="text-center mb-4">
              <h2 className="display-6 text-success">Our Faculty</h2>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="row"
            >
              {teachers.map((teacher, index) => (
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                  key={index}
                >
                  <div className="card border-success shadow-sm h-100">
                    <img
                      src={teacher.img}
                      alt={teacher.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h6 className="text-success mb-1">{teacher.name}</h6>
                      <p className="mb-1 small fw-bold">{teacher.role}</p>
                      <p className="text-muted small">{teacher.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <div className="container py-5">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-5"
        >
          <h2 className="display-5 text-success">Upcoming Events</h2>
          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <motion.div whileHover={{ scale: 1.03 }} className="card border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-success">Science Fair</h5>
                  <p className="card-text">
                    Join us for our annual science fair on May 15th, 2024. A
                    chance to explore and showcase scientific innovations!
                  </p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkucYaRRtqFqMVrIRs4hhTiZ9S7P5oJ-YZWtqDNQJTT-Z-Nb8XZOs1OYzcdxqR5_m8CXo&usqp=CAU"
                    alt="Science Fair"
                    className="card-img-top"
                  />
                </div>
              </motion.div>
            </div>

            <div className="col-md-4 mb-4">
              <motion.div whileHover={{ scale: 1.03 }} className="card border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-success">Sports Day</h5>
                  <p className="card-text">
                    Our Sports Day on June 5th, 2024, will feature various
                    sports activities for students of all ages. It's a
                    fun-filled day for everyone!
                  </p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFR97akETnOrpWkggL5frg-jf_cxKEAAjAPA&s"
                    alt="Sports Day"
                    className="card-img-top"
                  />
                </div>
              </motion.div>
            </div>

            <div className="col-md-4 mb-4">
              <motion.div whileHover={{ scale: 1.03 }} className="card border-success shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-success">Cultural Fest</h5>
                  <p className="card-text">
                    Our Cultural Fest will be held on July 1st, 2024. A
                    celebration of arts, music, and performances by our talented
                    students.
                  </p>
                  <img
                    src="https://thepremiaacademy.com/assets/uploads/blogs/1664532894.jpg"
                    alt="Cultural Fest"
                    className="card-img-top"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center pb-5"
        >
          <h2 className="display-5 text-success">Contact Us</h2>
          <p className="lead text-dark">
            Feel free to reach out for more information or to schedule a visit
            to our school.
          </p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-success px-5 py-2"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}