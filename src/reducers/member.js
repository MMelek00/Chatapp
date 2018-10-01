export const initialState = {
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          uid: action.data.uid,
          email: action.data.email,
          firstName: action.data.firstName,
          phoneNumber: action.data.phoneNumber
        };
      }
      return initialState;
    }
    case "USER_DETAILS_UPDATE": {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          ...action.data
        };
      }
      return initialState;
    }
    case "USER_ERROR": {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: action.data
        };
      }
      return initialState;
    }
    case "USER_RESET": {
      return initialState;
    }
    default:
      return state;
  }
}
