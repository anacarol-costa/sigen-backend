import { Injectable } from '@nestjs/common';
import { CategoriaDto } from './dto/categoria.dto';

@Injectable()
export class CategoriaService {
  create(createCategoriaDto: CategoriaDto) {
    return 'This action adds a new categoria';
  }

  findAll() {
    return `This action returns all categoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: CategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
