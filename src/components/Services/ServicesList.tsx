import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { allServices } from './servicesData';

export default function ServicesList() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? allServices : allServices.slice(0, 9);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1F4788]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#4A9B8C] text-white px-8 py-3 rounded-full hover:bg-[#3d8274] transition-colors"
            >
              Load More Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}