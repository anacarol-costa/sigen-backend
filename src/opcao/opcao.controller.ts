import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpcaoDto } from './dto/opcao.dto';
import { OpcaoService } from './opcao.service';

@ApiTags('Opção')
@Controller('opcoes')
export class OpcaoController {
  constructor(private readonly opcaoService: OpcaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar opção.' })
  @ApiResponse({
    status: 201,
    description: 'Opção criada.',
    type: OpcaoDto,
  })
  create(@Body() createOpcaoDto: OpcaoDto) {
    return this.opcaoService.create(createOpcaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as opções.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de opções.',
    type: [OpcaoDto],
  })
  findAll() {
    return this.opcaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter opção por id.' })
  @ApiResponse({
    status: 200,
    description: 'Opção encontrada.',
    type: OpcaoDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Opção não encontrada.',
  })
  findOne(@Param('id') id: string) {
    return this.opcaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar opção.' })
  @ApiResponse({
    status: 204,
    description: 'Opção atualizada.'
  })
  @ApiResponse({
    status: 404,
    description: 'Opção não encontrada.'
  })
  update(@Param('id') id: string, @Body() updateOpcaoDto: OpcaoDto) {
    return this.opcaoService.update(+id, updateOpcaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar opção.' })
  @ApiResponse({
    status: 204,
    description: 'Opção deletada.'
  })
  @ApiResponse({
    status: 404,
    description: 'Opção não encontrada.'
  })
  remove(@Param('id') id: string) {
    return this.opcaoService.remove(+id);
  }
}
