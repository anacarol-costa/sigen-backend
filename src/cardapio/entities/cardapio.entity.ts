import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cardapio {
    @PrimaryGeneratedColumn({name: 'id_cardapio'})
    id: number;

    @Column()
    pdf: string;

    constructor(
        id: number,
        pdf: string,
    ){
        this.id = id;
        this.pdf = pdf;
    }
}
