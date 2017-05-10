import * as React from "react";

export interface FormGroupProps {
    for : string;
    label : string;
    validationClass?: string;
    helpText?: string;
}

export class FormGroup extends React.Component<FormGroupProps, {}>{

    render() {
        
        var divClass = "form-group";
        if (this.props.validationClass) {
            divClass = divClass + " " + this.props.validationClass;
        }

        var helpBlock = this.props.helpText
            ? <span className="help-block">{this.props.helpText}</span>
            : null;
        
        return (
            <div className={divClass}>
                <label htmlFor={this.props.for} className="col-sm-2 control-label">{this.props.label}</label>
                <div className="col-sm-10">
                    {this.props.children}
                    {helpBlock}
                </div>
            </div>
        );
    }
}