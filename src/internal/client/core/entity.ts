export class ClientEntity {
    id: string;
    name: string;
    email: string;
    birth: Date;
    createdAt: Date;

    constructor(name: string, email: string, birth: Date) {
        this.id = crypto.randomUUID()
        this.name = name;
        this.email = email;
        this.birth = birth;
        this.createdAt = new Date();
    }
}