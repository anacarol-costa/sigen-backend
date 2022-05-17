import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UsuarioDto } from './dto/usuario.dto';
import { EnderecoService } from './endereco.service';
import { Usuario } from './entities/usuario.entity';
import { CriarEnderecoUsuarioDto } from './dto/criar-enderedo-usuario.dto';
import { EnderecoDto } from './dto/endereco.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly enderecoService: EnderecoService,
  ) {}

  async create(usuarioDto: UsuarioDto): Promise<Usuario> {
    const endereco = await this.obterEntitysAuxiliares(usuarioDto);

    const usuario = UsuarioDto.fromEntity(usuarioDto, endereco);

    return this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number) {
    return this.usuarioRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<Usuario> {
    return this.usuarioRepository
      .createQueryBuilder('usuario')
      .where('usuario.email = :email', { email })
      .getOne();
  }

  async update(id: number, usuarioDto: UsuarioDto): Promise<UpdateResult> {
    const endereco = await this.obterEntitysAuxiliares(usuarioDto);

    const usuario = UsuarioDto.fromEntity(usuarioDto, endereco);

    return this.usuarioRepository.update(id, usuario);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.usuarioRepository.delete(id);
  }

  async criarEnderecoUsuario(dto: CriarEnderecoUsuarioDto) {
    const usuario = await this.findOne(dto.usuario);
    const novoEndereco = await this.enderecoService.create(dto.endereco);

    usuario.enderecos = novoEndereco;
    this.usuarioRepository.save(usuario);

    return novoEndereco;
  }

  private async obterEntitysAuxiliares(dto: UsuarioDto) {
    return this.enderecoService.findOne(dto.enderecoIds);
  }
}
