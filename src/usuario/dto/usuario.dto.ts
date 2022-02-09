import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "../entities/usuario.entity";
import { EnderecoDto } from "./endereco.dto";


export class UsuarioDto {
  
  @ApiProperty()
  id: Number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: String; 

  @ApiProperty()
  senha: String; 

  @ApiProperty()
  endereco: EnderecoDto[]

  @ApiProperty()
  telefone: String;


  static fromEntity(dto: UsuarioDto, endereco: EnderecoDto[]): Usuario {
    return new Usuario(
      dto.id,
      dto.nome,
      dto.email,
      dto.senha,
      endereco,
      dto.telefone
    )
  }
}
