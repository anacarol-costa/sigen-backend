import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CompraModule } from './compra/compra.module';
import { AdministradorModule } from './administrador/administrador.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { UnidadeMedidaModule } from './unidade-medida/unidade-medida.module';
import { OpcaoModule } from './opcao/opcao.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RolesGuard } from './auth/autorizacao/roles.guard';
import { CarrosselModule } from './carrossel/carrossel.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { ContatoModule } from './contato/contato.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data_base.db',
      synchronize: true,
      logging: false,
      entities: ['dist/**/*.entity.js'],
    }),
    ProdutoModule,
    UsuarioModule,
    CategoriaModule,
    CompraModule,
    AdministradorModule,
    UnidadeMedidaModule,
    OpcaoModule,
    AuthModule,
    CarrosselModule,
    CardapioModule,
    ContatoModule,
  ],
  controllers: [AppController],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
