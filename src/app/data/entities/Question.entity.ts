import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { QuestionType } from "../../models/QuestionType"
import { Questionnaire } from "./Questionnaire.entity"
import { Choice } from "./Choice.entity"

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    Type: QuestionType

    @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
    questionnaire: Questionnaire

    
	@OneToMany(() => Choice, (choice) => choice.question)
	choices:Choice[];

}
