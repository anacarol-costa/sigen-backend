import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EnderecoCompra } from "./endereco-compra.entity";

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

  @OneToMany(() => EnderecoCompra, EnderecoCompra => EnderecoCompra.id, { eager: true})
  @JoinColumn({ name: 'id_endereco'})
  endereco: EnderecoCompra;

  @Column()
  telefone: String;


  constructor(id: Number,
    nome: String,
    email: String,
    senha: String,
    enderecoCompra: EnderecoCompra,
    telefone: String) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.endereco = enderecoCompra;
      this.telefone = telefone;
    }
}
