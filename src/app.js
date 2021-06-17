// Define an initial state value for the app
const initialState = {
    value: 0,
};

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function counterReducer(state = initialState, action) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type) {
        case 'counter/incremented':
            return { ...state, value: state.value + 1 };
        case 'counter/decremented':
            return { ...state, value: state.value - 1 };
        case 'counter/reset':
            return { ...state, value: 0 };
        default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state;
    }
}

export const increment = () => {
    store.dispatch({ type: 'counter/incremented' });
};

export const decrement = () => {
    store.dispatch({ type: 'counter/decremented' });
};

export const incrementIfOdd = () => {
    // We can write logic to decide what to do based on the state
    if (store.getState().value % 2 !== 0) {
        store.dispatch({ type: 'counter/incremented' });
    }
};

export const incrementAsync = () => {
    // We can also write async logic that interacts with the store
    setTimeout(function () {
        store.dispatch({ type: 'counter/incremented' });
    }, 500);
};

export const resetCounter = () => {
    store.dispatch({ type: 'counter/reset' });
};

const bindHandlersToEventListeners = () => {
    document.getElementById('increment').addEventListener('click', increment);
    document.getElementById('decrement').addEventListener('click', decrement);
    document
        .getElementById('incrementIfOdd')
        .addEventListener('click', incrementIfOdd);
    document
        .getElementById('incrementAsync')
        .addEventListener('click', incrementAsync);
};

// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
export const store = Redux.createStore(counterReducer);

const domPresent = Boolean(document.getElementById('value'));

let valueCounter = null;
let render = null;

if (domPresent) {
    valueCounter = document.getElementById('value');
    render = () => {
        const state = store.getState();
        valueCounter.innerHTML = state.value.toString();
    };
} else {
    render = () => {
        console.log('store:', store.getState());
    };
}

// Update the UI with the initial data
render();

// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);

if (domPresent) {
    bindHandlersToEventListeners();
}
