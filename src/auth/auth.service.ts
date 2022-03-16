import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsuarioService) { }

  async validateUser(username: string, senha: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }
}
