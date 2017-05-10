import * as React from "react";

import { QuestionDisplay } from "./questionDisplay";
import { AnswerDisplay } from "./answerDisplay";
import { IScore } from "./score";
import { IQuestion } from "./question"
import { IQuestionProvider } from "./questionProvider"

export interface TestProps {
    numberOfQuestions: number;
    questionNumber: number;
    nextQuestion(): void;
    score: IScore;
    updateScore(correct: boolean): void;
    questionProvider: IQuestionProvider;
}

export interface TestState {
    questionNumber?: number;
    selectedOption?: number;
    question?: IQuestion;
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

    selectOption(option: number) {
        this.props.updateScore(option === this.state.question.correctAnswerIndex);
        this.setState({
            selectedOption: option
        });
    }

    getRefreshedState(questionNumber: number) {
        var question = null;
        if (questionNumber === 0 || questionNumber > 0) {
            question = this.props.questionProvider.getNextQuestion();
        }
        return {
            questionNumber: questionNumber,
            selectedOption: null,
            question : question
        } as TestState;
    }

    componentWillReceiveProps(nextProps: TestProps) {
        if (nextProps.questionNumber !== this.state.questionNumber) {
            this.setState(this.getRefreshedState(nextProps.questionNumber));
        }
    }

    render() {

        var answered = this.state.selectedOption === 0 || this.state.selectedOption > 0;

        var questionOrResult = answered
            ? <AnswerDisplay
                nextQuestion={this.nextQuestion}
                selectedOption={this.state.selectedOption}
                score={this.props.score} 
                question={this.state.question}/>
            : <QuestionDisplay wordOptions={this.state.question.answers} selectOption={this.selectOption} score={this.props.score} />;

        return (
            <div>
                <h3>Question {this.props.questionNumber} of {this.props.numberOfQuestions}</h3>
                {this.state.question.question}
                {questionOrResult}
            </div>
        );
    }
}
