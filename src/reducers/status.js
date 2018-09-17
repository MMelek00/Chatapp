
const R = require("ramda");


export default function statusReducer(state = {}, action) {
    switch (action.type) {
        case "SET_STATUS": {
            return R.assocPath([action.state, action.target], action.value, state);
        }
        default:
            return state;
    }
}
