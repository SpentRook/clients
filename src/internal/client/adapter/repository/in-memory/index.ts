import { ClientEntity } from "../../../core/entity";

export class ClientRepositoryInMemory {
  clients: Map<number, ClientEntity>;
  constructor() {
    this.clients = new Map();
  }
  async createClient(client: ClientEntity) {
    this.clients.set(client.id, client);
  }
  async listClients() {
    return Array.from(this.clients.values());
  }
  async getClient(id: number) {
    const client = this.clients.get(id);
    if (!client) {
      throw new Error(`Client ${id} not found`);
    }
    return client;
  }
  async updateClient(client: ClientEntity) {
    this.clients.set(client.id, client);
  }
  async deleteClient(id: number) {
    this.clients.delete(id);
  }
}
