import { Request, Response } from "express";
import { ClientEntity } from "../../../internal/client/core/entity";
import { ClientRepository } from "../../../internal/client/core/repository";

export class ClientController {
    private clientRepository: ClientRepository;
    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }
    createClient = async (req: Request, res: Response) => {
        try {
            const { name, email, birth } = req.body;
            if (!name || !email || !birth) {
                return res.status(400).json({ error: 'Missing fields' });
            }
            if (typeof name !== 'string' || typeof email !== 'string' || typeof birth !== 'string') {
                return res.status(400).json({ error: 'Invalid fields' });
            }
            const birthDate = new Date(birth);
            if (isNaN(birthDate.getTime())) {
                return res.status(400).json({ error: 'Invalid birth date, it must follow the format: "MM/DD/YYYY"' });
            }
            
            const client = new ClientEntity(name, email, birthDate);
            await this.clientRepository.createClient(client);
            res.status(201).json(client);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    listClients = async (_req: Request, res: Response) => {
        const clients = await this.clientRepository.listClients();
        res.status(200).json(clients);
    }
    getClient = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const client = await this.clientRepository.getClient(id);
            res.json(client);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
    updateClient = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, email, birth } = req.body;
        const client = new ClientEntity(name, email, new Date(birth));
        client.id = id;
        await this.clientRepository.updateClient(client);
        res.status(200).json(client);
    }
    deleteClient = async (req: Request, res: Response) => {
        const { id } = req.params;
        await this.clientRepository.deleteClient(id);
        res.status(204).end();
    }
}