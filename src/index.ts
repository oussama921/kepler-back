import { AppDataSource } from "./data-source";
import { Application } from "./app";
import { seedDatabase } from "./seedDatabase";
AppDataSource.initialize()
	.then(async () => {
		await seedDatabase();
		const application: Application = new Application();
		application.startServer();
	})
	.catch((error) => console.log(error));
