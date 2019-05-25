/// <reference path="./bridge.d.ts" />

declare namespace Classes {
    interface Animal {
        GetName(): string | null;
        Move(): number;
    }
    interface AnimalFunc extends Function {
        prototype: Animal;
        new (): Animal;
        ctor: {
            new (): Animal
        };
        $ctor1: {
            new (name: string | null): Animal
        };
    }
    var Animal: AnimalFunc;

    interface MovePoint {
        Point: Classes.Point;
        Move(dx: number, dy: number): void;
    }
    interface MovePointFunc extends Function {
        prototype: MovePoint;
        new (): MovePoint;
    }
    var MovePoint: MovePointFunc;

    interface Point {
        X: number;
        Y: number;
        getHashCode(): number;
        equals(o: Classes.Point): boolean;
        $clone(to: Classes.Point): Classes.Point;
    }
    interface PointFunc extends Function {
        prototype: Point;
        $ctor1: {
            new (x: number, y: number): Point
        };
        new (): Point;
        ctor: {
            new (): Point
        };
    }
    var Point: PointFunc;

    interface StaticClass {
    }
    interface StaticClassFunc extends Function {
        prototype: StaticClass;
        new (): StaticClass;
        Move(p: Classes.Point, dx: number, dy: number): Classes.Point;
    }
    var StaticClass: StaticClassFunc;

    interface Snake extends Classes.Animal {
        Move(): number;
    }
    interface SnakeFunc extends Function {
        prototype: Snake;
        new (name: string | null): Snake;
    }
    var Snake: SnakeFunc;

    interface Employee extends Classes.Animal {
    }
    interface EmployeeFunc extends Function {
        prototype: Employee;
        new (name: string | null, id: number): Employee;
    }
    var Employee: EmployeeFunc;

    interface Dog extends Classes.Animal {
        Move$1(): number;
    }
    interface DogFunc extends Function {
        prototype: Dog;
        new (name: string | null): Dog;
    }
    var Dog: DogFunc;

}
