import * as React from "react";

import { Words } from "./words"
import { IScore } from "./score"

export interface AnswerProps {
    wordOptions: string[];
    correctOption: number;
    selectedOption: number;
    nextQuestion(): void;
    score: IScore;
}

export class Answer extends React.Component<AnswerProps, {}>{

    constructor(props: AnswerProps) {
        super(props);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion() {
        this.props.nextQuestion();
    }

    render() {

        var buttons = this.props.wordOptions
            .map((s, i) => {
                // assume there are always 5 options
                var divClass = "btn-question col-sm-2";
                if (i == 0) {
                    divClass = divClass + " col-sm-offset-1";
                }
                var buttonClass = "btn center-block";
                if (i === this.props.correctOption) {
                    buttonClass = buttonClass + " btn-success"
                }
                else if (i === this.props.selectedOption) {
                    buttonClass = buttonClass + " btn-danger"
                }
                else {
                    buttonClass = buttonClass + " btn-default"
                }
                return (
                    <div className={divClass} key={i}>
                        <a className={buttonClass}>{s}</a>
                    </div>
                );
            });

        var message = this.props.correctOption === this.props.selectedOption
            ? "You answered correctly, well done!"
            : "You answered incorrectly. The correct answer was " + this.props.wordOptions[this.props.correctOption] + " Better luck next time."

        var score = this.props.score
            ? <p>Score: {this.props.score.correctAnswers} out of {this.props.score.questionsAnswered}.</p>
            : null;

        return (
            <div>
                <div className="row">
                    {buttons}
                </div>
                {score}
                <p>
                    {message}
                </p>
                <a className="btn btn-primary" onClick={this.nextQuestion}>Next</a>
            </div>
        );
    }
}
