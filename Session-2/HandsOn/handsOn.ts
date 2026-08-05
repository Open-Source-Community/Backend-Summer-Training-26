import express, { Request, Response } from "express";
const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Sindibad's Travel Guide!");
});

interface city {
  id: number;
  name: string;
}

const dest: city[] = [
  { id: 1, name: "cairo" },
  { id: 2, name: "baghdad" },
];

app.get("/destinations", (req: Request, res: Response) => {
  res.send(dest);
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
