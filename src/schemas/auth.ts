import * as z from "zod";

export const SignInSchema = z.object({
  email: z
    .string({ invalid_type_error: "Por favor, insira um e-mail válido" })
    .email({ message: "E-mail é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatória" }),
});

export const SignUpSchema = z
  .object({
    username: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z
      .string({ invalid_type_error: "Por favor, insira um e-mail válido" })
      .email({ message: "E-mail é obrigatório" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    passwordConfirmation: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  })
  .refine(
    (data) => {
      if (data.password !== data.passwordConfirmation) return false;
      return true;
    },
    { message: "As senhas devem coincidir", path: ["passwordConfirmation"] }
  );

export type SignInSchema = z.infer<typeof SignInSchema>;
export type SignUpSchema = z.infer<typeof SignUpSchema>;
