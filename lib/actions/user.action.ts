"use server";

import User from "@/lib/modals/user.modal";
import { connectToDatabase } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    throw new Error('Error creating user');
  }
}
