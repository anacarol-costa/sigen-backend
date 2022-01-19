import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UnidadeMedida {

    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    descricao: String;
    @Column()
    abreviacao: String;

    constructor(id: Number, descricao: String, abreviacao: String) {
        this.id = id;
        this.descricao = descricao;
        this.abreviacao = abreviacao;
    }

}