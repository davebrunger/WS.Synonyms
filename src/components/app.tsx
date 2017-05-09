import * as React from "react";

import { Welcome } from "./welcome/welcome";
import { Question } from "./test/question";
import { Result } from "./result/result";

export class AppState {
    questionNumber?: number;
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
    }

    beginTest() {
        this.setState({ questionNumber: 1 });
    }

    nextQuestion() {
        this.setState({ questionNumber: this.state.questionNumber + 1 });
    }

    render() {
        if (this.state.questionNumber < 1) {
            return (
                <Welcome beginTest={this.beginTest} />
            );
        } else if (this.state.questionNumber > this.numberOfQuestions) {
            return (
                <Result restartTest={this.beginTest} totalQuestions={this.numberOfQuestions}/>
            );
        } else {
            return (
                <Question questionNumber={this.state.questionNumber} nextQuestion={this.nextQuestion}/>
            );
        }
    }
}
