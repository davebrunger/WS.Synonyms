import * as React from "react";

import { IScore } from "../test/score"

export interface ResultProps {
    restartTest(): void;
    score: IScore;
}

export class Result extends React.Component<ResultProps, {}>{

    constructor(props: ResultProps) {
        super(props);
        this.restartTest = this.restartTest.bind(this);
    }

    restartTest() {
        this.props.restartTest();
    }

    render() {
        return (
            <div>
                <h3>Results</h3>
                <p>You answered {this.props.score.correctAnswers} of {this.props.score.questionsAnswered} questions correctly. Well done!</p>
                <a className="btn btn-primary" onClick={this.restartTest}>Restart Test</a>
            </div>
        );
    }
}
