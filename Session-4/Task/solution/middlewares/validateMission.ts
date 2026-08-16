import { Request, Response, NextFunction } from "express";

const validStatus = [
  "Not Started",
  "In Progress",
  "Completed",
];

export function validateMission(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { islandName, status } = req.body;

  if (
    !islandName ||
    typeof islandName !== "string" ||
    islandName.trim() === ""
  ) {
    res.status(400).json({
      message: "islandName is required.",
    });
    return;
  }

  if (status && !validStatus.includes(status)) {
    res.status(400).json({
      message: "Invalid mission status.",
    });
    return;
  }

  next();
}