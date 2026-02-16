import type { Units } from "../interfaces/interfaces";

export default function formatWindSpeed(speedMph: number, unit: Units): string {
  if (unit === "Metric" || unit === "Standrad") {
    return `${(speedMph * 0.44704).toFixed(1)} m/s`;
  }
  return `${speedMph.toFixed(1)} mph`;
}
