import * as React from "react";

export interface QuestionProps {
    questionNumber: number;
    nextQuestion() : void;
}

export class Question extends React.Component<QuestionProps, {}>{
    
    constructor(props : QuestionProps) {
        super (props);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion() {
        this.props.nextQuestion();
    }
    
    render() {
        return (
            <div>
                <h3>Question {this.props.questionNumber}</h3>
                <a className="btn btn-primary" onClick={this.nextQuestion}>Next</a>
            </div>
        );
    }
}
