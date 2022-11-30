import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import {Jogos} from "./Jogos.entity"

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

    @ManyToOne(() => Jogos, (jogos) => jogos.selecoes)
    timeMandante: Jogos

    @ManyToOne(() => Jogos, (jogos) => jogos.selecoes)
    timeVisitante: Jogos

}