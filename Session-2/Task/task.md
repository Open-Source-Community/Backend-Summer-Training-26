# Session 2: Express.js & TypeScript

## ⚠️ Very Important Notes ⚠️

> Do not change any variable or function name or header in the template or file name, doing so will affect your evaluation.
>
> Write your solution inside the predefined `solution.ts` template file — do not rename it, and do not change any predefined lines already inside it.

---

# The Scenario

> Fatma and her brother Sayed own **Koshary El-Wekala**, a famous Koshary cart
> in the heart of Cairo.
>
> Unfortunately, they have one very annoying customer named **Abdo**, who visits
> every day asking endless questions:
>
> - What's on today's menu?
> - Do you have any cheap meals?
> - What's the cheapest and most expensive bowl?
>
> To save time and automate their restaurant, you have been hired to build a lightweight REST API using **Express.js** and **TypeScript**.

---

# The Task

## 0️⃣ Reopen the Repository You Cloned in Session 1

You already cloned your personal repo from the **Sindbad-The-Backend-of-Atlantis** org while working on **Task_1** — you don't clone it again here.

1. Open VS Code and reopen that same cloned folder (**File → Open Folder**, pick the same repo folder from Task 1).
2. If you no longer have it locally for any reason, go to **https://github.com/Sindbad-The-Backend-of-Atlantis**, find your personal repo, click the green **Code** button, copy the **HTTPS** URL, and run `git clone <the URL>` — same as in Session 1.
3. Inside that repo, you'll find `Task_1`, `Task_2`, `Task_3`, `Task_4`, and a `readme.md`. This document lives in **`Task_2/task2.md`**, and your code goes inside **`Task_2/solution.ts`** — that file already exists with a starter template. Open it now; you'll be filling in the section marked `// Write your solution below.`

> ⚠️ **Do not delete or rewrite the last two lines of `solution.ts`** (`// ⚠️ Do NOT remove or modify the export below.` and `module.exports = app;`) — the evaluator depends on that export existing exactly as-is.

---

## 1️⃣ Install What You'll Need

All the setup work (Node.js, npm, TypeScript, VS Code) should already be in place from the Session 1 and Session 2 prerequisite guides. From inside your cloned repo, you just need to install the packages this task depends on.

If your repo doesn't already have a `package.json` at its root, create one first:

```bash
npm init -y
```

Then install Express itself:

```bash
npm install express
```

And the development tools — TypeScript, a TypeScript-aware runner, nodemon for auto-restart, and the type declarations for Node and Express:

```bash
npm install -D typescript tsx nodemon @types/node @types/express
```

> 💡 If you already ran similar install commands in the Session 2 prerequisites, running them again here is harmless — npm will just confirm the packages are already installed.

You'll run your solution the same way you did in the prerequisites guide:

```bash
nodemon --exec tsx Task_2/solution.ts
```

(Adjust the path if you're already `cd`'d into the `Task_2` folder — in that case just `nodemon --exec tsx solution.ts`.)

---

## 2️⃣ Define the Data Model

Create an interface called **KosharyBowl**.

```ts
interface KosharyBowl {
    id: number;
    name: string;
    size: "Small" | "Medium" | "Large" | "Mega";
    price: number;
    ingredients: string[];
    available: boolean;
}
```

Create a hardcoded array containing **at least 5 bowls**.

Include:

- Different sizes
- Different prices
- Available and unavailable bowls

---

## 3️⃣ Create the Express Server

Create an Express application.

Requirements:

- Listen on port **3000**
- Configure **nodemon**
- Enable automatic restart after code changes

---

## 4️⃣ Implement Route 1: GET /

Create a root endpoint.

### Route

```http
GET /
```

### Expected Response

```json
{
    "message": "Welcome to Koshary El-Wekala! (Abdo is not welcome though!)"
}
```

---

## 5️⃣ Implement Route 2: GET /menu

Return the complete menu.

```http
GET /menu
```

---

## 6️⃣ Implement Route 3: GET /menu/cheap

Return only bowls where

```ts
price < 30
```

---

## 7️⃣ Implement Route 4: GET /stats

Calculate:

- Total bowls
- Available bowls
- Average price
- Minimum price
- Maximum price

Expected response:

```json
{
    "totalBowls": 5,
    "availableBowls": 4,
    "averagePrice": 35,
    "minPrice": 15,
    "maxPrice": 60
}
```

---

## 8️⃣ Test Using Postman

Test the following endpoints:

```http
GET /
GET /menu
GET /menu/cheap
GET /stats
```

Verify:

- Response Body
- HTTP Status Code
- Returned Data

---

## 9️⃣ Commit and Push Your Solution

Once your endpoints work and you've tested them in Postman, save your work back to your own repository:

```bash
git add Task_2/solution.ts
git commit -m "Solve Task 2: Koshary El-Wekala API"
git push
```

---

# 💡 Hints

- Use `filter()` to retrieve available or cheap bowls.
- Use `map()` to extract prices from the menu.
- Use `reduce()` to calculate the average price.
- Use `Math.min()` and `Math.max()` to find the price range.
- Return responses using `res.status().json()`.
- Use `express.json()` middleware before defining routes.
- Test every endpoint using Postman.

---

# ⚠️ Common Pitfalls

- Forgetting to install Express.
- Running commands outside the project directory.
- Port **3000** already in use.
- Implicit `any` errors.
- Missing imports or exports.
- Renaming `solution.ts`, or editing the predefined header/export lines inside it.
- Cloning the wrong repository, or a classmate's repository instead of your own.

---

# ✅ Expected Output / Acceptance Criteria

- [ ] Working inside your own repo from the **Sindbad-The-Backend-of-Atlantis** org (same one cloned in Session 1).
- [ ] Project initialized with **Node.js**, **TypeScript**, and **Express**.
- [ ] Server runs successfully on **port 3000**.
- [ ] Nodemon reloads automatically.
- [ ] `KosharyBowl` interface implemented correctly.
- [ ] `GET /` returns the welcome message.
- [ ] `GET /menu` returns the complete menu.
- [ ] `GET /menu/cheap` returns bowls priced under **30 EGP**.
- [ ] `GET /stats` returns correct statistics.
- [ ] All endpoints tested successfully using **Postman**.
- [ ] The project compiles without any TypeScript errors.
- [ ] `solution.ts`'s predefined lines (including the `module.exports = app;` line) are untouched.
- [ ] Solution committed and pushed to your repository.
