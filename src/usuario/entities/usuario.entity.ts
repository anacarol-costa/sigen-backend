import { type } from 'os';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Endereco } from './endereco.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @ManyToOne(() => Endereco, (endereco) => endereco.id, { eager: true })
  @JoinColumn({ name: 'id_endereco' })
  enderecos: Endereco;

  @Column()
  telefone: string;

  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    endereco: Endereco,
    telefone: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.enderecos = endereco;
    this.telefone = telefone;
  }
}
