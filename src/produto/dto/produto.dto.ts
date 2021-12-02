import { ApiProperty } from "@nestjs/swagger";
<<<<<<< HEAD
import { CategoriaDto } from "./categoria.dto";
=======
import { CategoriaDto } from "src/categoria/dto/categoria.dto";
>>>>>>> c848d5085cdd9e051e08584caf1b7a2a4efdff00
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

