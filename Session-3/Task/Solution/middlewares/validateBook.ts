import { Request, Response, NextFunction } from "express";

export function validateBook(req: Request, res: Response, next: NextFunction): void {
  const { title, author, price } = req.body;

  if (!title || typeof title !== "string") {
    res.status(400).json({ message: "Title is required and must be a string." });
    return;
  }

  if (!author || typeof author !== "string") {
    res.status(400).json({ message: "Author is required and must be a string." });
    return;
  }

  if (typeof price !== "number" || price <= 0) {
    res.status(400).json({ message: "Price is required and must be a positive number." });
    return;
  }

  next();
}