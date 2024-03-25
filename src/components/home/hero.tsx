"use client";

import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Hero() {
  const images = [
    "/home/banner/1.jpg",
    "/home/banner/2.jpg",
    "/home/banner/3.jpg",
  ];

  return (
    <ImagesSlider className="h-screen" direction="up" images={images}>
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Não desenvolvemos apenas ferramentas <br /> desenvolvemos
          produtividade
        </motion.p>
        <Button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Assinar agora →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Button>
      </motion.div>
    </ImagesSlider>
  );
}
