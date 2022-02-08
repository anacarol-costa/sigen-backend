import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "../entities/usuario.entity";
import { EnderecoCompraDto } from "./endereco-compra.dto";


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
  endereco: EnderecoCompraDto

  @ApiProperty()
  telefone: String;


  static fromEntity(dto: UsuarioDto, endereco: EnderecoCompraDto): Usuario {
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
