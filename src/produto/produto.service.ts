import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { UnidadeMedidaService } from 'src/unidade-medida/unidade-medida.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProdutoDto } from './dto/produto.dto';
import { Produto } from './entities/produto.entity';
import { ItemProduto } from './entities/item-produto.entity';
import { ItemOpcao } from '../opcao/entities/item-opcao.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
    @InjectRepository(ItemProduto)
    private readonly itemProdutoRepository: Repository<ItemProduto>,
    @InjectRepository(ItemOpcao)
    private readonly itemOpcaoRepository: Repository<ItemOpcao>,
    private readonly categoriaService: CategoriaService,
    private readonly unidadeMedidaService: UnidadeMedidaService,
  ) {}

  async create(produtoDto: ProdutoDto): Promise<Produto> {
    const { categoria, unidadeMedida } = await this.obterEntitysAuxiliares(
      produtoDto,
    );

    const produto = ProdutoDto.fromEntity(produtoDto, categoria, unidadeMedida);

    const novoProduto = await this.produtoRepository.save(produto);

    await this.salvarItensProduto(produtoDto, novoProduto);

    return novoProduto;
  }

  private async salvarItensProduto(
    produtoDto: ProdutoDto,
    novoProduto: Produto,
  ) {
    if (produtoDto.itensOpcao !== null && produtoDto.itensOpcao.length > 0) {
      const itensOpcao = await this.itemOpcaoRepository.findByIds(
        produtoDto.itensOpcao,
      );

      const itensProduto = itensOpcao.map(
        (item) => new ItemProduto(null, novoProduto, item),
      );

      return this.itemProdutoRepository.save(itensProduto);
    }
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOne(id);
  }

  async findByIds(ids: number[]): Promise<Produto[]> {
    return this.produtoRepository.findByIds(ids);
  }

  async update(id: number, produtoDto: ProdutoDto): Promise<UpdateResult> {
    const { categoria, unidadeMedida } = await this.obterEntitysAuxiliares(
      produtoDto,
    );

    const produto = ProdutoDto.fromEntity(produtoDto, categoria, unidadeMedida);

    return this.produtoRepository.update(id, produto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.produtoRepository.delete(id);
  }

  private async obterEntitysAuxiliares(createProdutoDto: ProdutoDto) {
    const categoria = await this.categoriaService.findOne(
      createProdutoDto.categoria,
    );
    const unidadeMedida = await this.unidadeMedidaService.findOne(
      createProdutoDto.unidadeMedida,
    );

    return { categoria, unidadeMedida };
  }

  async obterProdutoAgrupadosPorCategoria() {
    const produtos = await this.produtoRepository
      .createQueryBuilder('produto')
      .innerJoinAndSelect('produto.itensProduto', 'itensProduto')
      .getMany();

    const result = {};

    produtos.forEach((produto) => {
      const categoria = produto.categoria.nome;
      const itemAtual = result[categoria];
      result[categoria] = !itemAtual ? [produto] : [...itemAtual, produto];
    });

    return result;
  }

  obterProdutosPorCategoria(categoriaId: number) {
    return this.produtoRepository
      .createQueryBuilder('produto')
      .innerJoinAndSelect('produto.itensProduto', 'itensProduto')
      .innerJoinAndSelect('itensProduto.itemOpcao', 'itemOpcao')
      .innerJoinAndSelect('itemOpcao.item', 'item')
      .innerJoinAndSelect('itemOpcao.opcao', 'opcao')
      .where('produto.categoria.id = :categoriaId', { categoriaId })
      .getMany();
  }
}
