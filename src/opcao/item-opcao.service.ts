import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemOpcao } from './entities/item-opcao.entity';
import { CadastroItemOpcaoDto } from './dto/cadastro-item-opcao.dto';
import { Item } from './entities/item.entity';
import { Opcao } from './entities/opcao.entity';

@Injectable()
export class ItemOpcaoService {
  constructor(
    @InjectRepository(ItemOpcao)
    private readonly itemOpcaoRepository: Repository<ItemOpcao>,
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
    @InjectRepository(Opcao)
    private readonly opcaoRepository: Repository<Opcao>,
  ) {}

  async create(dto: CadastroItemOpcaoDto): Promise<ItemOpcao[]> {
    const item = new Item(null, dto.itemDescricao);
    const opcoes = dto.opcoes.map(
      (opcao) => new Opcao(null, opcao.nome, opcao.valor),
    );

    const novasOpcoes = await this.opcaoRepository.save(opcoes);
    const novoItem = await this.itemRepository.save(item);

    const itensOpcao = novasOpcoes.map(
      (opcao) => new ItemOpcao(null, novoItem, opcao),
    );

    return this.itemOpcaoRepository.save(itensOpcao);
  }

  async findAll(): Promise<ItemOpcao[]> {
    const itemOpcaos = await this.itemOpcaoRepository.find();
    return itemOpcaos;
  }
}
