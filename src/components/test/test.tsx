import * as React from "react";

import { Words } from "./words";
import { Question } from "./question";
import { Answer } from "./answer";
import { IScore } from "./score";

export interface TestProps {
    questionNumber: number;
    nextQuestion(): void;
    score: IScore;
    updateScore(correct : boolean) : void;
}

export interface TestState {
    questionNumber?: number;
    selectedOption?: number;
    word?: string;
    wordOptions?: string[];
    correctOption?: number;
}

export class Test extends React.Component<TestProps, TestState>{

    constructor(props: TestProps) {
        super(props);

        this.state = this.getRefreshedState(props.questionNumber);

        this.nextQuestion = this.nextQuestion.bind(this);
        this.selectOption = this.selectOption.bind(this);
    }

    nextQuestion() {
        this.props.nextQuestion();
    }

    random(maxValueExclusive: number) {
        return Math.floor(Math.random() * maxValueExclusive);
    }

    selectOption(option: number) {
        this.props.updateScore(option === this.state.correctOption);
        this.setState({
            selectedOption: option
        });
    }

    getRefreshedState(questionNumber: number) {

        var word: string = null;
        var wordOptions: string[] = null;
        var correctOption: number = null;

        if (questionNumber === 0 || questionNumber > 0) {
            var words = Words.getWords();
            this.shuffle(words);
            var synonyms = words[0];
            this.shuffle(synonyms);
            word = synonyms[0];
            wordOptions = [synonyms[1]];
            for (var i = 1; i < 5; i++) {
                var antonyms = words[i];
                this.shuffle(antonyms);
                wordOptions.push(antonyms[0]);
            }
            this.shuffle(wordOptions);
            correctOption = wordOptions.indexOf(synonyms[1]);
        }

        return {
            questionNumber: questionNumber,
            selectedOption: null,
            word: word,
            wordOptions: wordOptions,
            correctOption: correctOption,
        } as TestState;
    }

    shuffle(source: any[]) {
        for (var i = source.length - 1; i > 0; i--) {
            var n = this.random(i + 1);
            var temp = source[i];
            source[i] = source[n];
            source[n] = temp;
        }
    }

    componentWillReceiveProps(nextProps: TestProps) {
        if (nextProps.questionNumber !== this.state.questionNumber) {
            this.setState(this.getRefreshedState(nextProps.questionNumber));
        }
    }

    render() {

        var answered = this.state.selectedOption === 0 || this.state.selectedOption > 0;

        var questionOrResult = answered
            ? <Answer
                correctOption={this.state.correctOption}
                nextQuestion={this.nextQuestion}
                selectedOption={this.state.selectedOption}
                wordOptions={this.state.wordOptions}
                score={this.props.score} />
            : <Question wordOptions={this.state.wordOptions} selectOption={this.selectOption} score={this.props.score} />;

        return (
            <div>
                <h3>Question {this.props.questionNumber}</h3>
                <p>Click or tap the word that is a synonym of {this.state.word}</p>
                {questionOrResult}
            </div>
        );
    }
}
