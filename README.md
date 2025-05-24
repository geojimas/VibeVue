[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)]
(https://opensource.org/licenses/MIT)

# Vue 3 + Vite Starter Template

This template is a solid foundation to build Vue 3 apps quickly using Vite. It includes:

* **Vue 3** with `<script setup>` SFCs for a clean and modern syntax
* **Vite** for lightning-fast dev server and build
* **Tailwind CSS** + **DaisyUI** for utility-first styling and prebuilt UI components
* **Pinia** for state management (the official Vue store)
* **Vue Router** for SPA routing
* **ESLint** configured for consistent code style and quality

---

## Features

* Modern Vue 3 development with Composition API and `<script setup>`
* Configured Tailwind CSS with DaisyUI plugin for beautiful UI out of the box
* Pinia store for easy and scalable state management
* Vue Router setup with history mode for clean URLs
* ESLint configured to enforce code style: single quotes, no semicolons, and Vue 3 best practices
* Vite config optimized for fast HMR and build times

---

## Getting Started

### Prerequisites

* Node.js
* npm or yarn

### Install dependencies

```bash
npm install
# or
yarn
```

### Run development server

```bash
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to start coding.

### Build for production

```bash
npm run build
# or
yarn build
```

---

## Project Structure

```
src/
 ├── assets/            # Static assets like images and styles
 ├── components/        # Vue components
 ├── router/            # Vue Router setup
 ├── store/             # Pinia store
 ├── views/             # Page components for routes
 └── App.vue            # Root component
vite.config.js          # Vite config
eslint.config           # ESLint config
```

---

## ESLint & Formatting
* Vue 3 specific rules enabled
* Supports autofixing on save in editors like VSCode

Make sure your IDE is set up to use ESLint autofix on save for best experience.

---

## Learn More

* [Vue 3 Documentation](https://vuejs.org)
* [Vite Documentation](https://vitejs.dev)
* [Tailwind CSS](https://tailwindcss.com)
* [DaisyUI](https://daisyui.com)
* [Pinia State Management](https://pinia.vuejs.org)
* [Vue Router](https://router.vuejs.org)
* [ESLint Vue Plugin](https://eslint.vuejs.org)

---

## Contributing

Feel free to open issues or pull requests to improve the template!
