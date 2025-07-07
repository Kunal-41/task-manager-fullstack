# ✅ Task Manager App – Fullstack (React + Node.js + MongoDB)

A full-featured Task Manager web app built using **React.js (Frontend)**, **Node.js + Express (Backend)**, and **MongoDB (Database)**.

The application is designed to allow users to register, log in, and manage their personal tasks with a clean and responsive UI.

---

## 🚀 Features

- ✅ User registration and login forms
- ✅ Frontend routing with React Router
- ✅ Task form and task list UI
- ✅ Modular and scalable folder structure
- ✅ Responsive design (desktop/mobile)

---

## ⚠️ Backend Work in Progress

This project is mostly complete on the **frontend**, but the **backend is still under development**. Here are the parts that are **not yet implemented**:

- ❌ API endpoints for user registration and login (`/api/register`, `/api/login`)
- ❌ Password hashing using `bcrypt`
- ❌ JWT-based authentication
- ❌ MongoDB models and schema setup using Mongoose
- ❌ CRUD routes for creating, updating, and deleting tasks
- ❌ Error handling and input validation on the server side

> 💡 These should be implemented in `backend/` using Express.js and MongoDB (local or Atlas).

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS / Bootstrap (optional)
- Axios (for API calls)

### Backend
- Node.js
- Express.js
- MongoDB (using Mongoose)
- JSON Web Tokens (JWT)
- bcrypt.js

---

## 📁 Folder Structure (Simplified)

```
task-manager-fullstack/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   └── App.js
│   └── public/
│   └── package.json
├── backend/
│   ├── server.js
│   ├── package.json
│   └── [TO BE IMPLEMENTED: routes, controllers, models]
└── README.md
```

---

## 💻 Getting Started

### Clone the Repo

```bash
git clone https://github.com/Kunal-41/task-manager-fullstack.git
cd task-manager-fullstack
```

### Run Frontend

```bash
cd frontend
npm install
npm start
```

### Backend (once implemented)

```bash
cd backend
npm install
node server.js
```

---

## ✨ Upcoming Features (To Be Added)

- 🔐 Authenticated task management
- 🧾 User-specific task history
- ✅ Mark tasks complete/incomplete
- 🔄 Auto-refresh after actions
- 📦 Deployment to Vercel + Render

---

## 📌 Status

This project is **mostly complete** on the frontend. Backend features and MongoDB integration are **in progress** and coming soon.

---

## 👤 Author

Made with ❤️ by **Kunal Pantawane**  
[GitHub](https://github.com/Kunal-41)

---

## 📄 License

This project is open source and free to use for learning and educational purposes.
