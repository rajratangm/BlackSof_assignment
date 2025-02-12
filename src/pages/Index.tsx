
import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import LogoImage from "../pages/Layer 1.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contactRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const slides = [
    "Innovative Solutions for Tomorrow",
    "Leading Edge Technology",
    "Sustainable Manufacturing",
    "Global Excellence"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/company/supreme-group', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src={LogoImage} 
            alt="Supreme Group Logo" 
            className="h-10 md:h-12 object-contain"
          />
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToContact} 
              className="bg-[#00A3E0] text-white px-6 py-2 rounded-full hover:bg-[#0087B8] transition-colors"
            >
              Contact Us
            </button>
            <button 
              onClick={openLinkedIn}
              className="text-[#0A66C2] hover:text-[#084d91] transition-colors p-2"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Soft Trims and NVH Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            for seamless rides
          </motion.p>
        </div>
      </section>

      {/* Vertical Slider Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Evolving the drive with 360-degree nonwoven solutions
          </h2>
          <div className="vertical-slider">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="slide"
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 50,
                }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl text-center">{slide}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={contactRef} className="bg-[#0066B3] text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <p className="mb-8">For general enquiries</p>
            <div className="space-y-4">
              <p>Address</p>
              <p>110, IRIS Road Chembur, Mumbai - 400071</p>
              <p>Phone</p>
              <p>+91 22 25208622</p>
              <p>Email</p>
              <p>info@supremegroup.co.in</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register("fullName", { required: "Full name is required" })}
                placeholder="Full name"
                className="form-input"
              />
              {errors.fullName && <p className="text-red-300 text-sm mt-1">{errors.fullName.message?.toString()}</p>}
            </div>
            <div>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="E-mail"
                className="form-input"
              />
              {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message?.toString()}</p>}
            </div>
            <div>
              <input
                {...register("subject", { required: "Subject is required" })}
                placeholder="Subject"
                className="form-input"
              />
              {errors.subject && <p className="text-red-300 text-sm mt-1">{errors.subject.message?.toString()}</p>}
            </div>
            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Message"
                rows={4}
                className="form-input resize-none"
              />
              {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message.message?.toString()}</p>}
            </div>
            <button type="submit" className="bg-white text-[#0066B3] px-8 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">APPLICATIONS</h3>
              <ul className="space-y-2">
                <li>Apparel</li>
                <li>Automotive</li>
                <li>Filtration</li>
                <li>Customer Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>Innovation</li>
                <li>Global Competency</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">MORE</h3>
              <ul className="space-y-2">
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">FOLLOW US</h3>
              <ul className="space-y-2">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
            <p>©2023. All Rights Reserved</p>
            <p>Supreme House, 110, IRIS Road, Chembur, Mumbai - 400071</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
