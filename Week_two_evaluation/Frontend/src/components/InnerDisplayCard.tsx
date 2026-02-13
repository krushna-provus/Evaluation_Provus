function InnerDisplayCard({
  weatherAttribute,
  item1,
  item2
}: {
  item1: { value: number; unit: string };
  weatherAttribute: string;
  item2?: { value: number; unit: string };
}) {
  const formatValue = (val: number, attr: string) => {
    const attrLower = attr.toLowerCase();
    if (attrLower.includes("temp") || attrLower.includes("feels")) {
      return Math.round(val);
    }
    return Math.round(val);
  };

  const value1Display = formatValue(item1.value, weatherAttribute);
  const value2Display = item2 ? formatValue(item2.value, weatherAttribute) : null;

  return (
    <div className="bg-sky-100 rounded-xl p-4 text-center shadow-sm">
      <p className="text-sm text-gray-500">{weatherAttribute}</p>
      <p className="text-xl font-semibold">
        {value1Display}{item1.unit}
        {value2Display !== null && (
          <> / {value2Display}{item2!.unit}</>
        )}
      </p>
    </div>
  );
}

export default InnerDisplayCard;