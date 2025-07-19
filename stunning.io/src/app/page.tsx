"use client";

import { useSections } from '@/hooks/useSections';
import {
  Header,
  Container,
  Card,
  PromptForm,
  SectionGrid,
  SectionGridSkeleton,
  LoadingSpinner,
} from '@/components';

export default function PromptFormPage() {
  const { loading, error, data, sections, generateSections, clearError } = useSections();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <Container>
        {/* Header */}
        <Header />

        {/* Form */}
        <Card className="mb-8">
          <PromptForm onSubmit={generateSections} loading={loading} />
        </Card>

        {/* Error Display */}
        {error && (
          <Card className="mb-6 border-red-200 bg-red-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-800">{error}</p>
              </div>
              <button
                onClick={clearError}
                className="ml-auto text-red-400 hover:text-red-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Card>
        )}

        {/* Loading State */}
        {loading && (
          <Card>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Generating Sections</h2>
              <p className="text-gray-600">Please wait while we create your sections...</p>
            </div>
            
            <SectionGridSkeleton />
            
            {/* Loading message */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                <LoadingSpinner size="sm" color="blue" className="mr-2" />
                <span className="text-sm font-medium">Processing your request...</span>
              </div>
            </div>
          </Card>
        )}

        {/* Response Display */}
        {data && sections.length > 0 && (
          <Card>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Generated Sections</h2>
              <p className="text-gray-600">
                Based on: <span className="font-medium text-gray-800">"{data.prompt}"</span>
              </p>
            </div>
            
            <SectionGrid sections={sections} />
            
            {/* Summary */}
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">{sections.length}</span> sections generated successfully. 
                Each section is designed to enhance your website's user experience and conversion potential.
              </p>
            </div>
          </Card>
        )}
      </Container>
    </div>
  );
}
