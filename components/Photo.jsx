"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Photo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="relative w-full h-full"
    >
      <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
        <Image
          src="/Anas.png"
          priority
          quality={100}
          fill
          alt="Anas.Photo"
          className="object-contain 
          "
        ></Image>
      </div>
    </motion.div>
  );
}
