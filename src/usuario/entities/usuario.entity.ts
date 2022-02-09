import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./endereco.entity";

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  nome: String;

  @Column()
  email: String; 

  @Column()
  senha: String; 

  @OneToMany(() => Endereco, Endereco => Endereco.id, { eager: true})
  @JoinColumn({ name: 'id_endereco'})
  enderecos: Endereco[];

  @Column()
  telefone: String;


  constructor(id: Number,
    nome: String,
    email: String,
    senha: String,
    endereco: Endereco[],
    telefone: String) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.enderecos = endereco;
      this.telefone = telefone;
    }
}
