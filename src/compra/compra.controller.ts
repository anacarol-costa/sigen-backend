import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompraService } from './compra.service';
import { CompraDto } from './dto/compra.dto';

@ApiTags('Compra')
@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  create(@Body() createCompraDto: CompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Get()
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompraDto: CompraDto) {
    return this.compraService.update(+id, updateCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
