import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { ItemProdutoService } from './item-produto.service';
import { ItemProduto } from './entities/item-produto.entity';

@ApiTags('Item Produto')
@Controller('itens-produto')
export class ItemProdutoController {
  constructor(private readonly itemProdutoService: ItemProdutoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos itens do produto.' })
  @ApiResponse({
    status: 200,
    description: 'Lista itens de produto.',
    type: [ItemProduto],
  })
  findAll() {
    return this.itemProdutoService.findAll();
  }
}
