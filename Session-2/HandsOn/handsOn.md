# 🌍 Sindibad's Travel Guide

> **The Story:**\
> The gate on the first island creaks open — Sindbad steps through,
> Adel right behind him, bow slung over his shoulder as always. The
> rest of the crew stays back to patch up the ship, so it's just the
> two of them who reach the **second island**.
>
> Waiting on the shore are two locals who insist on tagging along:
> **Marwa**, who knows every shortcut on the island (and won't stop
> talking about it), and **Ahmed**, who immediately starts asking
> where they're headed next, and the one after that, and the one
> after that.
>
> Sindbad decides enough is enough: no more guessing. He wants a
> proper travel service for the crew — starting small, with just two
> known stops so far: **Cairo** and **Baghdad**. He wants a simple API
> so the crew can:
>
> -   View all available destinations.
> -   Search for a destination using its ID.
> -   Receive a personalized welcome message before starting their
>     journey.

------------------------------------------------------------------------

## Hands on

### 1️⃣ Open the Project you setup from the prerequisites

-   Open the Folder 
-   remove any code written in the .ts file 

### 2️⃣ Create the Data

Create a hardcoded array called `destinations` containing:

-   `id`
-   `city`

Include at least two destinations.

### 3️⃣ Get All Destinations

Create:

**GET** `/destinations`

Returns the complete list of destinations.

### 4️⃣ Get Destination by ID

Create:

**GET** `/destinations/:id`

-   Find the destination using the route parameter.
-   If found, return it.
-   Otherwise return:

``` json
{
  "message": "Destination not found."
}
```

with status code **404**.

### 5️⃣ Welcome a Traveler

Create:

**GET** `/welcome?name=YourName`

If the `name` query parameter exists, return:

``` json
{
  "message": "Welcome to Sindibad, Mohamed!"
}
```

If the query parameter is missing, return:

``` json
{
  "message": "Please provide a name query parameter."
}
```

with status code **400**.

### 6️⃣ Test Using Postman

Test all endpoints:

-   `GET /destinations`
-   `GET /destinations/1`
-   `GET /destinations/100`
-   `GET /welcome?name=Mohamed`
-   `GET /welcome`

Verify both the returned JSON and the correct HTTP status codes.