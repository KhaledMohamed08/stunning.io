import React from 'react';
import { APP_CONFIG } from '@/config/constants';

export const Header: React.FC = () => {
  return (
    <div className="text-center mb-8 pt-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        {APP_CONFIG.name}
      </h1>
      <p className="text-gray-600 text-lg">
        {APP_CONFIG.description}
      </p>
    </div>
  );
}; 