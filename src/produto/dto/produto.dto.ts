import { ApiProperty } from "@nestjs/swagger";
import { CategoriaDto } from "src/categoria/dto/categoria.dto";
import { UnidadeMedidaDto } from "src/unidade-medida/dto/unidade-medida.dto";
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
  categoria: CategoriaDto;

  @ApiProperty()
  unidadeMedida: UnidadeMedidaDto;

  @ApiProperty()
  itensProduto: Array<ItensProdutoDto>;


  static fromEntity(dto: ProdutoDto): Produto {
      return new Produto(
        dto.id,
        dto.nome,
        dto.valorBase, 
        CategoriaDto.fromEntity(dto.categoria),
        UnidadeMedidaDto.fromEntity(dto.unidadeMedida));

  }


}

