# Session 3 Prerequisites: Project Structure

Welcome to the third island on **The Road of Glory to find Atlantis**! On the second island you got a live Express server running and talking to Postman. Now it's time to organize that project properly — the way real backend apps are structured — so that in Session 3 you can jump straight into building routes and CRUD logic instead of setting up folders.

> ⚠️ **Important:** Please complete every step in this document **before Session 3 begins**. Session time will be spent writing controllers, routes, and CRUD logic — not on installations or folder setup. If you hit a problem you can't solve, reach out to the supporters ahead of time (see the bottom of this document) — don't wait until the session starts.

---

## 📑 Agenda

Click any step below to jump straight to it:

1. [Step 0: What We're Building](#-step-0-what-were-building)
2. [Step 1: Reopen and Verify Your Session 2 Project](#-step-1-reopen-and-verify-your-session-2-project)
3. [Step 2: Confirm/Install Remaining Packages](#-step-2-confirminstall-remaining-packages)
4. [Step 3: Set Up Your Project Structure](#-step-3-set-up-your-project-structure)
5. [Step 4: Create Your Entry File](#-step-4-create-your-entry-file)
6. [Step 5: Final Run-Through](#-step-5-final-run-through)
7. [Common Problems & Fixes](#-common-problems--fixes)
8. [Summary Checklist](#-summary-checklist)

---

## Objectives

By the end of this prerequisite guide (completed **before Session 3**), you will be able to:

- Confirm your Session 2 project still runs correctly
- Understand why real backend projects are split into `models/`, `controllers/`and `routes/` folders
- Have that folder structure, plus a working entry file, ready to go
- Arrive at Session 3 with nothing left to install or scaffold — only logic left to write

> 💡 **Tip:** Just like the first two islands — don't rush. Read each step fully before typing anything.

---

## Step 0: What We're Building

So far, everything has lived in a single file: `server.ts`. That's fine for a one-route hello-world server, but real APIs handle many resources, many routes, and many rules — and cramming all of that into one file quickly turns into a mess.

On this island, you'll split your project into folders with clear jobs:

- **`models/`** — where your data lives (for now, a simple in-memory array)
- **`controllers/`** — where the logic for handling a request lives (what happens when someone asks for a treasure)
- **`routes/`** — where you map a URL (like `/treasure`) to the controller function that handles it

This prerequisite guide only sets the **structure** up. The actual treasures, routes, and CRUD logic are what you'll build together in Session 3.

---

## Step 1: Reopen and Verify Your Session 2 Project

> 🧭 **This is a continuation, not a fresh start.** You are **not** creating a new folder. Keep working inside the same `typescript-journey` folder from Sessions 1 and 2. Everything you installed and configured there stays exactly where it is.

### 1.1 Reopen your project

1. Open **VS Code**.
2. Click **File → Open Folder**, then select your existing **`typescript-journey`** folder (do **not** create a new one).
3. Open the built-in terminal (`` Ctrl + ` `` or `` Cmd + ` ``).

### 1.2 Confirm everything still works

Run each of these and make sure they all print a version number:

```bash
node -v
npm -v
tsc -v
```

Then confirm your `server.ts` from Session 2 still runs:

```bash
nodemon --exec tsx server.ts
```

You should see the server running:

---

## Step 2: Confirm/Install Remaining Packages

Session 3 will build on the exact same packages you already installed:

```
express, typescript, tsx, @types/node, @types/express, nodemon
```

Double check they're all still there:

```bash
npm list
```

You should see all of them listed. If anything is missing, reinstall it:

```bash
npm install express
npm install -D typescript tsx @types/node @types/express
npm install -g nodemon
```

> 💡 **Note on** **`ts-node`** **vs** **`tsx`**: Some guides mention `ts-node` for running TypeScript directly — you already have `tsx`, which does the same job (run `.ts` files without a separate compile step) and is what we'll keep using. You do **not** need to install `ts-node` separately.

---

## Step 3: Set Up Your Project Structure

### 3.1 Create the folders

In your project's root (next to `tsconfig.json` and `package.json`), create four new folders:

```bash
mkdir models controllers routes middleware
```

Your Explorer panel in VS Code should now show:

```
your-project-folder/
├──src/
  ├── models/
  ├── controllers/
  ├── routes/
  └── server.ts
├── node_modules/
├── package.json
├── tsconfig.json
```

### 3.2 What goes where (for Session 3)

You don't need to write any logic yet — just know what's coming so the folders make sense:

| Folder         | What will live here in Session 3                                    |
| -------------- | ------------------------------------------------------------------- |
| `models/`      | `treasureModel.ts` — the in-memory array of treasures               |
| `controllers/` | `treasureController.ts` — functions that handle GET/POST requests   |
| `routes/`      | `treasureRoutes.ts` — maps `/treasure` URLs to controller functions |

### 3.3 Create empty placeholder files

So the folders aren't just sitting there empty, create the three files you'll be filling in during the session:

```bash
touch models/treasureModel.ts
touch controllers/treasureController.ts
touch routes/treasureRoutes.ts
```

Add the following default export to `controllers/treasureController.ts` and `routes/treasureRoutes.ts`:

```typescript
export default {};
```

---

## Step 4: Create Your Entry File

Real projects usually rename their main file `app.ts` instead of `server.ts`, to make clear it's the whole application's entry point, not just "a server."

### 4.1 Remove the old entry file

Since `app.ts` will take over that job:

```bash
rm server.ts
```

### 4.2 Create `app.ts`

1. In the Explorer panel, click **New File** at the root of your project.
2. Name it `app.ts`.

### 4.3 Add this starter code to `app.ts`

```typescript
import express, { Application } from "express";
import treasureRoutes from "./routes/treasure.router";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
```

### 4.4 Add this code to `models/treasureModel.ts`

```typescript
export interface Treasure {
  id: number;
  name: string;
  valueInGold: number;
}

// In-memory treasure vault
export const treasures: Treasure[] = [
  { id: 1, name: "Golden Compass", valueInGold: 500 },
  { id: 2, name: "Pearl of Tides", valueInGold: 750 },
];
```

A couple of things worth noticing:

- `app.use(express.json())` is new — it tells Express to automatically parse incoming JSON request bodies. You'll need this in Session 3 for the `POST /treasure` route, so it's already in place.

Save the file.

---

## Step 5: Final Run-Through

Run your new entry file the same way you ran `server.ts`:

```bash
nodemon --exec tsx app.ts
```

You should see:

```
Listening on port 3000
```

**If you see this, congratulations — your project is fully restructured and ready for Session 3!** 🎉

Stop the server (`Ctrl + C`) once you've confirmed it works — you'll start it back up together at the beginning of the session.

---

## Common Problems & Fixes

| Problem                                       | Likely Cause                                                                           | Fix                                                                           |
| --------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `Cannot find module 'express'`                | You're not inside the project folder, or a package is missing                          | `cd` into `typescript-journey` and re-run `npm list` to check what's missing  |
| `nodemon: command not found`                  | nodemon wasn't installed globally, or terminal wasn't restarted                        | Re-run `npm install -g nodemon`, then restart your terminal                   |
| Browser shows nothing at `localhost:3000`     | `app.ts` wasn't saved, or the old `server.ts` is still running in another terminal tab | Save `app.ts`, close any other terminal still running `server.ts`             |
| VS Code Explorer doesn't show the new folders | Folders were created outside the project root                                          | Confirm you ran `mkdir` from inside `typescript-journey`, not a parent folder |
| `mkdir`/`touch` not recognized (Windows)      | Some Windows terminals don't support these commands                                    | Use the VS Code Explorer panel's "New Folder" / "New File" buttons instead    |

---

## Summary Checklist

Before coming to **Session 3**, make sure you can check off all of these:

- [ ] `node -v`, `npm -v`, and `tsc -v` all still print version numbers
- [ ] `npm list` shows `express`, `typescript`, `tsx`, `@types/node`, `@types/express`, and `nodemon`
- [ ] Your project has four new folders: `models/`, `controllers/`, `routes/`
- [ ] `models/treasureModel.ts`, `controllers/treasureController.ts`, and `routes/treasureRoutes.ts` exist (with the default export in the controller and router files)
- [ ] Your old `server.ts` has been removed and replaced with `app.ts`
- [ ] Running `nodemon --exec tsx app.ts` prints `Listening on port 3000`

---

### Supporters will always be there for help :)

If you get stuck at any point, don't struggle alone — reach out on the Support channel in Discord with a screenshot of your terminal and the exact error message. We're here to help you set sail to the third island smoothly!
