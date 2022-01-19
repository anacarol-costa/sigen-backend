import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaDto } from './dto/categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>) {

  }

  async create(createCategoriaDto: CategoriaDto): Promise<Categoria> {
    const categoria = new Categoria(createCategoriaDto.id, createCategoriaDto.nome);
    return await this.categoriaRepository.save(categoria);
  }

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    return await this.categoriaRepository.findOne(id);;
  }

  update(id: number, updateCategoriaDto: CategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
