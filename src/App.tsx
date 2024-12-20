
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServicesList from './components/Services/ServicesList';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import { TestimonialCard } from './components/TestimonialCard';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ServicesList />

      {/* why choose us Section */}
      <div className="min-h-screen bg-gray-100">
        
      </div>
      <ProjectsGrid />
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1F4788]">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1F4788]">Get in Touch</h3>
              <div className="space-y-4 text-gray-600">
                <p>Email: support@TutuorChristabel.com</p>
                <p>Phone: +15125735490</p>
                <p>Address: 815 Brazos St, Austin, TX 78701 - Brazos Bldg</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#1F4788]">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/*Testimonial */}
      <TestimonialCard />
      
      <Footer />
      <WhatsAppButton 
        phoneNumber="+15125735490"
        message="Hi! I'm interested in tutoring services. Can you help me?"
      />
    </div>
  );
}

export default App;