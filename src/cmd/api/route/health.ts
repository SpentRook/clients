import { Router } from "express"
import { HealthController } from "../controller/health"

export const healthRouter = Router()

const healthController = new HealthController()

/**
 * @swagger
 * /api/v1/health:
 *  get:
 *      tags:
 *         - Health
 *      description: Check if the api is running
 *      responses:
 *          200:
 *              description: The api is running
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              message:
 *                                  type: string
 *                                  example: "ok"
 */
healthRouter.get("/", healthController.health)
