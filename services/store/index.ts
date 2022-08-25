import { createStore } from 'lumine';

interface State {
}

const store = createStore<State>({
    initialState: {
    }
})

export const {getState, loadStore, updateState, useSelector, subscribe} = store
