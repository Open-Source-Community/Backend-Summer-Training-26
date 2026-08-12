# 🌊 Island IV — The Archive of Atlantis

### [Slides](https://canva.link/gnti3o9rbu9cvvi)

> *"Every path leads somewhere. Learn to build them."*

Welcome to **Island IV**!  
In the previous island, we learned how a backend exposes APIs, organizes code, performs CRUD operations, and uses middleware.

Now we are going to give our backend a **real database** and learn how to make our APIs easier for other developers to understand and use.

---

## 📖 Table of Contents

- [🧭 Quick Recap](#-quick-recap)
- [Part 1 — Databases, SQL, and NoSQL](#part-1--databases-sql-and-nosql)
  - [1. What Is a Database?](#1-what-is-a-database)
  - [2. SQL Databases](#2-sql-databases)
  - [3. What Is a Schema?](#3-what-is-a-schema)
  - [4. The Problem With SQL](#4-the-problem-with-sql)
  - [5. Scaling: Vertical vs Horizontal](#5-scaling-vertical-vs-horizontal)
  - [6. What Is NoSQL?](#6-what-is-nosql)
  - [7. Why Is It Called NoSQL?](#7-why-is-it-called-nosql)
  - [8. Types of NoSQL Databases](#8-types-of-nosql-databases)
- [Part 2 — MongoDB](#part-2--mongodb)
  - [9. What Is MongoDB?](#9-what-is-mongodb)
  - [10. MongoDB Structure](#10-mongodb-structure)
  - [11. Collections and Documents](#11-collections-and-documents)
  - [12. MongoDB Documents and Flexible Structure](#12-mongodb-documents-and-flexible-structure)
  - [13. Relationships in MongoDB](#13-relationships-in-mongodb)
  - [14. Embedding](#14-embedding)
  - [15. References](#15-references)
  - [16. `_id`](#16-_id)
  - [17. Required vs Optional Fields](#17-required-vs-optional-fields)
- [Part 3 — Mongoose](#part-3--mongoose)
  - [18. What Is Mongoose?](#18-what-is-mongoose)
  - [19. Schema vs Model](#19-schema-vs-model)
  - [20. Required Fields With Mongoose](#20-required-fields-with-mongoose)
  - [21. Example Model](#21-example-model)
- [Part 4 — MongoDB Atlas & Connection](#part-4--mongodb-atlas--connection)
  - [22. Create an Atlas Database](#22-create-an-atlas-database)
  - [23. Install Mongoose](#23-install-mongoose)
  - [24. Keep the Connection String Secret](#24-keep-the-connection-string-secret)
  - [25. Connect the Application](#25-connect-the-application)
- [Part 5 — CRUD With Mongoose](#part-5--crud-with-mongoose)
  - [26. CRUD Overview](#26-crud-overview)
  - [27. Create](#27-create)
  - [28. Read](#28-read)
  - [29. Update](#29-update)
  - [30. Delete](#30-delete)
  - [31. CRUD Cheat Sheet](#31-crud-cheat-sheet)
- [Part 6 — Environment Variables](#part-6--environment-variables)
  - [32. Why Environment Variables?](#32-why-environment-variables)
  - [33. dotenv](#33-dotenv)
  - [34. `.env` vs `.env.example`](#34-env-vs-envexample)
  - [35. `.gitignore`](#35-gitignore)
- [Part 7 — API Documentation With Swagger](#part-7--api-documentation-with-swagger)
  - [36. Why Documentation?](#36-why-documentation)
  - [37. What Are JSDoc Comments?](#37-what-are-jsdoc-comments)
  - [38. What Is Swagger/OpenAPI?](#38-what-is-swaggeropenapi)
  - [39. Install Swagger](#39-install-swagger)
  - [40. Swagger Setup Template](#40-swagger-setup-template)
  - [41. Swagger Schemas](#41-swagger-schemas)
  - [42. Required Fields in Swagger](#42-required-fields-in-swagger)
  - [43. Tags](#43-tags)
  - [44. Documenting Routes](#44-documenting-routes)
  - [45. Path Parameters](#45-path-parameters)
  - [46. Request Body](#46-request-body)
  - [47. Responses](#47-responses)
  - [48. How to Use the Swagger Template](#48-how-to-use-the-swagger-template)
  - [49. Using Swagger UI](#49-using-swagger-ui)
- [📌 Final Recap](#-final-recap)

---

# 🧭 Quick Recap

Before starting, remember what we learned on Island III:

| Topic | Simple meaning |
|---|---|
| **API** | The way a client communicates with our backend |
| **Route** | Defines an endpoint and directs the request |
| **Controller** | Contains the logic for handling the request |
| **Middleware** | Runs between the request and the final handler |
| **CRUD** | Create, Read, Update, Delete |
| **Request Body** | Data sent by the client, usually as JSON |
| **Path Parameter** | Identifies one resource, such as `/students/5` |
| **Query Parameter** | Filters/searches a collection, such as `/students?level=3` |

In this island, the biggest change is:

```text
Before:

Client
  ↓
Route
  ↓
Controller
  ↓
Array in memory


Now:

Client
  ↓
Route
  ↓
Controller
  ↓
Mongoose Model
  ↓
MongoDB
```

Instead of keeping our data in an array that disappears when the server restarts, we will store it in a real database.

---

# Part 1 — Databases, SQL, and NoSQL

## 1. What Is a Database?

A **database** is a place where we store and organize data so that our application can easily access and manage it.

For example, an e-commerce application may need to store:

- Users
- Products
- Orders
- Reviews
- Payments

A database lets us keep this information even after our server stops or restarts.

### Database vs files

We could technically store data in:

- CSV files
- JSON files
- TXT files
- Excel files

But real applications need much more:

- Efficient searching
- Updating data
- Multiple users accessing data
- Relationships between data
- Security
- Scalability
- Reliability

That is why we use database systems.

---

## 2. SQL Databases

A **SQL database** stores data using **tables**.

A table contains:

- Rows → individual records
- Columns → fields/properties

Example:

```text
Users

+----+----------+-------------------+
| id | name     | email             |
+----+----------+-------------------+
| 1  | Ahmed    | ahmed@example.com |
| 2  | Sara     | sara@example.com  |
+----+----------+-------------------+
```

SQL databases are also called **relational databases** because tables can be related to one another.

Popular SQL database systems include:

- PostgreSQL
- MySQL
- SQLite
- Oracle

---

## 3. What Is a Schema?

A **schema** defines the structure of our data.

In a traditional SQL database, before inserting data we usually decide:

```text
Users table

id       → integer
name     → string
email    → string
age      → integer
```

The database structure is therefore planned around tables and columns.

### Why does this matter?

Imagine that every user must have:

```text
name
email
age
```

The schema describes these fields and their types.

---

# 4. The Problem With SQL

SQL databases are powerful and absolutely still useful.

The point is **not**:

> SQL is bad.

The point is that some applications have requirements where a more flexible data model can be useful.

Imagine we are building Instagram.

Initially we have:

```text
Users

id
name
email
```

Then we add:

```text
profile_picture
bio
website
```

Later:

```text
social_links
followers
```

As applications grow, their data can become more diverse.

Another problem can appear when systems become extremely large and need to distribute data across many servers.

SQL databases **can scale**, but distributing relational data across many servers can introduce additional complexity, especially when relationships, joins, and consistency must be coordinated.

---

# 5. Scaling: Vertical vs Horizontal

When an application grows, it receives more users and more traffic.

## Vertical Scaling

We make the same server stronger.

```text
Small Server
     ↓
Bigger Server
     ↓
More Powerful Server
```

For example:

- More RAM
- More CPU
- Better hardware

The problem is that a single machine eventually has physical and financial limits.

---

## Horizontal Scaling

Instead of making one machine stronger, we add more machines.

```text
        ┌──────────────┐
        │   Server 1   │
        └──────────────┘
               │
        ┌──────────────┐
        │   Server 2   │
        └──────────────┘
               │
        ┌──────────────┐
        │   Server 3   │
        └──────────────┘
```

This can be useful for systems with:

- Huge amounts of data
- High traffic
- Many servers
- Distributed workloads

Some NoSQL systems are designed with these kinds of large-scale workloads in mind.

---

# 6. What Is NoSQL?

**NoSQL** is a category of databases designed around data models other than the traditional relational table model.

Common characteristics include:

- Flexible data structures
- Different data models
- Support for large-scale applications
- Common use in high-traffic systems

Common use cases include:

- Social media
- Real-time applications
- Large-scale web applications
- Applications whose data changes quickly

---

# 7. Why Is It Called NoSQL?

A very common misunderstanding is:

> NoSQL = No SQL

That is not what it means.

A common interpretation is:

> **NoSQL = Not Only SQL**

It refers to databases that use data models other than the traditional relational SQL model, or use SQL alongside other approaches.

So:

```text
NoSQL
≠
"No SQL databases exist"
```

It is about the **database model**, not simply refusing to use SQL.

---

# 8. Types of NoSQL Databases

NoSQL is not one single database type.

Some common models are:

| Type | Idea |
|---|---|
| **Document** | Stores data as documents |
| **Key-Value** | Stores values using keys |
| **Column-Family** | Organizes data around column families |
| **Graph** | Focuses on nodes and relationships |

In this session we focus on the **Document Model** using MongoDB.

---

# Part 2 — MongoDB

## 9. What Is MongoDB?

**MongoDB** is a popular NoSQL database management system based on the **document model**.

It is:

- Developer-friendly
- Flexible
- Commonly used in modern web applications
- Based on JSON-like documents
- Supported by a large ecosystem

Instead of thinking:

```text
Database
  ↓
Tables
  ↓
Rows
  ↓
Columns
```

MongoDB uses:

```text
Database
  ↓
Collections
  ↓
Documents
  ↓
Fields
```

---

# 10. MongoDB Structure

The easiest comparison is:

| SQL | MongoDB |
|---|---|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |

So if SQL has:

```text
Users table
```

MongoDB would have:

```text
users collection
```

And one user would be a document:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com",
  "age": 20
}
```

---

# 11. Collections and Documents

## Collection

A **collection** is a group of related documents.

It is similar to a table in SQL.

Example:

```text
Database: university

Collections:
├── students
├── courses
└── teachers
```

---

## Document

A **document** is one record stored in MongoDB's JSON-like format.

Example:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com",
  "age": 20
}
```

A document contains **key-value pairs**.

```text
key       → value

name      → "Ahmed"
age       → 20
email     → "ahmed@example.com"
```

---

# 12. MongoDB Documents and Flexible Structure

One of MongoDB's important characteristics is its flexible document model.

For example, one document could be:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com"
}
```

Another could contain additional information:

```json
{
  "name": "Sara",
  "email": "sara@example.com",
  "bio": "Backend developer",
  "socialLinks": {
    "github": "github.com/example"
  }
}
```

MongoDB does not require every document to have exactly the same fields.

### Important: NoSQL is NOT "schema-less"

This is a very important distinction.

MongoDB itself has a flexible document model.

But that does **not** mean:

> "We never define rules."

We can define structure and validation rules using tools such as **Mongoose**.

So:

```text
MongoDB
→ flexible document structure

Mongoose
→ schema + validation rules for our application
```

---

# 13. Relationships in MongoDB

NoSQL does **not** mean:

> "There are no relationships."

MongoDB can represent relationships in different ways.

The two important approaches in this session are:

1. **Embedding**
2. **References**

---

# 14. Embedding

**Embedding** means storing related data directly inside another document.

Imagine a student has a small list of addresses.

We could store:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com",
  "address": {
    "city": "Cairo",
    "street": "Main Street"
  }
}
```

The address is part of the student document.

### Arrays can also be embedded

```json
{
  "name": "Ahmed",
  "courses": [
    "Database",
    "Backend",
    "Algorithms"
  ]
}
```

### When is embedding useful?

Embedding is usually a good choice when:

- The related data belongs closely to the parent.
- We usually need the data together.
- The embedded data is reasonably small.

### Think of it like:

```text
Student
 ├── name
 ├── email
 └── address
      ├── city
      └── street
```

Everything is stored together in one document.

---

# 15. References

A **reference** stores the ID of another document instead of storing the entire related document.

Imagine:

```text
Student
   ↓
Course
```

Instead of putting the entire course inside every student, we can store the course's ID.

Example student:

```json
{
  "name": "Ahmed",
  "course": "665f..."
}
```

And separately:

```json
{
  "_id": "665f...",
  "name": "Database"
}
```

The student stores the **reference** to the course.

### When are references useful?

References are useful when:

- The related data is large.
- The same data is shared by many documents.
- We want the related data to be stored separately.
- The related entity has its own lifecycle.

### Simple comparison

```text
Embedding:

Student
└── Course data
    ├── name
    └── instructor


Reference:

Student
└── courseId ───────────► Course document
```

---

# 16. `_id`

Every MongoDB document has an `_id` field.

Example:

```json
{
  "_id": "665f1234...",
  "name": "Ahmed"
}
```

The `_id` is:

- A unique identifier
- MongoDB's primary identifier for the document
- Automatically generated if we do not provide one
- Used to retrieve a specific document

You will use `_id` constantly when working with MongoDB.

---

# 17. Required vs Optional Fields

This is an important point that is easy to miss.

## In MongoDB itself

MongoDB has a flexible document model.

So MongoDB does **not automatically require every document to contain exactly the same fields**.

For example, these documents can exist:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com"
}
```

and:

```json
{
  "name": "Sara",
  "email": "sara@example.com",
  "bio": "Backend developer"
}
```

`bio` can be absent.

---

## But what if our application requires email?

For example:

```text
name     → required
email    → required
bio      → optional
```

This is where **Mongoose validation** becomes very useful.

We can explicitly say:

```ts
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  bio: {
    type: String
  }
});
```

Now:

- `name` → required
- `email` → required
- `bio` → optional

### The important idea

```text
MongoDB flexible structure
            ↓
Mongoose schema
            ↓
Our application rules
```

So **required/optional fields in our project are normally defined in the Mongoose schema** when we use Mongoose.

---

# Part 3 — Mongoose

## 18. What Is Mongoose?

**Mongoose** is an **Object Data Modeling (ODM)** library that helps Node.js applications work with MongoDB.

Think of it as a layer between our application and MongoDB:

```text
Node.js Application
        ↓
     Mongoose
        ↓
     MongoDB
```

Mongoose helps us with:

- Schemas
- Models
- Validation
- Database operations
- Relationships through references
- Working with MongoDB documents more conveniently

---

# 19. Schema vs Model

This is one of the most important concepts in the session.

## Schema

A **schema** defines the structure and rules of our documents.

Example:

```ts
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  bio: {
    type: String
  }
});
```

The schema answers:

> "What should a student document look like?"

---

## Model

A **model** is created from the schema.

```ts
const Student = mongoose.model("Student", studentSchema);
```

The model gives our application an interface for working with the collection.

We use it to:

- Create documents
- Find documents
- Update documents
- Delete documents

The model answers:

> "How do I work with student documents?"

---

## Easy way to remember

```text
Schema = Blueprint

Model = Tool built from the blueprint
```

For example:

```text
studentSchema
      ↓
   Student
    Model
      ↓
students collection
```

---

# 20. Required Fields With Mongoose

You can mark a field as required:

```ts
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  bio: {
    type: String
  }
});
```

This means:

| Field | Required? | Type |
|---|---:|---|
| `name` |  Yes | String |
| `email` |  Yes | String |
| `age` |  Yes | Number |
| `bio` |  No | String |

If a required field is missing, Mongoose validation can reject the document.

### Another shorter syntax

You may also see:

```ts
name: {
  type: String,
  required: true
}
```

This is clearer for beginners because you can see both the type and validation rule.

---

# 21. Example Model

A complete simple model could look like this:

```ts
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  bio: {
    type: String
  }
});

export const Student = mongoose.model("Student", studentSchema);
```

Notice the separation:

```text
Schema
↓
studentSchema

Model
↓
Student
```

---

# Part 4 — MongoDB Atlas & Connection

## 22. Create an Atlas Database

MongoDB Atlas provides a hosted MongoDB database.

Open:

https://www.mongodb.com/products/platform/atlas-database

Then:

1. Create/sign in to your MongoDB account.
2. Create a project.
3. Create a database/cluster.
4. Configure database access.
5. Configure network access.
6. Get your connection string.

Your connection string will look conceptually like:

```text
mongodb+srv://<username>:<password>@<cluster>...
```

⚠️ **Do not share your real password or connection string publicly.**

---

# 23. Install Mongoose

Inside your Node.js project:

```bash
npm install mongoose
```

If you are using TypeScript, Mongoose provides its own TypeScript types, so you normally do not need a separate `@types/mongoose` package.

---

# 24. Keep the Connection String Secret

Your MongoDB URI contains sensitive information.

Do **not** write it directly inside your source code:

```ts
//  Don't do this
mongoose.connect("mongodb+srv://username:password@...");
```

Instead, put it inside `.env`:

```env
MONGO_URI=mongodb+srv://username:password@...
```

Then access it through:

```ts
process.env.MONGO_URI
```

---

# 25. Connect the Application

A simple connection looks like:

```ts
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
```

The important idea is:

```text
Application starts
      ↓
Mongoose connects
      ↓
MongoDB Atlas
```

If the connection succeeds, our Node.js application can start interacting with the database.

---

# Part 5 — CRUD With Mongoose

## 26. CRUD Overview

CRUD represents the four basic database operations.

| CRUD | Meaning | Mongoose example |
|---|---|---|
| **C** | Create | `create()` |
| **R** | Read | `find()` |
| **U** | Update | `updateOne()` |
| **D** | Delete | `deleteOne()` |

---

# 27. Create

Create a new document:

```ts
const student = await Student.create({
  name: "Ahmed",
  email: "ahmed@example.com",
  age: 20
});
```

What happens?

```text
Object
  ↓
Mongoose
  ↓
Validation
  ↓
MongoDB
  ↓
Document saved
```

---

# 28. Read

## Get all documents

```ts
const students = await Student.find();
```

This returns the matching documents.

## Find one document

For example, by ID:

```ts
const student = await Student.findById(req.params.id);
```

You can also use:

```ts
const student = await Student.findOne({
  email: "ahmed@example.com"
});
```

---

# 29. Update

For example:

```ts
const student = await Student.updateOne(
  { _id: req.params.id },
  { age: 21 }
);
```

The first object tells MongoDB **which document** to update.

The second object tells MongoDB **what to change**.

Conceptually:

```text
filter
  ↓
Which document?

update
  ↓
What should change?
```

---

# 30. Delete

To delete one document:

```ts
await Student.deleteOne({
  _id: req.params.id
});
```

The filter identifies which document should be removed.

---

# 31. CRUD Cheat Sheet

```text
CREATE
Student.create(data)

READ
Student.find()
Student.findById(id)
Student.findOne(filter)

UPDATE
Student.updateOne(filter, update)

DELETE
Student.deleteOne(filter)
```

A simple API might therefore look like:

```text
POST   /students
GET    /students
GET    /students/:id
PUT    /students/:id
DELETE /students/:id
```

---

# Part 6 — Environment Variables

## 32. Why Environment Variables?

Environment variables let us keep configuration and secrets outside our source code.

Examples:

```text
MONGO_URI
JWT_SECRET
API_KEY
PORT
```

### Why?

#### 1. Security

Do not hardcode secrets in your code.

#### 2. Separation of concerns

Application logic and configuration stay separate.

#### 3. Different environments

You can use different values for:

```text
Development
Staging
Production
```

without changing the application logic.

---

# 33. dotenv

The `dotenv` package loads variables from a `.env` file into `process.env`.

Install:

```bash
npm install dotenv
```

Then you can load it:

```ts
import "dotenv/config";
```

And access variables:

```ts
process.env.MONGO_URI
```

Example `.env`:

```env
PORT=3000
MONGO_URI=mongodb+srv://...
```

---

# 34. `.env` vs `.env.example`

These two files have different purposes.

## `.env`

Contains your real local values:

```env
MONGO_URI=your-real-secret-uri
JWT_SECRET=your-real-secret
```

This file should **not** be committed.

## `.env.example`

Contains placeholders:

```env
MONGO_URI=
JWT_SECRET=
PORT=3000
```

This file **should** be committed.

Its purpose is to tell another developer:

> "These are the environment variables you need to configure."

---

# 35. `.gitignore`

Add `.env` to `.gitignore`:

```gitignore
.env
```

This prevents Git from tracking your real environment file.

### Important rule

```text
.env
   ↓
REAL SECRETS
   ↓
Do not commit

.env.example
   ↓
PLACEHOLDERS
   ↓
Can commit
```

If you accidentally push a real secret to GitHub, simply deleting it from the latest commit is not always enough because it may remain in Git history. Treat exposed secrets as compromised and rotate them.

---

# Part 7 — API Documentation With Swagger

## 36. Why Documentation?

Imagine another developer wants to use your API.

They need to know:

```text
What endpoint do I call?
Which HTTP method?
What data do I send?
Which fields are required?
What does the response look like?
What errors can happen?
```

Without documentation, they may have to guess.

Good API documentation gives them a clear **contract**.

---

# 37. What Are JSDoc Comments?

JSDoc is a way to document JavaScript/TypeScript code using comments.

A JSDoc block looks like:

```ts
/**
 * This function creates a new student.
 */
```

JSDoc can document:

- Functions
- Parameters
- Return values
- Types
- API information when used with Swagger tooling

Swagger can read specially formatted JSDoc comments and generate API documentation.

---

# 38. What Is Swagger/OpenAPI?

**OpenAPI** is a standard specification for describing APIs.

**Swagger** is a set of tools that can work with that specification, including Swagger UI.

Swagger UI gives us an interactive page where we can:

- See all routes
- See request parameters
- See request bodies
- See response formats
- Test endpoints directly from the browser

Think of it as:

```text
Your API
   ↓
Swagger documentation
   ↓
Interactive API page
```

---

# 39. Install Swagger

Install:

```bash
npm install swagger-jsdoc swagger-ui-express
```

If your project uses TypeScript and your setup requires the type definitions:

```bash
npm install -D @types/swagger-jsdoc @types/swagger-ui-express
```

---

# 40. Swagger Setup Template

This is the main Swagger configuration.

Start from the provided template:

```ts
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "your title",
      version: "1.0.0",
      description: "your description"
    },
    servers: [
      {
        url: "http://localhost:your_port"
        // or "/" for the current API
      }
    ]
  },
  apis: ["your path"]
};
```

### What do you change?

| Template part | What you put |
|---|---|
| `title` | Your API/project name |
| `version` | API version, e.g. `"1.0.0"` |
| `description` | Short explanation of your API |
| `servers.url` | Your server URL and port |
| `apis` | The file/path containing your Swagger comments |

For example:

```ts
servers: [
  {
    url: "http://localhost:3000"
  }
]
```

And if your Swagger comments are inside route files:

```ts
apis: ["./src/routes/*.ts"]
```

The exact path depends on your project structure.

---

# 41. Swagger Schemas

A Swagger schema describes what a piece of data looks like.

For example, suppose our API has a Student:

```text
Student
├── name
├── email
├── age
└── bio
```

We can document it with:

```ts
/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - age
 *       properties:
 *         name:
 *           type: string
 *           description: Student name
 *         email:
 *           type: string
 *           description: Student email
 *         age:
 *           type: integer
 *           description: Student age
 *         bio:
 *           type: string
 *           description: Optional student bio
 *       example:
 *         name: Ahmed
 *         email: ahmed@example.com
 *         age: 20
 *         bio: Backend developer
 */
```

### Important

The Swagger schema is **documentation**.

It does not automatically create your MongoDB collection or Mongoose schema.

You should keep the actual validation rules in your application code, such as the Mongoose schema.

---

# 42. Required Fields in Swagger

Swagger also needs to know which fields are required.

This part:

```yaml
required:
  - name
  - email
  - age
```

means:

```text
name  → required
email → required
age   → required
bio   → optional
```

Notice that `bio` is not listed under `required`.

### Very important distinction

You should keep your rules consistent:

```text
Mongoose schema
       +
Swagger schema
       ↓
Same API contract
```

For example:

### Mongoose

```ts
email: {
  type: String,
  required: true
}
```

### Swagger

```yaml
required:
  - email
```

Swagger tells the API user what is expected.

Mongoose enforces the rule when the application receives data.

---

# 43. Tags

Tags organize your endpoints in Swagger UI.

Template:

```ts
/**
 * @swagger
 * tags:
 *   name: []
 *   description: []
 */
```

Replace the placeholders.

Example:

```ts
/**
 * @swagger
 * tags:
 *   - name: Students
 *     description: Student management endpoints
 */
```

Then your routes can use:

```yaml
tags:
  - Students
```

This groups student endpoints together in the Swagger interface.

---

# 44. Documenting Routes

The provided route template is:

```ts
/**
 * @swagger
 * [your path]:
 *   [method]:
 *     tags: []
 *     summary: []
 *     parameters:
 *       - in: [path/query]
 *         name: []
 *         schema:
 *           type: []
 *         required: []
 *         description:
 *     requestBody:
 *       required: []
 *       content:
 *         application/json:
 *           schema:
 *             $ref:
 *     responses:
 *       200:
 *         description:
 *         content:
 *           application/json:
 *             schema:
 *               $ref:
 *       404:
 *         description:
 *       500:
 *         description: Some server error!
 */
```

Do not copy it and leave the brackets unchanged.

Treat it as a **fill-in template**.

---

# 45. Path Parameters

Suppose our real route is:

```http
GET /students/:id
```

In Swagger, document the parameter:

```yaml
parameters:
  - in: path
    name: id
    schema:
      type: string
    required: true
    description: The ID of the student
```

### Why `required: true`?

Because `/students/:id` cannot identify the student without the ID.

The actual request becomes:

```http
GET /students/665f1234
```

---

# 46. Request Body

For a POST request:

```http
POST /students
```

we may send:

```json
{
  "name": "Ahmed",
  "email": "ahmed@example.com",
  "age": 20
}
```

Swagger can document the body using the schema we defined earlier:

```yaml
requestBody:
  required: true
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/Student'
```

### What does `$ref` mean?

It means:

> "Do not define the same Student structure again. Use the Student schema we already defined."

So:

```text
Student schema
      ↑
      │
   $ref
      │
POST request body
```

---

# 47. Responses

A route should also document what it returns.

For example:

```yaml
responses:
  200:
    description: Student retrieved successfully
```

You can document different possible results:

```yaml
responses:
  200:
    description: Student retrieved successfully
  404:
    description: Student not found
  500:
    description: Some server error
```

### Common status codes

| Code | Meaning |
|---|---|
| `200` | Request succeeded |
| `201` | Resource created |
| `400` | Bad request |
| `404` | Resource not found |
| `500` | Server error |

---

# 48. How to Use the Swagger Template

This is the most important part when using the provided templates.

## Step 1 — Start with the correct route

Suppose your Express route is:

```ts
router.post("/", createStudent);
```

And this router is mounted as:

```ts
app.use("/students", studentRouter);
```

The final API endpoint is:

```http
POST /students
```

Swagger documents the **final API path**, not just the local router path.

---

## Step 2 — Choose the HTTP method

Match your Express method:

```ts
router.get(...)
```

→ Swagger:

```yaml
get:
```

```ts
router.post(...)
```

→ Swagger:

```yaml
post:
```

```ts
router.put(...)
```

→ Swagger:

```yaml
put:
```

```ts
router.delete(...)
```

→ Swagger:

```yaml
delete:
```

---

## Step 3 — Add the tag

Choose the group:

```yaml
tags:
  - Students
```

---

## Step 4 — Write a short summary

Example:

```yaml
summary: Create a new student
```

The summary should tell the reader what the endpoint does.

---

## Step 5 — Add parameters if needed

If your endpoint is:

```http
GET /students/:id
```

add:

```yaml
parameters:
  - in: path
    name: id
    schema:
      type: string
    required: true
    description: Student ID
```

If it uses a query:

```http
GET /students?age=20
```

use:

```yaml
parameters:
  - in: query
    name: age
    schema:
      type: integer
    required: false
    description: Filter students by age
```

---

## Step 6 — Add a request body when needed

For POST/PUT/PATCH requests that receive JSON:

```yaml
requestBody:
  required: true
  content:
    application/json:
      schema:
        $ref: '#/components/schemas/Student'
```

---

## Step 7 — Document responses

At minimum, think about:

```text
Success
Not found
Bad request
Server error
```

Example:

```yaml
responses:
  201:
    description: Student created successfully
  400:
    description: Invalid student data
  500:
    description: Some server error
```

---

# 49. Complete Swagger Route Example

Here is what the template looks like after we actually fill it in.

Suppose we have:

```http
POST /students
```

and the body is a Student.

```ts
/**
 * @swagger
 * /students:
 *   post:
 *     tags:
 *       - Students
 *     summary: Create a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       400:
 *         description: Invalid student data
 *       500:
 *         description: Some server error
 */
```

### Notice the pattern

```text
PATH
 ↓
METHOD
 ↓
TAG
 ↓
SUMMARY
 ↓
PARAMETERS / REQUEST BODY
 ↓
RESPONSES
```

This is the pattern you should follow for every endpoint.

---

# Returning an Array From Swagger

Suppose:

```http
GET /students
```

returns multiple students.

Use:

```ts
/**
 * @swagger
 * /students:
 *   get:
 *     tags:
 *       - Students
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: List of students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */
```

The important part is:

```yaml
type: array
items:
  $ref: '#/components/schemas/Student'
```

This means:

```text
The response is an array
        ↓
Each item is a Student
```

---

# 50. Using Swagger UI

After configuring Swagger UI, we can expose a route such as:

```text
/api-docs
```

For example:

```text
http://localhost:3000/api-docs
```

When you open it, you should see your documented endpoints.

Swagger UI allows you to:

1. Open an endpoint.
2. Read its documentation.
3. Click **Try it out**.
4. Enter parameters/body data.
5. Execute the request.
6. See the real server response.

So Swagger is not just a page showing documentation.

It can also become an **interactive testing tool**.

---

# 🔗 The Big Picture

At this point, the whole backend flow should make sense:

```text
                    CLIENT
                       │
                       │ HTTP Request
                       ▼
                   EXPRESS
                       │
                   Middleware
                       │
                       ▼
                     Route
                       │
                       ▼
                  Controller
                       │
                       ▼
                  Mongoose Model
                       │
                       ▼
                    MongoDB
                       │
                       ▼
                  Mongoose Model
                       │
                       ▼
                  Controller
                       │
                       ▼
                  HTTP Response
                       │
                       ▼
                    CLIENT
```

And Swagger sits beside the API to **describe and test the contract**:

```text
                 Swagger / OpenAPI
                       │
             documents the API
                       │
                       ▼
Client ───────► Express API ───────► MongoDB
```
---

# 📌 Final Recap

By the end of Island IV, you should understand:

### Databases

- What a database is.
- What a SQL database is.
- What a schema means.
- Why growing applications can need flexible data models.
- Vertical vs horizontal scaling.

### NoSQL

- What NoSQL means.
- Why it is called **Not Only SQL**.
- The common NoSQL data models.
- Why NoSQL is not simply "schema-less".

### MongoDB

- MongoDB is a document-oriented NoSQL DBMS.
- Database → Collection → Document → Field.
- `_id` identifies a document.
- Documents can have flexible structures.
- MongoDB can represent relationships.

### Relationships

- **Embedding** stores related data inside the document.
- **References** store the ID of another document.
- Choose between them based on how the data is used and related.

### Mongoose

- Mongoose is an ODM for MongoDB.
- A **Schema** defines structure and validation rules.
- A **Model** gives us an interface to work with documents.
- `required: true` makes a field required at the Mongoose validation level.
- Fields without `required: true` can be optional.

### CRUD

```text
Create → create()
Read   → find()
Update → updateOne()
Delete → deleteOne()
```

### Environment Variables

- Keep secrets out of source code.
- Use `.env` for local secrets.
- Use `.env.example` as a safe template.
- Add `.env` to `.gitignore`.

### Swagger

- OpenAPI describes the API contract.
- Swagger UI turns that description into an interactive interface.
- Schemas describe request/response data.
- `required` documents required fields.
- `$ref` reuses schemas.
- Tags organize endpoints.
- Parameters describe path/query inputs.
- Request bodies describe JSON sent to the server.
- Responses describe what the API can return.

---

## 🏛️ See You on the Next Adventure

The crew has now moved from a backend that simply **handles requests** to a backend that can:

```text
Store real data
      ↓
Validate real data
      ↓
Expose real CRUD APIs
      ↓
Document those APIs
      ↓
Let other developers test them
```

> *"The greatest treasure isn't gold... it's knowledge."*
