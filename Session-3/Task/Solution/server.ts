import express, { Application } from "express";
import bookRoutes from "./routes/book.router";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Corner Bookstore API is running on port ${PORT}`);
});

module.exports = app;
