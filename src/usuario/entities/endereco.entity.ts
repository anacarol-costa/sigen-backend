import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: string;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @Column()
  pontoReferencia: string;

  @Column()
  quadra: string;

  constructor(
    id: number,
    cep: string,
    bairro: string,
    complemento: string,
    pontoReferencia: string,
    quadra: string,
  ) {
    this.id = id;
    this.cep = cep;
    this.bairro = bairro;
    this.complemento = complemento;
    this.pontoReferencia = pontoReferencia;
    this.quadra = quadra;
  }
}
