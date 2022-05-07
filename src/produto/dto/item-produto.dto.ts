import { ApiProperty } from '@nestjs/swagger';
import { OpcaoDto } from '../../opcao/dto/opcao.dto';

export class ItemProdutoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  descricao: string;

  @ApiProperty({ type: [OpcaoDto] })
  opcoes: Array<OpcaoDto>;
}
