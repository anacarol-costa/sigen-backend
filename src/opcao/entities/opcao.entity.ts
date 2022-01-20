import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Opcao {

    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nome: String;
    
    @Column()
    valor: Number;

    constructor(id: Number, nome: String, valor: Number) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
    }

}
