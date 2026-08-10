# Session 3: Express.js CRUD API

## ⚠️ Very Important Notes ⚠️

> Do not change any file, folder name, route paths & names, folders

`server.ts` is already provided for you inside `Task_3/solution/` and already exports the Express app (`module.exports = app;`) — do not remove, rename, or modify that file or any predefined lines already inside it.

### Create your folder structure to match **exactly** as follows, inside `Task_3/solution`:

```txt
├── controllers
│   └── book.controller.ts
├── middlewares
│   └── validateBook.middleware.ts
├── models
│   └── book.model.ts
├── routes
│   └── book.router.ts
└── server.ts
```

### Your route paths must also match **exactly** as specified in the task:

```http
GET    /books
GET    /books/:id
POST   /books
PUT    /books/:id
DELETE /books/:id
```

Changing folder names, route paths, or file names, or modifying the predefined lines in `server.ts`, **will affect your evaluation.**

---

# The Scenario
>
>Your friend Noah just opened a small independent bookstore.
>
> Right now, he's tracking his entire inventory in a spreadsheet that keeps crashing every time two people try to edit it at once.
>
>He's asked you to build him a simple backend so he (and eventually his staff) can manage the book catalog properly — add new books, look them up, update prices or stock, and remove books that are discontinued.
>
>Nothing fancy, just something that actually works and won't corrupt itself.
>
---

# The Task

## 1️⃣ Set up the Project

Initialize a **Node.js + TypeScript** project.

Install:

- express
- typescript
- @types/node
- @types/express
- nodemon
- tsx

Set up the folder structure as shown previously.

The server should listen on **port 3000** and log a message on start.

---

## 3️⃣ Implement the Book Routes

In `controllers/book.controller.ts`, implement the routes below. Mount them through `routes/book.router.ts` under `/books`.

### Get All books

```http
GET /books
```

Requirements:

- Return **200 OK** with the full catalog.

---

### Get one book by id

```http
GET /books/:id
```

Requirements:

- Return **200 OK** with the matching book.
- Return **404 Not Found** with a clear message if the book does not exist.

---

### Creat new book

```http
POST /books
```

Requirements:

- Auto-generate the book ID.
- Save the new book.
- Return **201 Created**.
- Validated by `validateBook.middleware.ts` before reaching the controller.


Create the validation middleware in:

```text
middleware/validateBook.middleware.ts
```

It must validate:

- `title` is a non-empty string
- `author` is a non-empty string
- `price` is a positive number

Return **400 Bad Request** if validation fails.
Attach the middleware before the controller.

---

### Update book by id

```http
PUT /books/:id
```

Requirements:

- Update the existing book.
- Return **200 OK**.
- Return **404 Not Found** if the ID does not exist.
- Validated by `validateBook.middleware.ts` before reaching the controller.

---

### Delete  book by id

```http
DELETE /books/:id
```

Requirements:

- Return **200 OK** with a confirmation message.
- Return **404 Not Found** if the book does not exist.

---


## 7️⃣ Test Everything in Postman

Test the complete CRUD lifecycle:

- Create a book.
- Retrieve it.
- Update it.
- Delete it.
- Try retrieving it again.

Also test:

- Invalid IDs.
- Invalid POST requests.
- Invalid PUT requests.

---

# 💡 Hints

- Add `app.use(express.json())` before your routes, or Express won't parse the request body.
- Use `return` before calling `res.status(...)` inside middleware — otherwise the request keeps going to the controller even after you've rejected it.
- `req.params.id` is always a string — use `parseInt()` before comparing it to a numeric id.
- Keep controller functions small and focused — one job each.

---

# ⚠️ Common Pitfalls

- Forgetting to export functions/interfaces needed in other files.
- Skipping the `return` in validation middleware, letting invalid requests slip through to the controller anyway.
- Not distinguishing between **404 Not Found** and **400 Bad Request**.
- Mutating the in-memory array in a way that breaks after a bad edit (for example, losing a book's `id` during an update).

---

# ✅ Expected Output / Acceptance Criteria

- [ ] Server starts and logs a message on the correct port.
- [ ] `GET /books` and `GET /books/:id` work correctly, including **404 Not Found** for a missing book.
- [ ] `POST /books` creates a book and returns **201 Created**, or **400 Bad Request** for invalid input.
- [ ] `PUT /books/:id` updates a book and returns **200 OK**, or **404 Not Found** / **400 Bad Request** when appropriate.
- [ ] `DELETE /books/:id` removes a book and returns **200 OK**, or **404 Not Found** if the book does not exist.
- [ ] All endpoints and edge cases are verified using **Postman**.
- [ ] The project compiles cleanly without any TypeScript errors.
