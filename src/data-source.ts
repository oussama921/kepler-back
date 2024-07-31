import "reflect-metadata";
import { DataSource } from "typeorm";
import { Question, Questionnaire } from "./app/data";
import { Choice } from "./app/data/entities/Choice.entity";

export const AppDataSource = new DataSource({
	type: "mysql",
	/*******************DEV-------------- */

	host: "127.0.0.1",
	port: 3306,
	username: "root",
	password: "",
	database: "kepler",

	synchronize: true,
	dropSchema: true, 
	logging: false,
	entities: [Question,Questionnaire,Choice],
	migrations: [],
	subscribers: [],
});
