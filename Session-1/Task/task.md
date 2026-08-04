# Session 1: TypeScript & Asynchronous code

## ⚠️  Very Important Note ⚠️
> Do not change any variable or function name or header in the template, doing so will affect your evaluation.
>
> Write your solution inside the predefined solution.ts template file — do not rename it, and do not change any predefined lines already inside it.

---

## The Scenario
> You, a recent Talabat intern, was tasked with building an order management system for a restaurant. The system lets you track menu items and inventory, model incoming orders, detect new orders as they arrive, prepare them through a sequence of async steps, and finally hand them off for delivery.

---

## The Task

### 0️⃣ Clone Your Repository

Your task template lives in your own personal repository under the Sindbad-The-Backend-of-Atlantis organization — you don't create a new project from scratch, you clone the one that was made for you.

1. Go to https://github.com/Sindbad-The-Backend-of-Atlantis.
2. Find your personal repository in the list (it's named after you, e.g. `backend-training-tasks-omnia-ibrahiim`). If you can't see it, make sure you're signed in with the GitHub account you were added with.
3. Click the green Code button on your repo page, copy the HTTPS URL, then in your terminal run:
git clone <the URL you copied>

4. Open the cloned folder in VS Code (**File → Open Folder**). You should see Task_1, Task_2, Task_3, Task_4, and a readme.md.
5. Your code for this task goes inside `Task_1/solution.ts` — that file already exists with a starter template. Open it now; you'll be filling in the sections described below.

> ⚠️ Keep this same cloned folder around — you'll reuse it for every task in this training, including Session 2 and beyond. There's no need to clone a fresh copy each time.

### 1️⃣ Define the Menu Item
Create an interface MenuItem with the following properties:- name
- price
- quantity
### 2️⃣ Stock the Cart
Create an array called inventory with the correct type. Fill it with the example values given in the template.
### 3️⃣ Model an Order
(a) Create an enum called OrderStatus with the following statuses:{
    Pending,
    Preparing,
    Ready,
    Delivered
}
(b) Create a type Order containing:
- array of menu items
- total price
- order status
(c) Create a orders array with the correct type to test the later steps. Fill it with the example values given in the template.
### 4️⃣ Watch for New Orders
Write a checker(): void function that every 5 seconds checks for incoming orders. Once a pending order is found, have it stop checking.
### 5️⃣ Get Cooking
Write an async function prepareMeal(order: Order): Promise<void> that prepares a pending order through 3 simulated async steps:
1. Change the order status to Preparing.
2. await checkAvailability(order) — a helper function that you will implement. It returns true if the inventory has enough stock for the order items.
3. await packOrder(order) — a helper function that you will implement. It removes the ordered items from inventory.
4. Set status to Ready and print it to the console.
### 6️⃣ Send It Out!
Once an order's status is Ready, all that's left is to deliver it to the customer.
Implement deliverOrder(order: Order): void function that does the following:
1. If the order isn't ready yet, print Not Ready.
2. If it is ready, change its status to Delivered.

### 7️⃣ Commit and Push Your Solution

Once your functions are working the way you expect, save your work back to your own repository:
git add Task_1/solution.ts
git commit -m "Solve Task 1: Order management system"
git push

> 💡 If this is the first time you're pushing from this clone, Git may ask you to sign in or set up your name/email (`git config user.name "..."` and `git config user.email "..."`) — do that once and it'll remember for future pushes.

---

## 💡 Hints
- In the checkAvailability and packOrder functions, we need to get the stock of the current order first before comparing and updating quantities.
- setTimeout doesn't return a Promise on its own — you'll need to wrap it in new Promise(...) to await it inside an async function.

## ⚠️ Common Pitfalls
- Forgetting to mark helper functions like checkAvailability and packOrder as async, then trying to use await on them.
- Clearing intervals after their purpose is finished.
- Cloning the wrong repository, or a classmate's repository instead of your own.

---

## Expected Output / Acceptance Criteria
- [ ] Your own repo cloned from the Sindbad-The-Backend-of-Atlantis org.
- [ ] setInterval checker logs on each run and stops itself once a pending order is found.
- [ ] prepareMeal correctly awaits all 3 steps in order and updates status to Ready.
- [ ] Delivery ends with status Delivered.
- [ ] No implicit any anywhere in the solution.
- [ ] Solution committed and pushed to your repository.
