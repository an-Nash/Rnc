import React from 'react';

export default function ProjectCard({ image, title, location, category, description, completionDate }) {
  return (
    <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover-card">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent mix-blend-overlay"></div>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full mb-3">
            {category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-orange-200 mb-2">{location}</p>
          <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
          <p className="text-orange-300 text-sm mt-2">Completed: {completionDate}</p>
        </div>
      </div>
    </div>
  );
}