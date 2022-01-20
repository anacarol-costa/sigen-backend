import { Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";
import { Opcao } from "./opcao.entity";

@Entity()  
export class SubOpcao {
    
    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToMany(() => Item)
    @JoinTable()
    itens: Item[]

    @ManyToMany(() => Opcao)
    @JoinTable()
    opcoes: Opcao[]
}