import React from 'react';
import Head from 'next/head';

export default function Hero() {
  return (
    <>
      <Head>
        <title>Personalized Student Tutoring | Transform Your Academic Journey</title>
        <meta 
          name="description" 
          content="Transform your academic journey with expert personalized tutoring. Our proven methods build confidence and achieve outstanding results. Start your learning journey today."
        />
        <meta 
          name="keywords" 
          content="student tutoring, academic excellence, personalized education, confidence building, academic achievement"
        />
        <meta property="og:title" content="Personalized Student Tutoring | Transform Your Academic Journey" />
        <meta 
          property="og:description" 
          content="Transform your academic journey with expert personalized tutoring. Our proven methods build confidence and achieve outstanding results."
        />
        <meta property="og:type" content="website" />
      </Head>
      <section 
        id="home" 
        aria-label="Homepage Hero Section"
        className="pt-20 min-h-screen relative flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(31, 71, 136, 0.9), rgba(74, 155, 140, 0.9)), url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" itemProp="headline">
            Empowering Students to Excel
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" itemProp="description">
            Transform your academic journey with personalized tutoring that builds confidence and achieves results.
          </p>
          <button 
            className="bg-white text-[#1F4788] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            aria-label="Start your tutoring journey"
            onClick={() => {}} // Add your click handler here
          >
            Start Learning Today
          </button>
        </div>
        {/* Add structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Student Tutoring Services",
            "description": "Transform your academic journey with personalized tutoring that builds confidence and achieves results.",
            "offers": {
              "@type": "Offer",
              "description": "Personalized tutoring services"
            }
          })}
        </script>
      </section>
    </>
  );
}