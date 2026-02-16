import { useContext } from "react";
import { GlobalContext } from "./../contexts/GlobalContext";

export function useApi() {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useApi must be inside ApiProvider");
    }

    return context;
}
