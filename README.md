# 🍔 FoodGenie – AI-Powered Food Ordering Application

FoodGenie is a full-stack food ordering web application developed using the **MERN stack**. The application allows users to browse restaurants, explore menus, add food items to a shopping cart, place orders, and make online payments.

The project also integrates **Groq API** to provide AI-powered food descriptions and customer review summaries. It also includes JWT-based authentication, role-based access, restaurant management, and order management.

## 📌 Features

### 👤 User Features

* User registration and login
* JWT-based authentication
* Browse restaurants
* Search and filter food items
* View restaurant menus
* Add food items to cart
* Update or remove cart items
* Place food orders
* View order history
* Check order status
* Online payment using Stripe

### 🤖 AI Features

* Generate food descriptions using Groq API
* Summarize customer reviews using AI
* Provide concise review insights to users

### 🏪 Restaurant Management

* Manage restaurant information
* Add and manage food items
* Update food details, prices, categories, and stock
* Manage customer orders

### 🔐 Authentication & Authorization

* JWT-based authentication
* Password hashing using bcrypt.js
* Protected routes
* Role-based authorization

---

## 🛠️ Tech Stack

| Area             | Technology                        |
| ---------------- | --------------------------------- |
| Frontend         | React.js, JavaScript, HTML5, CSS3 |
| State Management | Redux Toolkit                     |
| Backend          | Node.js, Express.js               |
| Database         | MongoDB                           |
| ODM              | Mongoose                          |
| Authentication   | JWT, bcrypt.js                    |
| Payment          | Stripe API                        |
| AI               | Groq API                          |
| API Testing      | Postman                           |
| Version Control  | Git, GitHub                       |

These technologies correspond to the project's documented implementation.

---

## 🏗️ Application Architecture

FoodGenie follows a simple **three-tier architecture**.

```text
                    ┌─────────────────────┐
                    │     React.js        │
                    │     Frontend        │
                    └──────────┬──────────┘
                               │
                          REST APIs
                               │
                    ┌──────────▼──────────┐
                    │ Node.js + Express   │
                    │      Backend        │
                    └──────┬───────┬──────┘
                           │       │
                           │       ├──────────► Groq API
                           │       │
                           │       └──────────► Stripe API
                           │
                    ┌──────▼───────┐
                    │   MongoDB    │
                    │   Database   │
                    └──────────────┘
```

* **React.js** handles the user interface.
* **Node.js and Express.js** handle REST APIs and application logic.
* **MongoDB** stores users, restaurants, menus, orders, payments, and reviews.
* **Groq API** provides the AI functionality.
* **Stripe API** handles online payments.

---

## 🔄 Application Flow

The basic flow of the application is:

```text
User
 │
 ├── Register / Login
 │
 ▼
Browse Restaurants
 │
 ▼
Select Restaurant
 │
 ▼
View Menu
 │
 ▼
Add Items to Cart
 │
 ▼
Place Order
 │
 ▼
Stripe Payment
 │
 ▼
Order Confirmation
 │
 ▼
Order History / Status
```

---

## 🤖 AI Integration

One of the main additions to the project is the integration of the **Groq API**.

### Food Description

The application can use AI to generate informative descriptions for food items.

### Review Summarization

The application can summarize multiple customer reviews into a shorter and easier-to-understand format.

```text
Customer Reviews
       │
       ▼
   Backend
       │
       ▼
   Groq API
       │
       ▼
AI Generated Summary
       │
       ▼
    User
```

This allows users to understand the general feedback about a food item or restaurant without reading every review individually.

---

## 🔐 Authentication Flow

FoodGenie uses **JWT** for authentication and **bcrypt.js** for password hashing.

```text
Registration
     │
     ▼
Password Hashing
     │
     ▼
MongoDB
     │
     ▼
Login
     │
     ▼
JWT Token
     │
     ▼
Protected API Requests
     │
     ▼
JWT Verification
```

After successful login, the server generates a JWT that is used for authenticated requests. Protected routes and role-based authorization are used to control access to restricted resources.

---

## 💳 Payment Integration

The application uses **Stripe** for online payments.

### Payment Flow

```text
Cart
 │
 ▼
Place Order
 │
 ▼
Create Stripe Checkout Session
 │
 ▼
Stripe Checkout
 │
 ▼
Payment
 │
 ▼
Payment Verification
 │
 ▼
Order Confirmation
```

The backend communicates with Stripe to create checkout sessions, verify payment status, and record successful transactions.

---

## 🗄️ Database

MongoDB is used as the primary database, with Mongoose used for schema definition and database interaction.

The main collections include:

* `Users`
* `Restaurants`
* `Menus`
* `Orders`
* `Order Items`
* `Payments`
* `Reviews`

These collections support authentication, restaurant management, menu management, order processing, payment tracking, and customer feedback.

---

## 📂 Main Modules

The project is divided into several modules:

```text
FoodGenie
│
├── Authentication
├── Restaurant Management
├── Menu Management
├── Shopping Cart
├── Order Management
├── Payment
├── AI Food Description
└── AI Review Summary
```

## These modules represent the major functionality implemented in the application.

## 🖥️ Main Application Pages

The application includes pages/screens for:

* Home
* Restaurant Menu
* AI Review Summary
* Shopping Cart
* Stripe Checkout
* Order History
* Restaurant Administration

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd FoodGenie
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
GROQ_API_KEY=your_groq_api_key
```

### 5. Start the Backend

```bash
cd backend
npm start
```

### 6. Start the Frontend

```bash
cd frontend
npm run dev
```

> Make sure MongoDB and the required API credentials are configured before running the application.

---

## 🧪 Testing

The application was tested using manual functional testing.

The major areas tested include:

* User authentication
* Restaurant browsing
* Menu management
* Shopping cart
* Order management
* AI review summarization
* Stripe payment processing
* Role-based access control
* Backend APIs
* Database operations

The project testing covered individual modules as well as their integration into the complete application.

---
