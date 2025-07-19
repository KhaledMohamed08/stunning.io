# Stunning.io Task API

Stunning.io Task API is a backend service built with NestJS and Mongoose for generating and storing website section suggestions based on user prompts. It provides endpoints to generate random website sections and persist them for later use, making it ideal for website builders, landing page generators, or any application that needs dynamic section suggestions.

## Features

- Generate 3 random website section names (e.g., Hero, About, Services, etc.) based on a prompt
- Store generated sections and their associated prompt in MongoDB
- Easily extendable for more advanced section generation or retrieval

## Project Setup

```bash
npm install
```

## Running the Project

```bash
# development
npm run start

# watch mode	npm run start:dev

# production
npm run start:prod
```

## Usage Example

Suppose you want to generate sections for a new landing page. You can call the API endpoint (see your controller for details) with a prompt, and the service will:

1. Randomly select 3 section names from a predefined list (e.g., Hero, About, Services, etc.)
2. Store the prompt and generated sections in the database
3. Return the prompt and the generated sections in the response

Example response:

```json
{
  "prompt": "Landing page for a SaaS product",
  "sections": ["Hero", "Pricing", "Contact"]
}
```

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

MIT
