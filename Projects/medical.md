# 🩺 Medical Appointment System

## One-line Pitch
A platform where patients book appointments with doctors, doctors manage their schedules, and admins oversee the whole system.

## The Problem
Patients often struggle to book appointments efficiently due to limited communication channels and scheduling conflicts. Doctors need a centralized system to organize their availability and manage appointments.

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
- Patient
- Doctor
- Admin

---

## Core Entities

| Entity | Fields |
|---|---|
| **User** | Full Name, Email, Password, Role (Patient / Doctor / Admin) |
| **Doctor Profile** | Specialty, Experience, Clinic Address, Consultation Fee, Working Hours, Availability Status |
| **Appointment** | Patient, Doctor, Appointment Date, Time Slot, Status (Pending / Confirmed / Completed / Cancelled), Notes (optional) |
| **Schedule** | Doctor, Day, Available Time Slots, Availability |

---

## Roles & Permissions

### Patient
- Register and log in
- View doctors and their available schedules
- Book appointments
- View appointment history
- Cancel appointments before the scheduled time
- Cannot modify doctors' schedules

### Doctor
- Register/log in (or be created by Admin)
- Manage personal schedule
- View appointments
- Confirm, complete, or cancel appointments
- Update professional profile
- Cannot manage other doctors' schedules

### Admin
- Manage doctors
- View all appointments
- Remove inactive doctors
- Manage users if necessary

---

## Authentication & Authorization

**Authentication**
- User registration & login
- Password hashing with `bcrypt`
- JWT-based authentication
- Protected routes

**Authorization**
- Role-based access control (Patient / Doctor / Admin)
- Only doctors can manage their own schedules
- Only patients can book appointments
- Only admins can manage doctors

---

## CRUD Operations

| Role | Operations |
|---|---|
| **Patient** | Create appointments, view appointments, cancel appointments |
| **Doctor** | Create / update / delete schedules, manage appointment status |
| **Admin** | Manage doctor accounts |

---

## Search & Filtering

Support searching and filtering by:
- Doctor name
- Specialty
- Available date
- Available time
- Appointment status

## Validation

- Valid email format
- Strong password
- Future appointment dates only
- Required fields present
- Valid appointment status

---

## Bonus Features (Optional)

- Pagination
- Doctor ratings & reviews
- Search by clinic location
- Appointment reminders (mock only)
- Dashboard statistics
- Logging middleware
- Soft delete for doctor accounts

---

## Business Rules

- A patient cannot book the same time slot twice
- A doctor cannot have overlapping appointments
- Appointments can only be booked for future dates
- Patients can only cancel appointments before the appointment time
- Doctors can only manage their own schedules
- A cancelled appointment automatically frees the reserved time slot
- Completed appointments cannot be edited or cancelled
- Doctors cannot delete a schedule if it contains confirmed future appointments
- Patients can only review a doctor after completing an appointment *(bonus feature)*