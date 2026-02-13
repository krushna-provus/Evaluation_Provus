import type { Units } from "../interfaces/interfaces";

function changeDataByUnits({
  prevUnit,
  selectedUnit,
  dataAttribute,
  data
}: {
  prevUnit: Units;
  selectedUnit: Units;
  dataAttribute: string;
  data: number;
}): { value: number; unit: string } {
  // If units are the same, no conversion needed
  if (prevUnit === selectedUnit) {
    return {
      value: data,
      unit: getUnitLabel(selectedUnit, dataAttribute)
    };
  }

  const dataType = dataAttribute.toLowerCase().trim();

  // Temperature conversions
  if (dataType.includes("temp") || dataType === "temperature") {
    return {
      value: convertTemperature(data, prevUnit, selectedUnit),
      unit: getUnitLabel(selectedUnit, "temperature")
    };
  }

  // Wind speed conversions
  if (dataType.includes("wind")) {
    return {
      value: convertWindSpeed(data, prevUnit, selectedUnit),
      unit: getUnitLabel(selectedUnit, "wind")
    };
  }

  // Unknown type, return as-is
  return { value: data, unit: "" };
}

/**
 * Convert temperature between different unit systems
 */
function convertTemperature(value: number, fromUnit: Units, toUnit: Units): number {
  // Convert to Celsius as intermediate
  let celsius: number;
  
  if (fromUnit === "imperial") {
    // Fahrenheit to Celsius
    celsius = (value - 32) * 5 / 9;
  } else if (fromUnit === "standard") {
    // Kelvin to Celsius
    celsius = value - 273.15;
  } else {
    // Already Celsius
    celsius = value;
  }

  // Convert from Celsius to target
  if (toUnit === "imperial") {
    // Celsius to Fahrenheit
    return (celsius * 9 / 5) + 32;
  } else if (toUnit === "standard") {
    // Celsius to Kelvin
    return celsius + 273.15;
  } else {
    // Stay as Celsius
    return celsius;
  }
}

/**
 * Convert wind speed between different unit systems
 */
function convertWindSpeed(value: number, fromUnit: Units, toUnit: Units): number {
  // Convert to m/s as intermediate
  let mps: number;
  
  if (fromUnit === "imperial") {
    // mph to m/s
    mps = value * 0.44704;
  } else {
    // Already m/s (metric or standard)
    mps = value;
  }

  // Convert from m/s to target
  if (toUnit === "imperial") {
    // m/s to mph
    return mps / 0.44704;
  } else {
    // Stay as m/s
    return mps;
  }
}

/**
 * Get the appropriate unit label
 */
function getUnitLabel(unit: Units, dataType: string): string {
  const type = dataType.toLowerCase().trim();
  
  if (type.includes("temp") || type === "temperature") {
    switch (unit) {
      case "imperial": return "°F";
      case "metric": return "°C";
      case "standard": return "K";
    }
  }
  
  if (type.includes("wind")) {
    switch (unit) {
      case "imperial": return "mph";
      case "metric": 
      case "standard": return "m/s";
    }
  }
  
  return "";
}

export default changeDataByUnits;