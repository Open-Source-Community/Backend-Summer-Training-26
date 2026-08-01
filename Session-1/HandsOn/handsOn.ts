// ============================================================
// Session 1 — The  First Island
// ============================================================

// ------------------------------------------------------------
// Trial 1: Open the gate
// (Project setup lives in tsconfig.json — this file is the
// ".ts file" that proves the gate now understands TypeScript.)
// ------------------------------------------------------------

console.log("The gate hums... it recognizes the old tongue.");

// ------------------------------------------------------------
// Trial 2: The treasure vault
// One variable each of string, number, boolean, and any,
// plus an array of treasure names.
// ------------------------------------------------------------

const treasureName: string = "Golden Compass";
const treasureValue: number = 4200;
const isCursed: boolean = false;
const mysteryItem: any = "Unknown Relic";

const treasureNames: string[] = ["Golden Compass", "Pearl of Tides", "Sun Amulet"];

console.log("Treasure found:", treasureName, treasureValue, isCursed, mysteryItem);
console.log("All treasures:", treasureNames);

// ------------------------------------------------------------
// Trial 3: The crew manifest
// Interface Sailor with name, role, age.
// ------------------------------------------------------------

interface Sailor {
  name: string;
  role: string;
  age: number;
}

const elsiny: Sailor = {
  name: "Elsiny",
  role: "Navigator",
  age: 27,
};

console.log("Sailor manifest entry:", elsiny.name);

// ------------------------------------------------------------
// Trial 4: Sindbad's command
// Typed function: takes a sailor's name, returns a blessing.
// ------------------------------------------------------------

function giveBlessing(sailorName: string): string {
  return `May the tides guide you safely, ${sailorName}.`;
}

console.log(giveBlessing(elsiny.name));

// ------------------------------------------------------------
// Trial 5: The final seal
// Promise that resolves or rejects, handled with
// async/await and try/catch.
// ------------------------------------------------------------

function checkGateSeal(crewIsWorthy: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    if (crewIsWorthy) {
      resolve("The seal glows gold. The gate opens.");
    } else {
      reject("The seal stays dark. The gate remains shut.");
    }
  });
}

async function passThroughGate(): Promise<void> {
  try {
    const result: string = await checkGateSeal(true);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

passThroughGate();
