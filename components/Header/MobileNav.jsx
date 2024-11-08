"use client";
import { Sheet, SheetContent, SheetTrigger } from "../shadcn/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

export const MobileNav = () => {
  const pathName = usePathname();
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/Services",
    },
    {
      name: "resume",
      path: "/Resume",
    },
    {
      name: "work",
      path: "/Work",
    },
    {
      name: "contact",
      path: "/Contact",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

        <div className="mt-40 mb-24 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-3xl font-semibold">Luke</h1>
            <span className="text-accent">.</span>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } capitalize text-xl transition-all hover:text-accent`}
              >
                {link.name}
              </Link>
            );
          })}{" "}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
