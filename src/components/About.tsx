import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1F4788]">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              alt="Tutoring Session"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-gray-600 leading-relaxed">
            <p className="mb-4">
              At Tutor xxx place, we are a team of dedicated and experienced academicians committed to empowering students to excel in their academic journey.
            </p>
            <p className="mb-4">
              Our personalized approach ensures that each student receives tailored support in a wide range of subjects, helping them to build confidence and achieve their full potential.
            </p>
            <p>
              With a focus on expertise, flexibility, and affordability, Tutor xxx provides a supportive and nurturing environment for students to thrive academically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}