import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";
import { validateBook } from "../middlewares/validateBook";

const router: Router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", validateBook, createBook);
router.put("/:id", validateBook, updateBook);
router.delete("/:id", deleteBook);

export default router;