import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOne(id);
  }


  // async findOne(username: string): Promise<Usuario | undefined> {
  //   return this.users.find(usuario => usuario.username === username)
  // }

  async update(id: number, usuarioDto: UsuarioDto): Promise<UpdateResult> {
    const endereco = await this.obterEntitysAuxiliares(usuarioDto);

    const usuario = UsuarioDto.fromEntity(usuarioDto, endereco);

    return await this.usuarioRepository.update(id, usuario);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.usuarioRepository.delete(id);
  }

  private async obterEntitysAuxiliares(dto: UsuarioDto) {
    const endereco = await this.enderecoService.findOne(dto.enderecoIds);

    return endereco;
  }
}
