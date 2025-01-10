import { json } from "@sveltejs/kit";
import { parse } from "cookie"; // Use `cookie` package for parsing cookies
import jwt from "jsonwebtoken";
const JWT_SECRET = "svelte_jwt_secret";

export const GET = async ({ request }) => {
  const cookies = parse(request.headers.get("cookie") || "");
  const session = cookies.session;

  if (!session) {
    return json({ error: "No session found" }, { status: 401 });
  }

  // Decode or validate session token to extract userId (implementation varies)
  const user = decodeSessionToken(session); // Implement your logic here

  return json({ user }, { status: 200 });
};

const decodeSessionToken = (token: string) => {
    const decodedToken = jwt.verify(token, JWT_SECRET);
  // Placeholder logic for decoding the session token
  // Replace with your actual session validation
  return decodedToken; // Replace with decoded userId
};
