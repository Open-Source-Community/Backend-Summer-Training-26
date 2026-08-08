import { Request, Response } from "express";
import { treasures, Treasure } from "../models/treasure.model";

export function getAllTreasures(req: Request, res: Response): void {
  res.status(200).json(treasures);
}

export const getTreasureById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const treasure = treasures.find((t) => t.id === id);

  if (!treasure) {
    return res.status(404).json({ message: "Treasure not found" });
  }

  res.status(200).json(treasure);
};

  treasures.push(newTreasure);
  res.status(201).json(newTreasure);
}
