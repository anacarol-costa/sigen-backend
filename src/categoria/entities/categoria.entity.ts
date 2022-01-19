import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    nome: String;


    constructor(id: Number, nome: String) {
        this.id = id;
        this.nome = nome
    }

}
