import { ApiProperty } from '@nestjs/swagger';
import { OpcaoDto } from './opcao.dto';
import { ItemOpcao } from '../entities/item-opcao.entity';
import { ItemDto } from './item.dto';

export class ItemOpcaoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  opcao: OpcaoDto;
  @ApiProperty()
  item: ItemDto;

  static fromEntity(dto: ItemOpcaoDto): ItemOpcao {
    return new ItemOpcao(
      dto.id,
      ItemDto.fromEntity(dto.item),
      OpcaoDto.fromEntity(dto.opcao),
    );
  }
}
