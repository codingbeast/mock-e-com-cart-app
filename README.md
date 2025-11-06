# 🛍️ Mock E-Commerce Cart App

A full-stack demo e-commerce application built using:
- **Backend:** Node.js, Express, Sequelize, SQLite
- **Frontend:** React (Create React App)
- **Auth:** JWT-based user login & registration

---

## 📂 Project Structure

```
mock-e-com-cart-app/
│
├── backend/          # Express + Sequelize + SQLite API
│   ├── controllers/  # Product, Cart, User logic
│   ├── models/       # Sequelize models
│   ├── routes/       # API endpoints
│   ├── config/       # DB config
│   ├── server.js     # Main backend entry
│   └── BACKEND_README.md
│
├── frontend/         # React web application
│   ├── src/          # Components, Context, Pages, Routes
│   ├── public/
│   └── FRONTEND_README.md
│
└── README.md         # You are here 👑
```

---

## 🚀 Getting Started

### 🧩 1. Clone the Repository
```bash
git clone https://github.com/your-username/mock-e-com-cart-app.git
cd mock-e-com-cart-app
```

### ⚙️ 2. Install Dependencies
Install both backend and frontend dependencies:

```bash
npm install --prefix backend
npm install --prefix frontend
```

### ▶️ 3. Run Both Together
```bash
npm install concurrently
concurrently "npm start --prefix backend" "npm start --prefix frontend"
```

The backend will start on **http://localhost:5000**,  
and the frontend on **http://localhost:3000** (proxied to backend).

---

## 🧠 Documentation Links

### 📘 Backend Documentation
👉 [View Backend README](./backend/BACKEND_README.md)

### 💻 Frontend Documentation
👉 [View Frontend README](./frontend/FRONTEND_README.md)

---

## 🧱 Tech Stack Overview

| Layer | Technology | Description |
|-------|-------------|-------------|
| Backend | Node.js + Express | RESTful API |
| ORM | Sequelize | SQLite database ORM |
| Frontend | React (CRA) | Modern UI |
| Auth | JWT | Secure token-based login |
| Styling | CSS + basic components | Simple, clean UI |

---

## 🧰 Useful Commands

| Command | Description |
|----------|-------------|
| `npm start --prefix backend` | Run backend server |
| `npm start --prefix frontend` | Run frontend |
| `npm run dev` | Run both together (if using concurrently) |
| `npm run seed --prefix backend` | Seed sample products (optional) |

---

## 🛡️ Environment Variables

Create a `.env` file in your `backend/` directory:

```
JWT_SECRET=your_secret_key
PORT=5000
```

---

## ✨ Features

✅ User registration and login  
✅ Authenticated cart (per user)  
✅ Add / update / remove items  
✅ Checkout flow  
✅ SQLite persistence  
✅ Paginated products  
✅ Company-standard folder structure  

---

## 🧑‍💻 Contributors
- **You, My Lord 👑** — Creator & Architect  
- ChatGPT (Assistant Engineer) — Documentation & Setup support

---

## ⚖️ License
This project is open source under the [MIT License](LICENSE).
