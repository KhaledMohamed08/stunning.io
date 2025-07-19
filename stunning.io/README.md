# AI Section Generator

A modern web application that generates website sections based on user prompts using AI. Built with Next.js and designed to work with a NestJS backend API.

## 🚀 Features

- **Smart Section Generation**: Generate website sections based on natural language prompts
- **Modern UI/UX**: Beautiful, responsive design with modern card layouts
- **Real-time Feedback**: Live loading states and error handling
- **Section Categorization**: Automatic icon and color assignment for different section types
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🎨 Supported Section Types

The application automatically detects and styles different section types:

- **Header/Hero** 🏠 - Main navigation and hero sections
- **About** ℹ️ - About us and company information
- **Services** ⚙️ - Services offered by the business
- **Projects** 📦 - Project showcase and portfolio
- **Testimonials** 💬 - Customer reviews and testimonials
- **Contact** 📞 - Contact forms and information
- **Footer** 🔗 - Website footer with links
- **Gallery** 🖼️ - Image galleries and portfolios
- **Pricing** 💰 - Pricing plans and packages
- **Team** 👥 - Team members and staff
- **Blog** 📝 - Blog posts and articles
- **FAQ** ❓ - Frequently asked questions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Backend**: NestJS (separate service)
- **API**: RESTful API with JSON responses

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- NestJS backend running on `http://localhost:3001`

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd stunning.io-task
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 API Configuration

The application expects a NestJS backend running on `http://localhost:3001` with the following endpoint:

### POST `/sections`

**Request Body:**
```json
{
  "prompt": "landing page for bakery"
}
```

**Response Format:**
```json
{
  "prompt": "landing page for bakery",
  "sections": ["Header", "About", "Services", "Contact", "Footer"]
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── sections/
│   │       └── route.ts          # API proxy route
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main application page
├── components/                   # React components (if any)
└── types/                        # TypeScript type definitions
```

## 🎯 Usage

1. **Enter a Prompt**: Describe the type of website or sections you want to generate
2. **Submit**: Click "Generate Sections" to send your request
3. **View Results**: See your generated sections displayed in beautiful cards
4. **Explore**: Each card shows the section type with appropriate icons and descriptions

## 🔍 Error Handling

The application includes comprehensive error handling for:

- Network connectivity issues
- Server errors (4xx, 5xx status codes)
- Invalid response formats
- Missing required data
- Unexpected errors

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in `src/app/page.tsx` for component styling
- Add new section types in the `getSectionIcon()` and `getSectionColor()` functions

### API Integration
- Update the API endpoint in `src/app/api/sections/route.ts`
- Modify request/response handling in `src/app/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the error messages in the browser console
2. Verify your NestJS backend is running on the correct port
3. Ensure the API response format matches the expected structure
4. Open an issue in the repository

---

Built with ❤️ using Next.js and Tailwind CSS
