import { useState, useCallback } from 'react';
import { FormState } from '@/types/common';
import { UI_CONFIG } from '@/config/constants';

export const useForm = () => {
  const [formState, setFormState] = useState<FormState>({
    prompt: '',
  });

  const updatePrompt = useCallback((value: string) => {
    if (value.length <= UI_CONFIG.maxPromptLength) {
      setFormState(prev => ({ ...prev, prompt: value }));
    }
  }, []);

  const clearForm = useCallback(() => {
    setFormState({ prompt: '' });
  }, []);

  const isValid = useCallback(() => {
    return formState.prompt.trim().length >= UI_CONFIG.minPromptLength;
  }, [formState.prompt]);

  const getCharacterCount = useCallback(() => {
    return formState.prompt.length;
  }, [formState.prompt]);

  const getRemainingCharacters = useCallback(() => {
    return UI_CONFIG.maxPromptLength - formState.prompt.length;
  }, [formState.prompt]);

  return {
    formState,
    updatePrompt,
    clearForm,
    isValid,
    getCharacterCount,
    getRemainingCharacters,
  };
}; 