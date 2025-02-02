"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { toast } from "sonner";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignIn } from "@/hooks/auth/use-sign-in";
import { redirects } from "@/utils/constants";

import authImage from "@/components/images/auth.jpg";

export default function SignInPage() {
  const { isPending, error, success, onSubmit, form } = useSignIn();

  useEffect(() => {
    if (error) toast.error(error);
    if (success) toast.success(success);
  }, [error, success]);

  return (
    <main className="h-full w-full lg:grid lg:min-h-screen lg:grid-cols-12">
      <div className="hidden lg:block absolute right-12 top-12">
        <Link
          className={buttonVariants({
            variant: "outline",
            size: "sm",
          })}
          href={redirects.toSignUp}
        >
          Cadastrar
        </Link>
      </div>

      <aside className="relative flex h-32 items-start bg-black lg:col-span-5 lg:h-full xl:col-span-6">
        <div className="lg:hidden absolute right-4 top-4 z-50">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "sm",
            })}
            href={redirects.toSignUp}
          >
            Cadastrar
          </Link>
        </div>

        <Image
          alt="Banner"
          src={authImage}
          placeholder="blur"
          width={870}
          height={580}
          className="absolute inset-0 h-full w-full object-cover object-right opacity-80"
        />

        <div className="hidden lg:relative lg:flex lg:justify-between lg:flex-col lg:h-full lg:p-12">
          <Link href="/" className="text-white">
            <span className="sr-only">Home</span>
            <Icons.logo className="h-10 w-auto fill-white" />
          </Link>

          <div>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Bem-vindo ao Lunger
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Gerencie seus produtos de forma fácil e eficaz
            </p>
          </div>
        </div>
      </aside>

      <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl w-4/5 lg:max-w-3xl relative">
          <div className="relative -mt-16 block lg:hidden">
            <Link
              href="/"
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary"
            >
              <span className="sr-only">Home</span>
              <Icons.logo className="h-8 sm:h-10" />
            </Link>

            <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Bem-vindo ao Lunger
            </h1>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Gerencie seus produtos de forma fácil e eficaz
            </p>
          </div>

          <div className="space-y-8 mb-8">
            <h2 className="hidden lg:block text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
              Entrar
            </h2>

            <p className="text-muted-foreground">
              Insira seus dados abaixo para acessar sua conta
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço de Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="m@example.com"
                          type="email"
                          autoComplete="current-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="******"
                          autoComplete="current-password"
                          disabled={isPending}
                        />
                      </FormControl>

                      <Button
                        asChild
                        variant="link"
                        size="sm"
                        className="text-xs"
                      >
                        <Link href="/reset-password">Esqueceu a senha?</Link>
                      </Button>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                loading
                type="submit"
                disabled={isPending}
                className="w-full"
              >
                {isPending && <div className="loading" />}
                Sign in
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}
