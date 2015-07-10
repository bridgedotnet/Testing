/// <reference path="./bridge.d.ts" />

declare module Functions {
    export interface DelegateClass {
        methodVoidDelegate: {(): void};
        methodStringDelegate: {(string): void};
        methodStringDelegateIntResult: {(string): number};
    }
    export interface DelegateClassFunc extends Function {
        prototype: DelegateClass;
        new (): DelegateClass;
    }
    var DelegateClass: DelegateClassFunc;

    export interface DelegateInterface {
    }
    var DelegateInterface: Function;

    export interface Delegates {
    }
    export interface DelegatesFunc extends Function {
        prototype: Delegates;
        new (): Delegates;
    }
    var Delegates: DelegatesFunc;

    export interface Parameters {
        getSomething(i: number): number;
    }
    export interface ParametersFunc extends Function {
        prototype: Parameters;
        new (): Parameters;
    }
    var Parameters: ParametersFunc;

}
