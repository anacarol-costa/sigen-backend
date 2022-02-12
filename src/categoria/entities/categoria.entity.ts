import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;


    constructor(id: number, 
        nome: string) {
        this.id = id;
        this.nome = nome
    }

}
