import { Cardapio } from './../entities/cardapio.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CardapioDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  static fromEntity(dto: CardapioDto): Cardapio {
    return new Cardapio(dto.id, dto.nome);
  }
}
