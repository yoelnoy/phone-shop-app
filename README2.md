# 📱 Phone Shop App

A modern, responsive phone e-commerce app built with **React**, **TypeScript**, **Tailwind CSS**, and **React Query**. Users can browse smartphones, view details, and manage a shopping cart.

🔗 **Live Demo (Production):** [https://phone-shop-app-1c10f.web.app/](https://phone-shop-app-1c10f.web.app/)

---

## ⚙️ Modes of Operation

### ✅ Production Mode

- Served with concatenated and minified assets.
- Hosted on Firebase.
- Fast and optimized for user performance.
- Built with:

  ```bash
  npm run build
  ```

- Deployed with:

  ```bash
  firebase deploy
  ```

🔗 Live URL: [https://phone-shop-app-1c10f.web.app/](https://phone-shop-app-1c10f.web.app/)

---

### 🛠️ Development Mode

- Served with unminified, readable assets for easier debugging.
- Includes source maps for better developer experience.
- Hot module reload enabled.

Run locally:

```bash
npm install
npm run dev
```

---

## 📁 Folder Structure

```
src/
├── api/                # Axios instance setup
├── components/         # UI components (Header, etc.)
├── constants/          # Static labels & symbols
├── context/            # React context (e.g., CartProvider)
├── hooks/              # Custom hooks (e.g., useGetPhoneList)
├── layouts/            # Layout wrappers
├── pages/              # Route views: Home, Cart, Details
├── tests/              # All test files in one central folder
├── types/              # TypeScript types/interfaces
├── App.tsx             # Routes and global providers
└── main.tsx            # App entry point
```

---

## 🧪 Testing

- **Jest** + **React Testing Library**
- Tests include:
  - Component rendering
  - Cart logic and interactions
  - Routing and navigation
  - Search functionality
  - Hook mocking for data fetching

Run tests:

```bash
npm test
```

---

## 🧠 Architecture

- **State Management**: React Context + `localStorage`
- **Data Fetching**: `useGetPhoneList()` with **React Query**
- **Styling**: Utility-first styling with **Tailwind CSS**
- **Routing**: **React Router DOM v6**
- **Error Handling**: Wrapped in an `ErrorBoundary`

---

## 🚀 Deployment Instructions

You can deploy it yourself via Firebase:

```bash
npm install -g firebase-tools
firebase login
firebase init
npm run build
firebase deploy
```

---

## 🧑‍💻 Getting Started (Development)

```bash
git clone https://github.com/your-username/phone-shop-app.git
cd phone-shop-app
npm install
npm run dev
```

---

## ✅ Requirements Met

- [x] Responsive UI
- [x] Two operational modes: Development & Production
- [x] Centralized test folder with coverage
- [x] Cart functionality and product selection
- [x] Custom API hook and mockable data
- [x] Deployment (Firebase)

---

## 📄 License

MIT — feel free to fork and contribute.
