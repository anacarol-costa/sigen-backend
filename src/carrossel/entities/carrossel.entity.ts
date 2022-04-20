import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carrossel {
    @PrimaryGeneratedColumn({ name: 'id_carrossel' })
    id: number;

    @Column()
    imagem: string;

    constructor(
        id: number,
        imagem: string
    ) {
        this.id = id;
        this.imagem = imagem;
    }
}
