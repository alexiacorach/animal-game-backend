import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config()

const app = express();
const PORT = 3001;

app.use(express.json());

connectDB();

app.get("/", (_req, res) => {
    res.send("Animal Ranking Game API")
});

app.listen(PORT, ()=> {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
});

