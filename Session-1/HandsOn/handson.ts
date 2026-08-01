// =====================================
// 🌊 Session 1 — The Lost Trials of Atlantis
// Solution
// =====================================

// =====================================
// 🗝️ Trial 2 — The Whispering Statues
// =====================================

// TypeScript catches many errors before the program runs.
// TypeScript provides better autocomplete and developer productivity.


// =====================================
// 🗝️ Trial 3 — The Treasure Vault
// =====================================

let captainName: string = "Sindbad";

let treasureValue: number = 5000;

let gateOpened: boolean = true;

let mysteryBox: any = "Golden Key";
mysteryBox = 777;

let treasures: string[] = [
  "Golden Compass",
  "Magic Sword",
  "Ancient Scroll",
  "Crystal Orb",
];

console.log("Treasures:", treasures);


// =====================================
// 🗝️ Trial 4 — The Crew Manifest
// =====================================

interface Sailor {
  name: string;
  role: string;
  age: number;
}

const elsiny: Sailor = {
  name: "Elsiny",
  role: "Navigator",
  age: 24,
};

console.log("Crew Role:", elsiny.role);


// =====================================
// 🗝️ Trial 5 — Sindbad's Command
// =====================================

function blessSailor(name: string): string {
  return `May the sea protect you, ${name}!`;
}

console.log(blessSailor("Omar"));


// =====================================
// 🗝️ Trial 6 — The Twin Currents
// =====================================

console.log("\n--- Trial 6 ---");
console.log("Journey begins");

setTimeout(() => {
  console.log("Slow current finished");
}, 0);

// Heavy computation
for (let i = 0; i < 1_000_000_000; i++) {}

console.log("Heavy current finished");


// =====================================
// 🗝️ Trial 7 — The Echoes of the Deep
// =====================================

function sindbadSpeak(callback: () => void): void {
  console.log("\nSindbad: Elsiny!");
  callback();
}

function elsinySpeak(): void {
  console.log("Elsiny: I'm here, Captain!");
}

sindbadSpeak(elsinySpeak);


// =====================================
// 🗝️ Trial 8 — The Final Seal
// =====================================

function enterAtlantis(accepted: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    if (accepted) {
      resolve("Welcome to Atlantis!");
    } else {
      reject("Atlantis disappeared beneath the sea.");
    }
  });
}

async function beginAdventure(): Promise<void> {
  try {
    const result = await enterAtlantis(true);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

beginAdventure();