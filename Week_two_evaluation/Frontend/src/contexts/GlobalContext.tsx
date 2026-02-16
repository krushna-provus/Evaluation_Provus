import { useState,createContext,type ReactNode, useContext } from "react";
import type { Units,ApiTypes } from "../interfaces/interfaces";



type ContextType = {
    selectedApi : ApiTypes,
    setSelectedApi : React.Dispatch<React.SetStateAction<ApiTypes>>;
    selectedUnit : Units;
    setSelectedUnit : React.Dispatch<React.SetStateAction<Units>>;
}

const GlobalContext = createContext<ContextType | undefined>(undefined);

export function ApiProvider({children} : {children : ReactNode}){
    const [selectedApi,setSelectedApi] = useState<ApiTypes>("openWeather");
    const [selectedUnit,setSelectedUnit] = useState<Units>("Imperial");

    return (
        <GlobalContext.Provider value={{selectedApi,setSelectedApi,selectedUnit,setSelectedUnit}}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useApi(){
    const context = useContext(GlobalContext);

    if(!context){
        throw new Error("useApi must be inside ApiProvider");
    }

    return context;
}
