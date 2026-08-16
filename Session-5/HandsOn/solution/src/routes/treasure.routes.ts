import { Router } from "express";
import {
  getAllTreasures,
  createTreasure,
  deleteTreasure,
} from "../controllers/treasure.controller.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /treasures:
 *   get:
 *     summary: Get all treasures
 *     responses:
 *       200:
 *         description: A list of treasures
 *       401:
 *         description: Not authenticated
 */
// 🔒 Step 5️⃣: only authenticated explorers can reach this
router.get("/", protect, getAllTreasures);

// 🔒 Step 6️⃣: only a Captain can reach this
router.post("/", protect, authorize("Captain"), createTreasure);

// 🔒 Step 6️⃣: only a Captain can reach this
router.delete("/:id", protect, authorize("Captain"), deleteTreasure);

export default router;
