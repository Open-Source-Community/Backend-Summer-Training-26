# 🌍 Sindbad's Travel Guide - Island 5

> **The Story:**
>
> Sindbad finally reaches the legendary **Cave of Hidden Treasures**.
>
> The entrance is protected by ancient guardians. Every explorer must first prove their identity before entering, and only trusted captains are allowed to unlock the King's Vault.
>
> Tonight, your mission is to build the cave's magical security system.

---

> ⚠️ **Before you start:** make sure you completed the Session 5 prerequisites — you should have the starter template running, with the Explorer and Treasure endpoints both responding and `src/middleware/auth.middleware.ts` sitting empty, ready for you to fill in.
>
> The `Treasure` model, controller, and routes are already built for you and currently unprotected. You won't touch `treasure.controller.ts` or `treasure.model.ts` tonight — only `auth.middleware.ts` and the middleware wiring in `treasure.routes.ts`.

# Hands On

## 1️⃣ Build the Cave Gate

Open `src/middleware/auth.middleware.ts` and implement a `protect` function.

Requirements:

- Read the JWT from cookies.
- Verify the token.
- Attach the authenticated user to `req.user`.
- Return **401 Unauthorized** if authentication fails.

---

## 2️⃣ Protect the Treasure Room

Open `src/routes/treasure.routes.ts` and add your `protect` middleware to:

### GET `/treasures`

Only authenticated users can access this route.

---

## 3️⃣ Protect the King's Vault

Back in `auth.middleware.ts`, implement an `authorize` middleware.

Only users with the role

- Captain

can access, in `treasure.routes.ts`:

### POST `/treasures`
### DELETE `/treasures/:id`

Return **403 Forbidden** for everyone else.

---

## 🧪 Testing without login/register

There's no register/login endpoint yet this session, so you'll need to generate a test token to try things out:

- Use the `generateTestToken.ts` helper (given), or write a couple of lines with `jwt.sign()` yourself, to mint a token with a `role` of `"Sailor"` or `"Captain"`.
- In Postman / Thunder Client, add a cookie named `token` with that value on `localhost`, then call the `/treasures` endpoints.
