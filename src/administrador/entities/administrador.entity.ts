import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Administrador {
  @PrimaryGeneratedColumn({ name: 'id_administrador' })
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: string;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    telefone: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.telefone = telefone;
  }
}
