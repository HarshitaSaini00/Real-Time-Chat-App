# 💬 Chat Pulse — Real-Time Chat Application

A full-stack real-time chat application built with the MERN stack and Socket.io.

![Chat Pulse](https://img.shields.io/badge/Status-Live-brightgreen)
![Node](https://img.shields.io/badge/Node.js-v22-green)
![React](https://img.shields.io/badge/React-v19-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## 🌐 Live Demo

🔗 [Chat Pulse](https://chattingpulse.onrender.com)

---

## ✨ Features

- 🔐 JWT-based Authentication (Signup / Login / Logout)
- 💬 Real-time messaging with Socket.io
- 🟢 Online/Offline user status
- 🖼️ Image sharing in chat (via Cloudinary)
- 👤 Profile picture upload
- 🎨 32 themes (powered by DaisyUI)
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React + Vite | UI framework |
| Tailwind CSS | Styling |
| DaisyUI | UI components & themes |
| Zustand | State management |
| Socket.io-client | Real-time communication |
| Axios | HTTP requests |
| React Router | Navigation |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | Server |
| MongoDB + Mongoose | Database |
| Socket.io | WebSocket server |
| JWT | Authentication |
| Cloudinary | Image storage |
| bcryptjs | Password hashing |
| Cookie-parser | Cookie management |

---

## 📁 Project Structure

```
Chat App/
├── backend/
│   └── src/
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   └── message.controller.js
│       ├── lib/
│       │   ├── cloudinary.js
│       │   ├── db.js
│       │   ├── socket.js
│       │   └── utils.js
│       ├── middleware/
│       │   └── auth.middleware.js
│       ├── models/
│       │   ├── user.model.js
│       │   └── message.model.js
│       ├── routes/
│       │   ├── auth.route.js
│       │   └── message.route.js
│       └── index.js
├── frontend/
│   └── ChatApp/
│       └── src/
│           ├── components/
│           ├── pages/
│           ├── store/
│           └── lib/
└── package.json
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the repo
```bash
git clone https://github.com/HarshitaSaini00/Real-Time-Chat-App.git
cd Real-Time-Chat-App
```

### 2. Backend `.env` setup
Create `backend/.env`:
```env
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5001
NODE_ENV=development
```

### 3. Install dependencies
```bash
# Root level
npm run build
```

This installs both backend and frontend dependencies and builds the frontend.

### 4. Run locally
```bash
# Backend
cd backend
npm run dev

# Frontend (separate terminal)
cd frontend/ChatApp
npm run dev
```

---

## 🔌 API Endpoints

### Auth Routes `/api/auth`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/signup` | Register new user |
| POST | `/login` | Login user |
| POST | `/logout` | Logout user |
| PUT | `/update-profile` | Update profile picture |
| GET | `/check` | Check auth status |

### Message Routes `/api/messages`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Get all users for sidebar |
| GET | `/:id` | Get messages with a user |
| POST | `/send/:id` | Send a message |

---

## 🚀 Deployment (Render)

1. Push code to GitHub
2. Create new Web Service on [Render](https://render.com)
3. Connect your GitHub repo
4. Set the following:
   - **Build Command:** `npm run build`
   - **Start Command:** `node backend/src/index.js`
5. Add all environment variables from `.env`

---

## 📸 Screenshots

> Add screenshots here after deployment

---

## 👩‍💻 Author

**Harshita Saini**
- GitHub: [@HarshitaSaini00](https://github.com/HarshitaSaini00)
- LinkedIn: [Harshita Saini](https://linkedin.com/in/harshita-saini)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).