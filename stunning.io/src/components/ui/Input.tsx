import React from 'react';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  showCharacterCount = false,
  maxLength,
  className = '',
  ...props
}) => {
  const characterCount = props.value?.toString().length || 0;
  const remainingCharacters = maxLength ? maxLength - characterCount : 0;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        <textarea
          className={`
            w-full px-4 py-3 border border-gray-300 rounded-xl 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent 
            resize-none transition-colors duration-200
            ${error ? 'border-red-300 focus:ring-red-500' : ''}
            ${className}
          `}
          maxLength={maxLength}
          {...props}
        />
        
        {showCharacterCount && maxLength && (
          <div className="absolute bottom-2 right-3 text-xs text-gray-500">
            {characterCount}/{maxLength}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      
      {showCharacterCount && maxLength && remainingCharacters <= 20 && (
        <p className={`text-xs ${remainingCharacters <= 10 ? 'text-red-500' : 'text-yellow-500'}`}>
          {remainingCharacters} characters remaining
        </p>
      )}
    </div>
  );
}; 