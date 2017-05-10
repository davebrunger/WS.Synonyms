import * as React from "react";

import { Welcome } from "./welcome/welcome";
import { Test } from "./test/test";
import { Result } from "./result/result";
import { IScore } from "./test/score"

export class AppState {
    questionNumber?: number;
    score?: IScore;
}

export class App extends React.Component<{}, AppState>
{
    private numberOfQuestions = 5;

    constructor(props: any) {
        super(props);

        this.state = {
            questionNumber: 0
        };

        this.beginTest = this.beginTest.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.updateScore = this.updateScore.bind(this);
    }

    beginTest() {
        this.setState({
            questionNumber: 1,
            score: null
        });
    }

    updateScore(correct: boolean) {
        var score = this.state.score || {
            correctAnswers: 0,
            questionsAnswered: 0
        }
        score.correctAnswers = score.correctAnswers + (correct ? 1 : 0);
        score.questionsAnswered = score.questionsAnswered + 1;
        this.setState({
            score: score
        });
    }

    nextQuestion() {
        this.setState({
            questionNumber: this.state.questionNumber + 1,
        });
    }

    render() {
        if (this.state.questionNumber < 1) {
            return (
                <Welcome beginTest={this.beginTest} />
            );
        } else if (this.state.questionNumber > this.numberOfQuestions) {
            return (
                <Result restartTest={this.beginTest} score={this.state.score} />
            );
        } else {
            return (
                <Test questionNumber={this.state.questionNumber} nextQuestion={this.nextQuestion} score={this.state.score} updateScore={this.updateScore} />
            );
        }
    }
}
