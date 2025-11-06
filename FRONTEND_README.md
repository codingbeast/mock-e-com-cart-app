# 🖥️ Mock E-Com Cart Frontend (React + Context + Axios)

Welcome, my lord 👑!  
This is the **frontend** for your Mock E-Commerce Cart Application — a modern, company-standard React app built with **React Router**, **Context API**, and **Axios**, following clean architecture for scalability and clarity.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend Framework** | React (v19) |
| **Routing** | React Router DOM (v6+) |
| **State Management** | React Context API |
| **API Calls** | Axios |
| **Styling** | CSS + Inline Styles |
| **Environment Config** | .env for base URLs |

---

## 📁 Folder Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── api/                # Centralized API calls
│   │   ├── apiClient.js
│   │   ├── authApi.js
│   │   ├── productApi.js
│   │   └── cartApi.js
│   │
│   ├── components/         # Reusable UI components
│   │   ├── Navbar/
│   │   │   └── Navbar.js
│   │   └── ProductCard/
│   │       └── ProductCard.js
│   │
│   ├── context/            # Global state via React Context
│   │   ├── UserContext.js
│   │   └── CartContext.js
│   │
│   ├── pages/              # Page-level components
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   │
│   ├── routes/             # App routing
│   │   └── AppRoutes.js
│   │
│   ├── styles/             # Global and variable styles
│   │   └── global.css
│   │
│   ├── App.js
│   └── index.js
│
├── .env                    # Environment config
└── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
Navigate to the frontend folder and install packages:
```bash
cd frontend
npm install
```

### 2️⃣ Create `.env`
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 3️⃣ Start the App
```bash
npm start
```
Runs on 👉 [http://localhost:3000](http://localhost:3000)

---

## 🔗 API Integration

Frontend automatically proxies requests to the backend via `axios` and `proxy` setting.

| Action | Endpoint | Method |
|---------|-----------|--------|
| Register | `/api/auth/register` | POST |
| Login | `/api/auth/login` | POST |
| Get Products | `/api/products` | GET |
| Add to Cart | `/api/cart` | POST |
| Get Cart | `/api/cart` | GET |
| Remove Item | `/api/cart/:id` | DELETE |
| Checkout | `/api/checkout` | POST |

---

## 🧠 Key Features

- **✅ Authentication Flow:** Register/Login via JWT
- **🛒 Dynamic Cart:** Real-time updates using Context API
- **💳 Checkout Summary:** Displays total and clears cart on completion
- **🔁 Persistent Login:** User state saved via LocalStorage
- **📦 Reusable API Layer:** All endpoints organized under `/api/`

---

## 🧰 Useful Commands

| Command | Description |
|----------|--------------|
| `npm start` | Start the frontend dev server |
| `npm run build` | Build production-ready bundle |
| `npm test` | Run tests |
| `npm run eject` | Expose config (not recommended) |

---

## 🎨 UI Features

- Responsive grid layout for product listing
- Clean navigation bar with dynamic `Checkout (count)` badge
- Context-driven global state without Redux
- Toasts and alerts for user feedback

---

## ⚡ Future Enhancements

- Integrate `react-toastify` for better alerts  
- Add loader/spinner for API calls  
- Include product search and filter  
- Migrate to TypeScript for enterprise-grade maintainability  

---

## 🧾 License

Open-source for learning and demo purposes.  
© 2025 My Lord’s Mock E-Com Cart Frontend 👑
