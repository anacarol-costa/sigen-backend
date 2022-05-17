import { Produto } from 'src/produto/entities/produto.entity';
import { Endereco } from 'src/usuario/entities/endereco.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valorCompra: number;

  @OneToOne(() => Endereco, (endereco) => endereco.id, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'id_endereco_compra' })
  enderecoCompra!: Endereco;

  @OneToOne(() => Usuario, (usuario) => usuario.id, { eager: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToMany(() => Produto, { eager: true })
  @JoinTable({ name: 'compra_produto' })
  produtos: Produto[];

  constructor(
    id: number,
    valorCompra: number,
    enderecoCompra: Endereco,
    usuario: Usuario,
    produtos: Produto[],
  ) {
    this.id = id;
    this.valorCompra = valorCompra;
    this.enderecoCompra = enderecoCompra;
    this.usuario = usuario;
    this.produtos = produtos;
  }
}
