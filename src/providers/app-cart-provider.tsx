"use client";

import React from "react";

import { CartProvider } from "use-shopping-cart";

interface CartProps {
  children: React.ReactNode;
}

export function AppCardProvider({ children }: CartProps) {
  return (
    <CartProvider
      shouldPersist={true}
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      currency="BRL"
    >
      {children}
    </CartProvider>
  );
}
