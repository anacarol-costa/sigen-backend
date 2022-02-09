import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaService } from 'src/categoria/categoria.service';
import { UnidadeMedidaService } from 'src/unidade-medida/unidade-medida.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProdutoDto } from './dto/produto.dto';
import { Produto } from './entities/produto.entity';


@Injectable()
export class ProdutoService {


  constructor(
    @InjectRepository(Produto) private readonly produtoRepository: Repository<Produto>,
    private readonly categoriaService: CategoriaService,
    private readonly unidadeMedidaService: UnidadeMedidaService
    ) {

  }

  async create(produtoDto: ProdutoDto): Promise<Produto> {
    const { categoria, unidadeMedida } = await this.obterEntitysAuxiliares(produtoDto);

    const produto = ProdutoDto.fromEntity(produtoDto, categoria, unidadeMedida);

    return await this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]>{
    return await this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    return await this.produtoRepository.findOne(id);
  }

  async findByIds(ids: number[]): Promise<Produto[]> {
    return await this.produtoRepository.findByIds(ids);
  }

  async update(id: number, produtoDto: ProdutoDto): Promise<UpdateResult> {
    const { categoria, unidadeMedida } = await this.obterEntitysAuxiliares(produtoDto);

    const produto = ProdutoDto.fromEntity(produtoDto, categoria, unidadeMedida);

    return await this.produtoRepository.update(id, produto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.produtoRepository.delete(id);
  }

  private async obterEntitysAuxiliares(createProdutoDto: ProdutoDto) {
    const categoria = await this.categoriaService.findOne(createProdutoDto.categoriaId);
    const unidadeMedida = await this.unidadeMedidaService.findOne(createProdutoDto.unidadeMedidaId);

    return { categoria, unidadeMedida };
  }


}
