import { ApiProperty } from "@nestjs/swagger";
import { EnderecoDto } from "src/usuario/dto/endereco.dto";
import { ProdutoDto } from "src/produto/dto/produto.dto";
import { UsuarioDto } from "src/usuario/dto/usuario.dto";
import { Endereco } from "src/usuario/entities/endereco.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Compra } from "../entities/compra.entity";

export class CompraDto {
  
  @ApiProperty()
  id: number;

  @ApiProperty()
  valorCompra: number;

  @ApiProperty()
  enderecoCompraId: number;

  @ApiProperty()
  usuarioId: number;

  @ApiProperty() 
  produtosId: number[];

  static fromEntity(dto: CompraDto, enderecoCompra: Endereco, usuario: Usuario, produtos: Produto[]): Compra {
    return new Compra(
      dto.id,
      dto.valorCompra,
      enderecoCompra,
      usuario,
      produtos 
    )
  }

}
