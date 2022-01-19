import { ApiProperty } from "@nestjs/swagger";
import { Categoria } from "../entities/categoria.entity";

export class CategoriaDto {
  
  @ApiProperty()
  id: Number;

  @ApiProperty()
  nome: String;


  static fromEntity(dto: CategoriaDto): Categoria {
    return new Categoria(dto.id, dto.nome);
  }

}
