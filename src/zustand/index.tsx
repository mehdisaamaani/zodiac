import { createStore } from "zustand";
import useAuthentication from "./useAuth";
import useLoading from "./useLoading";
import useSetting from "./useSetting";

const useStore = createStore(() => ({
  auth: useAuthentication,
  general: { setting: useSetting, loading: useLoading },
}));

export default useStore;
