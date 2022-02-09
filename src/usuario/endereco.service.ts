import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnderecoDto } from './dto/endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecoService {

  constructor(
    @InjectRepository(Endereco)private readonly enderecoRepository: Repository<Endereco>
    ) {
    }



  create(enderecoDto: EnderecoDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  async findOne(id: number) {
    return await this.enderecoRepository.findOne(id);
  }

  update(id: number, enderecoDto: EnderecoDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
