import { Request, Response } from "express";
import { Explorer } from "../models/explorer.model.js";

export async function createExplorer(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const explorer = await Explorer.create(req.body);
    res.status(201).json(explorer);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create explorer.",
      error,
    });
  }
}

export const getAllExplorers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const explorers = await Explorer.find();
  res.status(200).json(explorers);
};

export const updateExplorerIsland = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { island } = req.body;

  const explorer = await Explorer.findOneAndUpdate(
    { explorerId: req.params.id },
    { island },
    { new: true }
  );

  if (!explorer) {
    res.status(404).json({ message: "Explorer not found." });
    return;
  }

  res.status(200).json(explorer);
};
