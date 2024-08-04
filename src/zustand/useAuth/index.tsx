import { create } from "zustand";
import { UseAuthentication } from "../../@types/store/useAuthentication";
import { createJSONStorage, persist } from "zustand/middleware";
import { getTokenFromCookies } from "../../utility/tokenHandler";
import { useParseBoolean } from "../../hooks/useParseBoolean";
import { USER_SETTING } from "../../constants";

const useAuthentication = create<UseAuthentication>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userInfo: { accessToken: getTokenFromCookies() || "", mobileNumber: "" },
      setUserInfo: (payload) =>
        set((state) => ({
          ...state,
          userInfo: payload,
          isAuthenticated: useParseBoolean(payload.accessToken),
        })),
    }),
    {
      name: USER_SETTING,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthentication;
