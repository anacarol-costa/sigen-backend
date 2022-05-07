import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UnidadeMedidaDto } from './dto/unidade-medida.dto';
import { UnidadeMedidaService } from './unidade-medida.service';

@ApiTags('Unidade Medida')
@Controller('unidades-medida')
export class UnidadeMedidaController {
  constructor(private readonly unidadeMedidaService: UnidadeMedidaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar unidade de medida.' })
  @ApiResponse({
    status: 201,
    description: 'Unidade de medida.',
    type: UnidadeMedidaDto,
  })
  create(@Body() createUnidadeMedidaDto: UnidadeMedidaDto) {
    return this.unidadeMedidaService.create(createUnidadeMedidaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as unidades de medida.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de unidades de medida.',
    type: [UnidadeMedidaDto],
  })
  findAll() {
    return this.unidadeMedidaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter unidade de medida por id.' })
  @ApiResponse({
    status: 200,
    description: 'Unidade de medida encontrada.',
    type: UnidadeMedidaDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Unidade de medida não encontrada.',
  })
  findOne(@Param('id') id: string) {
    return this.unidadeMedidaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar unidade de medida.' })
  @ApiResponse({
    status: 204,
    description: 'Unidade de medida atualizada.',
  })
  @ApiResponse({
    status: 404,
    description: 'Unidade de medida não encontrada.',
  })
  update(
    @Param('id') id: string,
    @Body() updateUnidadeMedidaDto: UnidadeMedidaDto,
  ) {
    return this.unidadeMedidaService.update(+id, updateUnidadeMedidaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar unidade de medida.' })
  @ApiResponse({
    status: 204,
    description: 'Unidade de medida deletada.',
  })
  @ApiResponse({
    status: 404,
    description: 'Unidade de medida não encontrada.',
  })
  remove(@Param('id') id: string) {
    return this.unidadeMedidaService.remove(+id);
  }
}
