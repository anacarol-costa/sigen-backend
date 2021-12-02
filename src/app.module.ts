import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';
<<<<<<< HEAD


@Module({
  imports: [ProdutoModule],
=======
import { CategoriaModule } from './categoria/categoria.module';
import { CompraModule } from './compra/compra.module';
import { AdministradorModule } from './administrador/administrador.module';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [ProdutoModule, CategoriaModule, CompraModule, AdministradorModule, UsuarioModule],
>>>>>>> c848d5085cdd9e051e08584caf1b7a2a4efdff00
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
