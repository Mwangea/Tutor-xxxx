
import { motion } from 'framer-motion';
import { Clock, Users, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Clock className="w-6 h-6" />, value: '10+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Students Taught' },
    { icon: <Award className="w-6 h-6" />, value: '98%', label: 'Success Rate' }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-label="About Tutor Christabel"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1F4788] mb-4">About Us</h2>
          <p className="text-gray-600">Empowering students to reach their full academic potential</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="about-img.jpeg"
              alt="Professional tutoring session at Tutor Christabel showing a tutor working with a student"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={(e) => {
                e.target.classList.add('loaded');
              }}
              style={{
                opacity: 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                At Tutor Christabel place, we are a team of dedicated and experienced academicians committed to empowering students to excel in their academic journey.
              </p>
              <p>
                Our personalized approach ensures that each student receives tailored support in a wide range of subjects, helping them to build confidence and achieve their full potential.
              </p>
              <p>
                With a focus on expertise, flexibility, and affordability, Tutor Christabel provides a supportive and nurturing environment for students to thrive academically.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-[#1F4788] flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-2xl text-[#1F4788]">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        img.loaded {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}