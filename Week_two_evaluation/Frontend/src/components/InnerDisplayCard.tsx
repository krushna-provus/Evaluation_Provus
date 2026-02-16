import { useApi } from "../hooks/useApi";
import formatValueByUnit from "../utils/formatValueByUnits";

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



  return (
    <div className="bg-sky-50 rounded-xl p-4 shadow-sm">
      <p className="text-sm text-gray-500 mb-1">{weatherAttribute}</p>
      <p className="text-xl font-bold">
        {formatValueByUnit(selectedUnit,weatherAttribute, item1.value, item1.unit)}
        {item2 && (
          <>
            {" / "}
            {formatValueByUnit(selectedUnit,weatherAttribute, item2.value, item2.unit)}
          </>
        )}
      </p>
    </div>
  );
}

export default InnerDisplayCard;