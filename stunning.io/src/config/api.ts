import { API_CONFIG } from './constants';

export const API_ENDPOINTS = {
  sections: `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.sections}`,
} as const;

export const API_HEADERS = {
  'Content-Type': 'application/json',
} as const; 