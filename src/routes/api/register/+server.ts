import { prisma } from "$lib/server/db";
import { json } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = "svelte_jwt_secret";
// Login (Authenticate user)
// Register (Create a new user)
export const POST = async ({ request, cookies }) => {
  const { email, password, name, age } = await request.json();

  try {
    const sanitizedName = name || "";
    const sanitizedAge = age ? parseInt(age, 10) : null;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      throw new Error("User already exists");
      // return json(
      //   { error: "User creation failed", message: "User already exists"},
      //   { status: 400 }
      // )
    }

    // Hash the password
    const saltRounds = 10; // Adjust cost factor as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser: any = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: sanitizedName,
        age: sanitizedAge,
      },
    });

    delete newUser["password"];

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return json(
      { message: "Registerd successful", user: newUser, token },
      { status: 201 }
    );
  } catch (error: any) {
    return json(error.message, { status: 400 });
  }
};
