import { ApiProperty } from "@nestjs/swagger";

export class AdministradorDto {
  @ApiProperty()
  id: Number;

  @ApiProperty()
  email: String;

  @ApiProperty()
  senha: String;

  @ApiProperty()
  telefone: Number;
}
