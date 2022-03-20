import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LoginDto } from './dto/login.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { AdministradorService } from '../administrador/administrador.service';
import { Administrador } from '../administrador/entities/administrador.entity';
import { Role } from './autorizacao/Role';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private administradorService: AdministradorService,
    private jwtService: JwtService,
  ) {}

  async login({ email, senha }: LoginDto) {
    const usuario =
      (await this.obterUsuarioAdministradorPor(email, senha)) ||
      (await this.obterUsuarioPor(email, senha));

    const payload = {
      email: usuario.email,
      sub: usuario.id,
      permissao: this.getPermissao(usuario),
    };

    return { access_token: this.jwtService.sign(payload) };
  }

  async obterUsuarioPor(email: string, senha: string): Promise<Usuario> {
    const usuario = await this.usuarioService.findByEmail(email);
    if (usuario && usuario.senha === senha) {
      return usuario;
    }
    throw Error('Usuário ou senha estão incorretos.');
  }

  async obterUsuarioAdministradorPor(
    email: string,
    senha: string,
  ): Promise<Administrador> {
    const administrador = await this.administradorService.findByEmail(email);
    if (administrador && administrador.senha === senha) {
      return administrador;
    }
    return null;
  }

  private getPermissao(usuario: any) {
    return usuario instanceof Administrador ? Role.ADMINISTRADOR : Role.COMUM;
  }
}
