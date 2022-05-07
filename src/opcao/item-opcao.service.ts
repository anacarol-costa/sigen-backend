import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemOpcao } from './entities/item-opcao.entity';
import { ItemOpcaoDto } from './dto/item-opcao.dto';

@Injectable()
export class ItemOpcaoService {
  constructor(
    @InjectRepository(ItemOpcao)
    private readonly opcaoRepository: Repository<ItemOpcao>,
  ) {}

  async create(createOpcaoDto: ItemOpcaoDto): Promise<ItemOpcao> {
    const opcao = ItemOpcaoDto.fromEntity(createOpcaoDto);
    return this.opcaoRepository.save(opcao);
  }

  async findAll(): Promise<ItemOpcao[]> {
    return this.opcaoRepository.find();
  }
}
