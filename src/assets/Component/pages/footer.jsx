import React from 'react';
import { motion } from 'framer-motion';

export const Footer_ = () => {
  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0, y: 20 },
    
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full max-w-6xl mx-auto  mt-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="font-serif text-5xl lg:text-7xl md:text-7xl font-bold leading-tight">
          Let's Work <br />
          <span className="text-[#ffde59]">Together!</span>
        </h1>
        <p className="text-gray-400 mt-4  text-lg">Have a project in mind? Let's build something great.</p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Full Name */}
        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-sm uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            id="name"
            placeholder="John Doe"
            className="bg-transparent border-b-2 border-gray-700 py-3 focus:outline-none focus:border-[#ffde59] transition-colors"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-sm uppercase tracking-wider">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            id="email"
            placeholder="john@example.com"
            className="bg-transparent border-b-2 border-gray-700 py-3 focus:outline-none focus:border-[#ffde59] transition-colors"
          />
        </motion.div>

        {/* Phone */}
        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-medium text-sm uppercase tracking-wider">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="tel"
            id="phone"
            placeholder="+1 (555) 000-0000"
            className="bg-transparent border-b-2 border-gray-700 py-3 focus:outline-none focus:border-[#ffde59] transition-colors"
          />
        </motion.div>

        {/* Services Select */}
        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label htmlFor="services" className="font-medium text-sm uppercase tracking-wider">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
          
            required
            id="services"
            className="bg-transparent border-b-2 border-gray-700 py-3 focus:outline-none focus:border-[#ffde59] transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled selected>Select a service</option>
            <option value="web" className='bg-black'>Web Development</option>
            <option value="design" className='bg-black'>UI/UX Design</option>
            <option value="marketing" className='bg-black'>Digital Marketing</option>
          </select>
        </motion.div>

        {/* Message - Full Width */}
        <motion.div variants={itemVars} className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="font-medium text-sm uppercase tracking-wider">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            id="message"
            rows="4"
            placeholder="Tell me about your project..."
            className="bg-transparent border-b-2 border-gray-700 py-3 focus:outline-none focus:border-[#ffde59] transition-colors resize-none"
          ></textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVars} className="md:col-span-2 pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#ffde59] text-black font-bold py-4 px-10 rounded-full hover:shadow-[0_0_20px_rgba(255,222,89,0.4)] transition-all"
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};