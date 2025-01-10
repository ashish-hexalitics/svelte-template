import { prisma } from "$lib/server/db";
import { json } from "@sveltejs/kit";
import { parse } from "cookie"; // Use `cookie` package for parsing cookies

// Get all tasks or a specific task by ID
export const GET = async ({ url }) => {
  const id = url.searchParams.get("id"); // Fetch the 'id' from query params

  if (id) {
    try {
      const task = await prisma.task.findUnique({
        where: { id },
      });

      if (!task) {
        return json({ error: "Task not found" }, { status: 404 });
      }

      return json({ task }, { status: 200 });
    } catch (error: any) {
      console.error("Error fetching task by ID:", error);
      return json(
        { error: "Failed to fetch task", details: error.message },
        { status: 500 }
      );
    }
  } else {
    try {
      const tasks = await prisma.task.findMany();
      return json({ tasks }, { status: 200 });
    } catch (error: any) {
      console.error("Error fetching tasks:", error);
      return json(
        { error: "Failed to fetch tasks", details: error.message },
        { status: 500 }
      );
    }
  }
};

// Update a task
export const PATCH = async ({ request }) => {
  try {
    const { id, text } = await request.json();

    if (!id || !text) {
      return json({ error: "ID and text are required" }, { status: 400 });
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: { text },
    });

    return json({ updatedTask }, { status: 200 });
  } catch (error: any) {
    console.error("Error updating task:", error);
    return json(
      { error: "Task update failed", details: error.message },
      { status: 400 }
    );
  }
};

// Delete a task
export const DELETE = async ({ request }) => {
  try {
    const { id } = await request.json();

    if (!id) {
      return json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.task.delete({
      where: { id },
    });

    return json({ message: "Task deleted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error deleting task:", error);
    return json(
      { error: "Task deletion failed", details: error.message },
      { status: 400 }
    );
  }
};

// Create a new task
export const POST = async ({locals, request }) => {
  try {
    const userId = locals.userId;

    const { text } = await request.json();

    if (!userId || !text) {
      return json({ error: "User ID and text are required" }, { status: 400 });
    }

    const newTask = await prisma.task.create({
      data: { userId, text },
    });

    return json(
      { newTask, message: "Task added successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error adding task:", error);
    return json(
      { error: "Task creation failed", details: error.message },
      { status: 400 }
    );
  }
};
