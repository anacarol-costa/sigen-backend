import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsuarioService) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(usuario);
    if (user && user.senha === pass) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }
}
