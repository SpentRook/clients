import { Router } from "express";
import { clientRouter } from "./client";
import { healthRouter } from "./health";

export const routes = Router()

routes.use("/clients", clientRouter)
routes.use("/health", healthRouter)
