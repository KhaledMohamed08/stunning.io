import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useForm } from '@/hooks/useForm';
import { UI_CONFIG } from '@/config/constants';

interface PromptFormProps {
  onSubmit: (prompt: string) => void;
  loading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ onSubmit, loading }) => {
  const {
    formState,
    updatePrompt,
    isValid,
    getCharacterCount,
    getRemainingCharacters,
  } = useForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid() && !loading) {
      onSubmit(formState.prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Your Prompt"
        value={formState.prompt}
        onChange={(e) => updatePrompt(e.target.value)}
        placeholder="Describe what sections you want to generate..."
        rows={4}
        required
        disabled={loading}
        showCharacterCount={true}
        maxLength={UI_CONFIG.maxPromptLength}
      />
      
      <Button
        type="submit"
        loading={loading}
        disabled={!isValid() || loading}
        className="w-full"
        size="lg"
      >
        {loading ? 'Generating sections...' : 'Generate Sections'}
      </Button>
    </form>
  );
}; 