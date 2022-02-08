import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administrador {
  
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  nome: String;

  @Column()
  email: String;

  @Column()
  senha: String;

  @Column()
  telefone: String;

  constructor(id: Number,
    nome: String,
    email: String,
    senha: String,
    telefone: String){
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.telefone = telefone;
    }
}
