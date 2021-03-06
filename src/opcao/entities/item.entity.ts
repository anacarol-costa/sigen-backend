import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  descricao: string;

  constructor(id: number, descricao: string) {
    this.id = id;
    this.descricao = descricao;
  }
}
