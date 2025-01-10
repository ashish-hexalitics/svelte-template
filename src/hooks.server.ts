import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

import jwt from "jsonwebtoken";
const JWT_SECRET = "svelte_jwt_secret";

// Middleware to retrieve userId from the session and make it available
export const handle: Handle = async ({ event, resolve }) => {
  // Assuming `userId` is stored in the session cookie
  const session = event.cookies.get("session");

  if (session) {
    try {

      const decodedToken: any = jwt.verify(session, JWT_SECRET);

      // Attach userId to `locals`
      event.locals.userId = decodedToken.userId;
    } catch (error) {
      console.error("Failed to parse session:", error);
    }
  }

  // Proceed with the request
  return resolve(event);
};
