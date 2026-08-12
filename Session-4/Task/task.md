# Task 4 : Crew Management API

### ⚠️ Very Important Notes ⚠️

> Do not change any file, folder name, route paths & names, folders

`server.ts` is already provided for you inside `Task_4/solution/` and already exports the Express app (`module.exports = app;`) — do not remove, rename, or modify that file or any predefined lines already inside it.

### Create your folder structure to match **exactly** as follows, inside `Task_4/solution`:
```txt
├── config
│   ├── db.ts
│   └── swagger.ts
├── controllers
│   └── crew.controller.ts
├── middlewares
│   ├── validateCrewUpdate.ts
│   └── validateMission.ts
├── models
│   └── crew.model.ts
├── routes
│   └── crew.router.ts
└── server.ts
└── .env
```

### Your route paths must also match **exactly** as specified in the task:

```http
GET    /crew
GET    /crew/:id
DELETE /crew/:id
PATCH  /crew/:id
GET    /crew/filter
POST   /crew/:id/missions
GET    /api-docs
```

Changing folder names, route paths, or file names, or modifying the predefined lines in `server.ts`, **will affect your evaluation.**

---
## The Task
 
### 1️⃣ **Set up the project & define the data models**
**Set up the project**
Initialize a Node.js + TypeScript project and install all needed dependencies .Set up a clean folder structure`. Server should listen on port  ` and log a message on start.



### 2️⃣ Load the environment variables using `dotenv` & `Connect to MongoDB` using **Mongoose** before the starting the server .

### 3️⃣ Define The Database Models
- `Mission model` : `missionId` (number), `islandName` (string), `status` (`"Not Started" | "In Progress" | "Completed"`).
 
- `CrewMember` : `id` (number), `name` (string), `role` (`"Captain" | "Navigator" | "Guide" | "Guard" | "Cook"`), `age` (number), and `missions` (an array of `Mission`).
 
### 4️⃣ Create the Express App Endpoints 
 
1️⃣ **Create the Express server**
Set up an Express application listening on port `3000`. Set up `nodemon` so the server restarts automatically on changes (optional).
 
2️⃣ **GET `/crew`**

```http
GET /crew
```

Return the entire crew roster.
 
3️⃣ **GET `/crew/:id`**

```http
GET /crew/:id
```

Return a single crew member by `id`. Return a clear error if no crew member matches.
 
4️⃣ **DELETE `/crew/:id`**

```http
DELETE /crew/:id
```

Remove a crew member from the roster. Return a clear error if no crew member matches.
 
5️⃣ **PATCH `/crew/:id`**

```http
PATCH /crew/:id
```

Update a crew member's `role` and `age` only — `id`, `name`, and `missions` must never change through this route, even if they're included in the request body. Return the updated crew member, or a clear error if no crew member matches.
 
6️⃣ **GET `/crew/filter`**

```http
GET /crew/filter
```

Support filtering the roster by query parameters, any combination at once:
`role` — exact match (e.g. `?role=Guide`).
`minAge` / `maxAge` — inclusive age range (e.g. `?minAge=20&maxAge=30`).
All parameters are optional. No parameters means the same result as `GET /crew`. Multiple parameters together must all be satisfied at once.
 
7️⃣ **POST `/crew/:id/missions`**

```http
POST /crew/:id/missions
```

Send a crew member on a new created mission. Request body: `islandName` and `status` (default `"Not Started"` if omitted).
Generate a new `missionId` yourself, don't let client send one. Push the new mission into that crew member's `missions` array, and return the updated crew member with the new mission included.
## 5️⃣ Create 2 Validation Middleware
Inside the `middlewares/` folder, create reusable validation middleware.

- 1️⃣ Create a middleware to validate `PATCH /crew/:id` requests.
  - Validate that `role`, if provided, is one of:
    - `Captain`
    - `Navigator`
    - `Guide`
    - `Guard`
    - `Cook`
  - Validate that `age`, if provided, is a positive number.
  - Return **400 Bad Request** with a clear error message if validation fails.

- 2️⃣ Create a middleware to validate `POST /crew/:id/missions` requests.
  - Validate that `islandName` is provided and is a non-empty string.
  - Validate that `status`, if provided, is one of:
    - `Not Started`
    - `In Progress`
    - `Completed`
  - Return **400 Bad Request** with a clear error message if validation fails.

Use these middlewares in the appropriate routes before the controller functions.


### 5️⃣ **Document the API with Swagger**
Configure Swagger using `swagger-jsdoc`, with an `openapi` version, an `info` object (title + version), and an `apis` path pointing at your route files. Mount Swagger UI with `swagger-ui-express` at a route such as `/api-docs`. Add `@swagger` JSDoc comments folloeing two routes`(in router file)` :
-  `GET /crew/filter`
- `POST /crew/:id/missions`

Start the server and confirm both routes appear correctly at `/api-docs`.
 
### 6️⃣ **Test the endpoints using Postman**
- Verify every route, including the edge cases: a real id and a missing id for `GET /crew/:id` and `DELETE /crew/:id`;
- a `PATCH` that confirms `id`/`name`/`missions` didn't change; `GET /crew/filter` with no params, one param, and several combined; and `POST /crew/:id/missions` confirming the `missions` array actually grew.


## ⚠️ Common Pitfalls

- In `PATCH /crew/:id`, update only `role` and `age` — never overwrite `id`, `name`, or `missions`.
- Apply query filters only when they are provided; all filter parameters are optional.
- Make sure your Swagger `apis` path points to your route files, otherwise no endpoints will appear in the documentation.


## ✅ Expected Output / Acceptance Criteria
- [ ] Project initialized with TypeScript and Express & needed folder structure.
- [ ]  Database connected successfuly.
- [ ] `Mission` and `CrewMember` schema defined.
- [ ]  All required routes have been implemented and correctly handle success and error cases.
- [ ] Swagger UI is accessible at `/api-docs` and `GET /crew/filter` & `POST /crew/:id/missions` both  been documented.
- [ ] All endpoints verified using Postman.
 
