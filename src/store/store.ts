
export class Store {

    private subscibers: Function[];
    private reducers: {[key: string]: Function};
    private state: {
        [key: string]: any
    };

    constructor(reducers = {}, initialState = {}) {
        this.subscibers = [];
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }

    get value() {
        return this.state;
    }

    subscribe(fn) {
        this.subscibers = [...this.subscibers, fn];
        this.notify();
        return () => {
            this.subscibers = this.subscibers.filter(sub => sub !== fn);
        }
    }

    dispatch(action: any) {
        this.state = this.reduce(this.state, action);
        this.notify();
    }

    private notify() {
        this.subscibers.forEach(fn => fn(this.value))
    }

    private reduce(state, action) {
        const newState = {};
        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}