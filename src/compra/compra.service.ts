import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoService } from 'src/produto/produto.service';
import { EnderecoService } from 'src/usuario/endereco.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CompraDto } from './dto/compra.dto';
import { Compra } from './entities/compra.entity';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private readonly compraRepository: Repository<Compra>,
    private readonly usuarioService: UsuarioService,
    private readonly produtoService: ProdutoService,
    private readonly enderecoService: EnderecoService,
  ) {}

  async create(compraDto: CompraDto): Promise<Compra> {
    const { enderecoCompra, usuario, produtos } =
      await this.obterEntitysAuxiliares(compraDto);

    const compra = CompraDto.fromEntity(
      compraDto,
      enderecoCompra,
      usuario,
      produtos,
    );

    return this.compraRepository.save(compra);
  }

  async findAll(): Promise<Compra[]> {
    return this.compraRepository
      .createQueryBuilder('compra')
      .innerJoinAndSelect('compra.produtos', 'produtos')
      .innerJoinAndSelect('produtos.itensProduto', 'itensProduto')
      .innerJoinAndSelect('itensProduto.itemOpcao', 'itemOpcao')
      .innerJoinAndSelect('itemOpcao.opcao', 'opcao')
      .innerJoinAndSelect('itemOpcao.item', 'item')
      .getMany();
  }

  async findOne(id: number): Promise<Compra> {
    return this.compraRepository
      .createQueryBuilder('compra')
      .innerJoinAndSelect('compra.produtos', 'produtos')
      .innerJoinAndSelect('produtos.itensProduto', 'itensProduto')
      .innerJoinAndSelect('itensProduto.itemOpcao', 'itemOpcao')
      .innerJoinAndSelect('itemOpcao.opcao', 'opcao')
      .innerJoinAndSelect('itemOpcao.item', 'item')
      .where('compra.id = :id', { id })
      .getOne();
  }

  async update(id: number, compraDto: CompraDto): Promise<Compra> {
    const compra = await this.compraRepository.findOne(id);
    const { enderecoCompra, usuario, produtos } =
      await this.obterEntitysAuxiliares(compraDto);

    compra.produtos = produtos;
    compra.usuario = usuario;
    compra.enderecoCompra = enderecoCompra;
    compra.valorCompra = compraDto.valorCompra;

    return this.compraRepository.save(compra);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.compraRepository.delete(id);
  }

  private async obterEntitysAuxiliares(dto: CompraDto) {
    const enderecoCompra = await this.enderecoService.findOne(
      dto.enderecoCompraId,
    );
    const usuario = await this.usuarioService.findOne(dto.usuarioId);
    const produtos = await this.produtoService.findByIds(dto.produtosId);

    return { enderecoCompra, usuario, produtos };
  }

  async obterComprasPeriodo(
    dia: string,
    mes: number,
    ano: string,
  ): Promise<Compra[]> {
    const result = this.compraRepository
      .createQueryBuilder('compra')
      .where('compra.dia = :dia', { dia })
      .andWhere('compra.mes = :mes', { mes })
      .andWhere('compra.ano = :ano', { ano })
      .getMany();

    return result;
  }
}
