import { Router } from "express";
import { clientRouter } from "./client";

export const routes = Router()

routes.use("/clients", clientRouter)