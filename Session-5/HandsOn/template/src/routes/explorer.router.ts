import { Router } from "express";
import {
  createExplorer,
  getAllExplorers,
  updateExplorerIsland,
} from "../controllers/explorer.controller.js";

const router = Router();

/**
 * @swagger
 * /explorers:
 *   get:
 *     summary: Get all explorers
 *     responses:
 *       200:
 *         description: A list of explorers
 */
router.get("/", getAllExplorers);

router.post("/", createExplorer);
router.patch("/:id", updateExplorerIsland);

export default router;
