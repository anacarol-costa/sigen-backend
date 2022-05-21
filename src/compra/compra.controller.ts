import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompraService } from './compra.service';
import { CompraDto } from './dto/compra.dto';

@ApiTags('Compra')
@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  @ApiOperation({ summary: 'Criar compra.' })
  @ApiResponse({
    status: 201,
    description: 'Compra criada.',
    type: CompraDto,
  })
  create(@Body() createCompraDto: CompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as compras.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de compras.',
    type: [CompraDto],
  })
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter compra por id.' })
  @ApiResponse({
    status: 200,
    description: 'Compra encontrada.',
    type: CompraDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Compra não encontrada.',
  })
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar compra.' })
  @ApiResponse({
    status: 204,
    description: 'Compra atualizada.',
  })
  @ApiResponse({
    status: 404,
    description: 'Compra não encontrada.',
  })
  update(@Param('id') id: string, @Body() updateCompraDto: CompraDto) {
    return this.compraService.update(+id, updateCompraDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar compra.' })
  @ApiResponse({
    status: 204,
    description: 'Compra deletada.',
  })
  @ApiResponse({
    status: 404,
    description: 'Compra não encontrada.',
  })
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
