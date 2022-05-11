import { ApiProperty } from '@nestjs/swagger';
import { Produto } from '../entities/produto.entity';

export class ItemProdutoCategoriaDto {
  @ApiProperty()
  categoriaProduto: string;

  @ApiProperty()
  produto: Produto[];


  constructor(categoriaProduto: string, produto: Produto[]) {
    this.categoriaProduto = categoriaProduto;
    this.produto = produto;
  }
}
