import { ApiProperty } from "@nestjs/swagger";
import { EnderecoCompraDto } from "../../usuario/dto/endereco-compra.dto";

import { ProdutoDto } from "src/produto/dto/produto.dto";
import { UsuarioDto } from "src/usuario/dto/usuario.dto";

export class CompraDto {
  
  @ApiProperty()
  id: Number;

  @ApiProperty()
  valorCompra: Number;

  @ApiProperty()
  enderecoCompra: EnderecoCompraDto;

  @ApiProperty()
  usuario: UsuarioDto;

  @ApiProperty()
  produtos: Array<ProdutoDto>;

}
