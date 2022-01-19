import { ApiProperty } from "@nestjs/swagger";
import { UnidadeMedida } from "src/unidade-medida/entities/unidade-medida.entity";

export class UnidadeMedidaDto {
 
  @ApiProperty()
  id: Number;
  @ApiProperty()
  descricao: String;
  @ApiProperty()
  abreviacao: String;

  static fromEntity(dto: UnidadeMedidaDto): UnidadeMedida {
    return new UnidadeMedida(dto.id, dto.descricao, dto.abreviacao);
  }

}