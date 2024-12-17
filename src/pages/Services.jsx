import React, { useMemo } from 'react';
import { Home, Building2, Factory, Wrench, Truck, TreePine, HardHat, Ruler, Warehouse, Hammer, Shield, Leaf } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description:
      'Custom homes built to your exact specifications, from modern minimalist designs to traditional architecture.',
    image:
      'https://en.idei.club/uploads/posts/2023-03/thumbs/1679060751_en-idei-club-p-future-home-design-64.jpg',
    features: [
      'Custom home design and build',
      'Luxury home construction',
      'Energy-efficient homes',
      'Smart home integration',
    ],
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'State-of-the-art commercial buildings designed for maximum functionality and aesthetic appeal.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    features: [
      'Office buildings',
      'Retail spaces',
      'Restaurants',
      'Medical facilities',
    ],
  },
  {
    icon: Factory,
    title: 'Industrial Construction',
    description:
      'Specialized industrial facilities built to meet your operational requirements.',
    image:
      'https://media.licdn.com/dms/image/D5612AQF-GsTntlyBfA/article-cover_image-shrink_720_1280/0/1694243872187?e=2147483647&v=beta&t=EtQ4c84VLDVMqbKRucbEUuP_vuFjl_LxFqOvuPLXMUE',
    features: [
      'Manufacturing plants',
      'Warehouses',
      'Distribution centers',
      'Research facilities',
    ],
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description:
      'Transform existing spaces with our expert renovation services.',
    image:
      'https://modernhb.com/wp-content/uploads/sites/6/2023/10/renovation-tips-image-800x445.jpeg',
    features: [
      'Complete renovations',
      'Kitchen & bath remodeling',
      'Office renovations',
      'Historic restorations',
    ],
  },
  {
    icon: TreePine,
    title: 'Landscape Construction',
    description:
      'Create stunning outdoor spaces that blend natural beauty with functional design.',
    image:
      'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&q=80',
    features: [
      'Hardscape installations',
      'Water features',
      'Outdoor living spaces',
      'Sustainable landscaping',
    ],
  },
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    description:
      'Custom storage facilities and warehouse solutions for businesses of all sizes.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    features: [
      'Climate-controlled storage',
      'Security systems',
      'Loading dock design',
      'Inventory management',
    ],
  },
  {
    icon: HardHat,
    title: 'Project Management',
    description:
      'Comprehensive project management services ensuring timely and efficient completion.',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    features: [
      'Timeline management',
      'Budget control',
      'Quality assurance',
      'Risk management',
    ],
  },
  {
    icon: Ruler,
    title: 'Architectural Design',
    description:
      'Innovative architectural solutions that combine form, function, and sustainability.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
    features: [
      '3D visualization',
      'Sustainable design',
      'Space planning',
      'Permit assistance',
    ],
  },
  {
    icon: Hammer,
    title: 'Interior Finishing',
    description:
      'Expert interior finishing services that bring your vision to life.',
    image:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80',
    features: [
      'Custom cabinetry',
      'Flooring installation',
      'Wall treatments',
      'Lighting design',
    ],
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description:
      'Ensuring all projects meet or exceed safety and regulatory requirements.',
    image:
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80',
    features: [
      'Safety inspections',
      'Code compliance',
      'OSHA standards',
      'Safety training',
    ],
  },
  {
    icon: Truck,
    title: 'Site Development',
    description:
      'Comprehensive site preparation and development services.',
    image:
      'https://images.unsplash.com/photo-1573030889348-c6b0f8b15e40?auto=format&fit=crop&q=80',
    features: [
      'Land clearing',
      'Grading',
      'Utility installation',
      'Infrastructure development',
    ],
  },
  {
    icon: Leaf,
    title: 'Green Building',
    description:
      'Sustainable construction practices and eco-friendly building solutions.',
    image:
      'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&q=80',
    features: [
      'LEED certification',
      'Solar integration',
      'Energy efficiency',
      'Sustainable materials',
    ],
  },
];

export default function Services() {
  // Memoize the service cards to prevent unnecessary re-renders
  const serviceCards = useMemo(() => services.map((service, index) => (
    <div
      key={service.title}
      className={`grid md:grid-cols-2 gap-8 items-center ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <OptimizedImage
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            blur
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2">
          <service.icon className="h-6 w-6 text-orange-600" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {service.title}
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
        <ul className="space-y-3">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center text-gray-600 dark:text-gray-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-600 mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )), []);

  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-orange-600 to-orange-800">
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
            alt="Our Services"
            className="w-full h-full object-cover mix-blend-overlay"
            loading="eager"
            blur
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl sm:text-2xl text-orange-50 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid gap-12">
          {serviceCards}
        </div>
      </div>
    </div>
  );
}
