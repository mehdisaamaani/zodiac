import { create } from "zustand";
import { UseLoading } from "../../@types/store/useLoading";

const useLoading = create<UseLoading>()((set) => ({
  loading: {
    backdrop: false,
    skeleton: false,
    button: false,
  },
  setLoading: (payload) =>
    set((state) => {
      if (typeof payload === "boolean") {
        return {
          ...state,
          loading: {
            ...state.loading,
            backdrop: payload,
            button: payload,
            skeleton: payload,
          },
        };
      }
      return {
        ...state,
        loading: {
          ...state.loading,
          ...payload,
        },
      };
    }),
}));

export default useLoading;
