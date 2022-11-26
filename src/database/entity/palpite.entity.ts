import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Palpite {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    palpite_mandante: number

    @Column()
    palpite_visitante: number

    @Column()
    pontos: number

}