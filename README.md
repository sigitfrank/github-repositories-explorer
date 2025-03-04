# GitHub Explorer

GitHub Explorer is a web application built with Vite and React, designed to explore GitHub profiles and repositories with a fast and modern tech stack.

## Tech Stack

- **Vite**: Lightning-fast development environment.
- **React**: UI library for building interactive interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Material UI**: Modern and customizable component library.
- **React Query**: Powerful asynchronous state management.
- **Zustand**: Simple and scalable state management.
- **Formik**: Form handling and validation.
- **Yup**: Schema-based form validation.

## Features

- Search GitHub users.
- View user repository list details.
- Form-based search with validation.
- Query params search.

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sigitfrank/github-explorer.git

# Navigate into the project directory
cd github-explorer

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
# Start the development server
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Building the App

```bash
# Build the app for production
npm run build
# or
yarn build
```

### Linting and Formatting

```bash
# Run linter
yarn lint 
# or
npm run lint 

# Format code
yarn prettier:write
# or
npm run prettier:write
```

## Project Structure

```bash
.github-explorer
|-- src
|   |-- assets          # Static assets
|   |-- components      # Reusable UI components
|   |   |-- atoms       # Basic building blocks
|   |   |-- molecules   # Combinations of atoms
|   |   |-- organisms   # Complex UI components
|   |-- lib             # Libraries, hooks, api, schemas and types
|   |-- App.tsx        # Main app component
|-- public             # Static assets
|-- index.html         # Entry HTML file
|-- vite.config.ts     # Vite configuration
```

## License

This project is licensed under the MIT License.

---

Happy coding! 🚀