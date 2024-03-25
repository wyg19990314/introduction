import React from "react";
export default class App extends React.Component<any> {
    isMouseDown: boolean;
    state: {
        isMouseDown: boolean;
        clientx: number;
        width: number;
        changeMouseStyle: boolean;
    };
    mouseDown(e: MouseEvent): void;
    mouseUp(e: MouseEvent): void;
    onMouseMove(e: MouseEvent): void;
    render(): JSX.Element;
}
