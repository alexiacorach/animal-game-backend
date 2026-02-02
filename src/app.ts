import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (_req, res) => {
    res.send("Animal Ranking Game API")
});

app.listen(PORT, ()=> {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})
