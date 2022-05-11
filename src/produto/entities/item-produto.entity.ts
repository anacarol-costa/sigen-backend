import { ItemOpcao } from 'src/opcao/entities/item-opcao.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class ItemProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto, (produto) => produto.itensProduto)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;

  @ManyToOne(() => ItemOpcao, (itemOpcao) => itemOpcao.id)
  @JoinColumn({ name: 'id_item_sub_opcao' })
  ItemOpcao: ItemOpcao;

  constructor(id: number, produto: Produto, ItemOpcao: ItemOpcao) {
    this.id = id;
    this.produto = produto;
    this.ItemOpcao = ItemOpcao;
  }
}
