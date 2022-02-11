import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CategoriaDto } from './dto/categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>) {
    
    }

  async create(createCategoriaDto: CategoriaDto): Promise<Categoria> {
    const categoria = CategoriaDto.fromEntity(createCategoriaDto);

    return await this.categoriaRepository.save(categoria);
  }

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    return await this.categoriaRepository.findOne(id);
  }

  async update(id: number, updateCategoriaDto: CategoriaDto): Promise<UpdateResult> {
    const categoria = CategoriaDto.fromEntity(updateCategoriaDto);
    
    return await this.categoriaRepository.update(id, categoria);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.categoriaRepository.delete(id);
  }
}
