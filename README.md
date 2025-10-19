# 🌟 Storynest – Where Ideas Find a Home (Frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)  
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/) [![Vite](https://img.shields.io/badge/Vite-4-green)](https://vitejs.dev/) [![Node.js](https://img.shields.io/badge/Node.js-18-green)](https://nodejs.org/)

---

## 🚀 Overview
Storynest is a modern **blogging platform** where ideas find a home.  
The **frontend** is a fast, responsive web application built with **React + Vite**, providing a seamless experience for users to:

- Browse and read inspiring blogs  
- Share their own stories  
- Engage with the community via comments  

It acts as the **user’s gateway** to the platform, making blogging simple, beautiful, and interactive.

---

## 🔗 Backend & Demo
The backend handles **data storage, authentication, and API endpoints**:

- **Backend Repo (Node.js + Express + MongoDB + Google OAuth):**  
👉 [Storynest Backend Repository](https://github.com/palak-singh01/Storynest-backend.git0)  

- **Demo & Screenshots:**  
📺 [View Demo](https://drive.google.com/drive/folders/14IBuUbnINqiBrYk3FFAm7wlgXlkgT14v?usp=sharing)  

> Note: Links are kept as-is, but the platform is now branded as Storynest.

---

## ✨ Key Features
- **Beautiful Blog Experience** – Responsive, distraction-free design for reading blogs  
- **Seamless Blog Creation** – Authenticated users can create and publish blogs  
- **Interactive Commenting** – Add comments and engage with the community  
- **Google Authentication** – Secure login without separate credentials  
- **Dynamic UI** – Lightning-fast navigation and rendering with React + Vite  

---

## 📂 Project Structure

```
frontend/
│── public/           # Static assets
│── src/              # React source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # App pages
│   ├── context/      # Context providers
│   ├── App.jsx
│   └── main.jsx
│── index.html
│── vite.config.js    # Vite configuration
│── package.json
│── .env              # Environment variables
```

---

## 🔗 How Frontend & Backend Work Together

Storynest separates **frontend** and **backend** for flexibility:

```
Storynest/
│
├── frontend/  # React + Vite
└── backend/   # Node.js + Express + MongoDB
```

The frontend communicates via **HTTP requests (Axios):**

| Method | Endpoint                  | Purpose                  |
|--------|---------------------------|-------------------------|
| GET    | /api/blogs                | Fetch all blogs         |
| POST   | /api/blogs                | Create a new blog       |
| POST   | /api/blogs/:id/comments   | Add a comment           |

This separation ensures maintainable, scalable architecture.

---

## ⚙️ Installation Guide

### 1️⃣ Clone Both Repos
```bash
mkdir Storynest
cd Storynest

# Clone frontend and backend
git clone https://github.com/palak-singh01/Storynestt-Frontend.git frontend
git clone https://github.com/palak-singh01/Storynest-backend.git backend
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
```

Create `.env` in `backend/`:
```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/storynest
SESSION_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8080/auth/google/callback
```

Run backend:
```bash
npm run dev
```
Backend runs at **[http://localhost:8080](http://localhost:8080)**

---

### 3️⃣ Setup Frontend
```bash
cd ../frontend
npm install
```

Create `.env` in `frontend/`:
```env
VITE_API_URL=http://localhost:8080
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

Run frontend:
```bash
npm run dev
```
Frontend runs at **[http://localhost:5173](http://localhost:5173)**

---

### 4️⃣ Open in Browser
- Visit [http://localhost:5173](http://localhost:5173) → React frontend  
- Connects to backend APIs at [http://localhost:8080](http://localhost:8080)  

✅ Both frontend and backend can run together from a single parent folder.

---

## 📦 Build for Production
```bash
npm run build
npm run preview
```

---

## 🛠 Tech Stack
- **Frontend:** React + Vite  
- **Backend:** Node.js + Express + MongoDB  
- **API Requests:** Axios  
- **Authentication:** Google OAuth 2.0  

---

## 📜 License
This project is licensed under the MIT License.

