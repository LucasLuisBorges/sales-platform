"use server";

import { redirect } from "next/navigation";

import { hashed } from "@/adapters/hash";
import { db } from "@/lib/db";
import { SignInSchema } from "@/schemas/auth";
import { ActionResponse } from "@/types/action-response";
import { redirects } from "@/utils/constants";

export async function signInAction({
  values,
  callbackUrl,
}: {
  values: SignInSchema;
  callbackUrl: string | null;
}): Promise<ActionResponse<{ isTwoFactor: boolean }>> {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("Invalid fields");
  }

  const { email, password } = validatedFields.data;

  const user = await db.user.findUnique({
    where: { email },
    include: { stores: { take: 1 } },
  });
  if (!user) {
    return { message: "Credenciais inválidas", status: "error" };
  }

  const passwordMatch = await hashed.compare(password, user.password);
  if (!passwordMatch) {
    return { message: "Credenciais inválidas", status: "error" };
  }

  const redirectUrl = !!user.stores?.length
    ? redirects.afterSignOut
    : redirects.afterSignOut;

  return redirect(callbackUrl || redirectUrl);
}
