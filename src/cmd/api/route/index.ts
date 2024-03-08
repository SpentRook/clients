import { Router } from "express";
import { clientRouter } from "./client";
import { healthRouter } from "./health";

export const routes = Router()

/**
 * @swagger
 *  tags:
 *    name: Clients
 *    description: Clients for bank
 * 
 * @swagger
 * tags:
 *  name: Health
 *  description: Health check
 */

routes.use("/clients", clientRouter)
routes.use("/health", healthRouter)
