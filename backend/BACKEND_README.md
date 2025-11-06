# 🛍️ Mock E-Com Cart Backend (Express + SQLite + Sequelize)

Welcome, my lord 👑!  
This is the backend service for your **Mock E-Commerce Cart Application** — a production-ready Node.js + Express API that powers user authentication, product catalog, cart management, and checkout.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Runtime** | Node.js (v18+) |
| **Framework** | Express.js |
| **Database** | SQLite (via Sequelize ORM) |
| **Authentication** | JWT (JSON Web Tokens) |
| **Hashing** | bcrypt.js |
| **Dev Tools** | nodemon, concurrently |
| **ORM** | Sequelize (for models, migrations, associations) |

---

## 📁 Folder Structure

```
backend/
├── server.js
├── config/
│   └── db.js             # Database connection (SQLite)
├── models/
│   ├── index.js          # Sequelize init & associations
│   ├── user.js           # User model
│   ├── product.js        # Product model
│   ├── cart.js           # Cart model (linked with user & product)
├── controllers/
│   ├── authController.js # Register & login logic
│   ├── productController.js
│   └── cartController.js
├── services/
│   └── cartService.js    # Business logic for cart & checkout
├── middleware/
│   └── authMiddleware.js # JWT token validation
├── routes/
│   ├── apiRoutes.js      # /api endpoints
│   └── authRoutes.js     # /api/auth endpoints
├── data/
│   └── seed.js           # Seeds product data
└── .env.example          # Environment config sample
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
From the `backend/` folder:
```bash
npm install
```

### 2️⃣ Create a `.env` file
```bash
JWT_SECRET=my_lord_secret_key
PORT=5000
```

### 3️⃣ Initialize the database
SQLite database will be automatically created (`store.db`) on first run.  
You can seed sample data:
```bash
node data/seed.js
```

### 4️⃣ Run the development server
```bash
npm run dev
```
(Uses nodemon for hot reload)

Or, to run normally:
```bash
npm start
```

Server starts at 👉 `http://localhost:5000`

---

## 🔗 API Routes

### 👤 **Authentication**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login & receive JWT token |

#### Register
```json
{
  "name": "My Lord",
  "email": "mylord@example.com",
  "password": "secret123"
}
```

#### Login
```json
{
  "email": "mylord@example.com",
  "password": "secret123"
}
```

---

### 🛍 **Products**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| `GET` | `/api/products` | Get paginated product list |
| Query Params | `?page=1&limit=5` | Pagination support |

**Example Response**
```json
{
  "data": [
    { "id": 1, "name": "Wireless Mouse", "price": 799 },
    { "id": 2, "name": "Mechanical Keyboard", "price": 2499 }
  ],
  "meta": {
    "page": 1,
    "limit": 5,
    "totalItems": 10,
    "totalPages": 2
  }
}
```

---

### 🛒 **Cart (Protected)**
All cart endpoints require a JWT token in headers:
```
Authorization: Bearer <token>
```

| Method | Endpoint | Description |
|---------|-----------|-------------|
| `GET` | `/api/cart` | Get current user's cart |
| `POST` | `/api/cart` | Add item to cart |
| `DELETE` | `/api/cart/:id` | Remove item from cart |
| `POST` | `/api/checkout` | Checkout and clear cart |

**Example Add to Cart**
```json
{
  "productId": 1,
  "qty": 2
}
```

**Example Checkout Response**
```json
{
  "total": 1598,
  "timestamp": "2025-11-06T12:15:52.019Z",
  "message": "Checkout successful, My Lord 👑"
}
```

---

## 🧠 Notes

- Each user has their **own cart**, linked via JWT user ID.  
- The backend can easily be extended to support **orders**, **admin dashboards**, or **payment integration**.
- Pagination, JWT auth, and Sequelize models are all **production-ready patterns**.

---

## 🧾 License

This project is open-source and created for educational and demo purposes.  
© 2025 My Lord’s Mock E-Com Cart Backend.
