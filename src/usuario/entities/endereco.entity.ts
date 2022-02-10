import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Endereco {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: number;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @Column()
  pontoReferencia: string;

  @Column()
  quadra: number;

  constructor(id: number,
    cep: number,
    bairro: string,
    complemento: string,
    pontoReferencia: string,
    quadra: number) {
      this.id = id;
      this.cep = cep;
      this.bairro = bairro;
      this.complemento = complemento;
      this.pontoReferencia = pontoReferencia;
      this.quadra = quadra;
    }
}