import { motion, AnimatePresence } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { useState } from 'react';
import './index.css';

export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'Tailwind CSS', 'HTML', 'JavaScript'],
    },
    {
      category: 'Backend & Tools',
      items: ['Python', 'Docker', 'Git'],
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Collaboration', 'Continuous Learning'],
    },
    {
      category: 'Platforms',
      items: ['Linux', 'GitHub', 'VS Code'],
    },
  ];

  const projects = [
    {
      title: 'Real-Time Object Detection System',
      image: '/images/object_detection.jpg',
      description: 'Developed a containerized object detection system for real-time monitoring. Integrated OpenCV for video processing and optimized detection latency. Achieved under 200ms inference time for tracking people and vehicles. Deployed system with Docker for scalable and portable use.',
      link: 'https://github.com/your-repo/object-detection',
    },
    {
      title: 'Face Attendance System',
      image: '/images/face_attendence.jpg',
      description: 'Built a face recognition-based attendance tracking system. Used YOLO for fast and accurate face detection. Enabled real-time automatic entry logging of individuals. Designed with performance optimization for live environments.',
      link: 'https://github.com/your-repo/face-attendance',
    },
    {
      title: 'Object Counting Application',
      image: '/images/object_counting.jpg',
      description: 'Designed a counting model for objects like people, animals, and bottles. Leveraged YOLO for precise multi-object detection. Tuned model and logic for high accuracy in live video feeds. Built for use in surveillance, crowd monitoring, and analytics.',
      link: 'https://github.com/your-repo/object-counting',
    },
    {
      title: 'Text-to-Image Generator',
      image: '/images/text-.webp',
      description: 'Implemented a text-to-image generation system using LLaVA models. Designed prompts and fine-tuned settings to improve image realism. Integrated HuggingFace libraries for model access and performance. Experimented with various prompts for creative visual outputs.',
      link: 'https://github.com/your-repo/image-generator',
    },
    {
      title: 'Matrimony Web Application',
      image: '/images/matromony.jpg',
      description: 'Developed a responsive matrimonial web platform from scratch. Implemented user authentication and profile matchmaking UI. Designed mobile-friendly UI with Tailwind CSS components. Collaborated on UI/UX enhancements with design inputs.',
      link: 'https://github.com/your-repo/matrimony',
    },
    {
      title: 'Car Sales Platform',
      image: '/images/Car_sale.webp',
      description: 'Built a frontend interface for car listings, search, and filtering. Used component-based design for scalability and reusability. Implemented responsive layout for desktop and mobile views. Simulated dynamic content using mock APIs.',
      link: 'https://github.com/your-repo/car-sales',
    },
    {
      title: 'Pizza Delivery Website',
      image: '/images/Screenshot 2025-06-02 112155.png',
      description: 'Designed a pizza ordering site with real-time cart functionality. Added delivery tracking UI and engaging animations. Included responsive layout and dark mode support. Hosted live site on GitHub Pages.',
      link: 'https://github.com/your-repo/pizza-delivery',
    },
    {
      title: 'Portfolio Website',
      image: '/images/pexels-ann-h-45017-32342295.jpg',
      description: 'Created a personal portfolio showcasing skills, projects, and contact info. Integrated smooth scroll, animations, and dark mode toggle. Optimized for responsiveness and fast loading. Deployed using GitHub Pages for easy access.',
      link: 'https://github.com/your-repo/portfolio',
    },
  ];

  const experience = [
    {
      role: 'Frontend Developer',
      company: 'Prowebic',
      location: 'Bangalore, India',
      duration: '06/2023 – 12/2023',
      image: '/images/twitter-prowebic.png',
      responsibilities: [
        'Built responsive web interfaces using React and Tailwind CSS.',
        'Collaborated with designers to translate UI/UX designs into interactive pages.',
        'Integrated frontend with mock APIs to simulate dynamic content.',
      ],
    },
    {
      role: 'Junior AI Engineer',
      company: 'Deepcept AI Pvt Ltd',
      location: 'Bangalore, India',
      duration: '01/2022 – 05/2023',
      image: '/images/1738174710913.jpg',
      responsibilities: [
        'Developed real-time object detection systems using YOLO and OpenCV.',
        'Containerized machine learning pipelines with Docker for scalable deployment.',
        'Worked on LLaVA models to generate visual outputs from text prompts.',
      ],
    },
  ];

  const education = [
    {
      degree: 'B.E. in Computer Science',
      institution: 'RL Jalappa Institute of Technology',
      location: 'Bangalore, India',
      duration: '2020–2024',
      cgpa: '7.03',
    },
    {
      degree: '12th/Pre-University (PCMB)',
      institution: 'Sri Chaitanya PU College',
      location: 'Bangalore, India',
      duration: '2018–2020',
      cgpa: '6.73',
    },
  ];

  const certifications = [
    {
      title: 'Web Development',
      issuer: 'Tech Citi Software Consulting',
      duration: '09/2023 – 10/2023',
    },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const mediaVariants = {
    initial: { opacity: 1, scale: 1 },
    hover: { opacity: 0, scale: 0.95, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut', delay: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white font-inter">
      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-2xl bg-gray-900/80 border-b border-purple-500/30 p-6 z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:scale-105 transition-transform duration-300">
            Shreyas T J
          </h1>
          <div className="space-x-8 text-lg font-medium">
            {['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="relative group hover:text-purple-300 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="flex items-center justify-center min-h-screen py-24 px-4 bg-gradient-to-r from-purple-900/70 to-indigo-900/70">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.img
            src="/images/passport_photo.jpeg"
            alt="Shreyas T J"
            className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-full object-fill border-4 border-purple-400 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: 2, boxShadow: '0 0 20px rgba(147,51,234,0.6)' }}
          />
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Shreyas T J
            </motion.h1>
            <p className="text-xl md:text-2xl font-semibold text-white/90 mb-4 flex items-center gap-2 justify-center md:justify-start">
              <FaReact className="text-3xl animate-spin-slow text-blue-400" /> Frontend Developer | AI Enthusiast
            </p>
            <motion.p
              className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Frontend Developer with a background in AI and hands-on experience building interactive, responsive web applications using React and Tailwind CSS. Skilled in Python, Docker, and machine learning tools, with a passion for building scalable, user-focused products. Adaptable, detail-oriented, and driven to keep learning and solving real-world problems.
            </motion.p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(147,51,234,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/images/Shreyas_TJ_Resume.pdf"
                download
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59,130,246,0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto p-8 my-16">
        <motion.h3
          className="text-4xl font-bold mb-10 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h3>
        <div className="space-y-8">
          {skills.map(category => (
            <div key={category.category}>
              <h4 className="text-2xl font-semibold mb-4 text-white/90">{category.category}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                {category.items.map(skill => (
                  <motion.div
                    key={skill}
                    className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-6 rounded-2xl shadow-xl hover:shadow-2xl backdrop-blur-lg border border-purple-500/50 hover:border-blue-400/70"
                    whileHover={{ scale: 1.1, rotate: 2, boxShadow: '0 0 15px rgba(147,51,234,0.5)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-lg font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto p-8 my-16 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 rounded-2xl shadow-2xl backdrop-blur-lg">
        <motion.h3
          className="text-4xl font-bold mb-10 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h3>
        <div className="grid gap-8 md:grid-cols-2">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-500/50 hover:border-blue-400/70 transition-all duration-300"
              onHoverStart={() => setHoveredCard(`experience-${index}`)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(147,51,234,0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold mb-2 text-purple-300">{exp.role}</h4>
              <p className="text-white/90 mb-3 font-medium">{exp.company} | {exp.location} | {exp.duration}</p>
              <img
                src={exp.image}
                alt={exp.role}
                className="w-full h-48 object-contain rounded-lg mb-4 shadow-md bg-gray-900/50"
              />
              <AnimatePresence>
                {hoveredCard === `experience-${index}` && (
                  <motion.ul
                    className="list-disc list-inside text-white/80 space-y-2 text-sm"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {exp.responsibilities.map(responsibility => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-5xl mx-auto p-8 my-16 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 rounded-2xl shadow-2xl backdrop-blur-lg">
        <motion.h3
          className="text-4xl font-bold mb-10 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h3>
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-500/50 hover:border-blue-400/70 transition-all duration-300"
              onHoverStart={() => setHoveredCard(`education-${index}`)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(147,51,234,0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold mb-2 text-purple-300">{edu.degree}</h4>
              <p className="text-white/90 mb-3 font-medium">{edu.institution} | {edu.location}</p>
              <p className="text-white/80 mb-3">{edu.duration}</p>
              <AnimatePresence>
                {hoveredCard === `education-${index}` && (
                  <motion.p
                    className="text-white/80 font-medium"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    CGPA: {edu.cgpa}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto p-8 my-16">
        <motion.h3
          className="text-4xl font-bold mb-10 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative bg-gradient-to-br from-gray-800/40 via-purple-900/40 to-indigo-900/40 p-6 rounded-2xl shadow-2xl backdrop-blur-lg border border-purple-500/50 hover:border-blue-400/70 hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] transition-all duration-500 overflow-hidden"
              onHoverStart={() => setHoveredCard(`project-${index}`)}
              onHoverEnd={() => setHoveredCard(null)}
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-purple-300 mb-4 text-center">{project.title}</h4>
              <motion.div className="relative w-full h-64">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill rounded-xl shadow-lg"
                  variants={mediaVariants}
                  initial="initial"
                  animate={hoveredCard === `project-${index}` ? 'hover' : 'initial'}
                />
                <AnimatePresence>
                  {hoveredCard === `project-${index}` && (
                    <motion.div
                      className="absolute inset-0 p-6 flex flex-col justify-between items-start bg-gradient-to-br from-purple-900/90 to-indigo-900/90 rounded-xl"
                      variants={textVariants}
                      initial="initial"
                      animate="hover"
                      exit="initial"
                    >
                      <p className="text-white/90 leading-relaxed text-sm flex-grow">{project.description}</p>
                      {/* <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(147,51,234,0.5)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.a> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-5xl mx-auto p-8 my-16 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 rounded-2xl shadow-2xl backdrop-blur-lg">
        <motion.h3
          className="text-4xl font-bold mb-10 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h3>
        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-purple-500/50 hover:border-blue-400/70 transition-all duration-300"
              onHoverStart={() => setHoveredCard(`certification-${index}`)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(147,51,234,0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold mb-2 text-purple-300">{cert.title}</h4>
              <p className="text-white/90 mb-3 font-medium">{cert.issuer}</p>
              <AnimatePresence>
                {hoveredCard === `certification-${index}` && (
                  <motion.p
                    className="text-white/80 font-medium"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {cert.duration}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer with Contact */}
      <footer id="contact" className="text-center p-8 bg-gradient-to-br from-gray-900/50 to-indigo-900/50 backdrop-blur-lg">
        <motion.div
          className="space-y-3 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Email:{' '}
            <a
              href="mailto:tjshreyas22@gmail.com"
              className="text-purple-300 hover:text-blue-300 transition-colors duration-300"
            >
              tjshreyas22@gmail.com
            </a>
          </p>
          <p>
            Phone:{' '}
            <a
              href="tel:+919620978399"
              className="text-purple-300 hover:text-blue-300 transition-colors duration-300"
            >
              +91-9620978399
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/shreyas-t-j-a13249302"
              className="text-purple-300 hover:text-blue-300 transition-colors duration-300"
            >
              View Profile
            </a>
          </p>
        </motion.div>
        <p className="text-white/80 mt-6">© 2025 Shreyas T J. All rights reserved.</p>
      </footer>
    </div>
  );
}





