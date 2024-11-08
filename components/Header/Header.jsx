import Link from "next/link";
import { Button } from "../shadcn/ui/button";
import Nav from "./Nav";
import { MobileNav } from "./MobileNav";
function Header() {
  return (
    <header className="py-8 text-white xl:py-12 ">
      <div className="container flex items-center justify-between mx-auto ">
        {/*Logo */}
        <Link href="/">
          <h1 className="text-2xl font-semibold animate-colorChange">
            Portfolio
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* {Desktop nav} */}

        <div className="items-center hidden gap-8 xl:flex">
          <Nav />

          <Link href={"/Contact"}>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* {Mobile nav} */}
        <div className="xl:hidden">
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
}

export default Header;
