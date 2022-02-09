import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>, 
  ) {

  }

  create(usuarioDto: UsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOne(id);
  }

  update(id: number, usuarioDto: UsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
