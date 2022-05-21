import { Produto } from 'src/produto/entities/produto.entity';
import { Endereco } from 'src/usuario/entities/endereco.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  valorCompra: number;

  @ManyToOne(() => Endereco, (endereco) => endereco.id, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'id_endereco_compra' })
  enderecoCompra: Endereco;

  @ManyToOne(() => Usuario, (usuario) => usuario.id, { eager: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @ManyToMany(() => Produto)
  @JoinTable({ name: 'compra_produto' })
  produtos: Produto[];

  @Column({ nullable: true })
  dia!: string;

  @Column({ nullable: true })
  mes!: number;

  @Column({ nullable: true })
  ano!: string;

  @Column({ nullable: true })
  hora!: string;

  constructor(
    id: number,
    valorCompra: number,
    enderecoCompra: Endereco,
    usuario: Usuario,
    produtos: Produto[],
    dia: string,
    mes: number,
    ano: string,
    hora: string,
  ) {
    this.id = id;
    this.valorCompra = valorCompra;
    this.enderecoCompra = enderecoCompra;
    this.usuario = usuario;
    this.produtos = produtos;
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    this.hora = hora;
  }
}
