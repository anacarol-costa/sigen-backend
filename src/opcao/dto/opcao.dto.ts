import { ApiProperty } from '@nestjs/swagger';
import { Opcao } from '../entities/opcao.entity';

export class OpcaoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  nome: string;
  @ApiProperty()
  valor: number;

  static fromEntity(dto: OpcaoDto): Opcao {
    return new Opcao(dto.id, dto.nome, dto.valor);
  }
}
