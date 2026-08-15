# Hisaab 

> A simple and modern business management platform built for small vendors and local businesses.

Hisaab is a business management application designed to help small vendors, shopkeepers, street food sellers, vegetable sellers, and other local businesses manage their daily business operations digitally.

The goal of Hisaab is simple — replace notebooks and manual record keeping with an easy-to-use digital solution.

---

## ✨ Features

### 📊 Business Dashboard
Get a quick overview of your business with daily snapshots, statistics, and important information.

### 📦 Product Management
Create, update, and manage products with:
- Product images
- Pricing options
- Product details
- Easy product management

### 🧾 Order Management
Manage customer orders and track order information from a centralized dashboard.

### 📈 Business Insights
View important business statistics and get a better understanding of your daily operations.

### 🌦️ Smart Weather Widget
Hisaab integrates with **FlowPilot**, an AI workflow automation platform, to fetch weather information based on the user's location.

The workflow:

Browser Location
→ FlowPilot Webhook
→ Weather API
→ AI Agent
→ Weather Summary
→ Hisaab Dashboard

Weather information is presented in simple Hinglish so that it is easy to understand for local vendors.

### 🔐 Authentication
Secure authentication using JWT-based authentication.

### 📱 Responsive UI
Designed to work across:
- Desktop
- Tablet
- Mobile

---

## 🛠️ Tech Stack
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### Frontend

- React
- Next.js
- Tailwind CSS
- Redux Toolkit
- RTK Query
- React Hook Form
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer

### Services & Integrations

- ImageKit
- FlowPilot
- Weather API
- Axios

---

## 🏗️ Architecture

```text
                    ┌──────────────────┐
                    │      Hisaab      │
                    │    Next.js App   │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Node / Express │
                    │      Backend     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │     MongoDB      │
                    └──────────────────┘


Weather Integration

Hisaab
   │
   │ User Location
   ▼
FlowPilot Webhook
   │
   ▼
Weather API
   │
   ▼
AI Agent
   │
   ▼
Simple Hinglish Summary
   │
   ▼
Hisaab Weather Card

🔐 Authentication Flow
User
 │
 ▼
Login / Signup
 │
 ▼
JWT Authentication
 │
 ▼
Authenticated API Requests
 │
 ▼
Protected Dashboard

Hisaab also includes onboarding-based route protection so that users complete the required business setup before accessing the main dashboard.

📂 Project Structure
hisaab/
│
├── frontend/
│   ├── components/
│   ├── context/
│   ├── redux/
│   ├── app/
│   └── ...
│
└── backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── services/
    └── ...
🚀 Getting Started
1. Clone the repository
git clone <your-repository-url>
cd hisaab
2. Install frontend dependencies
cd frontend
npm install
3. Install backend dependencies
cd ../backend
npm install
4. Configure environment variables

Create .env files for both frontend and backend.

Example frontend:

NEXT_PUBLIC_BACKEND_URL=

Example backend:

PORT=5000
MONGO_URI=
JWT_SECRET=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
NEXT_FRONTEND_URL=

Add any other environment variables required by your deployment configuration.

5. Start backend
npm run dev
6. Start frontend
npm run dev

Open:

http://localhost:3000
🌐 Deployment

Hisaab is designed as a separate frontend and backend application.

Frontend
   │
   ▼
Next.js Deployment


Backend
   │
   ▼
Node.js / Express Deployment


Database
   │
   ▼
MongoDB

Make sure production environment variables are configured correctly before deployment.

🎯 Target Users

Hisaab is primarily designed for:

Small shop owners
Street vendors
Food cart owners
Vegetable sellers
Local retailers
Small business owners

The interface focuses on simplicity so that users with limited technical experience can use the application comfortably.

💡 Why Hisaab?

Many small businesses still depend on notebooks and manual record keeping.

Hisaab aims to make digital business management:

Simple → Fast → Accessible → Practical

Instead of overwhelming users with complex business software, Hisaab focuses on the information they actually need for their daily business.

🔮 Future Improvements

Some planned improvements include:

Customer management
Advanced analytics
Expense tracking
Inventory management
Sales reports
Notifications
Invoice generation
More AI-powered business insights
Automated business workflows

👨‍💻 Built With

Hisaab is built as a full-stack application using modern JavaScript technologies and a modular frontend/backend architecture.

📄 License

This project is currently for learning and portfolio purposes.

## 🔗 Live Demo

Live Link:[https://hisaab-free-pos-business-management-u55r.onrender.com/}
