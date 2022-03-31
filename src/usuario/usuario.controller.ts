import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/autorizacao/Role';
import { Roles } from 'src/auth/autorizacao/roles.decorator';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './usuario.service';


@ApiTags('Usuário')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  @ApiOperation({ summary: 'Criar usuário.' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado.',
    type: UsuarioDto,
  })
  create(@Body() usuarioDto: UsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(usuarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários.' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários.',
    type: [UsuarioDto],
  })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter usuário por id.' })
  @ApiResponse({
    status: 200,
    description: 'usuário encontrado.',
    type: UsuarioDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alterar usuário.' })
  @ApiResponse({
    status: 204,
    description: 'Usuário atualizado.'
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.'
  })
  update(@Param('id') id: string, @Body() usuarioDto: UsuarioDto) {
    return this.usuarioService.update(+id, usuarioDto);
  }

  @Delete(':id')
  @Roles(Role.ADMINISTRADOR)
  @ApiOperation({ summary: 'Deletar usuário.' })
  @ApiResponse({
    status: 204,
    description: 'Usuário deletado.'
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.'
  })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
