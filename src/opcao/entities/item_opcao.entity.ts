import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";
import { Opcao } from "./opcao.entity";

@Entity()
export class ItemOpcao {

    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(() => Item, item => item.id)
    @JoinColumn({ name: 'id_item' })
    item: Item

    @ManyToOne(() => Opcao, opcao => opcao.id)
    @JoinColumn({ name: 'id_opcao' })
    opcao: Opcao

}