# 🏠 Student Housing Finder ("Shaqty")

## One-line Pitch
A platform where students post shared-apartment listings near campus, and other students send interest requests to join or view them.

## The Problem
Finding shared student housing near university is a common, real pain point — this gives it a simple, structured platform instead of scattered Facebook posts and word of mouth.

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
- Lister (has a place)
- Seeker (looking for a place)

---

## Core Entities

| Entity | Fields |
|---|---|
| **User** | Full Name, Email, Password, Role (Lister / Seeker) |
| **Listing** | Location, Price, Rooms Available, Description, Owner |
| **InterestRequest** | Listing reference, Seeker, Status (`pending` / `accepted` / `declined`) |

---

## Roles & Permissions

### Lister
- Register and log in
- Create, edit, and delete their own listings
- View interest requests on their listings
- Accept or decline interest requests on their own listings
- Cannot manage other listers' listings

### Seeker
- Register and log in
- Browse and search listings
- Send interest requests on listings
- View their own request history
- Cannot edit or delete listings

---

## Authentication & Authorization

**Authentication**
- User registration & login
- Password hashing with `bcrypt`
- JWT-based authentication
- Protected routes

**Authorization**
- Role-based access control (Lister / Seeker)
- Only a listing's owner can accept/decline requests on it
- Seekers can only manage their own interest requests

---

## CRUD Operations

| Role | Operations |
|---|---|
| **Lister** | Create / update / delete listings, accept/decline interest requests |
| **Seeker** | Create interest requests, view own requests, cancel own requests |

---

## Search & Filtering

Support searching and filtering by:
- Location
- Price range
- Rooms available
- Listing availability status

## Validation

- Valid email format
- Strong password
- Required fields present
- Price must be a positive number

---

## Bonus Features (Optional)

- Pagination
- Favorite/saved listings
- Basic messaging between lister and seeker
- Sorting by price or newest listing
- Dashboard statistics
- Logging middleware

---

## Business Rules

- A seeker cannot send duplicate interest requests to the same listing
- Only the listing owner can accept or decline a request on it
- Listers cannot send an interest request on their own listing
- Accepting a request does not automatically delete other pending requests on the same listing (handled manually by the lister)
- A listing cannot be deleted if it has any `accepted` interest requests