# 🌊 Focus-Flow Notes

A minimalist, high-performance full-stack note-taking application. Focus-Flow allows users to capture ideas instantly with a streamlined interface and a robust Express-based backend.

## 🚀 Overview
This project was built to master the **MERN** stack fundamentals, specifically focusing on asynchronous data flow between a React frontend and a Node.js/Express backend, persisted by a MongoDB database.

### Key Features
* **Real-time CRUD:** Create, Read, and Delete notes with instant UI updates.
* **RESTful API:** Cleanly architected Express routes for data management.
* **Database Persistence:** Integrated with MongoDB via Mongoose for reliable storage.
* **Optimistic UI:** State managed in React to ensure a snappy user experience.

---

## 🛠️ Tech Stack
* **Frontend:** React (Vite), Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Local/Compass)
* **Security:** Dotenv (Environment Variables), CORS

---

## 📂 Project Structure
focus-flow/
├── client/          # React (Vite) frontend
├── server/          # Express.js backend & Mongoose models
├── .gitignore       # Protection for credentials and node_modules
└── README.md

## ⚙️ Getting Started
1. Prerequisites:
Node.js installed
MongoDB Compass running locally
2. Setup the BackendBashcd server
npm install
Create a .env file in the /server folder.Add your connection string: MONGO_URI=mongodb://127.0.0.1:27017/focusflowStart the server: node index.js3. Setup the FrontendBashcd client
npm install
npm run dev
Open the local URL provided by Vite (usually http://localhost:5173).

## 🧠 Lessons Learned
- State Syncing: Managing the sync between the local React state and the MongoDB database to prevent unnecessary page refreshes.

- Environment Safety: Implementing dotenv to protect sensitive database URIs.

- API Debugging: Handling CORS issues and ensuring proper JSON parsing with express.json().
## 🤝 Contributing
Feel free to fork this project and add features like Search Filters, Categories, or Pinned Notes!
