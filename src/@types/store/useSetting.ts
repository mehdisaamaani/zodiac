type State = {
  appTheme: "light" | "dark";
};

type Action = {
  toggleAppTheme: () => void;
};

type UseSetting = State & Action;

export type { UseSetting, State, Action };
