import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Opcao } from "./opcao.entity";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    descricao: String;

    constructor(id: Number, descricao: String, itensSubOpcoes?: Opcao[]) {
        this.id = id;
        this.descricao = descricao;
    }

}