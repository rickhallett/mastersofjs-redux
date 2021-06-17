import {
    store,
    increment,
    decrement,
    incrementAsync,
    resetCounter,
    incrementIfOdd,
} from '../src/app.js';

describe('Counter App Spec', () => {
    beforeEach(() => {
        resetCounter();
    });

    afterEach(() => {});

    it('Can create a redux store', () => {
        expect(Object.keys(store)).toEqual([
            'dispatch',
            'subscribe',
            'getState',
            'replaceReducer',
            '@@observable',
        ]);
    });

    it('can increment a counter held in state', () => {
        expect(store.getState().value).toEqual(0);
        increment();
        expect(store.getState().value).toEqual(1);
        increment();
        expect(store.getState().value).toEqual(2);
    });

    it('can decrement a counter held in state', () => {
        expect(store.getState().value).toEqual(0);
        decrement();
        expect(store.getState().value).toEqual(-1);
        decrement();
        expect(store.getState().value).toEqual(-2);
    });

    it('can increment a counter held in state, if that value is odd', () => {
        expect(store.getState().value).toEqual(0);
        incrementIfOdd();
        expect(store.getState().value).toEqual(0);
        increment();
        expect(store.getState().value).toEqual(1);
        incrementIfOdd();
        expect(store.getState().value).toEqual(2);
    });

    it('can increment a counter held in state asynchronously', (done) => {
        expect(store.getState().value).toEqual(0);
        incrementAsync();
        expect(store.getState().value).toEqual(0);
        setTimeout(() => {
            expect(store.getState().value).toEqual(1);
            done();
        }, 501);
    });
});
