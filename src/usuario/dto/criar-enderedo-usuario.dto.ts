import { ApiProperty } from '@nestjs/swagger';
import { EnderecoDto } from './endereco.dto';

export class CriarEnderecoUsuarioDto {
  @ApiProperty()
  usuario: number;

  @ApiProperty({ type: EnderecoDto })
  endereco: EnderecoDto;
}
