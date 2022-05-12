import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDto } from './dto/produto.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Produto')
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar produto.' })
  @ApiResponse({
    status: 201,
    description: 'Produto criado.',
    type: ProdutoDto,
  })
  create(@Body() createProdutoDto: ProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de produtos.',
    type: [ProdutoDto],
  })
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter produto por id.' })
  @ApiResponse({
    status: 200,
    description: 'Produto encontrado.',
    type: ProdutoDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado.',
  })
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar produto.' })
  @ApiResponse({
    status: 204,
    description: 'Produto atualizado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado.',
  })
  update(@Param('id') id: string, @Body() updateProdutoDto: ProdutoDto) {
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar produto.' })
  @ApiResponse({
    status: 204,
    description: 'Produto deletado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado.',
  })
  remove(@Param('id') id: string) {
    return this.produtoService.remove(+id);
  }

  @Get('/categoria/:id')
  @ApiOperation({ summary: 'Obter produtos por id categoria.' })
  @ApiResponse({
    status: 200,
    description: 'Produtos encontrados.',
    type: ProdutoDto,
  })
  obterProdutosPorCategoria(@Param('id') id: string) {
    return this.produtoService.obterProdutosPorCategoria(+id);
  }
}
