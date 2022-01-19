import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UnidadeMedidaDto } from './dto/unidade-medida.dto';
import { UnidadeMedida } from './entities/unidade-medida.entity';

@Injectable()
export class UnidadeMedidaService {

  constructor(
    @InjectRepository(UnidadeMedida)
    private readonly unidadeMedidaRepository: Repository<UnidadeMedida>) {

    }

  async create(createUnidadeMedidaDto: UnidadeMedidaDto): Promise<UnidadeMedida> {
    const unidadeMedida = UnidadeMedidaDto.fromEntity(createUnidadeMedidaDto);
    return await this.unidadeMedidaRepository.save(unidadeMedida);
  }

  async findAll(): Promise<UnidadeMedida[]> {
    return await this.unidadeMedidaRepository.find();
  }

  async findOne(id: number): Promise<UnidadeMedida> {
    return await this.unidadeMedidaRepository.findOne(id);
  }

  async update(id: number, updateUnidadeMedidaDto: UnidadeMedidaDto): Promise<UpdateResult> {
    const unidadeMedida = UnidadeMedidaDto.fromEntity(updateUnidadeMedidaDto);
    return await this.unidadeMedidaRepository.update(id, unidadeMedida);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.unidadeMedidaRepository.delete(id);
  }
}
