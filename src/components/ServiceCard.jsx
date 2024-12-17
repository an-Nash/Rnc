import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, features }) {
  return (
    <div className="group hover-card">
      <div className="relative h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-orange-100 dark:border-orange-900/20">
        {/* Enhanced gradient effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-600/30 to-orange-500/20 blur-3xl rounded-full transform translate-x-20 -translate-y-20 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-600/20 to-orange-500/10 blur-3xl rounded-full transform -translate-x-20 translate-y-20 group-hover:-translate-x-16 group-hover:translate-y-16 transition-transform duration-700"></div>
        
        <div className="relative">
          {/* Enhanced icon container */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/40 dark:to-orange-800/20 text-orange-600 dark:text-orange-400 mb-8 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
            <Icon className="h-10 w-10" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{description}</p>
          
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600 dark:text-gray-400 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-500 dark:to-orange-400 mr-3"></div>
                <span className="group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>
          
          <a href="/services" className="inline-flex items-center px-6 py-3 rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-300 group-hover:translate-x-1">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}