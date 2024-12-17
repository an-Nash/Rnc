import React from 'react';
import { ArrowRight, Building2, HardHat, Ruler, Shield, Home as HomeIcon, Factory, Wrench } from 'lucide-react';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import PartnerCard from '../components/PartnerCard';

export default function Home() {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Construction",
      description: "Custom homes built to your exact specifications, from modern minimalist designs to traditional architecture. We handle everything from initial planning to final touches.",
      features: ["Custom home design", "Luxury homes", "Smart integration"]
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "State-of-the-art commercial buildings designed for maximum functionality and aesthetic appeal. We create spaces that enhance productivity and brand image.",
      features: ["Office buildings", "Retail spaces", "Medical facilities"]
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description: "Specialized industrial facilities built to meet your operational requirements. We focus on efficiency, safety, and long-term durability.",
      features: ["Manufacturing plants", "Warehouses", "Research facilities"]
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation services. We breathe new life into buildings while preserving their character.",
      features: ["Complete renovations", "Historic restorations", "Office remodeling"]
    }
  ];

  const projects = [
    {
      title: 'Modern Luxury Villa',
      category: 'Residential',
      location: 'Beverly Hills, CA',
      image: 'https://img.freepik.com/premium-photo/property-market-integrating-ecofriendly-technology-sustainable-smart-homes-with-holograms-concept-ecofriendly-technology-sustainable-smart-homes-property-market-holograms-sustainable-living_918839-79258.jpg',
      description: 'A contemporary 6-bedroom villa featuring smart home technology and sustainable materials.',
      completionDate: '2023',
    },
    {
      title: 'Tech Hub Office Complex',
      category: 'Commercial',
      location: 'Silicon Valley, CA',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
      description: 'A modern office complex designed for leading tech companies with state-of-the-art facilities.',
      completionDate: '2023',
    },
    {
      title: 'Sustainable Warehouse',
      category: 'Industrial',
      location: 'Portland, OR',
      image: 'https://b1883154.smushcdn.com/1883154/wp-content/uploads/2021/07/image-1200x800-1.jpeg?lossy=2&strip=1&webp=1',
      description: 'An eco-friendly warehouse featuring solar panels and advanced climate control systems.',
      completionDate: '2022',
    },
    {
      title: 'Historic Building Renovation',
      category: 'Renovation',
      location: 'Boston, MA',
      image: 'https://images.adsttc.com/media/images/5789/4412/e58e/ce80/c300/006a/newsletter/St.-Anns-theater-historic-building.jpg?1468613647',
      description: 'Careful restoration of a 19th-century building while maintaining its historic character.',
      completionDate: '2023',
    },
    {
      title: 'Waterfront Apartments',
      category: 'Residential',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
      description: 'Luxury apartment complex with panoramic ocean views and resort-style amenities.',
      completionDate: '2023',
    },
    {
      title: 'Green Energy Data Center',
      category: 'Industrial',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
      description: 'State-of-the-art data center powered by renewable energy and featuring advanced cooling systems.',
      completionDate: '2023',
    },
    {
      title: 'Urban Shopping Mall',
      category: 'Commercial',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80',
      description: 'Modern shopping center with mixed-use spaces and innovative architectural design.',
      completionDate: '2022',
    },
    {
      title: 'Healthcare Complex',
      category: 'Commercial',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80',
      description: 'Advanced medical facility featuring state-of-the-art equipment and patient-centered design.',
      completionDate: '2023',
    }
  ];

  const partners = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      name: "Robert Mitchell",
      role: "CEO & Founder",
      experience: 30,
      email: "robert.mitchell@rncconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      name: "Sarah Anderson",
      role: "Chief Operations Officer",
      experience: 25,
      email: "sarah.anderson@rncconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80",
      name: "David Chen",
      role: "Chief Architecture Officer",
      experience: 28,
      email: "david.chen@rncconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      name: "Michael Thompson",
      role: "Chief Technology Officer",
      experience: 22,
      email: "michael.thompson@rncconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      name: "Emily Rodriguez",
      role: "Head of Sustainability",
      experience: 20,
      email: "emily.rodriguez@rncconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      name: "James Wilson",
      role: "Director of Innovation",
      experience: 18,
      email: "james.wilson@rncconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      name: "Amanda Parker",
      role: "Chief Financial Officer",
      experience: 15,
      email: "amanda.parker@rncconstruction.com",
      linkedin: "https://linkedin.com"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      name: "Thomas Wright",
      role: "Director of Project Management",
      experience: 20,
      email: "thomas.wright@rncconstruction.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
            alt="Construction site"
            className="w-full h-full object-cover animate-floating"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Tomorrow's Legacy Today
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">
              Excellence in construction, renovation, and infrastructure development for over three decades.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <Stats />

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">Comprehensive construction solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[360px]"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-transparent dark:from-orange-900/20 rounded-bl-[100px] -z-0 transition-transform duration-300 group-hover:scale-110" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-3 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl">
                    <service.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-base mb-6 line-clamp-3 relative">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 relative">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-400 text-base group/item"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-600 mr-2 group-hover/item:scale-125 transition-transform"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 dark:group-hover:border-orange-400/20 rounded-2xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">Some of our most impactful work</p>
          </div>
          
          <div className="relative">
            <div className="flex animate-[carousel_15s_linear_infinite]">
              {[...projects, ...projects].map((project, index) => (
                <div key={index} className="w-[400px] flex-shrink-0 mx-4">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Senior Partners Section */}
      <section id="partners" className="py-16 sm:py-20">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Senior Partners</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">Meet the visionaries behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6">
                Contact us to discuss your next project or request a quote.
              </p>
              <div className="flex items-center text-orange-600 dark:text-orange-400 mb-4">
                <Shield className="h-6 w-6 mr-2" />
                <span>Licensed, Bonded & Insured</span>
              </div>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors duration-200"
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}