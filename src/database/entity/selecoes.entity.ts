import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Selecoes {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    escudo: string

    @Column()
    sigla: string

}