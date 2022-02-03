import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriaService } from './categoria.service';
import { CategoriaDto } from './dto/categoria.dto';
import { Categoria } from './entities/categoria.entity';


@ApiTags('Categoria')
@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar categoria.' })
  @ApiResponse({
    status: 201,
    description: 'Categoria criada.',
    type: CategoriaDto,
  })
  async create(@Body() createCategoriaDto: CategoriaDto): Promise<Categoria> {
    return await this.categoriaService.create(createCategoriaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as categorias.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorias.',
    type: [CategoriaDto],
  })
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter categoria por id.' })
  @ApiResponse({
    status: 200,
    description: 'Categoria encontrada.',
    type: CategoriaDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Categoria não encontrada.',
  })
  async findOne(@Param('id') id: string): Promise<Categoria> {
    return await this.categoriaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar categoria.' })
  @ApiResponse({
    status: 204,
    description: 'Categoria atualizada.'
  })
  @ApiResponse({
    status: 404,
    description: 'Categoria não encontrada.'
  })
  update(@Param('id') id: string, @Body() updateCategoriaDto: CategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar categoria.' })
  @ApiResponse({
    status: 204,
    description: 'Categoria deletada.'
  })
  @ApiResponse({
    status: 404,
    description: 'Categoria não encontrada.'
  })
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
