import * as React from "react";

import { Words } from "./words"
import { IScore } from "./score"

export interface QuestionDisplayProps {
    wordOptions: string[];
    selectOption(option: number): void;
    score: IScore;
}

export class QuestionDisplay extends React.Component<QuestionDisplayProps, {}>{

    constructor(props: QuestionDisplayProps) {
        super(props);
        this.selectOption = this.selectOption.bind(this);
    }

    selectOption(event: React.MouseEvent<HTMLAnchorElement>) {
        var anchorElement = event.currentTarget;
        var index = parseInt(anchorElement.id.substr(4), 10);
        this.props.selectOption(index);
    }

    render() {

        var buttons = this.props.wordOptions
            .map((s, i) => {
                // assume there are always 5 options
                var divClass = "btn-question col-sm-2";
                if (i == 0) {
                    divClass = divClass + " col-sm-offset-1";
                }
                return (
                    <div className={divClass} key={i}>
                        <a id={"btn_" + i} className="btn btn-default center-block" onClick={this.selectOption}>{s}</a>
                    </div>
                );
            });

        var score = this.props.score
            ? <p>Score: {this.props.score.correctAnswers} out of {this.props.score.questionsAnswered}.</p>
            : null;

        return (
            <div>
                <div className="row">
                    {buttons}
                </div>
                {score}
            </div>
        );
    }
}
