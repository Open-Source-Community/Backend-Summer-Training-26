# Session 4 Prerequisites: MongoDB Atlas, Mongoose, dotenv & Swagger Setup

Welcome to the fourth island on **The Road of Glory to find Atlantis**! On the third island your data lived in a plain array — the moment you restarted your server, it was gone. On this island, you're starting a brand new project that connects to a **real database**, one that remembers everything, even after a restart, even after your laptop shuts down.

> ⚠️ **Important:** Please complete every step in this document **before Session 4 begins**. Session time will be spent writing the Explorer model and building the Explorer API — **not** on creating accounts, installing packages, configuring TypeScript, or debugging a database connection. By the end of this guide, your server should already be able to talk to MongoDB, so in the session you'll jump straight to building the `Explorer` model and its endpoints. If you hit a problem you can't solve, reach out to the supporters ahead of time (see the bottom of this document) — don't wait until the session starts.

---

## 📑 Agenda

1. [Step 0: What We're Building](#-step-0-what-were-building)
2. [Step 1: Create a New Project Folder](#-step-1-create-a-new-project-folder)
3. [Step 2: Create Your MongoDB Atlas Cluster](#-step-2-create-your-mongodb-atlas-cluster)
4. [Step 3: Get Your Connection String](#-step-3-get-your-connection-string)
5. [Step 4: Install the Required Packages](#-step-4-install-the-required-packages)
6. [Step 5: Set Up Your `.env` File](#-step-5-set-up-your-env-file)
7. [Step 6: Set Up Your Project Structure](#-step-6-set-up-your-project-structure)
8. [Step 7: Prove the Database Connection Works](#-step-7-prove-the-database-connection-works)
9. [Common Problems & Fixes](#-common-problems--fixes)
10. [Summary Checklist](#-summary-checklist)

---

## Objectives

By the end of this prerequisite guide (completed **before** Session 4), you will be able to:
* Have a brand new project folder set up with `npm` and a correctly configured `tsconfig.json`
* Have a free MongoDB Atlas cluster up and running in the cloud
* Have your connection string safely stored in a `.env` file
* Have `express`, `mongoose`, `dotenv`, `swagger-jsdoc`, and `swagger-ui-express` installed
* Have your project structured into `src/config/`, `src/models/`, `src/controllers/`, `src/routes/`
* See your server print **"MongoDB connected"** in the terminal — proof the hard part is already done

> 💡 **Tip:** MongoDB Atlas setup is the one step in this whole journey that involves clicking through a website instead of a terminal. Take it slow, and double-check each screen before moving to the next.

---

## Step 0: What We're Building

Up to now, every "island" restarted with an empty memory. Real applications can't work that way — a shop can't forget its products every time the server restarts, and a crew roster can't forget its explorers.

**MongoDB Atlas** is a free, cloud-hosted version of MongoDB — no installing a database server on your own machine, no managing it yourself. You create an account, spin up a small free cluster, and get a **connection string**: a URL-like address (with a username and password baked in) that your app uses to talk to that cluster from anywhere.

**Mongoose** is the library that lets you talk to MongoDB from TypeScript/Node using clean, typed code instead of raw database commands.

**dotenv** keeps secrets (like your database password) out of your code and inside a `.env` file that never gets shared or committed.

**Swagger** (`swagger-jsdoc` + `swagger-ui-express`) auto-generates a browsable documentation page for your API, straight from comments in your code.

By the end of today, all of this will be installed, configured, and *proven to work* — so in Session 4 itself, you only need to write the `Explorer` model, the three endpoints, and the Swagger docs.

---

## Step 1: Create a New Project Folder

> 🧭 **This is a fresh start, not a continuation.** Unlike previous islands, this one begins in a brand new folder — not inside `typescript-journey`. You won't be moving or reusing anything from Sessions 1–3.

### 1.1 Create and open new folder

open a new folder in VS Code (**File → Open Folder**, and select your folder for example `explorer-api`).

### 1.2 Confirm your tools are still installed
Open the built-in terminal (`` Ctrl + ` `` or `` Cmd + ` ``) and check:
```bash
node -v
npm -v
tsc -v
```
All three should print version numbers, just like in previous sessions.

### 1.3 Initialize npm
```bash
npm init -y
```
This creates a fresh **`package.json`** for this project — your new ship's manifest.

### 1.4 Initialize TypeScript
Unlike Session 2, there's no existing `tsconfig.json` to reuse here — this is a new project, so generate one from scratch:
```bash
tsc --init
```

### 1.5 Adjust `tsconfig.json`
Open the generated `tsconfig.json`. Some of the following may already be set and some may still be commented out with `//` — either way, make sure they end up looking like this, exactly as you configured them in the Session 2 prerequisites:

```jsonc
"module": "nodenext",
"moduleResolution": "nodenext",
"esModuleInterop": true,
"types": ["node"],
"verbatimModuleSyntax": false,
```

* `esModuleInterop` lets you write `import express from "express"` instead of a clunkier alternate syntax.
* `module` and `moduleResolution` tell TypeScript how to resolve the packages you're about to install in Step 4.
* `types` must be `["node"]` — not left as the empty array `tsc --init` sometimes generates — or you'll hit errors like `Cannot find name 'process'`.

Save the file.

---

## Step 2: Create Your MongoDB Atlas Cluster

### 2.1 Sign up
1. Go to **https://www.mongodb.com/products/platform/atlas-database**
2. Create an account (email, or sign up with Google/GitHub).
3. If prompted with a survey about your goals, pick any option and continue — it doesn't affect the setup.

### 2.2 Create a free cluster
1. When asked to deploy a database, choose the **M0 Free** tier (0$/month — this is the one you want, don't pick a paid tier).
2. Pick any cloud provider (AWS is a safe default) and a region close to you.
3. Give the cluster a name if you'd like (or leave the default), then click **Create Deployment**.
4. Wait a minute or two while Atlas provisions your cluster — you'll see a loading spinner.

> 💡 **Windows users:** if you'd like a guided video walkthrough of Atlas signup and cluster creation, watch: https://youtu.be/tC49Nzm6SyM?si=7VQdl0t3oS6eFklo
>
> **Linux (and everyone else):** you don't need to install anything locally — the free web dashboard at https://cloud.mongodb.com is all you need for this island.

### 2.3 Allow your computer to connect
Still in setup (or under **Network Access** in the left sidebar):
1. Click **Add IP Address**.
2. For this course, click **Allow Access From Anywhere** (`0.0.0.0/0`). This is fine for learning projects — real production apps would restrict this.
3. Click **Confirm**.

---

## Step 3: Get Your Connection String

1. In the Atlas dashboard, click **Connect** on your cluster.
2. Choose **Drivers** (sometimes labeled "Connect your application").
3. Make sure the driver is set to **Node.js**.
4. Copy the connection string shown — it looks like this:

```
mongodb+srv://atlasUser:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

5. You'll edit this string in Step 5 — for now, just keep this tab open or paste the string into a scratch note.

> ⚠️ **Don't share this string with anyone or commit it to GitHub** — it contains your database password. This is exactly why we're about to put it in a `.env` file instead of directly in your code.

---

## Step 4: Install the Required Packages

Since this is a brand new project, install both the core server packages and the new ones for this island, from your project root:

```bash
npm install express mongoose dotenv swagger-jsdoc swagger-ui-express
npm install -D typescript tsx @types/node @types/express @types/swagger-jsdoc @types/swagger-ui-express
```

* `express` — your server framework.
* `typescript`, `tsx` — the compiler and the tool that runs `.ts` files directly.
* `mongoose` — talks to MongoDB.
* `dotenv` — loads your `.env` file.
* `swagger-jsdoc` + `swagger-ui-express` — generate and serve your API documentation.

> 💡 `mongoose` and `dotenv` ship with their own types, so no `@types/mongoose` or `@types/dotenv` package is needed.

### Install nodemon globally (skip if already installed)
```bash
npm install -g nodemon
```
If you installed this in Session 2, it's still available — no need to reinstall.

### Verify everything installed
```bash
npm list
```
You should see `express`, `mongoose`, `dotenv`, `swagger-jsdoc`, `swagger-ui-express`, `typescript`, `tsx`, `@types/node`, `@types/express`, `@types/swagger-jsdoc`, and `@types/swagger-ui-express` in the list.

---

## Step 5: Set Up Your `.env` File

### 5.1 Create the file
In your project root (next to `package.json`), create a new file named exactly `.env`.

### 5.2 Add your connection string and port
```
MONGO_URI=mongodb+srv://atlasUser:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/atlantis?retryWrites=true&w=majority
PORT=3000
```

Two edits to make to the string you copied from Atlas:
* Replace `<password>` with the actual password you saved in Step 2.3.
* Add a database name right after `.net/` — e.g. `/atlantis` — so Mongoose knows which database inside your cluster to use. (It doesn't need to exist yet; MongoDB creates it automatically the first time you save data.)

---

## Step 6: Set Up Your Project Structure

Set up your new project with a `src/` folder from the start, including a `config/` folder for the database connection logic.

Then create an empty `src/server.ts` file. Your folder should now look like this:

```
explorer-api/
├── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── server.ts
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

The `models/`, `controllers/`, and `routes/` folders will stay empty until Session 4, when you build the `Explorer` model and API inside them.

---

## Step 7: Prove the Database Connection Works

This is the step that saves you debugging time in the actual session — by the end of it, you'll *know* Atlas, Mongoose, and dotenv are all wired together correctly.

### 7.1 Create the connection file
Create `src/config/db.ts`:

```typescript
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string;
    await mongoose.connect(uri);
    console.log("MongoDB connected ");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};
```

### 7.2 Wire it into `src/server.ts`
Load environment variables **first**, before anything else, then call `connectDB()` before your server starts listening:

```typescript
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is sailing at http://localhost:${port}`);
  });
});
```

> 💡 There are no routes yet — that's intentional. You'll add the `Explorer` routes, controller, and model in the session itself, starting at Step 4 of the hands-on.

### 7.3 Run it

```bash
nodemon --exec tsx src/server.ts
```

You should see, in this order:
```
MongoDB connected 
Server is sailing at http://localhost:3000
```

**If you see both lines, congratulations — your app is fully connected to MongoDB Atlas!** 🎉 You're ready to write the `Explorer` model and endpoints from scratch in Session 4, with zero setup left to do.

---

## Common Problems & Fixes

| Problem | Likely Cause | Fix |
|---|---|---|
| `MongoServerError: bad auth` | Wrong username/password in `MONGO_URI` | Re-check the username and password from Atlas Step 2.3; regenerate the password if unsure |
| Connection just hangs, never succeeds or fails | Your IP isn't allowed in Network Access | Go to Atlas → **Network Access** and confirm `0.0.0.0/0` is listed and active |
| `MONGO_URI is not defined` / `undefined` | `.env` isn't being loaded, or `dotenv/config` import is missing/misplaced | Make sure `import "dotenv/config";` is the **very first line** in `server.ts`, and that `.env` sits in the project root |
| Password has special characters and connection fails | Characters like `@`, `#`, `%` break the connection string | Go back to Atlas → Database Access → edit the user → autogenerate a new password without special characters |
| `Cannot find module './config/db.js'` | Import path uses `.js` but you're confused why — this is normal! | With `"module": "nodenext"`, TypeScript imports must use the `.js` extension even though the real file is `.ts`. Don't change it to `.ts` |
| Swagger packages installed but VS Code shows red squiggly errors | Types package name typo | Double check you installed `@types/swagger-jsdoc` and `@types/swagger-ui-express` (not `swaager-jsdoc`) |
| `nodemon: command not found` | nodemon wasn't installed globally, or terminal wasn't restarted | Re-run `npm install -g nodemon`, then restart your terminal |
| `Cannot find name 'process'` | `types` in `tsconfig.json` is still `[]` instead of `["node"]` | Revisit Step 1.5 and update `types` |

---

## Summary Checklist

Before coming to **Session 4**, make sure you can check off all of these:

- [ ] You created a brand new project folder (not inside `typescript-journey`) with `npm init -y` and `tsc --init`
- [ ] Your `tsconfig.json` has `module`, `moduleResolution`, `esModuleInterop`, and `types` set correctly
- [ ] You have a MongoDB Atlas account with a free M0 cluster running
- [ ] You created a database user and saved the username/password somewhere safe
- [ ] Network Access allows connections from anywhere (`0.0.0.0/0`)
- [ ] Your `.env` file has a working `MONGO_URI` (password filled in, database name added) and `PORT=3000`
- [ ] `.env` is listed in `.gitignore`
- [ ] `npm list` shows `express`, `mongoose`, `dotenv`, `swagger-jsdoc`, `swagger-ui-express`, `typescript`, `tsx`, `@types/node`, `@types/express`, `@types/swagger-jsdoc`, `@types/swagger-ui-express`
- [ ] Your project is structured into `src/config/`, `src/models/`, `src/controllers/`, `src/routes/`, and `src/server.ts`
- [ ] Running `nodemon --exec tsx src/server.ts` prints both `MongoDB connected ` and `Server is sailing at http://localhost:3000`

---

### Supporters will always be there for help :)
If you get stuck at any point — especially on the Atlas signup or connection string — don't struggle alone. Reach out on the Support channel in Discord with a screenshot of your terminal (and mask your password if you screenshot your `.env`!) and the exact error message. We're here to help you set sail to the fourth island smoothly!
