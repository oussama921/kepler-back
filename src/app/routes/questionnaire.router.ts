import express from "express";
import { IRepository, QuestionnaireRepository } from "../repositories";
import { NextFunction, Request, Response, Router } from "express";
import { QuestionnaireController } from "../controller";
import { Questionnaire } from "../data";

const router: Router = express.Router();
const questionnaireRepository: IRepository<Questionnaire> = new QuestionnaireRepository();
const controller: QuestionnaireController = new QuestionnaireController(questionnaireRepository);

router.get(
	"/",
	async (request: Request, response: Response, next: NextFunction) => {
		await controller.getAll(request, response, next);
	}
);

export const questionnaireRouter: Router = router;
