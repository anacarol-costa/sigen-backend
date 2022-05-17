import { ApiProperty } from '@nestjs/swagger';
import { Endereco } from '../entities/endereco.entity';

export class EnderecoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  cep: string;

  @ApiProperty()
  bairro: string;

  @ApiProperty()
  complemento: string;

  @ApiProperty()
  pontoReferencia: string;

  @ApiProperty()
  quadra: string;

  static fromEntity(dto: EnderecoDto): Endereco {
    return new Endereco(
      dto.id,
      dto.cep,
      dto.bairro,
      dto.complemento,
      dto.pontoReferencia,
      dto.quadra,
    );
  }
}
