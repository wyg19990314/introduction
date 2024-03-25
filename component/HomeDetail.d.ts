import React from "react";
interface Iprops {
    [key: string]: any;
}
interface CountAction {
    type: string;
    payload: any;
}
export declare const sateContext: React.Context<{
    states: any;
    dispatch?: React.Dispatch<CountAction>;
}>;
declare const _default: React.MemoExoticComponent<(props: Iprops) => JSX.Element>;
export default _default;
