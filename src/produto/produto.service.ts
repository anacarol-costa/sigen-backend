import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProdutoDto } from './dto/produto.dto';
import { Produto } from './entities/produto.entity';


@Injectable()
export class ProdutoService {


  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>) {

  }

  async create(createProdutoDto: ProdutoDto): Promise<Produto> {
    const produto = ProdutoDto.fromEntity(createProdutoDto);
    return await this.produtoRepository.save(produto);
  }

  async findAll(): Promise<Produto[]>{
    return await this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    return await this.produtoRepository.findOne(id);
  }

  async update(id: number, updateProdutoDto: ProdutoDto): Promise<UpdateResult> {
    const produto = ProdutoDto.fromEntity(updateProdutoDto);
    return await this.produtoRepository.update(id, produto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.produtoRepository.delete(id);
  }
}
