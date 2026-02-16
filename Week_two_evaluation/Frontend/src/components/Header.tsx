import logo from "./../assets/Provus_edited_logo.png";
import { useApi } from "../contexts/GlobalContext";
import type { ApiTypes, OptionsForSelect, Units } from "../interfaces/interfaces";
import Select from "./Select";


const apiOptions : OptionsForSelect[] = [
  {title : "🌤 OpenWeather API",value:"openWeather"},
  {title : "☁️ WeatherAPI",value:"weatherApi"}
]
const unitsOptions : OptionsForSelect[] = [
  {title : "Imperial",value:"Imperial"},
  {title : "Metric",value:"Metric"},
]

function Header() {
  const { selectedApi, setSelectedApi,selectedUnit,setSelectedUnit } = useApi();

  return (
    <div className="absolute top-6 left-0 w-full flex justify-center z-20">
      <header
        className="
      w-full max-w-6xl
      bg-white/80
      backdrop-blur-lg
      shadow-2xl
      rounded-3xl
      border border-sky-200
        "
      >
        <div className="px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Provus edited logo"
              className="h-14 w-auto object-contain"
            />
            <h1 className="text-2xl font-bold text-sky-700 tracking-wide">
              Weather Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Select<ApiTypes> selectLabel="Choose API : " selectedValue={selectedApi} setSelectedValue={setSelectedApi}
              options={apiOptions}
            />
            <Select<Units>  selectLabel="Choose Units" selectedValue={selectedUnit} setSelectedValue={setSelectedUnit}
              options={unitsOptions}
            />
          </div>

        </div>
      </header>
    </div>
  );
}

export default Header;
