import express, { Application } from "express";
import treasureRoutes from "./routes/treasure.router";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/treasure", treasureRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});