import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ItemOpcaoService } from './item-opcao.service';
import { ItemOpcaoDto } from './dto/item-opcao.dto';
import { CadastroItemOpcaoDto } from './dto/cadastro-item-opcao.dto';

@ApiTags('Item Opção')
@Controller('itens-opcao')
export class ItemOpcaoController {
  constructor(private readonly service: ItemOpcaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar item opção.' })
  @ApiResponse({
    status: 201,
    description: 'Item Opção criado.',
    type: ItemOpcaoDto,
  })
  create(@Body() cadastroItemOpcaoDto: CadastroItemOpcaoDto) {
    return this.service.create(cadastroItemOpcaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens opção.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de opções.',
    type: [ItemOpcaoDto],
  })
  findAll() {
    return this.service.findAll();
  }
}
