export const redirects = {
  toSignIn: "/sign-in",
  toSignUp: "/sign-up",
  afterSignOut: "/",
} as const;

export const authRoutes = ["/sign-in", "/sign-up"];
export const publicRoutes = ["/", "/:slug", "/:slug/products/:id"];
export const apiAuthPrefix = "/api/auth";
