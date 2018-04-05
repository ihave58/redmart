import {ActionTypes} from '../actions';

export default function(state = [], action) {
    switch(action.type) {
        case ActionTypes.Fetch_FilterList:
            return action.payload;

        default:
            return state;
    }
}
