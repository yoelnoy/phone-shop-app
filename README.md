# Phone Shop App

A responsive e-commerce web app for browsing and purchasing smartphones, built with React, TypeScript, and Tailwind CSS. This project was developed as a technical challenge for Zara.

Deployed version - [Live Demo](https://phone-shop-app-1c10f.web.app/)

Clone git repository: https://github.com/yoelnoy/phone-shop-app.git

---

## 🧠 Features

- 🔍 Search and filter phones by brand or name
- 📄 View detailed specifications
- 🛒 Add to cart, update quantities, and remove items
- 🧪 Fully tested with Jest and React Testing Library
- ⚛️ React 18 with Context API and TanStack Query
- 💅 Tailwind CSS styling
- 📦 Firebase deployment

---

## ⚙️ Project Structure

```
src/
├── components/         # Shared UI components
├── context/            # Cart context provider
├── hooks/              # Custom React hooks
├── layouts/            # Layout wrappers
├── pages/              # Route-level pages (PhoneList, Cart, etc.)
├── tests/              # Centralized test files
├── types/              # TypeScript types
└── constants/          # Static strings and app-wide constants
```

---

## 🛠️ Environment Variables

To run the app locally, create a `.env` file in the root of the project with the following variable:

```
VITE_BASE_URL="https://prueba-tecnica-api-tienda-moviles.onrender.com"
VITE_API_KEY="87909682e6cd74208f41a6ef39fe4191"
```

> 🔐 These keys are required to access the API. If you're missing these values, contact the project owner or replace the API logic with mock data for local testing.

---

## Running the App

### Development Mode

Serves unminified assets and enables live reload:

```bash
npm install
npm run dev
```

### Production Mode

Builds and serves optimized/minified assets:

```bash
npm run build
npm run preview
```

---

## 🧪 Running Tests

```bash
npm test
```

Tests are written using Jest and React Testing Library. Test files are located in the `src/tests` directory.

---

## 🚀 Deployment

The app is deployed on Firebase:

👉 [https://phone-shop-app-1c10f.web.app](https://phone-shop-app-1c10f.web.app)

---

## 📁 Git & Ignore

This Vite project includes a `.gitignore` file to exclude `node_modules`, `.env`, and build artifacts.

---

## 👨‍💻 Author

Yoel Noy Dvir — [GitHub](https://github.com/yoelnoy)
