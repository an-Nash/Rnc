import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function PartnerCard({ image, name, role, experience, email, linkedin }) {
  return (
    <div className="group relative hover-card">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white artistic-border">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105 group-hover:rotate-1"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex justify-center space-x-4">
                <a
                  href={`mailto:${email}`}
                  className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  aria-label={`Email ${name}`}
                >
                  <Mail className="h-5 w-5 text-white" />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gradient">{name}</h3>
        <p className="text-sm text-orange-600 font-medium">{role}</p>
        <p className="mt-1 text-sm text-gray-500">{experience} Years Experience</p>
      </div>
    </div>
  );
}