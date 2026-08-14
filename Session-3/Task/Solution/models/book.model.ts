export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  inStock: boolean;
}

// In-memory catalog
export const books: Book[] = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 220, inStock: true },
  { id: 2, title: "Sapiens", author: "Yuval Noah Harari", price: 350, inStock: true },
  { id: 3, title: "1984", author: "George Orwell", price: 180, inStock: false },
];