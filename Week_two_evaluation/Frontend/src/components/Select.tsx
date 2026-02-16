import type { SetStateAction } from "react";
import type { OptionsForSelect } from "../interfaces/interfaces";


function Select<T>({selectLabel,selectedValue,setSelectedValue,options}:{
    selectLabel : string,
    selectedValue : T;
    setSelectedValue : React.Dispatch<SetStateAction<T>>;
    options : OptionsForSelect[];
    setPrevValue ?: React.Dispatch<SetStateAction<T>>;
}){
    return <>
        <label
            htmlFor="api-select"
            className="text-sky-700 font-semibold text-lg"
        >
            {selectLabel}
        </label>

        <select
            id="api-select"
            value={selectedValue as string}
            onChange={(e) =>{
                setSelectedValue(e.target.value as T)}
            }
            className="
            px-5 py-2.5
            rounded-xl
            bg-white/80
            backdrop-blur-md
            text-sky-800
            font-medium
            shadow-sm
            border border-sky-200
            focus:outline-none
            focus:ring-2 focus:ring-sky-400
            transition-all duration-300
            hover:shadow-md
            cursor-pointer
            "
        >
            <option value="" disabled hidden>
            -- Select --
            </option>

            {options.map((item)=>{
                return <option key={item.value} value={item.value}>
            {item.title}
            </option>
            })}

        </select>
    </>
}

export default Select;