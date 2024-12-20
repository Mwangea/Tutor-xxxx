import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from './projectsData';
import Head from 'next/head';

export default function ProjectsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    setVisibleProjects(projectsData.slice(startIndex, endIndex));
  }, [currentPage]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <>
      <Head>
        <title>Success Stories - Academic Achievement Showcase</title>
        <meta name="description" content="Explore our collection of academic success stories, featuring remarkable achievements in SAT scores, nursing exams, and college admissions." />
        <meta property="og:title" content="Success Stories - Academic Achievement Showcase" />
        <meta property="og:description" content="Discover inspiring academic success stories and remarkable achievements from our students." />
        <meta name="keywords" content="academic success, SAT improvement, HESI exam, nursing education, college preparation, test scores" />
      </Head>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-[#1F4788]"
          >
            Success Stories
          </motion.h2>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-sm text-blue-600 mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 text-[#1F4788]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <motion.div 
              className="mt-12 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#1F4788] text-white rounded-md disabled:opacity-50 hover:bg-blue-700 transition-colors"
              >
                Previous
              </motion.button>
              <motion.span 
                className="px-4 py-2"
                key={currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={pageTransition}
              >
                Page {currentPage} of {totalPages}
              </motion.span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#1F4788] text-white rounded-md disabled:opacity-50 hover:bg-blue-700 transition-colors"
              >
                Next
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}