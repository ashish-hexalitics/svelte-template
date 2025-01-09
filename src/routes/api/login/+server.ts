import { prisma } from "$lib/server/db";
import { json } from "@sveltejs/kit";
import bcrypt from "bcrypt";

// Login (Authenticate user)
export const POST = async ({ request }) => {
  const { email, password } = await request.json();

  try {
    const user: any = await prisma.user.findUnique({
      where: { email },
    });
    console.log(user);

    if (!user) {
      return json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return json({ error: "Invalid email or password" }, { status: 401 });
    }

    delete user["password"];

    return json({ message: "Login successful", user }, { status: 200 });
  } catch (error: any) {
    console.error("Error during login:", error);
    return json(error.message, { status: 400 });
  }
};
