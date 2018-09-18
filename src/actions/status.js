export function status(dispatch, state, target, value) {
    dispatch({
        type: "SET_STATUS",
        state,
        target,
        value,
    });
}
