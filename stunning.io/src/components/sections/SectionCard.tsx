import React from 'react';
import { SectionCardProps } from '@/types/sections';

export const SectionCard: React.FC<SectionCardProps> = ({ section, index }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Gradient accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} rounded-t-xl`}></div>
      
      {/* Icon */}
      <div className="text-4xl mb-4">{section.icon}</div>
      
      {/* Section name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{section.name}</h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm">{section.description}</p>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}; 