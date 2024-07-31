import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IRepository } from "./repository.interface";
import { Questionnaire } from "../data";
export class QuestionnaireRepository implements IRepository<Questionnaire> {
	public async findAll(): Promise<Questionnaire[]> {
		const repository: Repository<Questionnaire> = AppDataSource.getRepository(Questionnaire);
		
		return repository.find({
			relations: {
				questions: {
					choices: true,
				},
			},
		});

	}
	
}
