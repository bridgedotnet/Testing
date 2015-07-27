/// <reference path="./bridge.d.ts" />

declare module Classes {
    /** @namespace Classes */
    
    /**
     * @public
     * @class Classes.Point
     */
    export interface Point {
        /**
         * @instance
         * @public
         * @memberof Classes.Point
         * @type number
         */
        x: number;
        /**
         * @instance
         * @public
         * @memberof Classes.Point
         * @type number
         */
        y: number;
        getHashCode(): Classes.Point;
        equals(o: Classes.Point): Boolean;
        $clone(to: Classes.Point): Classes.Point;
    }
    export interface PointFunc extends Function {
        prototype: Point;
        /**
         * @instance
         * @public
         * @this Classes.Point
         * @memberof Classes.Point
         * @param   {number}    x    
         * @param   {number}    y    
         * @return  {void}           
         */
        constructor$1: {
            new (x: number, y: number): Point
        };
        $constructor: {
            new (): Point
        };
    }
    var Point: PointFunc;

    /**
     * @public
     * @class Classes.MovePoint
     */
    export interface MovePoint {
        /**
         * @instance
         * @public
         * @this Classes.MovePoint
         * @memberof Classes.MovePoint
         * @function getPoint
         * @return  {Classes.Point}        
         */
        /**
         * @instance
         * @public
         * @this Classes.MovePoint
         * @memberof Classes.MovePoint
         * @function setPoint
         * @param   {Classes.Point}    value    
         * @return  {void}                      
         */
        getPoint(): Classes.Point;
        /**
         * @instance
         * @public
         * @this Classes.MovePoint
         * @memberof Classes.MovePoint
         * @function getPoint
         * @return  {Classes.Point}        
         */
        /**
         * @instance
         * @public
         * @this Classes.MovePoint
         * @memberof Classes.MovePoint
         * @function setPoint
         * @param   {Classes.Point}    value    
         * @return  {void}                      
         */
        setPoint(value: Classes.Point): void;
        /**
         * @instance
         * @public
         * @this Classes.MovePoint
         * @memberof Classes.MovePoint
         * @param   {number}    dx    
         * @param   {number}    dy    
         * @return  {void}            
         */
        move(dx: number, dy: number): void;
    }
    export interface MovePointFunc extends Function {
        prototype: MovePoint;
        new (): MovePoint;
        /**
         * @static
         * @private
         * @this Classes.MovePoint
         * @memberof Classes.MovePoint
         * @param   {Classes.Point}    p     
         * @param   {number}           dx    
         * @param   {number}           dy    
         * @return  {Classes.Point}          
         */
        move(p: Classes.Point, dx: number, dy: number): Classes.Point;
    }
    var MovePoint: MovePointFunc;

    /**
     * @public
     * @class Classes.Dog
     * @augments Classes.Animal
     */
    export interface Dog extends Classes.Animal {
        /**
         * @instance
         * @public
         * @this Classes.Dog
         * @memberof Classes.Dog
         * @return  {number}        
         */
        move$1(): number;
    }
    export interface DogFunc extends Function {
        prototype: Dog;
        /**
         * @instance
         * @public
         * @this Classes.Dog
         * @memberof Classes.Dog
         * @param   {string}    name    
         * @return  {void}              
         */
        new (name: string): Dog;
    }
    var Dog: DogFunc;

    /**
     * @static
     * @abstract
     * @public
     * @class Classes.StaticClass
     */
    export interface StaticClass {
    }
    export interface StaticClassFunc extends Function {
        prototype: StaticClass;
        new (): StaticClass;
        /**
         * @static
         * @public
         * @this Classes.StaticClass
         * @memberof Classes.StaticClass
         * @param   {Classes.Point}    p     
         * @param   {number}           dx    
         * @param   {number}           dy    
         * @return  {Classes.Point}          
         */
        move(p: Classes.Point, dx: number, dy: number): Classes.Point;
    }
    var StaticClass: StaticClassFunc;

    /**
     * @public
     * @class Classes.Snake
     * @augments Classes.Animal
     */
    export interface Snake extends Classes.Animal {
        /**
         * @instance
         * @public
         * @override
         * @this Classes.Snake
         * @memberof Classes.Snake
         * @return  {number}        
         */
        move(): number;
    }
    export interface SnakeFunc extends Function {
        prototype: Snake;
        /**
         * @instance
         * @public
         * @this Classes.Snake
         * @memberof Classes.Snake
         * @param   {string}    name    
         * @return  {void}              
         */
        new (name: string): Snake;
    }
    var Snake: SnakeFunc;

    /**
     * @public
     * @class Classes.Animal
     */
    export interface Animal {
        /**
         * @instance
         * @public
         * @this Classes.Animal
         * @memberof Classes.Animal
         * @return  {string}        
         */
        getName(): string;
        /**
         * @instance
         * @public
         * @this Classes.Animal
         * @memberof Classes.Animal
         * @return  {number}        
         */
        move(): number;
    }
    export interface AnimalFunc extends Function {
        prototype: Animal;
        /**
         * @instance
         * @public
         * @this Classes.Animal
         * @memberof Classes.Animal
         * @return  {void}        
         */
        $constructor: {
            new (): Animal
        };
        /**
         * @instance
         * @public
         * @this Classes.Animal
         * @memberof Classes.Animal
         * @param   {string}    name    
         * @return  {void}              
         */
        constructor$1: {
            new (name: string): Animal
        };
    }
    var Animal: AnimalFunc;

    /**
     * @public
     * @class Classes.Employee
     * @augments Classes.Animal
     */
    export interface Employee extends Classes.Animal {
    }
    export interface EmployeeFunc extends Function {
        prototype: Employee;
        /**
         * @instance
         * @public
         * @this Classes.Employee
         * @memberof Classes.Employee
         * @param   {string}    name    
         * @param   {number}    id      
         * @return  {void}              
         */
        new (name: string, id: number): Employee;
    }
    var Employee: EmployeeFunc;

}
