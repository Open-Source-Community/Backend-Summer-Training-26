import { Request, Response, NextFunction } from "express";

// 🗝️ Step 4️⃣: Build the Cave Gate
// - Read the JWT from cookies (req.cookies.token)
// - Verify it using process.env.JWT_SECRET
// - Attach the decoded { id, role } to req.user
// - Call next() if the token is valid
// - Respond with 401 Unauthorized if it's missing or invalid
export function protect(req: Request, res: Response, next: NextFunction): void {
  // your code here
}

// 🗝️ Step 6️⃣: Protect the King's Vault
// - Accept a list of allowed roles, e.g. authorize("Captain")
// - Compare req.user.role against the allowed roles
// - Call next() if allowed
// - Respond with 403 Forbidden if not
export function authorize(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    // your code here
  };
}
