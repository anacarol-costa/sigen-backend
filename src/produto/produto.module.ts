import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { UnidadeMedidaModule } from 'src/unidade-medida/unidade-medida.module';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), UnidadeMedidaModule, CategoriaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: []
})
export class ProdutoModule {}
