import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === "production"
        ? "https://chat-pulse-2bjs.onrender.com"
        : "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    const frontendDist = path.join(__dirname, "frontend/ChatApp/dist"); // ✅ fixed path

    app.use(express.static(frontendDist));

    app.get("*splat", (req, res) => {
        res.sendFile(path.join(frontendDist, "index.html"));
    });
}

server.listen(PORT, () => {
    console.log("server is running on PORT " + PORT);
    connectDB();
});