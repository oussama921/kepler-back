import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./Question.entity";
@Entity()
export class Questionnaire {
	@PrimaryGeneratedColumn()
	id: number;
	
	@OneToMany(() => Question, (question) => question.questionnaire)
	questions:Question[];
}
