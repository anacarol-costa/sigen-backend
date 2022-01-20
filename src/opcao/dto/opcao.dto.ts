import { ApiProperty } from "@nestjs/swagger";
import { Opcao } from "../entities/opcao.entity";

export class OpcaoDto {
    
    @ApiProperty()
    id: Number;
    
    @ApiProperty()
    
    nome: String;
    @ApiProperty()
    valor: Number;


    static fromEntity(dto: OpcaoDto): Opcao {
        return new Opcao(dto.id, dto.nome, dto.valor);
    }

}
