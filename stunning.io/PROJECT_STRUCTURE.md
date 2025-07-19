# Project Structure Documentation

## 🏗️ Architecture Overview

This project has been refactored to follow modern React/Next.js best practices with a clean, scalable architecture.

## 📁 Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── sections/
│   │       └── route.ts          # API proxy route
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main application page
├── components/                   # React components
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── Card.tsx
│   ├── forms/                    # Form components
│   │   └── PromptForm.tsx
│   ├── sections/                 # Section-specific components
│   │   ├── SectionCard.tsx
│   │   └── SectionGrid.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   └── Container.tsx
│   └── index.ts                  # Component exports
├── hooks/                        # Custom React hooks
│   ├── useSections.ts
│   └── useForm.ts
├── types/                        # TypeScript type definitions
│   ├── api.ts
│   ├── sections.ts
│   └── common.ts
├── utils/                        # Utility functions
│   ├── api.ts
│   └── sections.ts
└── config/                       # Configuration files
    ├── api.ts
    └── constants.ts
```

## 🧩 Component Architecture

### UI Components (`src/components/ui/`)
- **Button**: Reusable button with variants, sizes, and loading states
- **Input**: Textarea component with validation and character counting
- **LoadingSpinner**: Animated loading spinner with size and color options
- **Card**: Container component with padding and shadow options

### Form Components (`src/components/forms/`)
- **PromptForm**: Main form for prompt input and submission

### Section Components (`src/components/sections/`)
- **SectionCard**: Individual section display with icons and styling
- **SectionGrid**: Grid layout for sections with skeleton loading

### Layout Components (`src/components/layout/`)
- **Header**: Application header with title and description
- **Container**: Responsive container for consistent layout

## 🪝 Custom Hooks

### `useSections` (`src/hooks/useSections.ts`)
- Manages API state (loading, error, data)
- Handles section generation requests
- Processes API responses into section objects
- Provides error handling and state management

### `useForm` (`src/hooks/useForm.ts`)
- Manages form state and validation
- Handles character counting and limits
- Provides form utility functions

## 📝 Type Definitions

### API Types (`src/types/api.ts`)
- `ApiRequest`: Request payload structure
- `ApiResponse`: Response data structure
- `ApiError`: Error handling types
- `ApiState`: State management types

### Section Types (`src/types/sections.ts`)
- `Section`: Individual section data structure
- `SectionCardProps`: Props for section cards
- `SectionGridProps`: Props for section grid

### Common Types (`src/types/common.ts`)
- `FormState`: Form state management
- `LoadingState`: Loading state types
- `ErrorState`: Error state types

## 🔧 Utilities

### API Utilities (`src/utils/api.ts`)
- `fetchSections`: API request function with timeout
- `validateApiResponse`: Response validation
- `handleApiError`: Error processing and messaging
- `ApiError`: Custom error class

### Section Utilities (`src/utils/sections.ts`)
- `getSectionIcon`: Icon mapping for section types
- `getSectionColor`: Color scheme mapping
- `getSectionDescription`: Description mapping
- `processSections`: Section data processing

## ⚙️ Configuration

### Constants (`src/config/constants.ts`)
- Application configuration
- API configuration
- UI configuration

### API Config (`src/config/api.ts`)
- API endpoints
- Request headers
- Environment-specific settings

## 🚀 Benefits of This Structure

### ✅ **Maintainability**
- Clear separation of concerns
- Modular component architecture
- Reusable utilities and hooks

### ✅ **Scalability**
- Easy to add new components
- Extensible type system
- Configurable architecture

### ✅ **Testability**
- Isolated components
- Pure utility functions
- Custom hooks for state management

### ✅ **Developer Experience**
- TypeScript support throughout
- Path aliases for clean imports
- Consistent coding patterns

### ✅ **Performance**
- Optimized component structure
- Efficient state management
- Minimal re-renders

## 🔄 Usage Patterns

### Importing Components
```typescript
import { Button, Card, PromptForm } from '@/components';
```

### Using Hooks
```typescript
import { useSections, useForm } from '@/hooks';
```

### Type Safety
```typescript
import { ApiResponse, Section } from '@/types';
```

### Utilities
```typescript
import { fetchSections, processSections } from '@/utils';
```

## 🎯 Next Steps

This structure provides a solid foundation for:
- Adding new features
- Implementing testing
- Adding state management (Redux/Zustand)
- Implementing authentication
- Adding more API endpoints
- Creating additional page components 