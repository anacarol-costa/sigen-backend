import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CardapioService } from './cardapio.service';
import { CardapioDto } from './dto/cardapio.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('Cardapio')
@Controller('cardapios')
export class CardapioController {
  constructor(private readonly cardapioService: CardapioService) { }

  @Post()
  @ApiOperation({ summary: 'Criar cardápio.' })
  @ApiResponse({
    status: 201,
    description: 'Cardápio criado.',
    type: CardapioDto,
  })
  create(@Body() createCardapioDto: CardapioDto) {
    return this.cardapioService.create(createCardapioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cardápios.' })
  @ApiResponse({
    status: 200,
    description: 'Listar cardápios.',
    type: [CardapioDto],
  })
  findAll() {
    return this.cardapioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter Cardápio por id.' })
  @ApiResponse({
    status: 200,
    description: 'Cardápio encontrado.',
    type: CardapioDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Cardápio não encontrado.',
  })
  findOne(@Param('id') id: string) {
    return this.cardapioService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar cardápio.' })
  @ApiResponse({
    status: 204,
    description: 'Cardápio atualizado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cardápio não encontrado.',
  })
  update(@Param('id') id: string, @Body() updateCardapioDto: CardapioDto) {
    return this.cardapioService.update(+id, updateCardapioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar cardápio.' })
  @ApiResponse({
    status: 204,
    description: 'Cardápio deletado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Cardápio não encontrado.',
  })
  remove(@Param('id') id: string) {
    return this.cardapioService.remove(+id);
  }
}
