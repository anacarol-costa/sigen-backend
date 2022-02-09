import { ApiProperty } from "@nestjs/swagger";
import { Endereco } from "../entities/endereco.entity";




export class EnderecoDto {
  @ApiProperty()
  id: Number;

  @ApiProperty()
  cep: Number;

  @ApiProperty()
  bairro: String;

  @ApiProperty()
  complemento: String;

  @ApiProperty()
  pontoReferencia: string;

  @ApiProperty()
  quadra: Number;

  static fromEntity(dto: EnderecoDto): Endereco {
    return new Endereco(
      dto.id,
      dto.cep,
      dto.bairro,
      dto.complemento,
      dto.pontoReferencia,
      dto.quadra,
    )
  }
}

