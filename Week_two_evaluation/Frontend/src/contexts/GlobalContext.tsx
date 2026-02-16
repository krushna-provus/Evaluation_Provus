import { createContext, } from "react";
import type { Units,ApiTypes } from "../interfaces/interfaces";

type ContextType = {
    selectedApi : ApiTypes,
    setSelectedApi : React.Dispatch<React.SetStateAction<ApiTypes>>;
    selectedUnit : Units;
    setSelectedUnit : React.Dispatch<React.SetStateAction<Units>>;
}

export const GlobalContext = createContext<ContextType | undefined>(undefined);

