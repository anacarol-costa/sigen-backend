import { ApiProperty } from "@nestjs/swagger";
import { Administrador } from "../entities/administrador.entity";

export class AdministradorDto {
  @ApiProperty()
  id: Number;

  @ApiProperty()
  email: String;

  @ApiProperty()
  senha: String;

  @ApiProperty()
  telefone: String;

  static fromEntity(dto: AdministradorDto): Administrador {
    return new Administrador(
      dto.id,
      dto.email,
      dto.senha,
      dto.telefone
    )
  }
}


