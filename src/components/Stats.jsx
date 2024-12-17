import React from 'react';
import { Building, Users, Trophy, Clock } from 'lucide-react';

export default function Stats() {
  return (
    <div className="relative clip-diagonal bg-gradient-artistic py-20">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {[
            { icon: Building, value: "500+", label: "Projects Completed" },
            { icon: Users, value: "150+", label: "Team Members" },
            { icon: Trophy, value: "25+", label: "Awards Won" },
            { icon: Clock, value: "30+", label: "Years Experience" }
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="group">
              <Icon className="h-8 w-8 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2 group-hover:text-stroke transition-all duration-300">{value}</div>
              <div className="text-sm opacity-90">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}