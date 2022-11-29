import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Rodada {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    status: string

}