import { ApiProperty } from "@nestjs/swagger";

export class CategoriaDto {
  
  @ApiProperty()
  id: Number;

  @ApiProperty()
  nome: String;

}
