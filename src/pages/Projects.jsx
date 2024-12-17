import React from 'react';

const projects = [
  {
    title: 'Modern Luxury Villa',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    image:
      'https://img.freepik.com/premium-photo/property-market-integrating-ecofriendly-technology-sustainable-smart-homes-with-holograms-concept-ecofriendly-technology-sustainable-smart-homes-property-market-holograms-sustainable-living_918839-79258.jpg',
    description:
      'A contemporary 6-bedroom villa featuring smart home technology and sustainable materials.',
    completionDate: '2023',
  },
  {
    title: 'Tech Hub Office Complex',
    category: 'Commercial',
    location: 'Silicon Valley, CA',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    description:
      'A modern office complex designed for leading tech companies with state-of-the-art facilities.',
    completionDate: '2023',
  },
  {
    title: 'Sustainable Warehouse',
    category: 'Industrial',
    location: 'Portland, OR',
    image:
      'https://b1883154.smushcdn.com/1883154/wp-content/uploads/2021/07/image-1200x800-1.jpeg?lossy=2&strip=1&webp=1',
    description:
      'An eco-friendly warehouse featuring solar panels and advanced climate control systems.',
    completionDate: '2022',
  },
  {
    title: 'Historic Building Renovation',
    category: 'Renovation',
    location: 'Boston, MA',
    image:
      'https://images.adsttc.com/media/images/5789/4412/e58e/ce80/c300/006a/newsletter/St.-Anns-theater-historic-building.jpg?1468613647',
    description:
      'Careful restoration of a 19th-century building while maintaining its historic character.',
    completionDate: '2023',
  },
  {
    title: 'Waterfront Apartments',
    category: 'Residential',
    location: 'Miami, FL',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
    description:
      'Luxury apartment complex with panoramic ocean views and resort-style amenities.',
    completionDate: '2023',
  },
  {
    title: 'Green Energy Data Center',
    category: 'Industrial',
    location: 'Austin, TX',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    description:
      'State-of-the-art data center powered by renewable energy and featuring advanced cooling systems.',
    completionDate: '2023',
  },
  {
    title: 'Urban Shopping Mall',
    category: 'Commercial',
    location: 'Chicago, IL',
    image:
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80',
    description:
      'Modern shopping center with mixed-use spaces and innovative architectural design.',
    completionDate: '2022',
  },
  {
    title: 'Healthcare Complex',
    category: 'Commercial',
    location: 'Seattle, WA',
    image:
      'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80',
    description:
      'Advanced medical facility featuring state-of-the-art equipment and patient-centered design.',
    completionDate: '2023',
  },
  {
    title: 'Mountain Resort',
    category: 'Commercial',
    location: 'Aspen, CO',
    image:
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80',
    description:
      'Luxury ski resort with sustainable practices and breathtaking mountain views.',
    completionDate: '2023',
  },
  {
    title: 'Smart City Development',
    category: 'Commercial',
    location: 'Phoenix, AZ',
    image:
      'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80',
    description:
      'Mixed-use smart city development featuring IoT integration and sustainable urban planning.',
    completionDate: '2023',
  },
  {
    title: 'Eco-Friendly School Campus',
    category: 'Commercial',
    location: 'Portland, OR',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80',
    description:
      'Modern educational facility with LEED certification and innovative learning spaces.',
    completionDate: '2023',
  },
  {
    title: 'Luxury Beachfront Hotel',
    category: 'Commercial',
    location: 'San Diego, CA',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    description:
      'Five-star hotel complex with oceanfront views and world-class amenities.',
    completionDate: '2022',
  },
  {
    title: 'Modern Art Museum',
    category: 'Commercial',
    location: 'New York, NY',
    image:
      'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&q=80',
    description:
      'Contemporary museum space with innovative architecture and sustainable design.',
    completionDate: '2023',
  },
  {
    title: 'Sports Stadium Complex',
    category: 'Commercial',
    location: 'Dallas, TX',
    image:
      'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80',
    description:
      'State-of-the-art sports facility with retractable roof and modern amenities.',
    completionDate: '2023',
  },
  {
    title: 'Sustainable Housing Community',
    category: 'Residential',
    location: 'Denver, CO',
    image:
      'https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&q=80',
    description:
      'Energy-efficient residential community with shared green spaces and solar power.',
    completionDate: '2023',
  },
  {
    title: 'Historic Theater Restoration',
    category: 'Renovation',
    location: 'Chicago, IL',
    image:
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80',
    description:
      'Careful restoration of a historic theater, preserving architectural details while adding modern amenities.',
    completionDate: '2022',
  },
  {
    title: 'Research Laboratory Complex',
    category: 'Industrial',
    location: 'Boston, MA',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description:
      'Advanced research facility with specialized equipment and controlled environments.',
    completionDate: '2023',
  }
];

const categories = [
  'All',
  'Residential',
  'Commercial',
  'Industrial',
  'Renovation',
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [hoveredProject, setHoveredProject] = React.useState(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-orange-600 to-orange-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
            alt="Our Projects"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Projects
          </h1>
          <p className="text-xl sm:text-2xl text-orange-50 max-w-3xl mx-auto">
            Showcasing our commitment to excellence through innovative construction projects
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden bg-white dark:bg-gray-800"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{project.location}</span>
                  <span>Completed: {project.completionDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
