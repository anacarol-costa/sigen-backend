import { ApiProperty } from '@nestjs/swagger';
import { OpcaoDto } from './opcao.dto';
import { ItemProdutoDto } from '../../produto/dto/item-produto.dto';

export class CadastroItemOpcaoDto {
  @ApiProperty()
  itemDescricao: string;

  @ApiProperty({ type: [ItemProdutoDto] })
  opcoes: OpcaoDto[];
}
