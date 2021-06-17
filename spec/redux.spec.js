import {
    store,
    increment,
    decrement,
    incrementAsync,
    resetCounter,
    incrementIfOdd,
} from '../src/app.js';

describe('Redux', () => {
    beforeEach(() => {
        resetCounter();
    });

    afterEach(() => {});

    it('can create a redux store', () => {
        expect(Object.keys(store)).toEqual([
            'dispatch',
            'subscribe',
            'getState',
            'replaceReducer',
            '@@observable',
        ]);
    });

    it('check app will function outside of a DOM environment', (done) => {
        expect(store.getState().value).toEqual(0);

        increment();
        expect(store.getState().value).toEqual(1);

        decrement();
        expect(store.getState().value).toEqual(0);

        incrementIfOdd();
        expect(store.getState().value).toEqual(0);

        increment();
        incrementIfOdd();
        expect(store.getState().value).toEqual(2);

        incrementAsync();
        expect(store.getState().value).toEqual(2);

        setTimeout(() => {
            expect(store.getState().value).toEqual(3);
            done();
        }, 501);
    });
});
