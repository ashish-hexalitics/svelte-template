import { prisma } from "$lib/server/db";
import { json } from "@sveltejs/kit";

// Get all users
export const GET = async () => {
  try {
    const users = await prisma.user.findMany();
    return json(users, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return json({ error: "Failed to fetch users", details: error.message }, { status: 500 });
  }
};

// Update user
export const PATCH = async ({ request }) => {
  const { id, email, name, age } = await request.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        email,
        name: name || null,
        age: age ? parseInt(age, 10) : null,
      },
    });

    return json(updatedUser, { status: 200 });
  } catch (error: any) {
    console.error("Error updating user:", error);
    return json(
      { error: "User update failed", details: error.message },
      { status: 400 }
    );
  }
};

// Delete user
export const DELETE = async ({ request }) => {
  const { id } = await request.json();

  try {
    await prisma.user.delete({
      where: { id },
    });

    return json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting user:", error);
    return json(
      { error: "User deletion failed", details: error.message },
      { status: 400 }
    );
  }
};

