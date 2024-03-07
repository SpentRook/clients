import { Router } from "express";
import { ClientRepositoryInMemory } from "../../../internal/client/adapter/repository/in-memory";
import { ClientController } from "../controller/client";

export const clientRouter = Router()

const clientRepository = new ClientRepositoryInMemory()

const clientController = new ClientController(clientRepository)

clientRouter.get("/", clientController.listClients)
clientRouter.post("/", clientController.createClient)
clientRouter.get("/:id", clientController.getClient)
clientRouter.put("/:id", clientController.updateClient)
clientRouter.delete("/:id", clientController.deleteClient)
