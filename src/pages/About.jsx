import React from 'react';
import { Award, Users, Shield, Target, Heart, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize the well-being of our team and clients with rigorous safety protocols and continuous training."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Delivering exceptional craftsmanship and attention to detail in every project, exceeding industry standards."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Building strong partnerships with clients, suppliers, and communities through open communication and trust."
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Committed to environmentally responsible construction practices and sustainable building solutions."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Embracing advanced technologies and creative solutions to drive efficiency and project success."
  },
  {
    icon: Lightbulb,
    title: "Integrity",
    description: "Maintaining the highest ethical standards with transparency and honesty in all our business practices."
  }
];

const timeline = [
  {
    year: "1993",
    title: "Company Founded",
    description: "RNC Construction was established with a vision to transform the construction industry."
  },
  {
    year: "2000",
    title: "Regional Expansion",
    description: "Expanded operations to cover the entire West Coast region."
  },
  {
    year: "2010",
    title: "Sustainability Initiative",
    description: "Launched our green building program and obtained LEED certification."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented cutting-edge construction technologies and BIM solutions."
  }
];

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="group hover-card artistic-border">
      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg text-center">
        <Icon className="h-12 w-12 mx-auto text-orange-600 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-xl font-bold mb-4 text-gradient">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function TimelineEvent({ year, title, description, isEven }) {
  return (
    <div className={`relative flex items-center ${isEven ? 'justify-end' : 'justify-start'}`}>
      <div className={`w-5/12 ${isEven ? 'text-left pl-8' : 'text-right pr-8'}`}>
        <div className="hover-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <span className="text-orange-600 font-bold text-xl mb-2 block">{year}</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-600 border-4 border-white dark:border-gray-900"></div>
    </div>
  );
}

export default function About() {
  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-orange-600 to-orange-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
            alt="Construction site"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Three decades of excellence in construction, building not just structures, but lasting relationships
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            To deliver exceptional construction services that exceed expectations, transform communities, and set new standards for quality and innovation in the industry.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>

      {/* Company Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600"></div>
          <div className="space-y-16">
            {timeline.map((event, index) => (
              <TimelineEvent key={index} {...event} isEven={index % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}