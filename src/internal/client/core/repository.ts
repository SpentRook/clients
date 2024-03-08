import { ClientEntity } from "./entity";

export interface ClientRepository {
  createClient(client: ClientEntity): Promise<void>;
  listClients(): Promise<ClientEntity[]>;
  getClient(id: number): Promise<ClientEntity>;
  updateClient(client: ClientEntity): Promise<void>;
  deleteClient(id: number): Promise<void>;
}
