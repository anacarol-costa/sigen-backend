import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Role } from './../auth/autorizacao/Role';
import { Roles } from './../auth/autorizacao/roles.decorator';
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
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './usuario.service';
import { CriarEnderecoUsuarioDto } from './dto/criar-enderedo-usuario.dto';
import { Endereco } from './entities/endereco.entity';

@ApiTags('Usuário')
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

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

  @Post('/endereco')
  @ApiOperation({ summary: 'Criar endereço para usuário.' })
  @ApiResponse({
    status: 201,
    description: 'Endereço criado.',
    type: UsuarioDto,
  })
  criarEnderecoParaUsuario(
    @Body() usuarioDto: CriarEnderecoUsuarioDto,
  ): Promise<Endereco> {
    return this.usuarioService.criarEnderecoUsuario(usuarioDto);
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
    description: 'Usuário atualizado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
  })
  update(@Param('id') id: string, @Body() usuarioDto: UsuarioDto) {
    return this.usuarioService.update(+id, usuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar usuário.' })
  @ApiResponse({
    status: 204,
    description: 'Usuário deletado.',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado.',
  })
  @Roles(Role.ADMINISTRADOR)
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
