import { error } from "@sveltejs/kit";

export const load = (async () => {
  const user = 1;

  if (user) {
    return user;
  }

  throw error(404, 'User not found')
})