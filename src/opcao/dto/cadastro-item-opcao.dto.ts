import { ApiProperty } from '@nestjs/swagger';
import { OpcaoDto } from './opcao.dto';

export class CadastroItemOpcaoDto {
  @ApiProperty()
  itemDescricao: string;

  @ApiProperty()
  opcoes: OpcaoDto[];
}
