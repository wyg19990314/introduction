import { Component } from "react";
export default class PromiseFunc extends Component<any> {
    componentDidMount(): Promise<void>;
    componentWillMount(): Promise<void>;
    promiseFunc: (e: any) => Promise<any>;
    render(): JSX.Element;
}
