import React from 'react';
import { SectionGridProps } from '@/types/sections';
import { SectionCard } from './SectionCard';
import { UI_CONFIG } from '@/config/constants';

export const SectionGrid: React.FC<SectionGridProps> = ({ sections }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sections.map((section, index) => (
        <SectionCard key={index} section={section} index={index} />
      ))}
    </div>
  );
};

export const SectionGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: UI_CONFIG.skeletonCardCount }).map((_, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse"
        >
          {/* Skeleton accent line */}
          <div className="h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-t-xl mb-4"></div>
          
          {/* Skeleton icon */}
          <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
          
          {/* Skeleton title */}
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          
          {/* Skeleton description */}
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}; 