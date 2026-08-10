# Session 3: Routes, APIs, Project Structure & CRUD

## 🛠️ The Task

1️⃣ **Open your ready project from prerequisites 3**

2️⃣ **View all treasures**
* In `controllers/treasureController.ts`, add `GET /treasure` to return all treasures.
* Wire it up in `routes/treasureRoutes.ts`, mounted under `/treasure` in `app.ts`.

3️⃣ **Get a treasure by id**
* In `controllers/treasureController.ts`, add `GET /treasure/:id` to return a single treasure.
* Return `200` on success, `404` if the id doesn't exist.
* Wire it up in `routes/treasureRoutes.ts`, mounted under `/treasure` in `app.ts`.


---

## 💡 Hints

- Add `app.use(express.json())` before your routes, or Express won't parse the request body.
- `req.params.id` is a string — use `Number()` or `parseInt()` before comparing it to numeric ids.

## ⚠️ Common Pitfalls

- Forgetting to export functions/variables needed in other files.
---
