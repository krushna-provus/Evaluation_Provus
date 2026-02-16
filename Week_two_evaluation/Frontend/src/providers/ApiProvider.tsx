import { useState, type ReactNode } from "react";
import { GlobalContext } from "./../contexts/GlobalContext";
import type { Units, ApiTypes } from "../interfaces/interfaces";

export function ApiProvider({ children }: { children: ReactNode }) {
  const [selectedApi, setSelectedApi] = useState<ApiTypes>("openWeather");
  const [selectedUnit, setSelectedUnit] = useState<Units>("Imperial");

  return (
    <GlobalContext.Provider
      value={{ selectedApi, setSelectedApi, selectedUnit, setSelectedUnit }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
