import { ApiProperty } from "@nestjs/swagger";



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
  pontoReferencia: String;
  @ApiProperty()
  quadra: Number;
}
