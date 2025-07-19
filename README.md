# Stunning.io Task - Full Stack Application

This repository contains a full-stack web application for generating website sections using AI. The project consists of two main components: a Next.js frontend and a NestJS backend API.

## 📁 Project Structure

```
stunning.io-task/
├── stunning.io/          # Next.js Frontend Application
└── stunning.io-api/      # NestJS Backend API
```

## 🚀 Projects Overview

### 1. Frontend (`stunning.io/`)
A modern, responsive web application built with Next.js 14 that provides an intuitive interface for generating website sections.

**Key Features:**
- 🎨 Beautiful, modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Real-time section generation
- 🎯 Smart section categorization with icons and colors
- 🔄 Live loading states and error handling

**Tech Stack:**
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State Management**: React hooks

**Supported Section Types:**
- Header/Hero, About, Services, Projects, Testimonials
- Contact, Footer, Gallery, Pricing, Team, Blog, FAQ

### 2. Backend (`stunning.io-api/`)
A robust NestJS API service that handles section generation and data persistence using MongoDB.

**Key Features:**
- 🎲 AI-powered section generation based on user prompts
- 💾 MongoDB integration for data persistence
- 🔄 RESTful API endpoints
- 🧪 Comprehensive testing suite
- 📊 Scalable architecture

**Tech Stack:**
- **Framework**: NestJS
- **Database**: MongoDB with Mongoose
- **Language**: TypeScript
- **Testing**: Jest for unit and e2e tests

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- MongoDB (for backend)

### 1. Clone and Setup

```bash
git clone <your-repo-url>
cd stunning.io-task
```

### 2. Backend Setup

```bash
cd stunning.io-api
npm install
npm run start:dev
```

The API will be available at `http://localhost:3001`

### 3. Frontend Setup

```bash
cd stunning.io
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🔧 API Endpoints

### POST `/sections`
Generates website sections based on a user prompt.

**Request:**
```json
{
  "prompt": "landing page for bakery"
}
```

**Response:**
```json
{
  "prompt": "landing page for bakery",
  "sections": ["Header", "About", "Services", "Contact", "Footer"]
}
```

## 🎯 How It Works

1. **User Input**: Enter a description of the website you want to build
2. **AI Processing**: The backend generates relevant sections using AI
3. **Visual Display**: The frontend presents the sections in beautiful, categorized cards
4. **Data Persistence**: Generated sections are stored in MongoDB for future reference

## 🛠️ Development

### Frontend Development
```bash
cd stunning.io
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Backend Development
```bash
cd stunning.io-api
npm run start:dev    # Start development server
npm run test         # Run unit tests
npm run test:e2e     # Run e2e tests
npm run test:cov     # Run tests with coverage
```

## 📦 Deployment

### Frontend (Vercel Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Backend
- Deploy to any Node.js hosting platform
- Ensure MongoDB connection is configured
- Set appropriate environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues or questions:
1. Check the browser console for frontend errors
2. Verify backend is running on the correct port
3. Ensure MongoDB is properly configured
4. Open an issue in the repository

---

Built with ❤️ using Next.js, NestJS, and MongoDB 