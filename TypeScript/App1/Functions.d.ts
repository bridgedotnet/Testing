/// <reference path="./bridge.d.ts" />

declare namespace Functions {
    interface Parameters {
        GetSomething(i?: number): number;
        Join(numbers: number[] | null): string | null;
    }
    interface ParametersFunc extends Function {
        prototype: Parameters;
        new (): Parameters;
    }
    var Parameters: ParametersFunc;

    interface Delegates {
    }
    interface DelegatesFunc extends Function {
        prototype: Delegates;
        new (): Delegates;
    }
    var Delegates: DelegatesFunc;

    interface DelegateInterface {
        Functions$DelegateInterface$addMethodVoidDelegate(value: {(): void} | null): void;
        Functions$DelegateInterface$removeMethodVoidDelegate(value: {(): void} | null): void;
        addMethodVoidDelegate(value: {(): void} | null): void;
        removeMethodVoidDelegate(value: {(): void} | null): void;
        Functions$DelegateInterface$addMethodStringDelegate(value: {(s: string): void} | null): void;
        Functions$DelegateInterface$removeMethodStringDelegate(value: {(s: string): void} | null): void;
        addMethodStringDelegate(value: {(s: string): void} | null): void;
        removeMethodStringDelegate(value: {(s: string): void} | null): void;
        Functions$DelegateInterface$addMethodStringDelegateIntResult(value: {(s: string): number} | null): void;
        Functions$DelegateInterface$removeMethodStringDelegateIntResult(value: {(s: string): number} | null): void;
        addMethodStringDelegateIntResult(value: {(s: string): number} | null): void;
        removeMethodStringDelegateIntResult(value: {(s: string): number} | null): void;
    }

    interface DelegateClass {
        MethodVoidDelegate: {(): void} | null;
        MethodStringDelegate: {(s: string): void} | null;
        MethodStringDelegateIntResult: {(s: string): number} | null;
    }
    interface DelegateClassFunc extends Function {
        prototype: DelegateClass;
        new (): DelegateClass;
    }
    var DelegateClass: DelegateClassFunc;

    interface MiddleBit {
        fn: {(x: Functions.MiddleBit): Function} | null;
    }
    interface MiddleBitFunc extends Function {
        prototype: MiddleBit;
        new (): MiddleBit;
    }
    var MiddleBit: MiddleBitFunc;

}
