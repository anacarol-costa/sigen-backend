import { Categoria } from "src/categoria/entities/categoria.entity";
import { UnidadeMedida } from "src/unidade-medida/entities/unidade-medida.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ItemProduto } from "./item-produto.entity";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: Number;
  
    @Column()
    nome: String;
    
    @Column()
    valorBase: Number;
    
    @ManyToOne(() => Categoria, categoria => categoria.id, { eager: true })
    @JoinColumn({ name: 'id_categoria' })
    categoria: Categoria;
  
    @ManyToOne(() => UnidadeMedida, unidadeMedida => unidadeMedida.id, { eager: true })
    @JoinColumn({ name: 'id_unidade_medida' })
    unidadeMedida: UnidadeMedida;

    @OneToMany(() => ItemProduto, itemProduto => itemProduto.produto, 
    {cascade: ['insert', 'update']})
    itensProduto: ItemProduto[];


    constructor(id: Number,
        nome: String,
        valorBase: Number,
        categoria: Categoria,
        unidadeMedida: UnidadeMedida, 
        itensProduto?: ItemProduto[]) {
        this.id = id;
        this.nome = nome;
        this.valorBase = valorBase;
        this.categoria = categoria;
        this.unidadeMedida = unidadeMedida;
        this.itensProduto = itensProduto;
    }

}
