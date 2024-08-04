type State = {
  loading: {
    backdrop: boolean;
    skeleton: boolean;
    button: boolean;
  };
};

type Action = {
  setLoading: (loading: Partial<State["loading"]> | boolean) => void;
};
type UseLoading = State & Action;
export type { UseLoading, State, Action };
