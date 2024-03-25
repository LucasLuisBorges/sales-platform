import { CheckIcon, XIcon } from "lucide-react";

import { LayoutEffect } from "@/components/layout-effect";
import { SectionWrapper } from "@/components/section-wrapper";
import { cn } from "@/lib/cn";
import { plans } from "@/utils/plans";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Pricing() {
  return (
    <SectionWrapper id="precos">
      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="text-foreground text-3xl font-semibold sm:text-4xl">
          Escolha um plano
        </h2>
      </div>

      <LayoutEffect
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0",
        }}
      >
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
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
                  <Link
                    href={item.slug}
                    className={cn(
                      buttonVariants(),
                      "w-full",
                      !item.isMostPop &&
                        "bg-gray-800 hover:bg-gray-700 ring-gray-800"
                    )}
                  >
                    Assinar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutEffect>
    </SectionWrapper>
  );
}
