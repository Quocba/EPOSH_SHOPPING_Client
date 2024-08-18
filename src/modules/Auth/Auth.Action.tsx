import { AuthActions } from "../../redux/actions";

export interface ToastErrorAction {
  type: AuthActions.TOAST_ERROR;
  payload: any;
}

export interface SaveAccountAction {
  type: AuthActions.SAVE_ACCOUNT;
  payload: any;
}


export type AuthAction = ToastErrorAction |

 SaveAccountAction;


export const toastError = (data: any): ToastErrorAction => {
  return {
    type: AuthActions.TOAST_ERROR,
    payload: data,
  };
};
export const saveAccount = (account: any): SaveAccountAction => {
  return {
    type: AuthActions.SAVE_ACCOUNT,
    payload: account,
  };
};


