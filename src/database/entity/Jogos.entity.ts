import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm"
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

    @OneToMany(() => Selecoes, (selecoes) => selecoes.jogos)
    selecaoMandante: Selecoes[]

    @OneToMany(() => Selecoes, (selecoes) => selecoes.jogos)
    selecaoVisitante: Selecoes[]

    @ManyToOne(() => Rodada, (rodada) => rodada.jogos)
    rodada: Rodada
}