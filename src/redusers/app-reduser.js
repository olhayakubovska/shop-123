import { ACTION_TYPE } from "../api/action";

const initialStateApp = {
  wasLogout: false,
};

export const AppReduser = (state = initialStateApp, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
        wasLogout: !state.wasLogout,
      };
    default:
      return initialStateApp;
  }
};
