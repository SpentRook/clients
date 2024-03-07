import { Router } from "express"
import { HealthController } from "../controller/health"

export const healthRouter = Router()

const healthController = new HealthController()

healthRouter.get("/", healthController.health)
