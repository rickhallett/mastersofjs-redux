describe('Redux', () => {
    let counterReducer;
    let initialState = { value: 0 };

    beforeEach(() => {
        counterReducer = function counterReducer(state = initialState, action) {
            // Reducers usually look at the type of action that happened
            // to decide how to update the state
            switch (action.type) {
                case 'counter/incremented':
                    return { ...state, value: state.value + 1 };
                case 'counter/decremented':
                    return { ...state, value: state.value - 1 };
                default:
                    // If the reducer doesn't care about this action type,
                    // return the existing state unchanged
                    return state;
            }
        };
    });

    afterEach(() => {});

    it('Can create a redux store', () => {
        const store = Redux.createStore(counterReducer);
        console.log(Object.keys(store));
        expect(Object.keys(store)).toEqual([
            'dispatch',
            'subscribe',
            'getState',
            'replaceReducer',
            '@@observable',
        ]);
    });
});
