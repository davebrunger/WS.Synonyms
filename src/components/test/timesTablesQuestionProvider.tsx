import * as React from "react";

import { IQuestionProvider } from "./questionProvider"
import { ArrayUtils } from "../utilities/arrayUtils"
import { Randomizer } from "../utilities/randomizer"

export class TimesTablesQuestionProvider implements IQuestionProvider {

    constructor(private maxNumber: number) { }

    public getMaxNumber() {
        return this.maxNumber;
    }

    getNextQuestion() {
        var x = Randomizer.random(this.maxNumber) + 1;
        var y = Randomizer.random(this.maxNumber) + 1;
        var answers = [x * y];

        var incorrectAnswers = [];
        incorrectAnswers.push(answers[0] - 2);
        incorrectAnswers.push(answers[0] - 1);
        incorrectAnswers.push(answers[0] + 1);
        incorrectAnswers.push(answers[0] + 2);
        incorrectAnswers.push((x - 2) * (y - 2));
        incorrectAnswers.push((x - 1) * (y - 2));
        incorrectAnswers.push(x * (y - 2));
        incorrectAnswers.push((x + 1) * (y - 2));
        incorrectAnswers.push((x + 2) * (y - 2));
        incorrectAnswers.push((x - 2) * (y - 1));
        incorrectAnswers.push((x - 1) * (y - 1));
        incorrectAnswers.push(x * (y - 1));
        incorrectAnswers.push((x + 1) * (y - 1));
        incorrectAnswers.push((x + 2) * (y - 1));
        incorrectAnswers.push((x - 2) * y);
        incorrectAnswers.push((x - 1) * y);
        incorrectAnswers.push((x + 1) * y);
        incorrectAnswers.push((x + 2) * y);
        incorrectAnswers.push((x - 2) * (y + 1));
        incorrectAnswers.push((x - 1) * (y + 1));
        incorrectAnswers.push(x * (y + 2));
        incorrectAnswers.push((x + 1) * (y + 1));
        incorrectAnswers.push((x + 2) * (y + 1));
        incorrectAnswers.push((x - 2) * (y + 2));
        incorrectAnswers.push((x - 1) * (y + 2));
        incorrectAnswers.push(x * (y + 2));
        incorrectAnswers.push((x + 1) * (y + 2));
        incorrectAnswers.push((x + 2) * (y + 2));

        incorrectAnswers = incorrectAnswers.filter(n => (n > 0) && (n != (x * y)));
        incorrectAnswers = ArrayUtils.distinct(incorrectAnswers);
        incorrectAnswers = ArrayUtils.shuffle(incorrectAnswers);

        for (var i = 0; i < 4; i++) {
            answers.push(incorrectAnswers[i]);
        }
        answers = ArrayUtils.shuffle(answers);

        return {
            question: <p>Click or tap the number answer to {x} x {y} =</p>,
            answers: answers.map(n => n.toString()),
            correctAnswerIndex: answers.indexOf(x * y),
        };
    }
}