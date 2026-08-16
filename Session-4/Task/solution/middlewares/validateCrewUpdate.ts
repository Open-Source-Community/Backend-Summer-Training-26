import { Request, Response, NextFunction } from "express";

const validRoles = [
  "Captain",
  "Navigator",
  "Guide",
  "Guard",
  "Cook",
];

export function validateCrewUpdate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { role, age } = req.body;

  if (role && !validRoles.includes(role)) {
    res.status(400).json({
      message: "Invalid role.",
    });
    return;
  }

  if (age !== undefined && (typeof age !== "number" || age <= 0)) {
    res.status(400).json({
      message: "Age must be a positive number.",
    });
    return;
  }

  next();
}