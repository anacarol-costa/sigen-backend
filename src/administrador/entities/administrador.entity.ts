import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administrador {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  email: String;

  @Column()
  senha: String;

  @Column()
  telefone: String;

  constructor(id: Number,
    email: String,
    senha: String,
    telefone: String){
      this.id = id;
      this.email = email;
      this.senha = senha;
      this.telefone = telefone;
    }
}
