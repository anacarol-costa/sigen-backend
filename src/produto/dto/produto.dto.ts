import { ApiProperty } from "@nestjs/swagger";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { UnidadeMedida } from "src/unidade-medida/entities/unidade-medida.entity";
import { Produto } from "../entities/produto.entity";
import { ItensProdutoDto } from "./itens-produto.dto";

export class ProdutoDto {
  @ApiProperty()
  id: Number;

  @ApiProperty()
  nome: String;
  
  @ApiProperty()
  valorBase: Number;
  
  @ApiProperty()
  categoriaId: number;

  @ApiProperty()
  unidadeMedidaId: number;

  @ApiProperty({ type: [ItensProdutoDto] })
  itensProduto: Array<ItensProdutoDto>;


  static fromEntity(dto: ProdutoDto, categoria: Categoria, unidadeMedida: UnidadeMedida): Produto {
      return new Produto(
        dto.id,
        dto.nome,
        dto.valorBase, 
        categoria,
        unidadeMedida
      )
  }


}

