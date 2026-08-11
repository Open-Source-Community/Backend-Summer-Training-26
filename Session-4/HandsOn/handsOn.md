# 🌍 Sindibad's Travel Guide - Island 4
> **The Story:**\
Word travels fast. By the time Sindbad and Adel arrive at the fourth island, a crowd of explorers is already waiting at the dock, hoping to join the expedition.
>
>The crew has outgrown the hardcoded arrays they used on previous islands. Explorers are constantly joining, leaving, moving between islands, and changing roles. Keeping everything in memory is no longer practical — every server restart wipes out the data.
>
>Sindbad decides it's time to build a real backend backed by a MongoDB database, and to leave behind a Swagger documentation page so every crew member can explore the API without reading the source code.
>
> Your mission tonight is to connect the application to MongoDB, store explorer data permanently, and document part of the API.
------------------------------------------------------------------------

> ⚠️ **Start at Step 4️⃣.** If you completed the Session 4 prerequisites, your project is already set up, connected to MongoDB, and structured with `src/config/`, `src/models/`, `src/controllers/`, and `src/routes/`. Steps 1️⃣–3️⃣ below are already done — they're kept here only for reference in case you need to double-check something.
 
---

# Hands on
## 1️⃣ Setup the Project *(already done in the prerequisites)*
- Install the required packages:
```bash
npm install mongoose dotenv swagger-jsdoc swagger-ui-express
npm install -D @types/swagger-jsdoc @types/swagger-ui-express
```
## **Note - suggested folder structure**
```
├── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── server.ts
└── .env
```
 
---

## 2️⃣ Configure Environment Variables *(already done in the prerequisites)*
 
Create a `.env` file in the project root.
 
```
MONGO_URI=mongodb://localhost:27017/your-db-name
PORT=3000
```
 
- Load environment variables using `dotenv` , should be first line in **server.ts** file.
```
import 'dotenv/config
OR
require('dotenv').config()
```
 
---

## 3️⃣ Connect to MongoDB *(already done in the prerequisites)*
 
Using Mongoose, connect to the database before starting the Express server.
  
---

## 4️⃣ Create the Explorer Model
 
Inside the models folder, create a Mongoose model named `Explorer` `inside explorer.model.ts` file.
 
The schema must contain the following fields:
- `explorerId`
- `name`
- `role`
- `age`
- `island`
  
---

### 5️⃣ Build the Core API
 
Implement the following endpoints.
make sure to the folder structure from previous session , controllers , middleware , routes
 
### **POST** `/explorers`
 
-Create a new explorer and take data from the request body as json object and save it to MongoDB.
 
Example request:
 
```json
{
  "explorerId": "E1",
  "name": "Marwa",
  "role": "Guide",
  "age": 27,
  "island": "Baghdad"
}
```
### **GET** `/explorers`
 
Return all explorers stored in the database.
 
###  **PATCH** `/explorers/:id`
 
Update the **island** of an explorer.
- Find the explorer using `explorerId`.
- Update only the `island` field with its new value sent in request body.
- Return the updated explorer.
- Return 404 error if no explorer matches the given ID.
  
---

### 6️⃣ Document One Endpoint with Swagger
 
For this island, document only **one endpoint**.
 
**Requirements:**
- Configure Swagger using `swagger-jsdoc`.
- Create a Swagger specification containing:
  - `openapi`
  - `info` (title and version)
  - `apis` pointing to the files containing your route documentation.
- Mount Swagger UI using `swagger-ui-express`.
- Expose the documentation at a route such as `/api-docs`.
- Add a single `@swagger` JSDoc comment above your chosen route describing:
  - the path,
  - the HTTP method,
  - a short summary,
  - the 200 response.
Finally, start the server, open the Swagger page in your browser, and verify that your endpoint appears.
 
---

### 7️⃣ Test the API
 
Use Postman (and your browser for Swagger) to verify the application.
 
**test all endpoint:**
- `POST /explorers`.
- `GET /explorers`.
- `PATCH /explorers/:id`.
- Open `GET /api-docs` in your browser.
