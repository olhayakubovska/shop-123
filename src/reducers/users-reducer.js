import { ACTION_TYPE } from "../api/action";

const initialStateUsers = {
  users: [],
};

export const UserSReducer = (state = initialStateUsers, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case ACTION_TYPE.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
