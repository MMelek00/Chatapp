const Users = (state = [], action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return action.payload;
    default:
      return state;
  }
};

export default Users;
