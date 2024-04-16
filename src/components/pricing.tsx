import { LayoutEffect } from "@/components/layout-effect";
import { SectionWrapper } from "@/components/section-wrapper";

import { plans } from "@/utils/plans";
import { PlanCard } from "./plan-card";

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
            <PlanCard item={item} key={idx} />
          ))}
        </div>
      </LayoutEffect>
    </SectionWrapper>
  );
}
