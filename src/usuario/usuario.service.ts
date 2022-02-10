import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioDto } from './dto/usuario.dto';
import { EnderecoService } from './endereco.service';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>, 
    private readonly enderecoService: EnderecoService
    ) {

  }

  async create(usuarioDto: UsuarioDto): Promise<Usuario> {
    const endereco = await this.obterEntitysAuxiliares(usuarioDto);

    const usuario = UsuarioDto.fromEntity(usuarioDto, endereco);

    return await this.usuarioRepository.save(usuario);
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

  private async obterEntitysAuxiliares(dto:UsuarioDto) {
    const endereco = await this.enderecoService.findByIds(dto.enderecoIds);

    return endereco;
  } 
}
