"use client";
import { LayoutEffect } from "@/components/layout-effect";
import { SectionWrapper } from "@/components/section-wrapper";
import { features } from "@/utils/features";
import { HoverEffect } from "../ui/card-hover-effect";

export function Features() {
  return (
    <SectionWrapper id="recursos">
      <div>
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6",
          }}
        >
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-foreground text-3xl font-semibold sm:text-4xl">
              Nossos recursos
            </h2>
            <p className="mt-3 text-muted-foreground">
              Nossa plataforma oferece recursos para todos assinantes de
              quaisquer serviço. Oferecemos suporte total para duvidas e caso
              precise de alguma ferramenta ou funcionalidade especifica.
            </p>
          </div>
        </LayoutEffect>

        <LayoutEffect
          className="duration-1000 delay-500"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0",
          }}
        >
          <div className="relative mt-12">
            <HoverEffect items={features} />
          </div>
        </LayoutEffect>
      </div>
    </SectionWrapper>
  );
}
