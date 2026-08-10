# 🏋️ Gym / Fitness Class Booking API

## One-line Pitch
A booking system where a gym publishes class sessions and members book a spot, with trainers managing the schedule.

## The Problem
Gyms need a simple way to schedule classes and manage member bookings and capacity — a common real-world booking pattern used far beyond fitness.

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
- Member
- Trainer

---

## Core Entities

| Entity | Fields |
|---|---|
| **User** | Full Name, Email, Password, Role (Member / Trainer) |
| **ClassSession** | Title, Trainer, Time Slot, Capacity |
| **Booking** | Session reference, Member, Status (`booked` / `cancelled`) |

---

## Roles & Permissions

### Trainer
- Register and log in
- Create, edit, and delete their own class sessions
- View bookings for their own sessions
- Cannot manage other trainers' sessions

### Member
- Register and log in
- Browse available class sessions
- Book a spot in a session
- Cancel their own bookings
- Cannot manage class sessions

---

## Authentication & Authorization

**Authentication**
- User registration & login
- Password hashing with `bcrypt`
- JWT-based authentication
- Protected routes

**Authorization**
- Role-based access control (Member / Trainer)
- Only a session's trainer can edit or delete that session
- Members can only manage their own bookings

---

## CRUD Operations

| Role | Operations |
|---|---|
| **Trainer** | Create / update / delete class sessions |
| **Member** | Create bookings, cancel own bookings |

---

## Search & Filtering

Support searching and filtering by:
- Class title
- Trainer name
- Day / time slot
- Availability (spots remaining)

## Validation

- Valid email format
- Strong password
- Capacity must be a positive integer
- Sessions can only be created for future time slots
- Required fields present

---

## Bonus Features (Optional)

- Waitlist when a session is full
- Pagination
- Dashboard statistics (busiest classes, attendance rate)
- Logging middleware
- Soft delete for class sessions

---

## Business Rules

- A booking cannot be made once a session reaches full capacity
- A member cannot book the same session twice
- Total booked seats must never exceed session capacity
- A cancelled booking automatically frees a spot in the session
- A trainer cannot delete a session if it has confirmed bookings
- Sessions can only be booked for future time slots