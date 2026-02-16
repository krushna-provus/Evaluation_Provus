import type { Units } from "../interfaces/interfaces";

export default function formatValueByUnit(selectedUnit : Units,weatherAttribute: string, val: number, sourceUnit: string): string {
    const weatherAttributeLowerCase = weatherAttribute.toLocaleLowerCase();
    if (weatherAttributeLowerCase === "temperature" || weatherAttributeLowerCase.includes("temp") || weatherAttribute === "Max / Min" || weatherAttribute === "Feels Like") {
      if (selectedUnit === "Metric" && sourceUnit === "F") {
        return `${((val - 32) / 1.8).toFixed(1)}°C`;
      }
      return `${val.toFixed(1)}°F`;
    }
    return `${val} ${sourceUnit}`;
}