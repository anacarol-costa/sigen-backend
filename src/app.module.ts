import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CompraModule } from './compra/compra.module';
import { AdministradorModule } from './administrador/administrador.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ProdutoModule, CategoriaModule, CompraModule, AdministradorModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
