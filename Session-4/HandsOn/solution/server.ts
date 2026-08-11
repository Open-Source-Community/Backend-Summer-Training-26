import 'dotenv/config';
import express from "express";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./config/db";
import { specs } from "./config/swagger";
import explorerRoutes from "./routes/explorer.router"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/explorers", explorerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});