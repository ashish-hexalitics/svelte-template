import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
    if (!locals.userId) {
      throw redirect(302, "/login");
    }
  };