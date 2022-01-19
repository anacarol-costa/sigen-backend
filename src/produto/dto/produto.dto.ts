import { ApiProperty } from "@nestjs/swagger";
import { CategoriaDto } from "src/categoria/dto/categoria.dto";
import { ItensProdutoDto } from "./itens-produto.dto";
import { UnidadeMedidaDto } from "./unidade-medida.dto";

export class ProdutoDto {
  @ApiProperty()
  id: Number;

  @ApiProperty()
  nome: String;
  
  @ApiProperty()
  valorBase: Number;
  
  @ApiProperty()
  categoria: CategoriaDto;

  @ApiProperty()
  unidadeMedida: UnidadeMedidaDto;

  @ApiProperty()
  itensProduto: Array<ItensProdutoDto>;

}

