export const APP_CONFIG = {
  name: 'AI Section Generator',
  description: 'Generate website sections based on user prompts using AI',
  version: '1.0.0',
} as const;

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  endpoints: {
    sections: '/sections',
  },
  timeout: 30000, // 30 seconds
} as const;

export const UI_CONFIG = {
  maxPromptLength: 500,
  minPromptLength: 3,
  skeletonCardCount: 3,
} as const; 