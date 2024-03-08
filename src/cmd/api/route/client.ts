import { Router } from "express";
import { ClientRepositoryInMemory } from "../../../internal/client/adapter/repository/in-memory";
import { ClientController } from "../controller/client";

export const clientRouter = Router()

const clientRepository = new ClientRepositoryInMemory()

const clientController = new ClientController(clientRepository)

/**
 * @swagger
 * /api/v1/clients:
 *  get:
 *      tags:
 *          - Clients
 *      description: List all clients
 *      responses:
 *          200:
 *              description: A list of clients saved in db
 *              content:
 *                  application/json:
 *                      schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/clientResponse'
 *                      example:
 *                         - id: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *                           name: John Doe
 *                           email: johndoe@example.com
 *                           birth: 2000-08-14T00:00:00.000Z
 *                           createdAt: 2024-08-14T00:00:00.000Z
 *
 */
clientRouter.get("/", clientController.listClients)

/**
 * @swagger
 * /api/v1/clients:
 *  post:
 *      tags:
 *          - Clients
 *      description: Create a new client
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/clientCreate'
 *      responses:
 *          201:
 *              description: A new client created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/clientResponse'
 *          400:
 *              description: Invalid fields or missing fields
 */
clientRouter.post("/", clientController.createClient)

/**
* @swagger
 * /api/v1/clients/{id}:
 *  get:
 *      tags:
 *          - Clients
 *      description: Get a client by id
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: The client id
 *            schema:
 *             type: string
 *             example: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *              
 *  responses:
 *      200:
 *          description: A client found
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/clientResponse'
 *      404:
 *          description: Client not found
 */
clientRouter.get("/:id", clientController.getClient)

/**
* @swagger
 * /api/v1/clients/{id}:
 *  put:
 *      tags:
 *          - Clients
 *      description: Update a client
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: The client id
 *            schema:
 *             type: string
 *             example: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/clientUpdate'
 *  responses:
 *      200:
 *          description: A client updated
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/clientResponse'
 */
clientRouter.put("/:id", clientController.updateClient)

/**
 * @swagger
 * /api/v1/clients/{id}:
 *  delete:
 *      tags:
 *          - Clients
 *      description: Delete a client
 *      parameters:
 *          - name: id
 *            in: path
 *            required: true
 *            description: The client id
 *            schema:
 *             type: string
 *             example: 4a4e3e4e-4e4e-4e4e-4e4e-4e4e4e4e4e4e
 *  responses:
 *      204:
 *          description: Client deleted
 *      404:
 *          description: Client not found
 */
clientRouter.delete("/:id", clientController.deleteClient)
