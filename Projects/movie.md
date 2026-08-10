# 🎬 Movie Ticket Booking System

## One-line Pitch
A platform where customers browse movies, reserve seats, and book tickets — while cinema admins manage movies, showtimes, and seat availability.

## The Problem
Customers often struggle to find available showtimes and book seats efficiently. Cinemas need a system to manage schedules, seat availability, and bookings in real time.


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
- Customer
- Cinema Admin

---

## Core Entities

| Entity | Fields |
|---|---|
| **User** | Full Name, Email, Password, Role (Customer / Cinema Admin) |
| **Movie** | Title, Genre, Duration, Description, Poster URL, Rating, Status (Now Showing / Coming Soon) |
| **Showtime** | Movie, Hall Number, Date, Start Time, End Time, Ticket Price, Total Capacity |
| **Booking** | Customer, Showtime, Selected Seats, Total Price, Booking Status (Pending / Confirmed / Cancelled) |

---

## Roles & Permissions

### Customer
- Register and log in
- Browse movies and showtimes
- View available seats
- Book movie tickets
- View booking history
- Cancel bookings before the movie starts
- Cannot manage movies or schedules

### Cinema Admin
- Add, edit, and remove movies
- Create and manage showtimes
- Update ticket prices
- View all bookings
- Manage seat availability

---

## Authentication & Authorization

**Authentication**
- User registration & login
- Password hashing with `bcrypt`
- JWT-based authentication
- Protected routes

**Authorization**
- Role-based access control (Customer / Cinema Admin)
- Only Cinema Admins can manage movies and showtimes
- Customers can only manage their own bookings

---

## CRUD Operations

| Role | Operations |
|---|---|
| **Customer** | Create bookings, view bookings, cancel bookings |
| **Cinema Admin** | Create / update / delete movies, create / update / delete showtimes |

---

## Search & Filtering

Support searching and filtering by:
- Movie title
- Genre
- Date
- Showtime
- Now Showing / Coming Soon

## Validation

- Valid email format
- Strong password
- Future showtimes only
- Valid seat numbers
- Required fields present

---

## Bonus Features (Optional)

- Movie ratings & reviews
- Favorite movies
- Pagination
- Sorting by rating or release date
- Dashboard statistics
- Logging middleware
- Soft delete for movies

---

## Business Rules

- A seat cannot be booked by more than one customer for the same showtime
- Customers cannot book duplicate seats in the same reservation
- Bookings can only be made for upcoming showtimes
- Customers can cancel bookings before the movie starts
- A cancelled booking automatically releases the reserved seats
- Cinema Admins can only manage movies and showtimes
- Showtimes cannot be deleted if there are confirmed bookings
- Total booked seats must never exceed hall capacity
- Customers can only submit a review after attending the movie *(bonus feature)*