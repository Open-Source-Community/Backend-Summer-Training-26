# 🏝️ Island 2 — Networking & Server Creation

## [Session Slides](https://canva.link/p9j66nfi160jr3x)

> **The Backend of Atlantis — Open Source Community**
>
> Welcome to **Island 2**! In this session, we move from writing backend code to understanding **how computers communicate** and how we can build a **server that communicates with them**.
>
> This material is designed for **absolute beginners**. You do not need previous networking knowledge. We will start with the idea of two computers talking to each other, then gradually reach a working Node.js + Express server.

---

## 📚 Table of Contents

### Part 1 — How Networks Actually Work

1. [Session Overview](#-session-overview)
2. [Big Picture](#-big-picture)
3. [What Is a Network?](#1-what-is-a-network)
4. [Client and Server](#2-client-and-server)
5. [IP Addresses](#3-ip-addresses)
6. [Ports](#4-ports)
7. [DNS](#5-dns-domain-name-system)
8. [OSI Model](#6-osi-model)
9. [TCP vs UDP](#7-tcp-vs-udp)
10. [HTTP](#8-http-hypertext-transfer-protocol)
11. [HTTP vs HTTPS](#9-http-vs-https)
12. [HTTP Request Anatomy](#10-http-request-anatomy)
13. [JSON](#11-json)
14. [HTTP Methods](#12-http-methods)
15. [HTTP Status Codes](#13-http-status-codes)
16. [URL Structure](#14-url-structure)
17. [What Is an API?](#15-what-is-an-api)

### Part 2 — Building a Server

18. [What Is Node.js?](#-part-2--building-a-server-using-express)
19. [JavaScript Before Node.js](#16-javascript-before-nodejs)
20. [Node.js Runtime](#17-nodejs-runtime)
21. [Node.js Modules](#18-nodejs-modules)
22. [npm](#19-npm-node-package-manager)
23. [package.json](#20-packagejson)
24. [node_modules and Dependencies](#21-nodemodules-and-dependencies)
25. [What Is Express?](#22-what-is-express)
26. [Framework vs Library](#23-framework-vs-library)
27. [Creating a Basic Server](#24-creating-a-basic-server)
28. [Understanding Every Line](#25-understanding-every-line)
29. [Postman](#26-testing-with-postman)
30. [Nodemon](#27-running-with-nodemon)
31. [Final Mental Model](#-final-mental-model)
32. [Quick Check](#-quick-check)
33. [Summary](#-summary)

---

# 🌊 Session Overview

## What are we learning?

This session has two connected parts:

```text
PART 1
How computers communicate
        ↓
Networks
IP addresses
Ports
DNS
OSI Model
TCP / UDP
HTTP / HTTPS
Requests / Responses
APIs
        ↓
PART 2
How WE build a server
        ↓
Node.js
npm
Express
Routes
Postman
Nodemon
        ↓
Hands-On
Build a small Travel API
```

The important idea is:

> **Part 1 explains what is happening. Part 2 teaches us how to build it.**

---

#  Learning Objectives

By the end of this session, you should be able to:

- Explain what a computer network is.
- Explain the difference between a **client** and a **server**.
- Understand what an **IP address** identifies.
- Understand why **ports** are needed.
- Explain what **DNS** does.
- Understand the basic purpose of the **OSI model**.
- Explain the difference between **TCP and UDP**.
- Understand how **HTTP request/response communication** works.
- Recognize common HTTP methods and status codes.
- Read the main parts of a URL.
- Explain what an **API** is.
- Explain what Node.js is and why it is useful for backend development.
- Use npm and `package.json`.
- Understand what Express does.
- Create a basic Express server.
- Create simple routes.
- Test an API with Postman.
- Use Nodemon during development.

---

# Big Picture


### Session roadmap

| Session | Topic |
|---|---|
| 1 | TypeScript Introduction & Async Programming |
| **2** | **Networking & Server Creation ← You are here** |
| 3 | APIs, Project Structure & CRUD |
| 4 | MongoDB, Environment Variables & Documentation |
| 5 | Authentication, Authorization & Deployment |

---

# 🌐 PART 1 — How Networks Actually Work

# 1. What Is a Network?

A **network** is a connection between two or more computers/devices that allows them to:

- communicate,
- exchange data,
- share resources,
- exchange files,
- or use services provided by another machine.

For example:

```text
Your Laptop
     │
     │ Wi-Fi
     │
     ▼
Your Router
     │
     │ Internet
     │
     ▼
Google's Servers
```

When you open a website, your computer is communicating with another computer somewhere else.

### A simple definition

> **A network allows devices to communicate with each other.**

---

## Types of Networks

Networks can be classified in different ways.

### Based on geographical area

You may hear names such as:

- **PAN** — Personal Area Network
- **LAN** — Local Area Network
- **WLAN** — Wireless Local Area Network
- **CAN** — Campus Area Network
- **MAN** — Metropolitan Area Network
- **WAN** — Wide Area Network
- **VPN** — Virtual Private Network
- **SAN** — Storage Area Network

You do **not** need to memorize every type for this session. The important idea is that networks can cover different sizes and purposes.

---

## Based on transmission media

### Wired / Guided

Data travels through a physical medium such as a cable.

```text
Computer ───── Ethernet Cable ───── Router
```

### Wireless / Unguided

Data travels through the air using electromagnetic waves.

Examples:

- Wi-Fi
- Bluetooth

```text
Laptop ))) ))) ))) Router
```

---

## Based on network architecture

Two important models are:

### Peer-to-Peer (P2P)

Devices can communicate more directly with each other.

```text
Computer A ←────→ Computer B
     ↕                 ↕
Computer C ←────→ Computer D
```

### Client-Server

One side asks for something, and another side provides it.

```text
Client ───── request ─────→ Server
Client ←──── response ───── Server
```

This second model is especially important for backend development.

---

# 2. Client and Server

Imagine you open an application and ask:

```text
"Can I get /profile?"
```

Something needs to receive that request and answer it.

### Client

The **client** is the side that makes the request.

Examples:

- Web browser
- Mobile app
- Postman
- Frontend application

### Server

The **server** is the program that receives requests and sends responses.

A server is not necessarily a special magical computer.

> A server can simply be a **program that is running and waiting for requests**.

For example, a Node.js process can be our server.

```text
                Request
Client ─────────────────────────→ Server
Browser / App / Postman           Node.js process
                                      │
                                      │ processes request
                                      ▼
                Response
Client ←───────────────────────── Server
```

---

## What does `server.listen(3000)` mean?

When you write:

```js
server.listen(3000);
```

you are essentially telling your program:

> "Start listening for connections on port 3000."

So there is no magic involved.

```text
server.listen(3000)
        │
        ▼
"Wait for requests on port 3000"
```

---

# 3. IP Addresses

If you want to communicate with another device, you need a way to identify **which machine** you want to reach.

That is where an **IP address** comes in.

## What is an IP address?

An IP address is an address used to identify a device/interface on a network.

A simple analogy:

```text
House address → tells you which house to visit
IP address    → helps identify which machine/network destination to reach
```

Example IPv4 address:

```text
192.168.1.100
```

---

## localhost

You will see this address often while developing backend applications:

It means:

> **This computer, right now.**

It is commonly referred to as:

```text
localhost
```

So:

```text
http://127.0.0.1
```

and

```text
http://localhost
```

usually refer to your own machine.

---

## Local development

Suppose you run a server on your laptop:

```text
Your Laptop
┌───────────────────────────┐
│ Node.js Server            │
│ localhost:3000            │
└───────────────────────────┘
```

You can access it from your own computer using:

```text
http://localhost:3000
```

---

# 4. Ports

An IP address gets us to the **machine**.

But a machine can run many programs at the same time.

So how do we tell the operating system **which program** should receive the traffic?

We use a **port**.

## IP + Port

Think about it like this:

```text
IP Address = Building address
Port       = Apartment number
```

For example:

```text
192.168.1.100:3000
│              │
│              └── Port
└───────────────── IP address
```

The IP identifies the machine.

The port identifies the service/application listening on that machine.

---

## Common ports

Some common examples:

| Port | Common use |
|---:|---|
| `80` | HTTP |
| `443` | HTTPS |
| `3000` | Common Node.js development port |
| `27017` | Common MongoDB port |
| `5432` | Common PostgreSQL port |

These are conventions/common defaults, not rules that every application must follow.

---

## One machine, many services

A single computer can run several services:

```text
Computer: 192.168.1.100

Port 3000 → Node.js application
Port 5432 → PostgreSQL
Port 27017 → MongoDB
Port 8080 → Another application
```

This is why this matters:

```js
server.listen(3000);
```

It tells the operating system:

> "Give my server the traffic arriving on port `3000`."

---

# 5. DNS — Domain Name System

Imagine you had to remember an IP address every time you wanted to visit a website:

```text
142.250.190.14
```

That would be annoying.

Instead, humans use names such as:

```text
google.com
```

## What does DNS do?

**DNS (Domain Name System)** translates domain names into IP addresses.

A simple analogy:

> DNS is like the **phonebook of the internet**.

You know a person's name, but your phone needs their number.

Similarly:

```text
You know:
google.com

Computer needs:
an IP address
```

---

## DNS flow

A simplified flow looks like this:

```text
You type:
google.com
     │
     ▼
Computer asks DNS:
"What is the IP address of google.com?"
     │
     ▼
DNS responds with an IP address
     │
     ▼
Browser connects to that destination
```

So:

```text
Domain Name
    │
    │ DNS lookup
    ▼
IP Address
    │
    ▼
Server
```

---

# 6. OSI Model

The **OSI model** is a way of thinking about network communication by dividing it into layers.

The full OSI model has **7 layers**:

```text
7  Application
6  Presentation
5  Session
4  Transport
3  Network
2  Data Link
1  Physical
```

For this session, we mainly care about the ideas behind the **Application** and **Transport** layers.

---

## Application Layer

The Application layer is the layer closest to applications such as browsers and backend applications.

It provides network services that applications use and works with application-level protocols.

Examples mentioned in this session include:

- HTTP / HTTPS
- FTP
- DNS
- WebSocket (WS)

For our backend work, **HTTP** is especially important.

---

## Transport Layer

The Transport layer is responsible for communication between applications across hosts.

It deals with things such as:

- breaking data into pieces,
- delivering data between endpoints,
- reliability or speed depending on the protocol.

Two important transport protocols are:

- TCP
- UDP

---

# 7. TCP vs UDP

## TCP

**TCP (Transmission Control Protocol)** focuses on reliable, ordered delivery.

It can:

- detect lost data,
- resend lost data,
- preserve order.

This introduces additional overhead.

---

## UDP

**UDP (User Datagram Protocol)** focuses on speed and low overhead.

It does not provide TCP-style guarantees that data will arrive or arrive in order.

This can make it useful when speed is more important than perfect delivery.

---

## Comparison

| Feature | TCP | UDP |
|---|---|---|
| Guarantees delivery? | Yes, with retransmission | No |
| Keeps data ordered? | Yes | No |
| Overhead | Higher | Lower |
| Typical examples | Web pages, APIs, file transfer | Live streaming, gaming, real-time communication |

### Simple analogy

**TCP:**

```text
"Send me page 1."
"Did you receive it?"
"Yes."
"Now page 2."
```

**UDP:**

```text
"Here is the next packet!"
"Here is another!"
"Here is another!"
```

UDP does not wait for the same kind of delivery confirmation.

---

## Why does this matter for HTTP?

In the traditional HTTP-over-TCP model covered here:

```text
HTTP
  ↓
TCP
  ↓
IP
  ↓
Network
```

TCP handles reliable, ordered transport underneath HTTP.

So when you build a normal Node.js HTTP server, you do not manually implement packet retransmission.

---

# 8. HTTP — Hypertext Transfer Protocol

Now we reach one of the most important concepts for backend development.

## What is HTTP?

**HTTP (Hypertext Transfer Protocol)** is a protocol used for communication between clients and servers.

It follows a **request-response model**.

```text
Client                          Server
  │                               │
  │────── HTTP Request ──────────→│
  │                               │
  │                         process request
  │                               │
  │←───── HTTP Response ──────────│
  │                               │
```

The client asks.

The server answers.

---

## Example

You open:

```text
https://example.com/profile
```

Your browser may send a request similar to:

```text
GET /profile HTTP/1.1
```

The server processes it and returns a response.

---

# 9. HTTP vs HTTPS

## HTTP

With plain HTTP, data is sent without TLS encryption.

If someone can successfully intercept the traffic, the contents may be readable.

---

## HTTPS

HTTPS means:

```text
HTTP + TLS encryption
```

TLS encrypts data while it travels between the client and server.

So instead of:

```text
Client ─── readable data ───→ Server
```

we have:

```text
Client ─── encrypted data ───→ Server
```

---

## Certificates and keys

HTTPS uses cryptographic credentials including:

- a certificate,
- a private key.

A certificate helps the client verify the server's identity, while TLS establishes encrypted communication.

Trusted **Certificate Authorities (CAs)** issue certificates that browsers can trust.

In modern deployments, you usually do not manually manage all of this yourself. Hosting platforms and reverse proxies often handle TLS for you.

---

# 10. HTTP Request Anatomy

An HTTP request can contain several important parts.

```text
┌──────────────────────────────────────┐
│ Request Line                         │
│ GET /users HTTP/1.1                  │
├──────────────────────────────────────┤
│ Headers                              │
│ Content-Type: application/json       │
│ Authorization: ...                   │
├──────────────────────────────────────┤
│ Body                                 │
│ {"name": "Omnia"}                    │
└──────────────────────────────────────┘
```

---

## 10.1 Request Line

The request line contains:

```text
Method + Path + HTTP Version
```

Example:

```text
GET /users HTTP/1.1
```

Here:

```text
GET      → method
/users   → path
HTTP/1.1 → HTTP version
```

---

## 10.2 Headers

Headers are **key-value metadata** about the request.

Example:

```http
Content-Type: application/json
Authorization: Bearer token
```

They provide additional information about the request.

Think of headers as:

> "Extra information about what I am sending and how you should interpret it."

---

## 10.3 Body

The body contains the actual data being sent.

For example:

```json
{
  "name": "Omnia",
  "age": 20
}
```

A request body is commonly used with methods such as:

- POST
- PUT
- PATCH

A GET request usually does not use a request body in typical API design.

---

# 11. JSON

## What is JSON?

**JSON = JavaScript Object Notation**

It is a lightweight format used to represent and exchange structured data.

Example:

```json
{
  "name": "Cairo",
  "country": "Egypt"
}
```

JSON is popular because:

- humans can read it easily,
- machines can parse it,
- it works well with APIs,
- it is commonly used to send and receive structured data.

---

## JavaScript object vs JSON

JavaScript:

```js
const destination = {
  name: "Cairo",
  country: "Egypt"
};
```

JSON:

```json
{
  "name": "Cairo",
  "country": "Egypt"
}
```

They look very similar, but JSON is a **data format**, not a JavaScript object.

---

# 12. HTTP Methods

HTTP methods tell the server **what kind of operation the client wants**.

The most important ones for this session are:

| Method | Meaning |
|---|---|
| `GET` | Read data |
| `POST` | Create data |
| `PUT` | Replace/update a resource |
| `DELETE` | Remove data |

A useful memory trick:

```text
GET    → Give me data
POST   → Create something
PUT    → Replace/update something
DELETE → Remove something
```

---

## Example API

Suppose we have users:

```text
GET    /users       → get users
POST   /users       → create a user
PUT    /users/5     → replace user 5
DELETE /users/5     → delete user 5
```

The **method + URL/path** together tell us what operation we are requesting.

---

# 13. HTTP Status Codes

The server uses status codes to tell the client what happened.

You do not need to memorize every code.

Instead, learn the **first digit/category**.

| Category | Meaning |
|---|---|
| `2xx` | Success |
| `3xx` | Redirection |
| `4xx` | Client error |
| `5xx` | Server error |

---

## Common examples

### `200 OK`

The request succeeded.

```text
GET /users
→ 200 OK
```

### `201 Created`

A new resource was successfully created.

```text
POST /users
→ 201 Created
```

### `301 Moved Permanently`

The requested resource has moved to another location.

### `304 Not Modified`

The cached version can still be used.

### `400 Bad Request`

The client sent invalid data or a malformed request.

### `404 Not Found`

The requested resource could not be found.

### `500 Internal Server Error`

Something went wrong on the server.

---

## The most important pattern

```text
2xx → "It worked!"
3xx → "Go somewhere else / use cached version."
4xx → "The request/client has a problem."
5xx → "The server has a problem."
```

---

# 14. URL Structure

A URL can contain several pieces.

Example:

```text
https://example.com:3000/users/42?active=true#profile
│      │            │    │         │           │
│      │            │    │         │           └─ Fragment
│      │            │    │         └──────────── Query
│      │            │    └────────────────────── Path
│      │            └─────────────────────────── Port
│      └──────────────────────────────────────── Domain / Host
└────────────────────────────────────────────── Protocol
```

---

## Protocol

Example:

```text
https
```

It tells us the protocol used for communication.

Other protocols you may encounter include:

```text
http
ws
```

---

## Domain / Host

Example:

```text
example.com
```

This identifies the host you want to communicate with.

---

## Port

Example:

```text
:3000
```

It identifies the service/application endpoint on the host.

The port is optional in a URL because protocols have standard default ports.

---

## Path

Example:

```text
/users/42
```

The path identifies the resource or route being requested.

---

## Query

Example:

```text
?active=true&role=admin
```

Query parameters provide additional information to the server.

---

## Fragment

Example:

```text
#profile
```

A fragment identifies a section within a resource. It is generally handled by the client/browser rather than sent as part of the HTTP request to the server.

---

# 15. What Is an API?

## API = Application Programming Interface

An API is a defined way for software systems to communicate.

A useful beginner-friendly definition is:

> **An API is a software-to-software meeting point.**

Instead of one program directly knowing how another program is implemented, it communicates through the interface that the other program exposes.

---

## 🍽️ The Restaurant Analogy

Imagine you are in a restaurant.

```text
You
(Client)
  │
  │ "I want pizza."
  ▼
Waiter
(API)
  │
  │ takes your order
  ▼
Kitchen
(Server)
  │
  │ prepares the food
  ▼
Waiter
(API)
  │
  │ delivers result
  ▼
You
(Client)
```

### Mapping

| Restaurant | Backend |
|---|---|
| You | Client |
| Waiter | API |
| Kitchen | Server |
| Order | Request |
| Food | Response |

The API provides a controlled way for the client to ask the server for something.

---

## API Components

An API request commonly involves:

### Endpoint

A specific URL representing a resource or operation.

Examples:

```text
/users
/orders
/orders/5
```

### Method

The action:

```text
GET
POST
PUT
DELETE
```

### Request

Information sent by the client.

It may include:

- headers
- body
- query parameters
- path parameters

### Response

Information sent by the server.

It commonly includes:

- status code
- headers
- body

### Data format

JSON is commonly used for API data.

---

# 🔗 Connecting Everything Together

So far we have learned:

```text
Client
  │
  │ HTTP Request
  ▼
Network
  │
  ├── DNS → finds the destination
  ├── IP  → identifies the machine
  └── Port → identifies the service
  │
  ▼
Server
  │
  │ processes request
  ▼
HTTP Response
  │
  ▼
Client
```

Now we are ready to **build the server ourselves**.

---

#  PART 2 — Building a Server Using Express

# 16. JavaScript Before Node.js

JavaScript was originally designed to run in web browsers.

A browser contains a JavaScript engine.

One famous engine is:

> **V8**

V8 executes JavaScript code inside environments such as Chrome.

Originally, this meant JavaScript was mainly associated with browser-side behavior:

```text
Browser
  ↓
JavaScript
  ↓
Interactive web pages
```

But backend applications need to run JavaScript **outside the browser**.

That is where Node.js comes in.

---

# 17. Node.js Runtime

## What is Node.js?

> **Node.js is a JavaScript runtime environment that allows JavaScript to run outside the browser.**

This lets us use JavaScript for backend development.

```text
BEFORE NODE.JS

JavaScript → Browser / Frontend


WITH NODE.JS

JavaScript → Browser / Frontend
JavaScript → Node.js / Backend
```

That means one language can be used across the stack.

---

## Why is Node.js useful for backend development?

Node.js is:

- fast,
- event-driven,
- suitable for network applications,
- useful for building APIs,
- useful for building scalable web servers,
- useful for real-time applications.

For this training, the most important point is:

> **Node.js gives us an environment where we can run JavaScript on the server.**

---

# 18. Node.js Modules

Node.js applications can use modules.

There are two broad categories we care about here.

## Built-in / Core Modules

These come with Node.js.

You do not install them separately.

Examples:

```text
fs
http
path
os
```

For example:

```js
const fs = require("fs");
```

---

## Third-party Modules

These are packages created by the community.

They are not automatically included in Node.js.

Examples:

```text
express
mongoose
nodemon
```

You generally install them with npm.

---

# 19. npm — Node Package Manager

## What is npm?

**npm** is the default package manager used with Node.js.

It helps developers:

- install packages,
- manage dependencies,
- run scripts,
- share and reuse packages.

---

## What is a package?

A package is a collection of reusable code/files that provides functionality for your project.

Instead of writing everything from scratch, we can install packages created by other developers.

For example:

```text
Need a web framework?
        ↓
Install Express
        ↓
Use its functionality
```

---

## Why use packages?

Packages help us:

- reuse existing code,
- save development time,
- avoid reinventing common functionality,
- manage project dependencies.

---

# 20. package.json

When working with a Node.js project, you will commonly have:

```text
package.json
```

It contains information about your project, such as:

- project name,
- version,
- scripts,
- dependencies,
- metadata.

A simplified example:

```json
{
  "name": "travel-api",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  }
}
```

The exact versions will depend on the project.

---

## package.json vs npm

Do not confuse them.

### npm

A **tool/package manager** used to manage packages and run project scripts.

### package.json

A **project configuration file** that describes the project and records dependencies/scripts.

A simple analogy:

```text
npm
↓
The manager

package.json
↓
The project's instruction/record file
```

---

# 21. node_modules and Dependencies

Imagine you clone a Node.js project from GitHub.

You see:

```text
package.json
```

but:

```text
node_modules/
```

is missing.

Why?

Because installed packages are normally **not committed to Git**.

They can be recreated from the dependency information in `package.json`.

Run:

```bash
npm install
```

npm will:

1. read `package.json`,
2. find the required dependencies,
3. install them,
4. recreate `node_modules`.

Conceptually:

```text
GitHub Project
│
├── package.json
├── package-lock.json
└── src/

        npm install
             ↓
        node_modules/
```

---

# 22. What Is Express?

## Express.js

**Express.js is a web framework for Node.js.**

It makes building servers and APIs easier.

It helps us with things such as:

- routing,
- handling requests,
- sending responses,
- organizing server behavior.

Without Express, we can use Node's lower-level HTTP functionality.

With Express:

```text
Node.js
   │
   ▼
Express
   │
   ├── routes
   ├── requests
   └── responses
```

Express gives us a simpler developer experience for common web-server tasks.

---

# 23. Framework vs Library

These terms are often confused.

## Library

A library provides reusable functionality that **your code calls**.

```text
Your code
   │
   └── calls → Library
```

Examples often described as libraries:

- React
- NumPy
- Pandas

---

## Framework

A framework provides a structure and set of tools for building applications.

The framework generally defines more of the application's flow and conventions.

Examples:

- Express
- Angular
- Laravel

### Simple idea

```text
Library:
"You call me when you need me."

Framework:
"Build your application inside the structure I provide."
```

The distinction can be more nuanced in real-world software engineering, but this is enough for a beginner starting this session.

---

# 24. Creating a Basic Server

We can now build our first server.

## Step 1 — Initialize the project

Create a folder:

```bash
mkdir travel-api
cd travel-api
```

Initialize npm:

```bash
npm init -y
```

This creates:

```text
package.json
```

---

## Step 2 — Install Express

```bash
npm install express
```

Now Express becomes a project dependency.

---

## Step 3 — TypeScript dependencies

If you are using TypeScript, you also need the appropriate TypeScript tooling and Express type definitions.

For example:

```bash
npm install -D typescript tsx @types/express
```

The exact TypeScript setup can vary depending on the project's configuration.

---

## Step 4 — Create the server

For JavaScript:

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Sindibad Travel Guide!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

# 25. Understanding Every Line

Let's slow down.

## Import Express

```js
const express = require("express");
```

We are loading Express so that our application can use it.

If your project uses ES modules, you may instead see:

```js
import express from "express";
```

---

## Create the application

```js
const app = express();
```

Calling `express()` creates an Express application object.

We store it in:

```text
app
```

We will use `app` to configure our server.

---

## Define the port

```js
const PORT = 3000;
```

We choose port `3000` for our local development server.

---

## Create a route

```js
app.get("/", (req, res) => {
  res.send("Welcome to Sindibad Travel Guide!");
});
```

This means:

> "When a GET request comes to `/`, run this function."

Break it down:

```text
app.get
  │
  ├── "/"       → path
  │
  └── callback  → what to do when request arrives
```

---

## What are `req` and `res`?

### `req`

Short for:

```text
request
```

It represents information coming **from the client**.

For example, it can contain:

- URL/path,
- query parameters,
- headers,
- body,
- method.

### `res`

Short for:

```text
response
```

It represents what our server sends **back to the client**.

For example:

```js
res.send("Hello!");
```

means:

> "Send this response back to whoever made the request."

---

## Start the server

```js
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

This starts listening for incoming requests.

```text
app.listen(3000)
       ↓
Server starts
       ↓
Waiting for requests
```

---

# 🧩 The Whole Request Flow

When you visit:

```text
http://localhost:3000/
```

this happens:

```text
Browser
   │
   │ GET /
   ▼
localhost:3000
   │
   ▼
Express Server
   │
   │ matches app.get("/")
   ▼
Callback runs
   │
   ▼
res.send(...)
   │
   ▼
HTTP Response
   │
   ▼
Browser displays response
```

This is the networking theory from Part 1 becoming actual code.

---

# 26. Testing with Postman

## What is Postman?

Postman is a tool used to:

- send HTTP requests,
- test APIs,
- inspect responses,
- debug backend applications.

Instead of using a browser for every request, we can explicitly choose:

```text
Method
URL
Headers
Body
```

and send the request.

---

## Example

Suppose our server is running at:

```text
http://localhost:3000
```

In Postman:

```text
Method: GET

URL:
http://localhost:3000/
```

Click **Send**.

You should receive something like:

```text
Welcome to Sindibad Travel Guide!
```

You should also see a status code such as:

```text
200 OK
```

---

## Postman mental model

```text
┌─────────────────────────────┐
│ Method: GET                 │
│ URL: localhost:3000/        │
│                             │
│          [ Send ]           │
└──────────────┬──────────────┘
               │
               ▼
        Express Server
               │
               ▼
┌─────────────────────────────┐
│ 200 OK                      │
│                             │
│ Welcome to Sindibad Guide!  │
└─────────────────────────────┘
```

---

# 27. Running with Nodemon

One annoying thing during development is repeatedly restarting the server.

Without Nodemon:

```text
Edit code
   ↓
Stop server
   ↓
Start server again
   ↓
Test
```

With Nodemon:

```text
Edit code
   ↓
Save
   ↓
Nodemon detects change
   ↓
Server restarts automatically
```

---

## Install Nodemon

If you want it available globally:

```bash
npm install -g nodemon
```

Then instead of:

```bash
node app.js
```

you can run:

```bash
nodemon app.js
```

For TypeScript projects, the exact command depends on how the TypeScript project is configured.

> **Important:** Nodemon is mainly a development convenience. It is not something you need to rely on as your production process manager.

---

# The Most Important Concepts to Remember

## Network

```text
Devices communicate.
```

## Client

```text
The side making the request.
```

## Server

```text
The program waiting for and handling requests.
```

## IP

```text
Helps identify the machine/network destination.
```

## Port

```text
Identifies the service/application on a machine.
```

## DNS

```text
Translates domain names to IP addresses.
```

## TCP

```text
Reliable, ordered transport.
```

## UDP

```text
Fast, low-overhead transport without TCP's delivery guarantees.
```

## HTTP

```text
A protocol used for client-server communication using requests and responses.
```

## API

```text
A defined interface through which software communicates.
```

## Node.js

```text
A JavaScript runtime that lets us run JavaScript outside the browser.
```

## npm

```text
The package manager used to install/manage Node.js packages.
```

## Express

```text
A Node.js web framework that simplifies building servers and APIs.
```

## Route

```text
A combination of an HTTP method and path that tells the server how to handle a request.
```

---

# 🗺️ Final Mental Model

If everything in this session feels disconnected, remember this picture:

```text
                         INTERNET / NETWORK
                                 │
                ┌────────────────┴────────────────┐
                │                                 │
             CLIENT                            SERVER
          Browser/App                        Node.js App
                │                                 │
                │  HTTP Request                   │
                │                                 │
                ├───────────────►                 │
                │                                 │
                │                         Express Route
                │                                 │
                │                         app.get(...)
                │                                 │
                │                         Business Logic
                │                                 │
                │  HTTP Response                  │
                │ ◄───────────────                │
                │                                 │
```

And underneath the communication:

```text
Application
    │
   HTTP
    │
Transport
    │
   TCP
    │
Network
    │
   IP
    │
Physical / Network Infrastructure
```

And when the server is local:

```text
http://localhost:3000/destinations
       │        │      │
       │        │      └── Path
       │        └───────── Port
       └────────────────── Host
```

---

# 🧪 Quick Check

Before leaving Island 2, make sure you can answer these without looking at the notes.

### Networking

1. What is a network?
2. What is the difference between a client and a server?
3. What does an IP address identify?
4. Why do we need ports?
5. What does `localhost` mean?
6. What does DNS do?
7. What is the difference between TCP and UDP?
8. What is HTTP?
9. What is the difference between HTTP and HTTPS?
10. What is a request?
11. What is a response?
12. What are HTTP headers?
13. What is a request body?
14. What does `GET` mean?
15. What does `POST` mean?
16. What does `DELETE` mean?
17. What does a `404` mean?
18. What does a `500` mean?
19. What is JSON?
20. What is an API?

### Node.js & Express

21. What is Node.js?
22. Why do we need Node.js if JavaScript already exists?
23. What is npm?
24. What is `package.json`?
25. Why is `node_modules` usually not uploaded to GitHub?
26. What is Express?
27. What does `app.get()` do?
28. What is `req`?
29. What is `res`?
30. What does `app.listen(3000)` do?
31. Why do we use Postman?
32. What problem does Nodemon solve?

---

#  Summary

In this session, we started from the lowest-level beginner question:

> **"How do computers talk to each other?"**

We learned:

```text
Network
  ↓
Client / Server
  ↓
IP Address
  ↓
Port
  ↓
DNS
  ↓
OSI concepts
  ↓
TCP / UDP
  ↓
HTTP / HTTPS
  ↓
Request / Response
  ↓
JSON
  ↓
HTTP Methods
  ↓
Status Codes
  ↓
URLs
  ↓
APIs
```

Then we used that knowledge to start building our own backend:

```text
JavaScript
    ↓
Node.js
    ↓
npm
    ↓
Express
    ↓
Server
    ↓
Routes
    ↓
Postman
    ↓
Nodemon
    ↓
Travel API 🚢
```

Our first API is simple:

```text
GET /              → Welcome message
GET /destinations  → Cairo + Baghdad
```

This may look small, but it is the beginning of the same request/response architecture used by much larger backend applications.

---

# 🌟 What's Next?

In **Island 3 — APIs, Project Structure & CRUD**, we will build on this foundation.

We will move from:

```text
"How does a server respond?"
```

to:

```text
"How do we design and organize a real API?"
```

We will explore:

- APIs in more depth
- routes and endpoints
- project structure
- CRUD operations
- creating, reading, updating, and deleting data

The server you built here is the starting point.

---

## 📖 References & Further Learning

- [MDN — HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [MDN — HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)
- [MDN — HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Express Documentation](https://expressjs.com/)
- [npm Documentation](https://docs.npmjs.com/)
- [Postman Learning Center](https://learning.postman.com/)
- [Open Source Community — Backend Learning Hub 26](https://github.com/Open-Source-Community/backend-learning-hub-26)

---

# 🏝️ END OF ISLAND 2

**You learned how computers communicate.  
You learned how servers work.  
Now you built one yourself.**

> 🚢 **Let's sail to Island 3...**
