import { useApi } from "../contexts/GlobalContext";

function InnerDisplayCard({
  weatherAttribute,
  item1,
  item2,
}: {
  item1: { value: number; unit: string };
  weatherAttribute: string;
  item2?: { value: number; unit: string };
}) {
  const { selectedUnit } = useApi();

  function formatValue(attr: string, val: number, sourceUnit: string): string {
    const attrLower = attr.toLowerCase();
    if (attrLower === "temperature" || attrLower.includes("temp") || attr === "Max / Min" || attr === "Feels Like") {
      if (selectedUnit === "Metric" && sourceUnit === "F") {
        return `${((val - 32) / 1.8).toFixed(1)}°C`;
      }
      return `${val.toFixed(1)}°F`;
    }
    return `${val} ${sourceUnit}`;
  }

  return (
    <div className="bg-sky-50 rounded-xl p-4 shadow-sm">
      <p className="text-sm text-gray-500 mb-1">{weatherAttribute}</p>
      <p className="text-xl font-bold">
        {formatValue(weatherAttribute, item1.value, item1.unit)}
        {item2 && (
          <>
            {" / "}
            {formatValue(weatherAttribute, item2.value, item2.unit)}
          </>
        )}
      </p>
    </div>
  );
}

export default InnerDisplayCard;