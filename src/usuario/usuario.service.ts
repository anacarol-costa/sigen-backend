import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
  create(createUsuarioDto: UsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
