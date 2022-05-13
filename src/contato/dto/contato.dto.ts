import { ApiProperty } from "@nestjs/swagger";
import { Contato } from "../entities/contato.entity";

export class ContatoDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nome: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    whatsapp: string;

    @ApiProperty()
    horario: string;

    @ApiProperty()
    assunto: string;

    @ApiProperty()
    multiline: string;

    static fromEntity(dto: ContatoDto): Contato {
        return new Contato(
            dto.id,
            dto.nome,
            dto.email,
            dto.whatsapp,            
            dto.horario,
            dto.assunto,
            dto.multiline
        )
    }
}
