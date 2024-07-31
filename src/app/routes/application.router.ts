import express, { Router } from "express";
import { mainRouter } from "./main.router";
import { questionnaireRouter } from "./questionnaire.router";

const router: Router = express.Router();
router.use("/", mainRouter);
router.use("/questionnaire", questionnaireRouter);

export const applicationRouter: Router = router;
