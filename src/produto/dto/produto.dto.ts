import { ApiProperty } from '@nestjs/swagger';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { UnidadeMedida } from 'src/unidade-medida/entities/unidade-medida.entity';
import { Produto } from '../entities/produto.entity';
import { ItemProduto } from '../entities/item-produto.entity';

export class ProdutoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  valorBase: number;

  @ApiProperty()
  categoria: number;

  @ApiProperty()
  unidadeMedida: number;

  @ApiProperty()
  itensProduto: number[];

  @ApiProperty()
  itensOpcao: number[];

  static fromEntity(
    dto: ProdutoDto,
    categoria: Categoria,
    unidadeMedida: UnidadeMedida,
    itensProduto?: ItemProduto[],
  ): Produto {
    return new Produto(
      dto.id,
      dto.nome,
      dto.valorBase,
      categoria,
      unidadeMedida,
      itensProduto,
    );
  }
}
