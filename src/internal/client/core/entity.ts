export class ClientEntity {
  id: number;
  name: string;
  email: string;
  birth: Date;
  createdAt: Date;

  constructor(id: number, name: string, email: string, birth: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birth = birth;
    this.createdAt = new Date();
  }
}
