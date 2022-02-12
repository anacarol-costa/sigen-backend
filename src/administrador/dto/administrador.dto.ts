import { ApiProperty } from "@nestjs/swagger";
import { Administrador } from "../entities/administrador.entity";

export class AdministradorDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  telefone: string;

  static fromEntity(dto: AdministradorDto): Administrador {
    return new Administrador(
      dto.id,
      dto.nome,
      dto.email,
      dto.senha,
      dto.telefone
    )
  }
}


