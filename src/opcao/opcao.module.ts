import { Module } from '@nestjs/common';
import { OpcaoService } from './opcao.service';
import { OpcaoController } from './opcao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opcao } from './entities/opcao.entity';
import { Item } from './entities/item.entity';
import { ItemOpcaoController } from './item-opcao.controller';
import { ItemOpcaoService } from './item-opcao.service';
import { ItemOpcao } from './entities/item-opcao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Opcao, Item, ItemOpcao])],
  controllers: [OpcaoController, ItemOpcaoController],
  providers: [OpcaoService, ItemOpcaoService],
})
export class OpcaoModule {}
