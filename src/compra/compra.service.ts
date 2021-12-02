import { Injectable } from '@nestjs/common';
import { CompraDto } from './dto/compra.dto';

@Injectable()
export class CompraService {
  create(createCompraDto: CompraDto) {
    return 'This action adds a new compra';
  }

  findAll() {
    return `This action returns all compra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compra`;
  }

  update(id: number, updateCompraDto: CompraDto) {
    return `This action updates a #${id} compra`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
