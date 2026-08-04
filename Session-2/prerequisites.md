# Session 2 Prerequisites: Network Concepts and Node.js Servers

Welcome to the second island on **The Road of Glory to find Atlantis**! On the first island you learned to write and run TypeScript on your own machine. Now it's time to build something that can talk to the outside world — a **server**. This guide walks you through everything you need to install and prepare **before you arrive at Session 2**.

> ⚠️ **Important:** Please complete every step in this document **before Session 2 begins**. Session time will be spent on network concepts and building the API, not on installations. If you hit a problem you can't solve, reach out to the supporters ahead of time (see the bottom of this document) — don't wait until the session starts.

---

## 📑 Agenda

Click any step below to jump straight to it:

1. [Step 0: What We're Building](#-step-0-what-were-building)
2. [Step 1: Continue From Your Prerequisites 1 Project](#-step-1-continue-from-your-prerequisites-1-project)
3. [Full tsconfig.json Reference (After Sessions 1 & 2)](#-full-tsconfigjson-reference-after-sessions-1--2)
4. [Step 2: Install the Required Packages](#-step-2-install-the-required-packages)
5. [Step 3: Write, Run, and Test Your First Server](#-step-3-write-run-and-test-your-first-server)
6. [Step 4: Install Postman](#-step-4-install-postman)
7. [Common Problems & Fixes](#-common-problems--fixes)
8. [Summary Checklist](#-summary-checklist)

---

## Objectives

By the end of this prerequisite guide (completed **before** Session 2), you will be able to:
* Initialize a Node.js project with **npm**
* Install and understand **Express** (our server framework), **nodemon** (auto-restart tool), and **tsx** (TypeScript runner)
* Create a minimal Express server and run it
* Install **Postman** and send your first request to your own server

> 💡 **Tip:** Just like last time — don't rush. Read each step fully before typing anything.

---

## Step 0: What We're Building

On the first island, your code only ever talked to *you*, through the terminal. On this island, your code will start talking over a **network** — it will listen for requests and send back responses, the same way a real website's backend does.

To do that, we need three new pieces of gear:
* **Express** — a lightweight framework that makes it easy to build a server without writing raw networking code
* **nodemon** — a tool that watches your files and automatically restarts your server whenever you save a change, so you don't have to stop and start it by hand
* **Postman** — an app for sending test requests to your server, so you can see exactly what it sends back, without needing a browser or front-end

---

## Step 1: Continue From Your Prerequisites 1 Project

> 🧭 **This is a continuation, not a fresh start.** You are **not** creating a new folder for this island — you'll keep working inside the same `typescript-journey` folder you set up in Session 1's prerequisites. Everything you installed and configured there (Node.js, npm, TypeScript, `tsconfig.json`) stays exactly where it is; we're only adding what's new.

### 1.1 Reopen your Session 1 project
1. Open **VS Code**.
2. Click **File → Open Folder**, then select your existing **`typescript-journey`** folder from Session 1 (do **not** create a new one).
3. Open the built-in terminal (`` Ctrl + ` `` or `` Cmd + ` ``).

### 1.2 Confirm what's already there
Since you're continuing the same project, quickly re-check that last session's setup is still intact:

```bash
node -v
npm -v
tsc -v
```

All three should print version numbers, just like they did in Session 1. If any of them fail, revisit the **Common Problems & Fixes** table in the Session 1 prerequisites before continuing — don't move on until these three pass.

Also confirm the file **`tsconfig.json`** is still sitting in your folder (check the Explorer panel on the left). You created it in Session 1 with `tsc --init` — you will **not** run that command again here, we'll just adjust a couple of settings inside it in Step 1.3.

### 1.3 Adjust `tsconfig.json` for Express
Open `tsconfig.json`. Depending on your TypeScript version, some of these may already be set and some may still be commented out with `//` — either way, make sure they end up looking like this:

```jsonc
"module": "nodenext",
"moduleResolution": "nodenext",
"esModuleInterop": true,
"types": ["node"],
"verbatimModuleSyntax": false,
```

* `esModuleInterop` lets you write `import express from "express"` instead of a clunkier alternate syntax — without it, TypeScript may throw an error on that line.
* `module` and `moduleResolution` tell TypeScript how to resolve the packages you're about to install in Step 2, so autocomplete and type-checking work correctly.
* `types` is the important one to double-check. Newer versions of `tsc --init` generate this as an **empty array (`"types": []`)**, which tells TypeScript to load *no* global type packages at all — not even `@types/node`. If you leave it empty, you'll hit errors like `Cannot find name 'process'` or Express complaining it can't find its type declarations, even after installing everything correctly in Step 2. Change it to `["node"]` so Node's global types (and anything that depends on them, like Express's types) are actually loaded.


Save the file. That's the only editing `tsconfig.json` needs for this island.

### 1.4 Clean up Session 1's leftover output
Before moving on, clear out the compiled file left over from Session 1 so it doesn't sit around and confuse things:

> remove the .js file

```bash
rm welcome.js
```

You can keep `welcome.ts` around if you'd like a souvenir, but its compiled `welcome.js` output isn't needed anymore — from here on, you'll be running `.ts` files directly with `tsx` instead of compiling them by hand with `tsc`.

### 1.5 Initialize npm for this project
If you haven't already run this in Session 1 (check: is there a `package.json` in your folder?), run it now:

```bash
npm init -y
```

This creates a **`package.json`** file — think of it as your ship's manifest. It keeps track of your project's name, and (most importantly) every package you install, so anyone else can recreate your exact setup with one command. If `package.json` already exists, skip this — running it again would overwrite your settings.

---

## 📄 Full `tsconfig.json` Reference (After Sessions 1 & 2)

Once you've made the changes in Step 1.3, your `tsconfig.json` should look like this in full. Use this to double-check your file line by line if anything still isn't working:

```jsonc
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    // "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "esModuleInterop": true,
    "target": "es2016",
    "types": ["node"],
    // and npm install -D @types/node (you'll do this in Step 2)

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": false,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

---

## Step 2: Install the Required Packages

### 2.1 Install Express
```bash
npm install express
```
This downloads Express into a new `node_modules` folder and lists it as a dependency inside `package.json`.

### 2.2 Install nodemon globally
```bash
npm install -g nodemon
```
The `-g` means **global** — just like `tsc` on the first island, nodemon becomes available everywhere on your system, not just this one project.

### 2.3 Install the TypeScript tooling for this project
```bash
npm install -D typescript tsx @types/node @types/express
```
Let's break this line down:
* `-D` installs these as **dev dependencies** — tools you need while building, but that won't be shipped with the final app.
* `typescript` — the same compiler you used on the first island.
* `tsx` — lets you run `.ts` files directly, without a separate compile step (handy for development).
* `@types/node` and `@types/express` — these give VS Code and TypeScript the "shape" of Node's and Express's built-in features, so you get autocomplete and error-checking as you type.

### 2.4 Verify your installs
```bash
npm list
```
You should see `express`, `typescript`, `tsx`, `@types/node`, and `@types/express` listed. If any are missing, re-run the matching install command above.

---

## Step 3: Write, Run, and Test Your First Server

### 3.1 Create your server file
1. In the Explorer panel, click **New File**.
2. Name it `server.ts` and press Enter.

### 3.2 Add this code to `server.ts`
```typescript
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome aboard the second island! Your server is alive. ⚓");
});

app.listen(port, () => {
  console.log(`Server is sailing at http://localhost:${port}`);
});
```

Save the file (`Ctrl + S` / `Cmd + S`).

### 3.3 Run the server with nodemon + tsx
```bash
nodemon --exec tsx server.ts
```
* `nodemon` watches `server.ts` for changes and restarts automatically.
* `--exec tsx server.ts` tells nodemon to run the file directly through `tsx`, instead of compiling to JavaScript first.

You should see something like:
```
Server is sailing at http://localhost:3000
```

> 💡 **Tip:** Leave this terminal running — a live server needs to stay running to keep listening for requests. Open a **second** terminal tab if you need to type other commands.

### 3.4 Confirm it works in the browser
Open your browser and visit **http://localhost:3000**. You should see:
```
Welcome aboard the second island! Your server is alive. ⚓
```

**If you see this, congratulations — your server is fully working!** 🎉

---

## Step 4: Install Postman

A browser can only send simple requests. Postman lets you send *any* kind of request (GET, POST, PUT, DELETE, with custom data attached) — exactly what you'll need once your server does more than say hello.

### 4.1 Download and install Postman
1. Go to **https://www.postman.com/downloads/**
2. Download the version for your operating system and run the installer.
3. Video walkthroughs, if you'd like to follow along:
   * Windows / macOS: https://youtu.be/q8fHowK_qHQ?si=LZECi-50rXgruMRS
   * Linux: https://youtu.be/K75122-ZkqQ?si=ZRyvy6CYu0C-YnGL

### 4.2 Send your first request
1. Open Postman and sign in or skip sign-in if offered.
2. Click **New → HTTP Request**.
3. Make sure the method dropdown is set to **GET**.
4. In the URL bar, type `http://localhost:3000` (make sure your server from Step 3 is still running).
5. Click **Send**.

You should see the same welcome message appear in Postman's response panel below.

> 💡 **Tip:** Keep your server running in one terminal and Postman open in another window — this is the normal workflow you'll use for the rest of this island.

---

## Common Problems & Fixes

| Problem | Likely Cause | Fix |
|---|---|---|
| `nodemon: command not found` | nodemon wasn't installed globally, or terminal wasn't restarted | Re-run `npm install -g nodemon`, then restart your terminal |
| `Cannot find module 'express'` | You're not inside the project folder, or `npm install express` wasn't run | `cd` into your project folder and re-run the install command |
| Server starts but browser shows nothing / error | Wrong port in the URL, or server crashed | Check the terminal for errors, confirm you're visiting the exact port shown in the console log |
| `tsx` errors on `import express` | `@types/express` or `@types/node` missing | Re-run `npm install -D typescript tsx @types/node @types/express` |
| Postman shows "could not send request" | Server isn't running | Go back to the terminal running `nodemon` and confirm it's still active |

---

## Summary Checklist

Before coming to **Session 2**, make sure you can check off all of these:

- [ ] You have a project folder with a `package.json` inside it
- [ ] `express`, `typescript`, `tsx`, `@types/node`, and `@types/express` all appear in `npm list`
- [ ] `nodemon` runs without a "command not found" error
- [ ] Running `nodemon --exec tsx server.ts` prints `Server is sailing at http://localhost:3000`
- [ ] Visiting `http://localhost:3000` in your browser shows the welcome message
- [ ] Postman is installed and successfully shows the same welcome message after sending a GET request

---

### Supporters will always be there for help :)
If you get stuck at any point, don't struggle alone — reach out on the Support channel in Discord with a screenshot of your terminal and the exact error message. We're here to help you set sail to the second island smoothly!