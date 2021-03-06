import * as React from "react";

import { FormGroup } from "../forms/formGroup"

export interface WelcomeProps {
    beginTest(name: string, typeOfTest: string, numberOfQuestions: number): void;
}

export interface WelcomeState {
    name?: string;
    nameValidationClass?: string;
    nameHelpText?: string;
    numberOfQuestions?: number;
    typeOfTest?: string;
}

export class Welcome extends React.Component<WelcomeProps, WelcomeState>{

    constructor(props: WelcomeProps) {
        super(props);

        this.state = {
            name: "",
            nameValidationClass: "",
            nameHelpText: "",
            numberOfQuestions: 10,
            typeOfTest: "Synonyms"
        }

        this.beginTestClick = this.beginTestClick.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.numberOfQuestionsChange = this.numberOfQuestionsChange.bind(this);
        this.typeOfTestChange = this.typeOfTestChange.bind(this);
    }

    beginTestClick() {
        if (!this.state.name) {
            this.setState({
                nameValidationClass: "has-error",
                nameHelpText: "Please enter your name"
            });
            return;
        }
        this.props.beginTest(this.state.name, this.state.typeOfTest, this.state.numberOfQuestions);
    }

    nameChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            name: event.currentTarget.value,
            nameValidationClass: event.currentTarget.value ? "has-success" : "has-error",
            nameHelpText: event.currentTarget.value ? "" : "Please enter your name"
        });
    }

    numberOfQuestionsChange(event: React.FormEvent<HTMLSelectElement>) {
        this.setState({ numberOfQuestions: parseInt(event.currentTarget.value, 10) });
    }

    typeOfTestChange(event: React.FormEvent<HTMLSelectElement>) {
        this.setState({ typeOfTest: event.currentTarget.value });
    }

    render() {
        return (
            <div>
                <h3>Welcome to the Simple Online Tester</h3>
                <form className="form-horizontal">
                    <FormGroup for="name" label="Name" validationClass={this.state.nameValidationClass} helpText={this.state.nameHelpText}>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.nameChange} />
                    </FormGroup>
                    <FormGroup for="numberOfQuestions" label="No. of Questions">
                        <select className="form-control" id="numberOfQuestions" value={this.state.numberOfQuestions} onChange={this.numberOfQuestionsChange}>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </select>
                    </FormGroup>
                    <FormGroup for="typeOfTest" label="Type of Test">
                        <select className="form-control" id="typeOfTest" value={this.state.typeOfTest} onChange={this.typeOfTestChange}>
                            <option>Synonyms</option>
                            <option>Times Tables</option>
                        </select>
                    </FormGroup>
                    <FormGroup for="" label="">
                        <a className="btn btn-primary" onClick={this.beginTestClick}>Begin Test</a>
                    </FormGroup>
                </form>
            </div>
        );
    }
}