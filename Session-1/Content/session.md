# Session 1: TypeScript Introduction & Asynchronous Programming


##### slides: https://canva.link/qfiep97r496qnqm
---

## 0. Backend Basics 

**Backend** = the business logic, database interaction, and communication layer of an app — the part users don't see but that makes everything work.

- **Frontend** → what the user sees.
- **Backend** → what makes it work.

**Core responsibilities of a backend engineer:**
- **Server Logic** – process user actions and decide how the app responds.
- **Database Management** – design how data is stored and retrieved (SQL/NoSQL).
- **API Development** – build endpoints so the frontend can talk to the server.
- **Security & Auth** – protect data, prevent attacks, manage logins.

---

## Part 1: TypeScript

### 1.1 What is TypeScript & Why?

TypeScript (TS) is a **superset of JavaScript (JS)** — it adds features on top of JS, mainly **static types**.

**JavaScript's two problems:**
1. **Dynamic types** — a variable's type can change anytime, so mistakes aren't caught until the code runs.
2. **Interpreted** — the code runs line by line as it executes, instead of being fully checked beforehand.

**Compile time vs Runtime:**
| | Compile time | Runtime |
|---|---|---|
| What happens | Code is checked for errors before running | Code actually executes |
| Example | Your editor underlining an error | The program crashing while running |

**Dynamic vs Static typing:**
- **Dynamic typing** (JS, Python) → type checking happens at runtime → errors show up late, sometimes in production.
- **Static typing** (C++, Java) → type checking happens while writing code → errors are caught early.

> Note: JavaScript itself is **interpreted**, not compiled. The red underlines you see in your editor come from the editor's own checking tools, not from JS itself.

**The solution:** Microsoft created TypeScript so that:
- Code is type-annotated and safer.
- Bugs are caught early (before running).
- Large projects are easier to maintain.

**Definition:** TypeScript is a superset of JavaScript that adds static types (while still allowing dynamic typing when needed). It is not "compiled" — it is **transpiled**, meaning it's converted into regular JavaScript before running.

```
your-code.ts  --(transpile)-->  your-code.js  --(run with Node.js/browser)-->  output
```

---

### 1.2 Basic Types

```typescript
let username: string = "Sindbad";
let age: number = 25;
let isActive: boolean = true;
```

**The `any` type** — used when you don't know or don't care about the type (behaves like plain JS):

```typescript
let data: any = "hello";
data = 42; // no error, `any` disables type checking
```

**Union types** — a variable can hold more than one type, using `|`:

```typescript
let id: string | number;
id = "abc123";
id = 123; // both valid
```

**Displaying data:**
```typescript
console.log("Hello, world!");
```

**Template literals** — use `${}` inside backticks (`` ` ``) to insert variables into a string (called **string interpolation**):

```typescript
console.log(`Welcome, ${username}! You are ${age} years old.`);
```

**Comparison:**
- `==` **Loose equality** → compares values only (ignores type).
- `===` **Strict equality** → compares both value and type. *(Always prefer `===` in TS/JS.)*

```typescript
5 == "5";   // true  (loose — different types, same value)
5 === "5";  // false (strict — different types)
```

---

### 1.3 Arrays

```typescript
let treasures: string[] = ["gold", "map", "compass"];
let scores: number[] = [10, 20, 30];
let mixed: (string | number)[] = ["gold", 100];
```

---

### 1.4 Conditions & Loops

**If conditions:**
```typescript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

**For loop:**
```typescript
for (let i = 0; i < treasures.length; i++) {
  console.log(treasures[i]);
}
```

**While loop:**
```typescript
let i = 0;
while (i < treasures.length) {
  console.log(treasures[i]);
  i++;
}
```

---

### 1.5 Setting Up a TS Project

1. **Create a TS file**: `filename.ts`
2. **Compile (transpile) it to JS**:
   ```
   tsc fileName.ts
   ```
3. **Run the resulting JS file**:
   ```
   node fileName.js
   ```
4. **Create a config file** so `tsc` knows your project settings:
   ```
   tsc --init
   ```
   This generates `tsconfig.json`. Two commonly used options:
   - `target` → sets the JS version to output (e.g. ES2020).
   - `strict` → enables all strict type-checking rules (recommended for catching more bugs).

---

### 1.6 Objects & Interfaces

**Object type** — the way JS groups related data; in TS we describe its shape:

```typescript
let sailor: { name: string; role: string; age: number } = {
  name: "Elsiny",
  role: "Navigator",
  age: 24,
};
```

Writing the type inline gets repetitive if you need multiple objects with the same shape — that's where **interfaces** come in.

**Interfaces** — think of them like `struct`s in C++: a reusable blueprint for an object's shape.

```typescript
interface Sailor {
  name: string;
  role: string;
  age: number;
}

const elsiny: Sailor = { name: "Elsiny", role: "Navigator", age: 24 };
const omar: Sailor = { name: "Omar", role: "Warrior", age: 27 };
```

**Default / optional values** — use `?` to make a property optional:

```typescript
interface Sailor {
  name: string;
  role: string;
  age?: number; // optional, can be left out
}
```

---

### 1.7 Functions

```typescript
function greetSailor(name: string): string {
  return `Welcome aboard, ${name}!`;
}
```
- `name: string` → parameter type.
- `: string` after `()` → return type.

**Arrow functions** — a shorter way to write functions:

```typescript
const greetSailor = (name: string): string => {
  return `Welcome aboard, ${name}!`;
};

// Even shorter, if the function is just one return statement:
const greetSailor = (name: string): string => `Welcome aboard, ${name}!`;
```

**Another way to write it** — type the variable itself with a function type, so the arrow function is left with just the parameter names and the body (no types repeated inline):

```typescript
const greetSailor: (name: string) => string = (name) => {
  return `Welcome aboard, ${name}!`;
};
```
Both versions do the exact same thing — the difference is *where* the types are written: on the parameters/return directly, or once on the variable as a function type.

---

### 1.8 Classes

*(Not covered in the slides)*

A **class** is a blueprint for creating objects that bundles data (properties) and behavior (methods) together — similar to a `class` in C++/Java.

```typescript
class Sailor {
  name: string;
  role: string;
  age: number;

  constructor(name: string, role: string, age: number) {
    this.name = name;
    this.role = role;
    this.age = age;
  }

  greet(): string {
    return `${this.name} the ${this.role} reporting for duty!`;
  }
}

const elsiny = new Sailor("Elsiny", "Navigator", 24);
console.log(elsiny.greet());
```

- `constructor` runs automatically when you create a new object with `new`.
- **Interface vs Class:** an interface only describes the *shape* of data (no logic); a class can hold both data **and** methods (behavior).

---

## Part 2: Asynchronous Programming

### 2.1 Why Asynchronous Programming?

Imagine prepping for a trip with 3 tasks:
- Boil water (10 min)
- Cook food (20 min)
- Pack bag (10 min)

**Synchronous (blocking)** — one task at a time: Boil → Cook → Pack = **40 minutes**.

**Asynchronous (non-blocking)** — start boiling, and *while waiting*, cook and pack at the same time = **20 minutes saved**.

**When you NEED async:**
- API calls (fetching data from servers)
- Reading/writing files
- Database queries

**Why backend especially needs async:** servers handle hundreds/thousands of requests at once. Without async, the server would freeze while waiting on each one — async keeps it responsive.

---

### 2.2 Timers

Timers schedule code to run after a delay or repeatedly.

| Function | What it does |
|---|---|
| `setTimeout()` | Runs code **once** after a delay |
| `clearTimeout()` | Cancels a pending `setTimeout` |
| `setInterval()` | Runs code **repeatedly** every N milliseconds |
| `clearInterval()` | Stops a running `setInterval` |

```typescript
const timeoutId = setTimeout(() => {
  console.log("This runs once, after 2 seconds");
}, 2000);
clearTimeout(timeoutId); // cancels it before it runs

const intervalId = setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);
clearInterval(intervalId); // stops it
```

⚠️ **Common pitfall:** forgetting to clear an interval causes it to run forever in the background → memory leaks.

---

### 2.3 Callbacks

**Problem:** async functions don't return a result right away — they return immediately, and the result arrives later. So you must tell them: *"when you're done, call this function."*

**A callback** = a function passed as an argument to another function, to be run later, once the async task finishes.

**Analogy:** you send a sailor to explore an island (start async task) and tell him "come tell me what you find" (the callback). You keep doing other things while you wait. When he returns, he calls you back with the news.

**Node.js convention** — callbacks usually take two parameters:
```typescript
function exploreIsland(callback: (error: string | null, result?: string) => void) {
  // ...async work...
  callback(null, "Found treasure!"); // (error, result)
}
```

**Callback Hell** — when several async operations depend on each other, callbacks get nested deeply:

```typescript
findIsland((err, island) => {
  exploreIsland(island, (err, clues) => {
    findTreasure(clues, (err, treasure) => {
      // deeply nested — hard to read, maintain, and debug
    });
  });
});
```
This "pyramid shape" is hard to read, hard to maintain, has repetitive error handling, and is hard to debug.

---

### 2.4 Promises

**The solution to callback hell.**

**A Promise** = an object representing the eventual result of an async operation — a placeholder for a value you'll get in the future.

**Analogy:** ordering food at a restaurant. Your food isn't ready immediately, but the restaurant *promises* it will either deliver your food, or tell you something went wrong.

```typescript
const orderFood = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Food is ready!");
  } else {
    reject("Kitchen ran out of ingredients");
  }
});
```
- `resolve` and `reject` are just function parameters — `resolve`/`reject` are the conventional names, and **you** call them explicitly when the async work finishes.
- **`resolve()`** → operation succeeded → Promise goes from `pending` to `fulfilled`.
- **`reject()`** → operation failed → Promise goes from `pending` to `rejected`.

**Getting the result:**
```typescript
orderFood
  .then((result) => console.log(result))   // runs if resolved
  .catch((error) => console.log(error));   // runs if rejected
```

---

### 2.5 Async/Await

**Syntactic sugar over Promises** — makes async code look and behave like normal synchronous code (easier to read).

- `async` → declares a function that works with Promises.
- `await` → pauses execution until the Promise resolves (can only be used inside an `async` function).

```typescript
async function getFood() {
  try {
    const result = await orderFood; // waits here until resolved/rejected
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```

**Key rules:**
- `await` only works inside `async` functions.
- `async` functions always return a Promise.
- `await` pauses the function until the Promise settles (resolves or rejects).

---

### 2.6 Comparing the Three Approaches

| Style | Use when... |
|---|---|
| **Callbacks** | Rarely used directly today — mainly seen in older Node.js APIs |
| **Promises (`.then`/`.catch`)** | You have simple chains or prefer a functional, chain-based style |
| **Async/Await** | You want clean, sequential code that reads like normal sync code *(most common in modern code)* |

Same logic, three ways:

```typescript
// Callback version
findIsland((err, island) => {
  exploreIsland(island, (err, treasure) => console.log(treasure));
});

// Promise version
findIsland()
  .then((island) => exploreIsland(island))
  .then((treasure) => console.log(treasure));

// Async/Await version
async function goExploring() {
  const island = await findIsland();
  const treasure = await exploreIsland(island);
  console.log(treasure);
}
```

---
