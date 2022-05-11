import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cardapio {
  @PrimaryGeneratedColumn({ name: 'id_cardapio' })
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'blob' })
  pdf: number[];

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }
}
