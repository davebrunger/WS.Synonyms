import * as React from "react";

import { IQuestionProvider } from "./questionProvider"
import { Words } from "./words"
import { ArrayUtils } from "../utilities/arrayUtils"

export class SynonymQuestionProvider implements IQuestionProvider {

    getNextQuestion() {
        var words = ArrayUtils.shuffle(Words.getWords());
        var synonyms = ArrayUtils.shuffle(words[0]);
        var word = synonyms[0];
        var answers = [synonyms[1]];
        for (var i = 1; i < 5; i++) {
            answers.push(ArrayUtils.shuffle(words[i])[0]);
        }
        answers = ArrayUtils.shuffle(answers);

        return {
            question: <p>Click or tap the word that is a synonym of {word}</p>,
            answers: answers,
            correctAnswerIndex: answers.indexOf(synonyms[1]),
        };
    }
}