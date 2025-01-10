import { prisma } from "$lib/server/db";
import { json } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "svelte_jwt_secret"; // Replace with a secure secret in production

// Login (Authenticate user)
export const POST = async ({ request, cookies }) => {
  const { email, password } = await request.json();

  try {
    const user: any = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return json({ error: "Invalid email or password" }, { status: 401 });
    }

    delete user["password"];
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return json({ message: "Login successful", user, token }, { status: 200 });
  } catch (error: any) {
    console.error("Error during login:", error);
    return json(error.message, { status: 400 });
  }
};
