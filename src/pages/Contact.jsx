import React from 'react';
import { MapPin, Phone, Mail, Clock, Building2, Shield, Award, Users } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Construction Ave", "Metro City, ST 12345"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(123) 456-7890", "(987) 654-3210"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@rncconstruction.com", "support@rncconstruction.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8AM - 6PM", "Saturday: 9AM - 2PM"]
  }
];

function ContactCard({ icon: Icon, title, details }) {
  return (
    <div className="group hover-card artistic-border">
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg text-center">
        <Icon className="h-8 w-8 mx-auto text-orange-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-xl font-bold mb-4 text-gradient">{title}</h3>
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-600 dark:text-gray-300">{detail}</p>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-orange-600 to-orange-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Let's discuss your next construction project and bring your vision to life
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="h-10 w-10 text-orange-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Let's Build Together</h2>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Whether you're planning a new construction project or need renovation services, we're here to help. Fill out the form, and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-600 mr-2" />
                  Licensed, Bonded & Insured
                </p>
                <p className="flex items-center">
                  <Award className="h-5 w-5 text-orange-600 mr-2" />
                  Award-winning Construction Company
                </p>
                <p className="flex items-center">
                  <Users className="h-5 w-5 text-orange-600 mr-2" />
                  Dedicated Project Managers
                </p>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 relative">
        <iframe
          title="RNC Construction Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043276541!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}