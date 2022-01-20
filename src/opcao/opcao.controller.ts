import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpcaoDto } from './dto/opcao.dto';
import { OpcaoService } from './opcao.service';

@Controller('opcao')
export class OpcaoController {
  constructor(private readonly opcaoService: OpcaoService) {}

  @Post()
  create(@Body() createOpcaoDto: OpcaoDto) {
    return this.opcaoService.create(createOpcaoDto);
  }

  @Get()
  findAll() {
    return this.opcaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opcaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpcaoDto: OpcaoDto) {
    return this.opcaoService.update(+id, updateOpcaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opcaoService.remove(+id);
  }
}
