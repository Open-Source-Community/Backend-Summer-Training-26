# 🌱 Git & GitHub Guide for Absolute Beginners

Welcome! This guide walks you through Git step by step, explaining **what each command does and why you'd use it** — not just the command itself. Keep it handy as a reference while you learn.

## 📖 First, the Big Picture

- **Git** is a tool on your computer that tracks changes to your files over time (like an "undo history" for your whole project).
- **GitHub** is a website that stores a copy of your project online, so you can back it up, share it, and collaborate with others.
- A **repository** (or "repo") is just a project folder that Git is tracking.
- A **commit** is a saved snapshot of your project at a point in time, with a message describing what changed.
- A **branch** is a separate line of work, so you can experiment without touching the main version of your project.

You'll mostly move between **your computer** (local) and **GitHub** (remote) using these commands.

---

## 1. Starting a Brand New Project on GitHub

Use this when you have a project folder on your computer that **isn't on GitHub yet**, and you want to put it there for the first time.

### Step 1 — Turn your folder into a Git repository
```bash
git init
```
This tells Git "start tracking changes in this folder." It creates a hidden `.git` folder that stores all your history. You only do this once per project.

### Step 2 — Stage your files
```bash
git add .
```
"Staging" means telling Git which files you want to include in your next snapshot. The `.` means "all files in this folder." Think of it like putting items in a box before sealing it.

### Step 3 — Commit (save a snapshot)
```bash
git commit -m "Initial commit"
```
This seals the box and labels it. The `-m "..."` part is your **commit message** — a short note explaining what this snapshot contains. Always write a clear message so future-you (or teammates) understand the history.

### Step 4 — Connect your project to GitHub
First, create an empty repository on GitHub.com (click the **+** icon → **New repository**). Then link it:
```bash
git remote add origin https://github.com/username/repository.git
```
This tells Git "when I say push or pull, talk to this GitHub address." `origin` is just a nickname for that address — you don't need to change it.

### Step 5 — Push your project to GitHub
```bash
git push -u origin main
```
This uploads your commits to GitHub. The `-u` flag remembers this connection, so next time you can just type `git push`.

> 💡 **Note:** Your default branch might be called `main` or `master` depending on your Git settings. If `main` doesn't work, try:
> ```bash
> git push -u origin master
> ```

---

## 2. Cloning a Project That Already Exists

Use this when a project is **already on GitHub** and you want a copy on your computer to work on.

### Step 1 — Copy the project to your computer
```bash
git clone https://github.com/username/repository.git
```
This downloads the entire project, including its full history, into a new folder.

### Step 2 — Check what's changed
```bash
git status
```
Run this often! It shows you which files you've edited, added, or deleted, and reminds you what to do next. It's like checking your "to-do list" before saving.

### Step 3 — Stage your changes
```bash
git add .
```
Same as before — this prepares your edited files to be committed.

### Step 4 — Commit your changes
```bash
git commit -m "Describe your changes"
```
Write a message that explains **what** you changed and **why** (e.g. `"Fix login button color"` is much more useful than `"update"`).

### Step 5 — Get the latest updates from GitHub
```bash
git pull origin main
```
This downloads any new changes teammates (or you, from another computer) have pushed, and merges them into your local copy. **Always pull before you start working**, so you're not editing an outdated version.

### Step 6 — Push your changes back to GitHub
```bash
git push origin main
```
This uploads your new commits so others can see them.

> 💡 If you're working on a different branch instead of `main`:
> ```bash
> git push origin branch-name
> ```

---

## 3. Working with Branches

**Why branches?** Imagine you want to try a new feature but don't want to risk breaking the working version of your app. A branch lets you work safely on a copy, then merge it back in once it's ready.

### See what branches exist
```bash
git branch
```
Shows a list of all branches in your project. The one with a `*` next to it is the branch you're currently on.

### Create a new branch (without switching to it)
```bash
git branch feature-login
```
This creates a branch called `feature-login` but keeps you on your current branch.

### Create AND switch to a new branch in one step (recommended)
```bash
git checkout -b feature-login
```
or, using the newer command:
```bash
git switch -c feature-login
```
Both do the same thing: create the branch and move you onto it immediately, ready to start working.

### Switch to an existing branch
```bash
git checkout main
```
or
```bash
git switch main
```
This moves you back to the `main` branch (or any branch you name).

### Push a new branch to GitHub
```bash
git push -u origin feature-login
```
Without this, your new branch only exists on your computer. This step uploads it to GitHub so others can see or collaborate on it.

---

## 4. Merging a Branch Back Into Main

Once your work on a branch is finished and tested, you'll want to bring those changes into `main`.

### Step 1 — Switch to the branch you want to merge INTO (usually `main`)
```bash
git checkout main
```

### Step 2 — Merge your feature branch into it
```bash
git merge feature-login
```
This combines the changes from `feature-login` into `main`. If both branches changed the same lines of code, Git will ask you to resolve a **merge conflict** — don't panic, it just means you need to manually pick which changes to keep.

### Step 3 — Push the merged result to GitHub
```bash
git push origin main
```

---

## 5. Undoing Mistakes & Restoring Previous Versions

Everyone makes mistakes — this is where Git really shines, because almost nothing is permanent until you commit and push.

### Discard changes you haven't committed yet
```bash
git restore .
```
This throws away uncommitted edits and reverts files back to their last committed state. Use this when you've messed something up and just want a clean slate.

### Reset completely to your last commit
```bash
git reset --hard HEAD
```
`HEAD` means "the last commit on this branch." This command wipes out **all** uncommitted changes — use carefully, as it can't be undone.

### Restore the exact version that's on GitHub
```bash
git fetch origin
git reset --hard origin/main
```
`git fetch` downloads the latest info from GitHub without changing your files. `git reset --hard origin/main` then forces your local files to match GitHub exactly, discarding any local differences.

### View your commit history
```bash
git log
```
Shows every commit, with its unique ID, author, date, and message. Press `q` to exit the log view. For a shorter, easier-to-read version:
```bash
git log --oneline
```

### Roll back to a specific past commit
```bash
git reset --hard <commit-id>
```
Replace `<commit-id>` with the ID you found using `git log` (e.g. `a1b2c3d`). This rewinds your project to exactly how it looked at that commit.

---

## 📋 Quick Reference Table

| Command | What It Does |
|---------|---------------|
| `git init` | Start tracking a new project with Git |
| `git clone <url>` | Download an existing GitHub project |
| `git status` | Show what's changed since your last commit |
| `git add .` | Stage all changes, ready to commit |
| `git commit -m "message"` | Save a snapshot with a description |
| `git pull` | Download and merge the latest changes from GitHub |
| `git push` | Upload your commits to GitHub |
| `git log --oneline` | View a short commit history |
| `git branch` | List all branches |
| `git checkout -b branch-name` | Create and switch to a new branch |
| `git switch branch-name` | Switch to an existing branch |
| `git merge branch-name` | Merge a branch into your current branch |
| `git restore .` | Discard uncommitted changes |
| `git reset --hard HEAD` | Reset fully to the last commit |

---

## ✅ Good Habits for Beginners

1. **Pull before you start working** — always run `git pull` first, so you're building on the latest version.
2. **Commit often, with clear messages** — small, frequent commits are easier to understand and undo than one giant commit.
3. **Use branches for new features** — never work directly on `main` if you're experimenting; create a branch instead.
4. **Check `git status` frequently** — it tells you exactly what Git sees and what to do next.
5. **Don't panic over mistakes** — Git keeps history, so most things are recoverable. When in doubt, avoid `--hard` resets until you're sure.
6. **Write your commit messages like a mini diary entry** — describe *what* changed and *why*, not just "update" or "fix."

---

## 🆘 Common Beginner Mistakes

- **Forgetting to `git add` before committing** → Git will say "nothing to commit" because it doesn't know which files to save yet.
- **Pushing to the wrong branch name** → check `git branch` to confirm you're on the branch you think you're on.
- **Not pulling before pushing** → if someone else pushed changes first, Git will reject your push until you `git pull` and resolve any conflicts.
- **Using `git reset --hard` carelessly** → this permanently discards uncommitted work. Double-check with `git status` before running it.
