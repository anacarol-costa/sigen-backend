import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  controllers: [CompraController],
  providers: [CompraService],
  imports: []
})
export class CompraModule {}
