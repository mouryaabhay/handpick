import { useContext } from "react";
import { ThemesProviderContext } from "@/contexts/themes-context";

export function useTheme() {
  const context = useContext(ThemesProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemesProvider");
  }
  return context;
};
