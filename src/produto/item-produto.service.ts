import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemProduto } from './entities/item-produto.entity';

@Injectable()
export class ItemProdutoService {
  constructor(
    @InjectRepository(ItemProduto)
    private readonly itemProdutoRepository: Repository<ItemProduto>,
  ) {}

  async findAll(): Promise<ItemProduto[]> {
    return this.itemProdutoRepository.find();
  }
}
