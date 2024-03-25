import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { signInAction } from "@/actions/auth/sign-in-action";
import { SignInSchema } from "@/schemas/auth";

export function useSignIn() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const form = useForm<SignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: "", password: "" },
  });

  function clearMessages() {
    setError("");
    setSuccess("");
  }

  function onSubmit(values: SignInSchema) {
    clearMessages();

    startTransition(async () => {
      const response = await signInAction();

      form.reset();
    });
  }

  return {
    isPending,
    error,
    success,
    onSubmit,
    form,
  };
}
