import { ItemOpcao } from "src/opcao/entities/item_opcao.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./produto.entity";

@Entity()
export class ItemProduto {

    @PrimaryGeneratedColumn()
    id: Number;

    @ManyToOne(() => Produto, produto => produto.itensProduto)
    @JoinColumn({ name: 'id_produto'})
    produto: Produto;

    @ManyToOne(() => ItemOpcao, ItemOpcao => ItemOpcao.id)
    @JoinColumn({ name: 'id_item_sub_opcao'})
    ItemOpcao: ItemOpcao

}