import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { UnidadeMedidaModule } from 'src/unidade-medida/unidade-medida.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { ItemProduto } from './entities/item-produto.entity';
import { ItemOpcao } from '../opcao/entities/item-opcao.entity';
import { ItemProdutoController } from './item-produto.controller';
import { ItemProdutoService } from './item-produto.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto, ItemProduto, ItemOpcao]),
    UnidadeMedidaModule,
    CategoriaModule,
  ],
  controllers: [ProdutoController, ItemProdutoController],
  providers: [ProdutoService, ItemProdutoService],
  exports: [ProdutoService],
})
export class ProdutoModule {}
