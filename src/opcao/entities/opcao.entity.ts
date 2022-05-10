import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Opcao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  valor: number;

  constructor(id: number, nome: string, valor: number) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
  }
}
