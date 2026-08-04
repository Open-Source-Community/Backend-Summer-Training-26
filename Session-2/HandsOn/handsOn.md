# 🌍 Sindibad's Travel Guide

> *The Story:*  
> After reaching the second island, Sindbad realizes the crew keeps
> asking the same question:
>
> **"Where can we travel next?"**
>
> Instead of answering everyone one by one, Adel suggests building a
> tiny travel service that can tell the crew about the available
> destinations.
>
> For now, the service only knows two places:
> **Cairo** and **Baghdad**.
>
> Your mission is to build the very first version of this travel API.

---

# Hands On

## 1️⃣ Open the Project

- Open the project you created in the prerequisites.

---

## 2️⃣ Create the Express Server

- Create a basic **Express** server.
- Add the following route:

### **GET /**

Return a welcome message for travelers.

Example response:

```text
Welcome to Sindibad's Travel Guide!
```

---

## 3️⃣ Create the Destinations Data

Create a hardcoded array called `destinations`.

Each destination should contain:

- `id`
- `city`

Include these destinations:

- Cairo
- Baghdad

---

## 4️⃣ Get All Destinations

Create the following endpoint:

### **GET /destinations**

Return the complete list of available destinations.

---

## 5️⃣ Test Using Browser or Postman

Run your server and test the following endpoints:

- `GET /`
- `GET /destinations`

Verify that:

- The welcome message is returned from `/`.
- The destinations array is returned from `/destinations`.
- Both endpoints respond with **HTTP Status Code 200 (OK)**.
