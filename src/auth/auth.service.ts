import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioDto } from 'src/usuario/dto/usuario.dto';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private emailsService: UsuarioService,
    private jwtService: JwtService
  ) { }

  async validarUsuario(email: string, senha: string): Promise<any> {
    const usuario = await this.emailsService.findByEmail(email);
    if (usuario && usuario.senha === senha) {
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(user: UsuarioDto) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
