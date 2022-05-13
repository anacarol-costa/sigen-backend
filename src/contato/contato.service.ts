import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ContatoDto } from './dto/contato.dto';
import { Contato } from './entities/contato.entity';


@Injectable()
export class ContatoService {
  constructor(
    @InjectRepository(Contato)
    private readonly contatoRepository: Repository<Contato>,
  ) { }

 async create(createContatoDto: ContatoDto): Promise<Contato> {
    const contato = ContatoDto.fromEntity(createContatoDto);
    return await this.contatoRepository.save(contato);
  }

  async findAll(): Promise<Contato[]> {
    return await this.contatoRepository.find();
  }

  async findOne(id: number): Promise<Contato> {
    return await this.contatoRepository.findOne(id);
  }

 async update(id: number, updateContatoDto: ContatoDto): Promise<UpdateResult> {
   const contato = ContatoDto.fromEntity(updateContatoDto);
    return await this.contatoRepository.update(id, contato);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.contatoRepository.delete(id);
  }
}
