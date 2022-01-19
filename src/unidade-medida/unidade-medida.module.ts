import { Module } from '@nestjs/common';
import { UnidadeMedidaService } from './unidade-medida.service';
import { UnidadeMedidaController } from './unidade-medida.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadeMedida } from './entities/unidade-medida.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UnidadeMedida])],
  controllers: [UnidadeMedidaController],
  providers: [UnidadeMedidaService],
  exports: [UnidadeMedidaService],
})
export class UnidadeMedidaModule {}
