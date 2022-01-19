import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadeMedidaDto } from './dto/unidade-medida.dto';
import { UnidadeMedidaService } from './unidade-medida.service';

@Controller('unidade-medida')
export class UnidadeMedidaController {
  constructor(private readonly unidadeMedidaService: UnidadeMedidaService) {}

  @Post()
  create(@Body() createUnidadeMedidaDto: UnidadeMedidaDto) {
    return this.unidadeMedidaService.create(createUnidadeMedidaDto);
  }

  @Get()
  findAll() {
    return this.unidadeMedidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadeMedidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnidadeMedidaDto: UnidadeMedidaDto) {
    return this.unidadeMedidaService.update(+id, updateUnidadeMedidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadeMedidaService.remove(+id);
  }
}
