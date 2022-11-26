import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Palpite {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

}