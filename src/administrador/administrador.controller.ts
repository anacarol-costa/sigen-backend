import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdministradorService } from './administrador.service';
import { AdministradorDto } from './dto/administrador.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/autorizacao/roles.decorator';
import { Role } from '../auth/autorizacao/Role';

@Roles(Role.ADMINISTRADOR) // restringe que apenas usuarios administradores execute os endpoints do controller.
@UseGuards(JwtAuthGuard) // restringe que usuário tenham um Bearer token no header.
@ApiTags('Administrador')
@Controller('administradores')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post()
  @ApiOperation({ summary: 'Criar administrador.' })
  @ApiResponse({
    status: 201,
    description: 'Administrador criado.',
    type: AdministradorDto,
  })
  create(@Body() createAdministradorDto: AdministradorDto) {
    return this.administradorService.create(createAdministradorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os administradores.' })
  @ApiResponse({
    status: 200,
    description: 'Listar administradores.',
    type: [AdministradorDto],
  })
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter administrador por id.' })
  @ApiResponse({
    status: 200,
    description: 'Administrador encontrado.',
    type: AdministradorDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Administrador não encontrado.',
  })
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar administrador.' })
  @ApiResponse({
    status: 204,
    description: 'Administrador atualizado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Administador não encontrado.',
  })
  update(
    @Param('id') id: string,
    @Body() updateAdministradorDto: AdministradorDto,
  ) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar administrador.' })
  @ApiResponse({
    status: 204,
    description: 'Administrador deletado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Administrador não encontrado.',
  })
  remove(@Param('id') id: string) {
    return this.administradorService.remove(+id);
  }
}
