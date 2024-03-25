import { Component } from "react";
import * as THREE from 'three';
export default class Squre extends Component<any> {
    state: {
        mouseDownX: number;
        mouseDownY: number;
    };
    moveState: boolean;
    avatar: any;
    leftPressed: boolean;
    rightPressed: boolean;
    frontPressed: boolean;
    backPressed: boolean;
    camera: any;
    attackGroup: any[];
    scene: any;
    rotation: number;
    jumpHeight: number;
    jumpTime: any;
    inJumpDuration: boolean;
    texLoader: any;
    texture: any;
    cameraTarget: THREE.Vector3;
    cameraControl: THREE.Vector3;
    rainGroup: THREE.Group;
    showRain: boolean;
    dissolvingMaterial: THREE.ShaderMaterial;
    actions: THREE.AnimationAction[];
    componentDidMount(): void;
    initEvent: () => void;
    modelMove: () => void;
    cameraMove: () => void;
    pointLight: (scene: any) => void;
    initObject: (scene: any) => void;
    attack: () => void;
    jump: ({ type, canJump }: {
        type?: string | undefined;
        canJump?: boolean | undefined;
    }) => void;
    jumps: (type?: string | undefined) => void;
    fade: () => void;
    divToScene: () => void;
    squres: () => void;
    raining: () => void;
    render(): JSX.Element;
}
