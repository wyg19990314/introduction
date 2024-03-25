import { Component } from "react";
declare class Price extends Component<any> {
    editableDiv: any;
    value: string;
    state: {
        num: number;
    };
    componentDidMount(): void;
    group: (array: any, length: any) => any[];
    handleCursor: () => void;
    run: () => void;
    jump: () => void;
    getInstance: () => void;
    testState: () => Promise<void>;
    render(): JSX.Element;
}
export default Price;
