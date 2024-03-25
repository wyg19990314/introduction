import { Component } from "react";
interface IModel {
    [key: string]: any;
}
export default class Submit extends Component<any> {
    state: {
        sex: number;
        name: string;
        abc: number;
        age: null;
        student: never[];
        isModalVisible: boolean;
        editId: null;
        changeStudent: {};
    };
    componentDidMount(): void;
    changeSexType: (e: any) => void;
    changeName: (e: any) => void;
    changeAge: (e: any) => void;
    reSet: () => void;
    submit: () => void;
    columns: ({
        title: string;
        dataIndex: string;
        render?: undefined;
        width?: undefined;
    } | {
        title: string;
        dataIndex: string;
        render: (sex: number) => JSX.Element;
        width?: undefined;
    } | {
        title: string;
        width: number;
        render: (text: any, record: any) => JSX.Element;
        dataIndex?: undefined;
    })[];
    delete: (id: any) => void;
    deleteStu: (id: any) => void;
    edit: (id: any) => void;
    edits: () => void;
    handleCancel: () => void;
    adaptData: ({ data }?: {
        data?: IModel | undefined;
    }) => IModel | undefined;
    fetchData: () => Promise<any>;
    render(): JSX.Element;
}
export {};
