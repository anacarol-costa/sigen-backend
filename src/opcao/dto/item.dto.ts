import { ApiProperty } from '@nestjs/swagger';
import { Item } from '../entities/item.entity';

export class ItemDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  descricao: string;

  static fromEntity(dto: ItemDto): Item {
    return new Item(dto.id, dto.descricao);
  }
}
