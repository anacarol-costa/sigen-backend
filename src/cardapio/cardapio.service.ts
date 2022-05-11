import { Cardapio } from './entities/cardapio.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardapioDto } from './dto/cardapio.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CardapioService {
  constructor(
    @InjectRepository(Cardapio)
    private readonly cardapioRepository: Repository<Cardapio>,
  ) {}

  async create(createCardapioDto: CardapioDto): Promise<CardapioDto> {
    const cardapio = CardapioDto.fromEntity(createCardapioDto);
    return await this.cardapioRepository.save(cardapio);
  }

  async findAll(): Promise<Cardapio[]> {
    return await this.cardapioRepository.find();
  }

  async findOne(id: number): Promise<Cardapio> {
    return await this.cardapioRepository.findOne(id);
  }

  async update(
    id: number,
    updateCardapioDto: CardapioDto,
  ): Promise<UpdateResult> {
    const cardapio = CardapioDto.fromEntity(updateCardapioDto);
    return await this.cardapioRepository.update(id, cardapio);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.cardapioRepository.delete(id);
  }
}
