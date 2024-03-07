import express from "express";
import { routes } from "./route";
import cors from "./config/cors";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors)

app.use("/api/v1", routes)
app.use((req, res) => {
    res.status(404).json({ message: "Not Found path: " + req.url});
});


export default app