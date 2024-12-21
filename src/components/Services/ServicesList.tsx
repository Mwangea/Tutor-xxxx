import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { allServices, serviceCategories, Service, ServiceCategory } from './servicesData';
import { Filter } from 'lucide-react';

export default function ServiceList() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');
  const [visibleServices, setVisibleServices] = useState<Service[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const filteredServices = selectedCategory === 'all' 
      ? allServices 
      : allServices.filter(service => service.category === selectedCategory);
    
    setVisibleServices(showMore ? filteredServices : filteredServices.slice(0, ITEMS_PER_PAGE));
  }, [selectedCategory, showMore]);

  useEffect(() => {
    // Simulate image loading
    const loadImages = async () => {
      const imagePromises = allServices.map(service => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = service.image;
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setIsLoading(false);
    };
    loadImages();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-[#1F4788] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive academic support and professional exam preparation services
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-[#1F4788]" />
            <span className="text-lg font-semibold text-[#1F4788]">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${selectedCategory === 'all' 
                  ? 'bg-[#1F4788] text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-[#1F4788] text-white shadow-lg transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl h-96 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {visibleServices.map((service, index) => (
                <ServiceCard
                  key={`${service.title}-${index}`}
                  service={service}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Load More Button */}
        {!showMore && visibleServices.length < allServices.length && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowMore(true)}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-[#4A9B8C] rounded-full
                hover:bg-[#3d8274] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A9B8C] 
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              aria-label="Load more services"
            >
              Load More Services
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}