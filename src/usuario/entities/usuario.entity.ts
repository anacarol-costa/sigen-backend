import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EnderecoCompraDto } from "../dto/endereco-compra.dto";

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  email: String; 

  @Column()
  senha: String; 

  @OneToMany(() => EnderecoCompraDto, enderecoCompraDto => enderecoCompraDto.id, { eager: true})
  @JoinColumn({ name: 'id_endereco'})
  endereco: EnderecoCompraDto;

  @Column()
  telefone: String;


  constructor(id: Number,
    email: String,
    senha: String,
    enderecoCompraDto: EnderecoCompraDto,
    telefone: String) {
      this.id = id;
      this.email = email;
      this.senha = senha;
      this.endereco = enderecoCompraDto;
      this.telefone = telefone;
    }
}
