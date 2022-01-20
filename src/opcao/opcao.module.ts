import { Module } from '@nestjs/common';
import { OpcaoService } from './opcao.service';
import { OpcaoController } from './opcao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opcao } from './entities/opcao.entity';
import { Item } from './entities/item.entity';
import { SubOpcao } from './entities/sub-opcao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Opcao, Item, SubOpcao])],
  controllers: [OpcaoController],
  providers: [OpcaoService]
})
export class OpcaoModule {}
