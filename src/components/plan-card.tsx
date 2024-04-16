"use client";

import { cn } from "@/lib/cn";
import { PlanType } from "@/types/plan";
import { CheckIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";

export function PlanCard({ item }: { item: PlanType }) {
  const { redirectToCheckout } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  async function checkout() {
    setIsCheckingOut(true);

    const { id, name, price, currency } = item;

    const value = { id, name, price, currency };

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    const { id: IdValue } = await response.json();

    const result = await redirectToCheckout(IdValue);
    setIsCheckingOut(false);
  }

  return (
    <div
      className={cn(
        "relative flex-1 flex items-stretch flex-col rounded-xl border border-border mt-6 sm:mt-0 overflow-hidden bg-card",
        item.isMostPop &&
          "border border-primary bg-gradient-radial from-primary/20 to-indigo-600/20"
      )}
    >
      <div className="p-10 space-y-4 border-b border-gray-800 text-center">
        <span
          className={cn(
            "text-primary font-medium",
            item.isMostPop && "text-foreground"
          )}
        >
          {item.name}
        </span>
        <div className="text-foreground text-3xl font-semibold">
          R${item.price}{" "}
          <span className="text-xl text-muted-foreground font-normal">
            /mes
          </span>
        </div>
        <p className="text-muted-foreground">{item.desc}</p>
      </div>
      <div className="p-8">
        <ul className="space-y-3">
          {item.features.include.map((featureItem, idx) => (
            <li
              key={idx}
              className="flex items-center gap-5 text-muted-foreground"
            >
              <CheckIcon className="h-5 w-5 text-primary" />
              {featureItem}
            </li>
          ))}
          {item.features.notInclude.map((featureItem, idx) => (
            <li
              key={idx}
              className="flex items-center gap-5 text-muted-foreground"
            >
              <XIcon className="h-5 w-5 text-destructive" />
              {featureItem}
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <Button
            loading
            onClick={checkout}
            className={cn(
              "w-full",
              !item.isMostPop && "bg-gray-800 hover:bg-gray-700 ring-gray-800"
            )}
          >
            {isCheckingOut && <div className="loading" />}
            Assinar
          </Button>
        </div>
      </div>
    </div>
  );
}
