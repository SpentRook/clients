import express from "express";
import { routes } from "./route";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes)

export default app