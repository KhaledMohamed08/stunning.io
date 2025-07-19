import { ApiRequest, ApiResponse, ApiErrorResponse } from '@/types/api';
import { API_ENDPOINTS, API_HEADERS } from '@/config/api';
import { API_CONFIG } from '@/config/constants';

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const validateApiResponse = (data: any): ApiResponse => {
  if (!data || typeof data !== 'object') {
    throw new ApiError('Invalid response format from server');
  }
  
  if (!Array.isArray(data.sections)) {
    throw new ApiError('Response missing sections array');
  }
  
  if (!data.prompt) {
    throw new ApiError('Response missing prompt field');
  }
  
  return data as ApiResponse;
};

export const handleApiError = (error: any): string => {
  console.error('API Error:', error);
  
  if (error instanceof ApiError) {
    return error.message;
  }
  
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return 'Network error: Unable to connect to the server. Please check your connection.';
  }
  
  if (error.message.includes('HTTP error')) {
    return `Server error: ${error.message}`;
  }
  
  return error.message || 'An unexpected error occurred. Please try again.';
};

export const fetchSections = async (request: ApiRequest): Promise<ApiResponse> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
  
  try {
    const response = await fetch('/api/sections', {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(request),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status
      );
    }
    
    const data = await response.json();
    return validateApiResponse(data);
  } catch (error: any) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new ApiError('Request timeout: The server took too long to respond.');
    }
    
    throw error;
  }
}; 