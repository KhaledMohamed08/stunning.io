import { useState, useCallback } from 'react';
import { ApiRequest, ApiResponse, ApiState } from '@/types/api';
import { Section } from '@/types/sections';
import { fetchSections, handleApiError } from '@/utils/api';
import { processSections } from '@/utils/sections';

export const useSections = () => {
  const [state, setState] = useState<ApiState>({
    loading: false,
    error: null,
    data: null,
  });
  
  const [processedSections, setProcessedSections] = useState<Section[]>([]);

  const generateSections = useCallback(async (prompt: string) => {
    if (!prompt.trim()) {
      setState(prev => ({ ...prev, error: 'Please enter a prompt' }));
      return;
    }

    setState({
      loading: true,
      error: null,
      data: null,
    });
    setProcessedSections([]);

    try {
      const request: ApiRequest = { prompt: prompt.trim() };
      const response: ApiResponse = await fetchSections(request);
      
      const sections = processSections(response.sections);
      
      setState({
        loading: false,
        error: null,
        data: response,
      });
      setProcessedSections(sections);
    } catch (error: any) {
      const errorMessage = handleApiError(error);
      setState({
        loading: false,
        error: errorMessage,
        data: null,
      });
      setProcessedSections([]);
    }
  }, []);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  const reset = useCallback(() => {
    setState({
      loading: false,
      error: null,
      data: null,
    });
    setProcessedSections([]);
  }, []);

  return {
    ...state,
    sections: processedSections,
    generateSections,
    clearError,
    reset,
  };
}; 