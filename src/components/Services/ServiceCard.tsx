import { motion } from 'framer-motion';
import { Service } from './servicesData';
import { ExternalLink } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { title, description, Icon, image, alt, category } = service;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      layout
    >
      {/* Image Container */}
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-semibold text-white bg-[#1F4788]/80 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-[#1F4788] rounded-full flex items-center justify-center 
            transform group-hover:rotate-12 transition-transform duration-300">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#1F4788] group-hover:text-[#4A9B8C] transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More Button */}
        <div className="mt-4">
          <button
            className="inline-flex items-center text-sm font-medium text-[#4A9B8C] hover:text-[#3d8274] 
              transition-colors duration-300 group/button"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
            <ExternalLink className="w-4 h-4 ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}