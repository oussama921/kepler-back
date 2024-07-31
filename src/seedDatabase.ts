// src/seedDatabase.ts
import { Question, Questionnaire } from "./app/data";
import { Choice } from "./app/data/entities/Choice.entity";
import { QuestionType } from "./app/models/QuestionType";
import { AppDataSource } from "./data-source";
import fs from "fs";
import path from "path";

interface QuestionData {
  text: string;
  Type: keyof typeof QuestionType;
  choices?: string[];
}

interface QuestionnaireData {
  questions: QuestionData[];
}

export async function seedDatabase() {
    const questionnaireRepository = AppDataSource.getRepository(Questionnaire);
    const questionRepository = AppDataSource.getRepository(Question);
    const choiceRepository = AppDataSource.getRepository(Choice);

    const dataFilePath = path.join(__dirname, "data.json");
    const data: QuestionnaireData[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    for (const questionnaireData of data) {
        const newQuestionnaire = new Questionnaire();
        newQuestionnaire.questions = [];
        await questionnaireRepository.save(newQuestionnaire);

        for (const q of questionnaireData.questions) {
            const question = new Question();
            question.text = q.text;
            question.Type = QuestionType[q.Type];
            question.questionnaire = newQuestionnaire;
            if(q.choices){
              question.choices=[]
              console.log("yes");
              
              for(const choice of q.choices){
                  console.log("choice",choice);
                  const newChoice = new Choice();
                  newChoice.text=choice;
                  
                  await choiceRepository.save(newChoice);
                  question.choices.push(newChoice);
              }
            }
            await questionRepository.save(question);
        }
    }

    console.log("Database seeded with initial data from JSON file.");
}
