# Session 1: TypeScript & Asynchronous code

## ⚠️  Very Important Note ⚠️ 
> Do not change any variable or function name or header in the template, doing so will affect your evaluation.
>
> Write your solution inside the predefined solution.ts template file — do not rename it, and do not change any predefined lines already inside it.
 

---

##  The Scenario

> You, a recent Talabat intern, was tasked with building an order management system for a restaurant. The system lets you track menu items and inventory, model incoming orders, detect new orders as they arrive, prepare them through a sequence of async steps, and finally hand them off for delivery.

---


##  The Task


### 1️⃣ Define the Menu Item

Create an interface `MenuItem` with the following properties:
```
- name
- price
- quantity
```
### 2️⃣ Stock the Cart

Create an array called `inventory` **with the correct type**. Fill it with the example values given in the template.


### 3️⃣ Model an Order

(a) Create an enum called `OrderStatus` with the following statuses:
```
{
    Pending,
    Preparing,
    Ready,
    Delivered
}
```
(b) Create a type `Order` containing:
- array of menu items
- total price
- order status

(c) Create a orders array **with the correct type** to test the later steps. Fill it with the example values given in the template.

### 4️⃣ Watch for New Orders

Write a `checker(): void` function that every 5 seconds checks for incoming orders. Once a pending order is found, have it stop checking.

### 5️⃣ Get Cooking

Write an async function `prepareMeal(order: Order): Promise<void>` that prepares a pending order through 3 simulated async steps:
1. Change the order status to `Preparing`.
2. await `checkAvailability(order)` — a helper function that you will implement. It returns true if the inventory has enough stock for the order items.
3. await `packOrder(order)` — a helper function that you will implement. It removes the ordered items from inventory.
4. Set status to `Ready` and print it to the console.


### 6️⃣ Send It Out!

Once an order's status is Ready, all that's left is to deliver it to the customer. 

Implement `deliverOrder(order: Order): void` function that does the following:
1. If the order isn't ready yet, print `Not Ready`.
2. If it is ready, change its status to `Delivered`. 
---

## 💡 Hints
- In the `checkAvailability` and `packOrder` functions, we need to get the stock of the current order first before comparing and updating quantities.
- `setTimeout` doesn't return a Promise on its own — you'll need to wrap it in new Promise(...) to await it inside an async function.

## ⚠️ Common Pitfalls
- Forgetting to mark helper functions like `checkAvailability` and `packOrder` as async, then trying to use await on them.
- Clearing intervals after their purpose is finished.
---

## Expected Output / Acceptance Criteria

- [ ] `setInterval` checker logs on each run and stops itself once a pending order is found.
- [ ] `prepareMeal` correctly awaits all 3 steps in order and updates status to Ready.
- [ ] Delivery ends with status `Delivered`.
- [ ] No implicit `any` anywhere in the solution.
