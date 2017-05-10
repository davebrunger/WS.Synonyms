import * as React from "react";

export interface IQuestion {
    question : JSX.Element;
    answers : string[];
    correctAnswerIndex : number;
}