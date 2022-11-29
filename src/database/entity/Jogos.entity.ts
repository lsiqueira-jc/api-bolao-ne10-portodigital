import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from "typeorm"
import {Rodada} from "./rodada.entity"
import {Selecoes} from "./selecoes.entity"

@Entity()
export class Jogos {
    @PrimaryGeneratedColumn()
    id_jogos: number

    @Column()
    situacao_jogo: string

    @Column()
    placar_visitante: number

    @Column()
    placar_mandante: number

    @Column()
    horario_jogo: Date

    @OneToOne(() => Selecoes) @JoinColumn()
    timeMandante: Selecoes

    @OneToOne(() => Selecoes) @JoinColumn()
    timeVisitante: Selecoes


    @ManyToOne(() => Rodada, (rodada) => rodada.jogos)
    rodada: Rodada
}