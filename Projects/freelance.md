# 💼 Micro-Freelance Marketplace ("Gig Board")

## One-line Pitch
A lightweight platform where freelancers post gigs and clients place orders on them — a mini Khamsat/Mostaql/Fiverr clone.

## The Problem
Freelancers need a simple way to list services; clients need an easy way to find and order them. This mirrors a real, recognizable product category.

## Minimum Requirements (Applies to Every Idea)

Whichever idea is picked, the final project must include all of the following:

- Built with **Node.js**, **TypeScript**, and **Express.js**
- Connected to **MongoDB** using **Mongoose**, with at least **2 schemas/models**
- Full **CRUD** operations on at least one resource
- **User authentication** — register and login endpoints
- Password hashing with **bcrypt**
- **JWT-based authentication** with protected routes
- At least **one middleware** (auth guard, logger, or validator)
- Environment variables managed with **dotenv**
- API documented with **Swagger** 
- Deployed to a live cloud URL (**Render** / **Railway**)
- Source code pushed to a **public GitHub repository**

> ❗❗ These are the baseline requirements for all submissions. Submissions that do not meet these minimum standards will be disqualified from the evaluation and will not receive a certificate or the two-hour credit.❗❗ 


---
## User Types
- Freelancer
- Client

---

## Core Entities

| Entity | Fields |
|---|---|
| **User** | Full Name, Email, Password, Role (Freelancer / Client) |
| **Gig** | Title, Description, Price, Category, Owner (Freelancer) |
| **Order** | Gig reference, Client, Status (`pending` / `accepted` / `completed`) |

---

## Roles & Permissions

### Freelancer
- Register and log in
- Create, edit, and delete their own gigs
- View orders placed on their gigs
- Update the status of orders on their own gigs
- Cannot manage other freelancers' gigs

### Client
- Register and log in
- Browse and search gigs
- Place orders on gigs
- View their own order history
- Cannot edit gigs or update order status

---

## Authentication & Authorization

**Authentication**
- User registration & login
- Password hashing with `bcrypt`
- JWT-based authentication
- Protected routes

**Authorization**
- Role-based access control (Freelancer / Client)
- Only a gig's owner can edit/delete it or update its orders' status
- Clients can only manage their own orders

---

## CRUD Operations

| Role | Operations |
|---|---|
| **Freelancer** | Create / update / delete gigs, update order status |
| **Client** | Create orders, view own orders |

---

## Search & Filtering

Support searching and filtering by:
- Gig title
- Category
- Price range
- Freelancer name

## Validation

- Valid email format
- Strong password
- Price must be a positive number
- Required fields present

---

## Bonus Features (Optional)

- Freelancer ratings & reviews
- Favorite/saved gigs
- Pagination
- Dashboard statistics
- Logging middleware

---

## Business Rules

- Only the gig owner can update the status of an order placed on it
- Order status can only move forward (`pending` → `accepted` → `completed`), not backward or skipped
- A gig cannot be deleted if it has any `pending` or `accepted` orders
- Clients cannot place an order on their own gig (if also acting as a freelancer)
- A completed order cannot be edited or cancelled