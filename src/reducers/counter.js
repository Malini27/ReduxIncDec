//action creators

const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';

export const increment =(value)=>({type: INCREMENT,payload: value});
export const decrement =(value)=>({type: DECREMENT,payload: value});

//create reducers
const initialState={count:0};

export default (state = initialState, action)=>{
    switch(action.type) {
        case 'INCREMENT':
            return{...state, count : state.count + action.payload};
        case 'DECREMENT':
            return{...state, count : state.count - action.payload};
        default:
            return state
    }
}