import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Opcao } from "./opcao.entity";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    descricao: String;

    @ManyToMany(() => Opcao)
    @JoinTable({
        name: "itens_sub_opcoes",
        joinColumn: {
            name: "id_item",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "id_opcao",
            referencedColumnName: "id"
        }
    })
    itensSubOpcoes: Opcao[]

    constructor(id: Number, descricao: String) {
        this.id = id;
        this.descricao = descricao;
    }

}