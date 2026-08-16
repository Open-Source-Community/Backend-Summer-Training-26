import { Request, Response } from "express";
import { Treasure } from "../models/treasure.model.js";

export const getAllTreasures = async (
  req: Request,
  res: Response
): Promise<void> => {
  const treasures = await Treasure.find();
  res.status(200).json(treasures);
};

export async function createTreasure(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const treasure = await Treasure.create(req.body);
    res.status(201).json(treasure);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create treasure.",
      error,
    });
  }
}

export const deleteTreasure = async (
  req: Request,
  res: Response
): Promise<void> => {
  const treasure = await Treasure.findOneAndDelete({
    treasureId: req.params.id,
  });

  if (!treasure) {
    res.status(404).json({ message: "Treasure not found." });
    return;
  }

  res.status(200).json({ message: "Treasure removed from the vault.", treasure });
};
