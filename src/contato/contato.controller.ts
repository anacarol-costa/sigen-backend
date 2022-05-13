import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoDto } from './dto/contato.dto';

@ApiTags('Contato')
@Controller('contatos')
export class ContatoController {
  constructor(private readonly contatoService: ContatoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar contato.' })
  @ApiResponse({
    status: 201,
    description: 'Contato criado.',
    type: ContatoDto,
  })
  create(@Body() createContatoDto: ContatoDto) {
    return this.contatoService.create(createContatoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os contatos.' })
  @ApiResponse({
    status: 200,
    description: 'Listar contatos.',
    type: [ContatoDto],
  })
  findAll() {
    return this.contatoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter contato por id.' })
  @ApiResponse({
    status: 200,
    description: 'Contato encontrado.',
    type: ContatoDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Contato não encontrado.',
  })
  findOne(@Param('id') id: string) {
    return this.contatoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar contato.' })
  @ApiResponse({
    status: 204,
    description: 'Contato atualizado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contato não encontrado.',
  })
  update(@Param('id') id: string, @Body() updateContatoDto: ContatoDto) {
    return this.contatoService.update(+id, updateContatoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar contato.' })
  @ApiResponse({
    status: 204,
    description: 'Contato deletado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contato não encontrado.',
  })
  remove(@Param('id') id: string) {
    return this.contatoService.remove(+id);
  }
}
