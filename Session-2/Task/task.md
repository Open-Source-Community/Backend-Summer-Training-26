# Session 2: Express.js & TypeScript

## ⚠️ Very Important Notes ⚠️

> Do not change any variable or function name or header in the template or file name, doing so will affect your evaluation.
>
> Write your solution inside the predefined `solution.ts` template file — do not rename it, and do not change any predefined lines already inside it.
 

---

# The Scenario

> Fatma and her brother Sayed own **Koshary El-Wekala**, a famous Koshary cart > in the heart of Cairo.
> 
> Unfortunately, they have one very annoying customer named **Abdo**, who visits > every day asking endless questions:
> 
> - What's on today's menu?
> - Do you have any cheap meals?
> - What's the cheapest and most expensive bowl?
> 
> To save time and automate their restaurant, you have been hired to build a lightweight REST API using **Express.js** and **TypeScript**.
> 
---

# The Task

## 1️⃣ Initialize the Project

Create a new Node.js project.

Configure:

- TypeScript
- Express.js
- Nodemon

Install the required packages:

```bash
npm init -y
npm install express
npm install -D typescript ts-node nodemon @types/node @types/express
```

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

---

# ✅ Expected Output / Acceptance Criteria

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