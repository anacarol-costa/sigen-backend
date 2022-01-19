import { Categoria } from "src/categoria/entities/categoria.entity";
import { UnidadeMedida } from "src/unidade-medida/entities/unidade-medida.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn()
    id: Number;
  
    @Column()
    nome: String;
    
    @Column()
    valorBase: Number;
    
    @ManyToOne(() => Categoria, categoria => categoria.id)
    @JoinColumn({ name: 'id' })
    categoria: Categoria;
  
    @ManyToOne(() => UnidadeMedida, unidadeMedida => unidadeMedida.id)
    @JoinColumn({ name: 'id' })
    unidadeMedida: UnidadeMedida;

    constructor(id: Number, nome: String, valorBase: Number, categoria: Categoria, unidadeMedida: UnidadeMedida) {
        this.id = id;
        this.nome = nome;
        this.valorBase = valorBase;
        this.categoria = categoria;
        this.unidadeMedida = unidadeMedida;
    }

}
