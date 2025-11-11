import { createContext } from "react";

export const ThemesProviderContext = createContext({
  theme: "system",
  setTheme: () => null,
});

