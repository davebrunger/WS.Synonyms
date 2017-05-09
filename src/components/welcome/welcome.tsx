import * as React from "react";

export interface WelcomeProps {
    beginTest(): void;
}

export class Welcome extends React.Component<WelcomeProps, {}>{

    constructor(props: WelcomeProps) {
        super(props);
        this.beginTestClick = this.beginTestClick.bind(this);
    }

    beginTestClick() {
        this.props.beginTest();
    }

    render() {
        return (
            <div>
                <h3>Welcome to the Synonym Test</h3>
                <a className="btn btn-primary" onClick={this.beginTestClick}>Begin Test</a>
            </div>
        );
    }
}