import Cookies from "js-cookie";
import { TOKEN_COOKIE_NAME } from "../constants";

export const getTokenFromCookies = () => {
  const user_token = Cookies.get(TOKEN_COOKIE_NAME);
  return user_token;
};
