"use client";

import { productType } from "@/types/product";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero({ item }: { item: productType }) {
  return (
    <div className="overflow-hidden w-full relative flex items-center justify-center h-screen">
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.h2 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {item.title}
        </motion.h2>
        <motion.p className="font-bold text-base md:text-xl max-w-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {item.quote}
        </motion.p>
        <Button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Assinar teste gratis →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Button>
      </motion.div>

      <motion.img
        src={item.imageBanner}
        initial="initial"
        animate="visible"
        className="image h-full w-full absolute inset-0 object-cover object-center"
      />
    </div>
  );
}
