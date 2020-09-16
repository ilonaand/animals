export type State = 'SEATING' | 'RUNNING' | 'WALKING' | 'CLIMBING' | 'SAY';

export abstract class Animal {
    protected _state: State;

    constructor(state: State = 'SEATING') {
        this._state = state;
    }

    abstract getName(): string;
    abstract makeCopy(newState: State): Animal; 

    get state() {
        return this._state;
    }

    seat() {
        return this.makeCopy('SEATING');
    }

    run() {
        return this.makeCopy('RUNNING');
    }

    walk() {
        return this.makeCopy('WALKING');
    }

    climb(): Animal {
        return this.makeCopy('CLIMBING');
    }

    say(): Animal {
        return this.makeCopy('SAY');
    }

    abstract makeSound(): string;
};

export class Cat extends Animal {
    makeCopy(newState: State) {
        return new Cat(newState);
    }

    getName() {
        return `Cat`;
    }
    
    makeSound() {
        return `Meou!`;
    }
};

export class Dog extends Animal {
    makeCopy(newState: State) {
        return new Dog(newState);
    }

    getName() {
        return `Dog`;
    }

    makeSound() {
        return `Whoof!`;
    }

    climb() {
        return this.makeCopy(this._state); 
    }
};

