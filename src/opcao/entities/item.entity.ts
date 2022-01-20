import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    descricao: String;

}