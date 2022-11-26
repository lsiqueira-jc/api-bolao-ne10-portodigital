import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Jogos {
    @PrimaryGeneratedColumn()
    id_jogos: number

    @Column()
    situacao_jogo: string

    @Column()
    time_mandante_id: string

    @Column()
    time_visitante_id: string

    @Column()
    placar_visitante: number

    @Column()
    placar_mandante: number

    @Column()
    horario_jogo: Date

    @Column()
    id_rodada: string


}