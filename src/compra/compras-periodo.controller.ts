import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { CompraDto } from './dto/compra.dto';
import { CompraService } from './compra.service';

@ApiTags('Compra Periodo')
@Controller('periodo/compras')
export class CompraPeriodoController {
  constructor(private readonly compraService: CompraService) {}

  @Get()
  @ApiOperation({ summary: 'Obter compra por período.' })
  @ApiResponse({
    status: 200,
    description: 'Compra obtida por período encontrada.',
    type: CompraDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Compra obtida por período não encontrada.',
  })
  obterComprasPeriodo(
    @Query('dia') dia: string,
    @Query('mes') mes: string,
    @Query('ano') ano: string,
  ) {
    return this.compraService.obterComprasPeriodo(dia, +mes, ano);
  }
}
