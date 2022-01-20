import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { OpcaoDto } from './dto/opcao.dto';
import { Opcao } from './entities/opcao.entity';

@Injectable()
export class OpcaoService {

  constructor(@InjectRepository(Opcao) private readonly opcaoRepository: Repository<Opcao>) {

  }

  async create(createOpcaoDto: OpcaoDto): Promise<Opcao> {
    const opcao = OpcaoDto.fromEntity(createOpcaoDto);
    return await this.opcaoRepository.save(opcao);
  }

  async findAll(): Promise<Opcao[]> {
    return await this.opcaoRepository.find();
  }

  async findOne(id: number) {
    return await this.opcaoRepository.findOne(id);
  }

  async update(id: number, updateOpcaoDto: OpcaoDto): Promise<UpdateResult> {
    const opcao = OpcaoDto.fromEntity(updateOpcaoDto);
    return await this.opcaoRepository.update(id, updateOpcaoDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.opcaoRepository.delete(id);
  }
}
