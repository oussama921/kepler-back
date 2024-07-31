import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Question } from "./Question.entity"

@Entity()
export class Choice {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @ManyToOne(() => Question, (question) => question.choices)
    question: Question

}
