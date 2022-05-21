import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { ProdutoModule } from 'src/produto/produto.module';
import { CompraPeriodoController } from './compras-periodo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Compra]), UsuarioModule, ProdutoModule],
  controllers: [CompraController, CompraPeriodoController],
  providers: [CompraService],
  exports: [],
})
export class CompraModule {}
