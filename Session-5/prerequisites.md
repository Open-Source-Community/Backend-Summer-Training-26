# Session 5 Prerequisites: Authentication Project Setup

Welcome to the fifth island on **The Road of Glory to find Atlantis**!

Sindbad and his crew have reached the entrance of the **Cave of Hidden Treasures**.

The cave isn't open to everyone. Ancient guardians stand at the entrance, allowing only verified explorers inside. Even after entering, only trusted captains are allowed to unlock the King's Vault.

Session 5 is a **separate project** from Session 4 — this island starts from its own starter template, not from your previous Explorer API. The template already contains everything except the actual security logic, so all you need to do before Session 5 is get it running.

> ⚠️ **Important:** Complete every step in this document **before Session 5 begins.** Session time will be spent implementing Authentication and Authorization — not installing packages or reconnecting MongoDB. If something isn't working, contact a supporter before the session starts.

---

# 📑 Agenda

1. Step 0: Download the Starter Template
2. Step 1: Install Packages
3. Step 2: Configure Environment Variables
4. Step 3: Verify Everything Works
5. Summary Checklist

---

# 🎯 Objectives

By the end of this prerequisite guide, you should have:

- The Session 5 starter template running on your machine.
- All packages installed with a single command.
- JWT and MongoDB environment variables configured.
- Confirmation that the Explorer and Treasure endpoints both respond.
- Everything ready to start coding the security logic immediately during Session 5.

---

# Step 0: Download the Starter Template

📥 **[Download the Session 5 starter template]** https://surl.li/qfyvja

Unzip it and open it in your editor. It already includes:

- A working `Explorer` model, controller, and routes.
- A working `Treasure` model, controller, and routes — this is the resource guarding the Cave of Hidden Treasures. It's currently **wide open**: anyone can hit `GET /treasures`, `POST /treasures`, and `DELETE /treasures/:id` with no restrictions. That's expected — locking it down is what you'll build during the session.
- A `User` model (`username`, `email`, `password`, `role`) — no registration/login logic yet, that comes later.
- MongoDB connection setup and Swagger docs, already wired into `server.ts`.
- An **empty** `src/middleware/auth.middleware.ts` — this is the only file you'll write code in during Session 5.

Do not modify any other files. Everything else is given so the session can focus entirely on Authentication and Authorization.

---

# Step 1: Install Packages

From the project root:

```bash
npm install
```

This installs everything the template needs, including `jsonwebtoken` and `cookie-parser` — the two packages you'll use to build authentication during the session.

---

# Step 2: Configure Environment Variables

Create a `.env` file in the project root (there's a `.env.example` to copy from):

```env
PORT=3000
MONGO_URI=your-mongodb-atlas-connection-string
JWT_SECRET=super-secret-key
JWT_EXPIRES_IN=1d
```

---

# Step 3: Verify Everything Works

Run

```bash
nodemon --exec tsx src/server.ts
```

Your application should:

- Connect to MongoDB successfully.
- Start without errors.
- Respond to `GET /explorers`, `POST /explorers`, `PATCH /explorers/:id`.
- Respond to `GET /treasures`, `POST /treasures`, `DELETE /treasures/:id` — unprotected, for now.
- Open Swagger docs at `/api-docs`.

---

# ✅ Summary Checklist

Before Session 5 begins:

- [ ] Starter template downloaded and unzipped.
- [ ] `npm install` completed with no errors.
- [ ] `.env` file created with `PORT`, `MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`.
- [ ] Server starts and connects to MongoDB.
- [ ] Explorer endpoints work.
- [ ] Treasure endpoints work (unprotected).
- [ ] Swagger docs open at `/api-docs`.

Congratulations! 🎉

Your ship is now ready to sail toward the Cave of Hidden Treasures.
