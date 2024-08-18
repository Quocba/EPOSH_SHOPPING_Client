import { AuthActions } from "../../redux/actions";

export interface AuthState {
  toastError: any | {};
}

const initialState = {
  toastError: {},
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActions.TOAST_ERROR:
      return {
        ...state,
        toastError: action.payload,
      };
      case AuthActions.SAVE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };

    default:
      return state;
  }
}

export default authReducer;
