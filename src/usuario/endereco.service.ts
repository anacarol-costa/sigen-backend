import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { EnderecoDto } from './dto/endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @InjectRepository(Endereco)
    private readonly enderecoRepository: Repository<Endereco>,
  ) {}

  async create(enderecoDto: EnderecoDto): Promise<Endereco> {
    const endereco = EnderecoDto.fromEntity(enderecoDto);

    return this.enderecoRepository.save(endereco);
  }

  async findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  async findByIds(ids: number[]) {
    return this.enderecoRepository.findByIds(ids);
  }

  async findOne(id: number) {
    return this.enderecoRepository.findOne(id);
  }

  async update(id: number, enderecoDto: EnderecoDto): Promise<UpdateResult> {
    const endereco = EnderecoDto.fromEntity(enderecoDto);

    return this.enderecoRepository.update(id, endereco);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.enderecoRepository.delete(id);
  }
}
