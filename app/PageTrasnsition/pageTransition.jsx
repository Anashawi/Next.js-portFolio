"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function PageTransition({ childern }) {
  console.log(childern);
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="fixed w-screen h-screen pointer-events-none bg-primary"
        />
        {childern}
      </div>
    </AnimatePresence>
  );
}
