import { ApiProperty } from '@nestjs/swagger';
import { Endereco } from '../entities/endereco.entity';
import { Usuario } from '../entities/usuario.entity';

export class UsuarioDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  enderecoIds: number; //EnderecoDto[]

  @ApiProperty()
  telefone: string;

  static fromEntity(dto: UsuarioDto, endereco: Endereco): Usuario {
    return new Usuario(
      dto.id,
      dto.nome,
      dto.email,
      dto.senha,
      endereco,
      dto.telefone,
    );
  }
}
