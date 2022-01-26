import { ApiProperty } from "@nestjs/swagger";
import { EnderecoCompra } from "../entities/endereco-compra.entity";




export class EnderecoCompraDto {
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

  static fromEntity(dto: EnderecoCompraDto): EnderecoCompra {
    return new EnderecoCompra(
      dto.id,
      dto.cep,
      dto.bairro,
      dto.complemento,
      dto.pontoReferencia,
      dto.quadra,
    )
  }
}

