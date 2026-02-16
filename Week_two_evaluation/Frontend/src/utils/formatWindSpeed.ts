import type { Units } from "../interfaces/interfaces";

export default function formatWindSpeed(speedMph: number, unit: Units): string {
  if (unit === "Imperial") {
      return `${speedMph.toFixed(2)} mph`;
  }
  return `${(speedMph * 0.44704).toFixed(2)} m/s`;

}
