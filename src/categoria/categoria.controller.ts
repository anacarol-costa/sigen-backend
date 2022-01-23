import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriaService } from './categoria.service';
import { CategoriaDto } from './dto/categoria.dto';
import { Categoria } from './entities/categoria.entity';


@ApiTags('Categoria')
@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async create(@Body() createCategoriaDto: CategoriaDto): Promise<Categoria> {
    return await this.categoriaService.create(createCategoriaDto);
  }

  @Get()
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Categoria> {
    return await this.categoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: CategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
