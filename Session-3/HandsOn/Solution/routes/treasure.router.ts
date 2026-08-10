import { Router } from "express";
import { getAllTreasures, createTreasure } from "../controllers/treasure.controller";

const router: Router = Router();

router.get("/", getAllTreasures);
router.get("/:id", getTreasureById);

export default router;
