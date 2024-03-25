import { productType } from "@/types/product";
import Image from "next/image";
import { SectionWrapper } from "../section-wrapper";
import { TracingBeam } from "../ui/tracing-beam";

export function About({ item }: { item: productType }) {
  return (
    <SectionWrapper>
      <TracingBeam className="px-6">
        <div className="max-w-screen-xl mx-auto antialiased pt-4 relative">
          {item.content.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="font-bold text-xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                {item.title}
              </h2>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                <p className="font-bold text-base md:text-lg max-w-3xl bg-clip-text text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </SectionWrapper>
  );
}
