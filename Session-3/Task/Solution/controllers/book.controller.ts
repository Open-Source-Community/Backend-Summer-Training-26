import { Request, Response } from "express";
import { books, Book } from "../models/book.model";

export function getAllBooks(req: Request, res: Response): void {
  res.status(200).json(books);
}

export function getBookById(req: Request, res: Response): void {
  const id: number = parseInt(String(req.params.id), 10);
  const book: Book | undefined = books.find((b) => b.id === id);

  if (!book) {
    res.status(404).json({ message: "Book not found." });
    return;
  }

  res.status(200).json(book);
}

export function createBook(req: Request, res: Response): void {
  const { title, author, price, inStock } = req.body;

  const newBook: Book = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    price,
    inStock: typeof inStock === "boolean" ? inStock : true,
  };

  books.push(newBook);
  res.status(201).json(newBook);
}

export function updateBook(req: Request, res: Response): void {
  const id: number = parseInt(String(req.params.id), 10);
  const book: Book | undefined = books.find((b) => b.id === id);

  if (!book) {
    res.status(404).json({ message: "Book not found." });
    return;
  }

  const { title, author, price, inStock } = req.body;

  book.title = title;
  book.author = author;
  book.price = price;
  book.inStock = typeof inStock === "boolean" ? inStock : book.inStock;

  res.status(200).json(book);
}

export function deleteBook(req: Request, res: Response): void {
  const id: number = parseInt(String(req.params.id), 10);
  const index: number = books.findIndex((b) => b.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Book not found." });
    return;
  }

  books.splice(index, 1);
  res.status(200).json({ message: `Book with id ${id} removed.` });
}