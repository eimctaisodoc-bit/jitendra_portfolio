import React, { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Select from 'react-select';
import { ScrollContext } from '../hooks/context';

export const Footer_ = () => {
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

  const serviceOptions = [
    { value: 'web', label: 'Web Development' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'marketing', label: 'Digital Marketing' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: state.isFocused ? '2px solid #ffde59' : '2px solid #374151',
      borderRadius: '0',
      padding: '4px 0',
      boxShadow: 'none',
      '&:hover': {
        borderBottom: '2px solid #ffde59',
      },
    }),
    input: (provided) => ({
      ...provided,
      color: 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9ca3af',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#111',
      border: '1px solid #374151',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#ffde59' : 'transparent',
      color: state.isFocused ? 'black' : 'white',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#ffde59',
      },
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#374151',
      '&:hover': { color: '#ffde59' },
    }),
  };
  const ref = useRef(null);
  const { registerSection, unregisterSection } = useContext(ScrollContext);
  useEffect(() => {
    registerSection("contact", ref);
    return () => unregisterSection("contact");
  }, [])
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: null,
    message: '',
  });

  const handleSubmit = () => {
    console.log(formData);
  };
  console.log(formData);
  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        ref={ref}
      >
        <h1 className="font-serif flex flex-col gap-2 text-4xl lg:text-6xl md:text-6xl font-bold leading-tight text-white">
          Let's Work <br />
          <span className="text-amber-500">Together!</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Have a project in mind? Let's build something great.
        </p>
      </motion.div>

      <motion.form
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-sm uppercase tracking-wider text-white">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            id="name"
            value={formData.name}
            placeholder="John Doe"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="bg-transparent border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-[#ffde59] transition-colors placeholder:text-gray-500"
          />
        </motion.div>

        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-sm uppercase tracking-wider text-white">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="john@example.com"
            className="bg-transparent border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-[#ffde59] transition-colors placeholder:text-gray-500"
          />
        </motion.div>

        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-medium text-sm uppercase tracking-wider text-white">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+1 (555) 000-0000"
            className="bg-transparent border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-[#ffde59] transition-colors placeholder:text-gray-500"
          />
        </motion.div>

        <motion.div variants={itemVars} className="flex flex-col gap-2">
          <label className="font-medium text-sm uppercase tracking-wider text-white">
            Service Required <span className="text-red-500">*</span>
          </label>
          <Select
            options={serviceOptions}
            styles={customStyles}
            placeholder="Select a service"
            isSearchable={false}
            value={formData.service}
            onChange={(selectedOption) =>
              setFormData({ ...formData, service: selectedOption })
            }
          />
        </motion.div>

        <motion.div variants={itemVars} className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="font-medium text-sm uppercase tracking-wider text-white">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            id="message"
            rows="4"
            value={formData.message}
            placeholder="Tell me about your project..."
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-transparent border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-[#ffde59] transition-colors resize-none placeholder:text-gray-500"
          ></textarea>
        </motion.div>

        <motion.div variants={itemVars} className="md:col-span-2 pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            type="submit"
            whileTap={{ scale: 0.98 }}
            className="bg-amber-500 text-white font-bold py-4 px-10 rounded-full hover:shadow-[0_0_20px_rgba(255,222,89,0.4)] transition-all"
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};