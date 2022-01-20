import { Module } from '@nestjs/common';
import { OpcaoService } from './opcao.service';
import { OpcaoController } from './opcao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opcao } from './entities/opcao.entity';
import { Item } from './entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Opcao, Item])],
  controllers: [OpcaoController],
  providers: [OpcaoService]
})
export class OpcaoModule {}