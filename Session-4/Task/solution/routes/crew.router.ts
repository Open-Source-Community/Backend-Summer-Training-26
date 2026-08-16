import { Router } from "express";

import {
  getAllCrew,
  getCrewById,
  deleteCrew,
  updateCrew,
  filterCrew,
  addMission,
} from "../controller/crew.controller";

import {
  validateCrewUpdate,
} from "../middlewares/validateCrewUpdate";

import {
  validateMission,
} from "../middlewares/validateMission";

const router = Router();

/**
 * @swagger
 * /crew/filter:
 *   get:
 *     summary: Filter crew members
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *       - in: query
 *         name: minAge
 *         schema:
 *           type: number
 *       - in: query
 *         name: maxAge
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Filtered crew members
 */
router.get("/filter", filterCrew);

/**
 * @swagger
 * /crew/{id}/missions:
 *   post:
 *     summary: Add a mission to a crew member
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Mission added successfully
 */
router.post("/:id/missions",  validateMission,addMission);

router.get("/", getAllCrew);

router.get("/:id", getCrewById);

router.patch( "/:id", validateCrewUpdate,updateCrew);

router.delete("/:id", deleteCrew);

export default router;