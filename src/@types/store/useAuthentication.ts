import { TOtpVerifyResponseAction } from "../../api/dto/auth/res";

type State = {
  userInfo: TOtpVerifyResponseAction;
  isAuthenticated: boolean;
};

type Action = { setUserInfo: (payload: State["userInfo"]) => void };

type UseAuthentication = State & Action;

export type { UseAuthentication, State, Action };
