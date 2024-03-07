import { ClientEntity } from "../../../core/entity";

export class ClientRepositoryInMemory {
    clients: Map<string, ClientEntity>;
    constructor() {
        this.clients = new Map();
    }
    async createClient(client: ClientEntity) {
        this.clients.set(client.id, client);
    }
    async listClients() {
        return Array.from(this.clients.values());
    }
    async getClient(id: string) {
        const client = this.clients.get(id);
        if (!client) {
            throw new Error(`Client ${id} not found`);
        }
        return client;
    }
    async updateClient(client: ClientEntity) {
        this.clients.set(client.id, client);
    }
    async deleteClient(id: string) {
        this.clients.delete(id);
    }
}