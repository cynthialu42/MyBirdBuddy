import { TEST } from '../actions/index';

const initialState = {
    breed:''
}
export default function(state = initialState, action){
    switch(action.type){
        case TEST:
            return Object.assign({}, state, {
                breed: action.payload
            })
        default:
            return state;
    }
}