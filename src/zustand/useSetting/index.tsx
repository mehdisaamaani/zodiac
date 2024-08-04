import { create } from "zustand";
import { UseSetting } from "../../@types/store/useSetting";
import { persist } from "zustand/middleware";
import { USER_SETTING } from "../../constants";

const useSetting = create<UseSetting>()(
  persist(
    (set) => ({
      appTheme: "light",
      toggleAppTheme: () =>
        set((state) => {
          const newAppTheme = state.appTheme === "light" ? "dark" : "light";
          const metaThemeColor = document.querySelector(
            "meta[name=theme-color]"
          );
          metaThemeColor?.setAttribute(
            "content",
            newAppTheme === "light" ? "#fff" : "#000"
          );
          return { ...state, appTheme: newAppTheme };
        }),
    }),
    {
      name: USER_SETTING,
    }
  )
);

export default useSetting;
