import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CompraModule } from './compra/compra.module';
import { AdministradorModule } from './administrador/administrador.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { UnidadeMedidaModule } from './unidade-medida/unidade-medida.module';
import { OpcaoModule } from './opcao/opcao.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.db',
    synchronize: true,
    logging: false,
    entities: ["dist/**/*.entity.js"],
  }),ProdutoModule, UsuarioModule, CategoriaModule, CompraModule, AdministradorModule, UnidadeMedidaModule, OpcaoModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
