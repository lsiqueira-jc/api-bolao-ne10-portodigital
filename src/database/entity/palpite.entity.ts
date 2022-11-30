import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import {User} from "./user.entity"
import {Jogos} from "./Jogos.entity"

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

    @ManyToOne(() => User, (user) => user.palpite)
    user: User

    @ManyToOne(() => Jogos, (jogos) => jogos.palpite)
    jogos: Jogos
    
}