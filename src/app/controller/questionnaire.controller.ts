import { Request, Response, NextFunction } from "express";
import { QuestionnaireRepository } from "../repositories";

export class QuestionnaireController {
	private readonly _repository: QuestionnaireRepository;

	constructor(repository: QuestionnaireRepository) {
		this._repository = repository;
	}

	public async getAll(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<any> {
		return this._repository
			.findAll()
			.then((user) => response.status(200).send(user))
			.catch((error) => response.status(500).send({ error: error }));
	}
}
