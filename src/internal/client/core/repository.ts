import { ClientEntity } from "./entity";

export interface ClientRepository {
    createClient(client: ClientEntity): Promise<void>;
    listClients(): Promise<ClientEntity[]>;
    getClient(id: string): Promise<ClientEntity>;
    updateClient(client: ClientEntity): Promise<void>;
    deleteClient(id: string): Promise<void>;
}