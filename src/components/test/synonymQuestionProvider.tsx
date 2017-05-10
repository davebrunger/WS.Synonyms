import * as React from "react";

import { IQuestionProvider } from "./questionProvider"
import { Words } from "./words"

export class SynonymQuestionProvider implements IQuestionProvider {

    shuffle(source: any[]) {
        for (var i = source.length - 1; i > 0; i--) {
            var n = this.random(i + 1);
            var temp = source[i];
            source[i] = source[n];
            source[n] = temp;
        }
    }

    random(maxValueExclusive: number) {
        return Math.floor(Math.random() * maxValueExclusive);
    }

    getNextQuestion() {
        var words = Words.getWords();
        this.shuffle(words);
        var synonyms = words[0];
        this.shuffle(synonyms);
        var word = synonyms[0];
        var answers = [synonyms[1]];
        for (var i = 1; i < 5; i++) {
            var antonyms = words[i];
            this.shuffle(antonyms);
            answers.push(antonyms[0]);
        }
        this.shuffle(answers);

        return {
            question : <p>Click or tap the word that is a synonym of {word}</p>,
            answers : answers,
            correctAnswerIndex : answers.indexOf(synonyms[1]),
        };
    }
}