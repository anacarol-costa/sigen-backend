import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contato {
    @PrimaryGeneratedColumn({ name: 'id_contato' })
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    whatsapp: string;

    @Column()
    horario: string;

    @Column()
    assunto: string;

    @Column()
    multiline: string;

    constructor(
        id: number,
        nome: string,
        email: string,
        whatsapp: string,
        horario: string,
        assunto: string,
        multiline: string,
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.whatsapp = whatsapp;
        this.horario = horario;
        this.assunto = assunto;
        this.multiline = multiline;
    }
}
