import { ApiProperty } from "@nestjs/swagger";
import { EnderecoCompraDto } from "./endereco-compra.dto";



export class UsuarioDto {
  @ApiProperty()
  id: Number;

  @ApiProperty()
  email: String; 

  @ApiProperty()
  senha: String; 

  @ApiProperty()
  endereco: EnderecoCompraDto

  @ApiProperty()
  telefone: String;
}
