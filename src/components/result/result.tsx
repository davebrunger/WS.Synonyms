import * as React from "react";

export interface ResultProps {
    restartTest() : void;
    totalQuestions : number;
}

export class Result extends React.Component<ResultProps, {}>{
    
    constructor(props : ResultProps) {
        super (props);
        this.restartTest = this.restartTest.bind(this);
    }

    restartTest() {
        this.props.restartTest();
    }
    
    render() {
        return (
            <div>
                <h3>Results</h3>
                <p>You completed {this.props.totalQuestions} questions</p>
                <a className="btn btn-primary" onClick={this.restartTest}>Restart Test</a>
            </div>
        );
    }
}
