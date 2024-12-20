import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Users, Target } from 'lucide-react';

const Metadata: FC<{ title: string; description: string }> = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

const WhyChooseUs: FC = () => {
  return (
    <>
      <Metadata
        title="Why Choose Tutor Christabel - Expert Academic Tutoring Services"
        description="Discover how Tutor Christabel's personalized approach and experienced academicians can help your child excel academically. Expert tutoring in multiple subjects."
      />

      <section className="relative py-16 lg:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(rgba(31, 71, 136, 0.9), rgba(74, 155, 140, 0.9))',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Tutor Christabel?
              </h1>
              <p className="text-white/90 mb-8 text-lg">
                At Tutor Christabel place, we are a team of dedicated and experienced academicians
                committed to empowering students to excel in their academic journey.
              </p>

              {/* Features */}
              <div className="grid gap-8 mb-12">
                {[
                  {
                    icon: <GraduationCap className="w-6 h-6" />,
                    title: 'Expert Tutors',
                    description: 'Our team consists of experienced academicians dedicated to student success.',
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Personalized Approach',
                    description: "We provide tailored support to meet each student's unique learning needs.",
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: 'Proven Results',
                    description: 'Our methods have consistently helped students achieve academic excellence.',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg text-white">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    value: 'A+',
                    label: 'Average Grade Improvement',
                    description: 'Students typically improve by 2-3 grade levels',
                  },
                  {
                    value: '95%',
                    label: 'Student Satisfaction',
                    description: 'Based on post-tutoring surveys',
                  },
                  {
                    value: '1:1',
                    label: 'Personalized Attention',
                    description: 'Individual focus for maximum results',
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <h3 className="text-white/90 font-medium mb-1">{stat.label}</h3>
                    <p className="text-sm text-white/70">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Professional tutoring session at Tutor Christabel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
