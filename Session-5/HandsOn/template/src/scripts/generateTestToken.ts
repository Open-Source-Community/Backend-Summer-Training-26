import "dotenv/config";
import jwt from "jsonwebtoken";

// There's no register/login endpoint yet this session, so use this to
// mint a token for manual testing in Postman / Thunder Client.
//
// Usage:
//   tsx src/scripts/generateTestToken.ts Captain
//   tsx src/scripts/generateTestToken.ts Sailor

const role = process.argv[2] || "Sailor";

const token = jwt.sign(
  { id: "test-user-id", role },
  process.env.JWT_SECRET as string,
  { expiresIn: process.env.JWT_EXPIRES_IN as any }
);

console.log(`\nGenerated ${role} token:\n${token}\n`);
console.log(
  "In Postman/Thunder Client: Cookies tab -> add cookie named 'token' with this value, on localhost."
);
