import { ApiProperty } from "@nestjs/swagger";

class OpcaoDto {
  @ApiProperty()
  id: Number;
  
  @ApiProperty()
  nome: String;
  
  @ApiProperty()
  valor: Number;
}

export class ItensProdutoDto {

  @ApiProperty()
  id: Number;

  @ApiProperty()
  descricao: String;

  @ApiProperty({ type: [OpcaoDto] })
  opcoes: Array<OpcaoDto>;
}
