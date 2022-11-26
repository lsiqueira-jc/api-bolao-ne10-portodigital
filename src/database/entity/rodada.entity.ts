import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class rodada {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    status: string

}