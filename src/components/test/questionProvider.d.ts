import {IQuestion} from "./question";

export interface IQuestionProvider {
    getNextQuestion() : IQuestion;
}