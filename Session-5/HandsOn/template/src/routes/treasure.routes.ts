import { Router } from "express";
import {
  getAllTreasures,
  createTreasure,
  deleteTreasure,
} from "../controllers/treasure.controller.js";

const router = Router();

/**
 * @swagger
 * /treasures:
 *   get:
 *     summary: Get all treasures
 *     responses:
 *       200:
 *         description: A list of treasures
 */
router.get("/", getAllTreasures);

// 🔒 Step 5️⃣: only authenticated explorers should reach this
router.post("/", createTreasure);

// 🔒 Step 6️⃣: only a Captain should reach this
router.delete("/:id", deleteTreasure);

export default router;
