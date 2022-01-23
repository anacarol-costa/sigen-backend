import { ApiProperty } from "@nestjs/swagger";

export class ItensProdutoDto {

  @ApiProperty()
  id: Number;

  @ApiProperty()
  descricao: String;

  @ApiProperty()
  opcoes: Array<OpcaoDto>;
}

class OpcaoDto {
  @ApiProperty()
  id: Number;
  
  @ApiProperty()
  nome: String;
  
  @ApiProperty()
  valor: Number;
}