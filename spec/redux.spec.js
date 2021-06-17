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

describe('createStore', () => {
    xit('exposes the public API', () => {});

    xit('throws if reducer is not a function', () => {});

    xit('passes the initial state', () => {});

    xit('applies the reducer to the previous state', () => {});

    xit('applies the reducer to the initial state', () => {});

    xit('preserves the state when replacing a reducer', () => {});

    xit('supports multiple subscriptions', () => {});

    xit('only removes listener once when unsubscribe is called', () => {});

    xit('only removes relevant listener when unsubscribe is called', () => {});

    xit('supports removing a subscription within a subscription', () => {});

    xit('notifies all subscribers about current dispatch regardless if any of them gets unsubscribed in the process', () => {});

    xit('notifies only subscribers active at the moment of current dispatch', () => {});

    xit('uses the last snapshot of subscribers during nested dispatch', () => {});

    xit('provides an up-to-date state when a subscriber is notified', (done) => {
        done();
    });

    xit('does not leak private listeners array', (done) => {
        done();
    });

    xit('only accepts plain object actions', () => {});

    xit('handles nested dispatches gracefully', () => {});

    xit('does not allow dispatch() from within a reducer', () => {});

    xit('does not allow getState() from within a reducer', () => {});

    xit('does not allow subscribe() from within a reducer', () => {});

    xit('does not allow unsubscribe from subscribe() from within a reducer', () => {});

    xit('recovers from an error within a reducer', () => {});

    xit('throws if action type is missing', () => {});

    xit('throws an error that correctly describes the type of item dispatched', () => {});

    xit('throws if action type is undefined', () => {});

    xit('does not throw if action type is falsy', () => {});

    xit('accepts enhancer as the third argument', () => {});

    xit('accepts enhancer as the second argument if initial state is missing', () => {});

    xit('throws if enhancer is neither undefined nor a function', () => {});

    xit('throws if nextReducer is not a function', () => {});

    xit('throws if listener is not a function', () => {});

    describe('Symbol.observable interop point', () => {
        xit('should exist', () => {});

        describe('returned value', () => {
            xit('should be subscribable', () => {});

            xit('may be used to retrieve itself', () => {});

            xit('should throw a TypeError if an observer object is not supplied to subscribe', () => {});

            xit('should return a subscription object when subscribed', () => {});
        });

        xit('should pass an integration test with no unsubscribe', () => {});

        xit('should pass an integration test with an unsubscribe', () => {});

        xit('should pass an integration test with a common library (RxJS)', () => {});
    });

    xit('does not log an error if parts of the current state will be ignored by a nextReducer using combineReducers', () => {});

    xit('throws if passing several enhancer functions without preloaded state', () => {});

    xit('throws if passing several enhancer functions with preloaded state', () => {});
});
