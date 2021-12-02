import { ApiProperty } from "@nestjs/swagger";

// TODO Mover CategoriaDto para resource(pasta) de categoria.
export class CategoriaDto {
  
  @ApiProperty()
  id: Number;

  @ApiProperty()
  nome: String;

}
