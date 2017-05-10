import * as React from "react";

import { Welcome } from "./welcome/welcome";
import { Test } from "./test/test";
import { Result } from "./result/result";
import { IScore } from "./test/score";
import { SynonymQuestionProvider } from "./test/synonymQuestionProvider";

export class AppState {
    questionNumber?: number;
    score?: IScore;
    numberOfQuestions?: number;
    name?: string;
}

export class App extends React.Component<{}, AppState>
{
    private questionProvider = new SynonymQuestionProvider();

    constructor(props: any) {
        super(props);

        this.state = {
            questionNumber: 0
        };

        this.beginTest = this.beginTest.bind(this);
        this.restartTest = this.restartTest.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.updateScore = this.updateScore.bind(this);
    }

    beginTest(name: string, numberOfQuestions: number) {
        this.setState({
            questionNumber: 1,
            score: null,
            numberOfQuestions: numberOfQuestions,
            name: name
        });
    }

    restartTest() {
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
        } else if (this.state.questionNumber > this.state.numberOfQuestions) {
            return (
                <Result name={this.state.name} restartTest={this.restartTest} score={this.state.score} />
            );
        } else {
            return (
                <Test
                    numberOfQuestions={this.state.numberOfQuestions}
                    questionNumber={this.state.questionNumber}
                    nextQuestion={this.nextQuestion}
                    score={this.state.score}
                    updateScore={this.updateScore}
                    questionProvider={this.questionProvider} />
            );
        }
    }
}
