import { BREED, SHOW_BIRD } from '../actions/index';

const initialState = {
    breed:''
}
export default function(state = initialState, action){
    console.log('reducer', action.payload)
    console.log('The state is', state)
    switch(action.type){
        case BREED:
            return Object.assign({}, state, {
                breed: action.payload
            })

        default:
            return state;
    }
}