import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class EnderecoCompra {

  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  cep: Number;

  @Column()
  bairro: String;

  @Column()
  complemento: String;

  @Column()
  pontoReferencia: String;

  @Column()
  quadra: Number;


  constructor(id: Number,
    cep: Number,
    bairro: String,
    complemento: String,
    pontoReferencia: string,
    quadra: Number) {
      this.id = id;
      this.cep = cep;
      this.bairro = bairro;
      this.complemento = complemento;
      this.pontoReferencia = pontoReferencia;
      this.quadra = quadra;
    }
}