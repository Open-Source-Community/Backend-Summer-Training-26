export interface Treasure {
  id: number;
  name: string;
  valueInGold: number;
}

// In-memory treasure vault
export const treasures: Treasure[] = [
  { id: 1, name: "Golden Compass", valueInGold: 500 },
  { id: 2, name: "Pearl of Tides", valueInGold: 750 },
];