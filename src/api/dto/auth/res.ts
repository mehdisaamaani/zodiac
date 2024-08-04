type TRegisterResponseAction = number;

type TLoginResponseAction = number;

type TOtpVerifyResponseAction = {
  mobileNumber: string;
  accessToken: string;
};

export type {
  TRegisterResponseAction,
  TLoginResponseAction,
  TOtpVerifyResponseAction,
};
