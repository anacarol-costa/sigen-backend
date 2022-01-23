import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AdministradorService } from './administrador.service';
import { AdministradorDto } from './dto/administrador.dto';


@ApiTags('Administrador')
@Controller('administradores')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post()
  create(@Body() createAdministradorDto: AdministradorDto) {
    return this.administradorService.create(createAdministradorDto);
  }

  @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministradorDto: AdministradorDto) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradorService.remove(+id);
  }
}
