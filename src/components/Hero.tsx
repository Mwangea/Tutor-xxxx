import React from 'react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen relative flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(31, 71, 136, 0.9), rgba(74, 155, 140, 0.9)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Students to Excel
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Transform your academic journey with personalized tutoring that builds confidence and achieves results.
        </p>
        <button className="bg-white text-[#1F4788] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
          Start Learning Today
        </button>
      </div>
    </section>
  );
}