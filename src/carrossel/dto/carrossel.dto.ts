import { Carrossel } from './../entities/carrossel.entity';
import { ApiProperty } from "@nestjs/swagger";

export class CarrosselDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    imagem: string;

    static fromEntity(dto: CarrosselDto): Carrossel {
        return new Carrossel(
            dto.id,
            dto.imagem
        )
    }
}
