import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { ProdutoModule } from 'src/produto/produto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Compra]), UsuarioModule, ProdutoModule],
  controllers: [CompraController],
  providers: [CompraService],
  exports: []
})
export class CompraModule {}
